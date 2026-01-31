import { Resend } from 'resend';
import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

const resend = new Resend(process.env.RESEND_API_KEY);

// Email validation regex
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  try {
    const { email, restaurantName, restaurantAddress, optInUpdates, website } = await request.json();
    console.log('Request body:', { email, restaurantName, restaurantAddress, optInUpdates, website });

    // Honeypot check
    if (website) {
      console.log('Honeypot triggered - bot detected');
      return NextResponse.json({ success: true });
    }

    // Validate email
    if (!email || typeof email !== 'string') {
      console.log('Email validation failed');
      return NextResponse.json(
        { error: 'Email is required' },
        { status: 400 }
      );
    }

    const cleanEmail = email.trim().toLowerCase();
    console.log('Sanitized email:', cleanEmail);

    if (!emailRegex.test(cleanEmail)) {
      console.log('Email regex validation failed');
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      );
    }

    // Validate restaurant name
    if (!restaurantName || typeof restaurantName !== 'string' || restaurantName.trim().length === 0) {
      return NextResponse.json(
        { error: 'Restaurant name is required' },
        { status: 400 }
      );
    }

    // Validate restaurant address
    if (!restaurantAddress || typeof restaurantAddress !== 'string' || restaurantAddress.trim().length === 0) {
      return NextResponse.json(
        { error: 'Restaurant address is required' },
        { status: 400 }
      );
    }

    const cleanRestaurantName = restaurantName.trim();
    const cleanRestaurantAddress = restaurantAddress.trim();

    // Check for duplicate email
    console.log('Checking for existing email in database...');
    const { data: existingRestaurant } = await supabase
      .from('waitlist_restaurants')
      .select('id')
      .eq('email', cleanEmail)
      .single();

    if (existingRestaurant) {
      console.log('Duplicate email found:', cleanEmail);
      return NextResponse.json(
        { error: 'This email is already on the waitlist' },
        { status: 409 }
      );
    }

    // Insert into database
    console.log('Inserting new restaurant into database...');
    const { error: dbError } = await supabase
      .from('waitlist_restaurants')
      .insert({
        email: cleanEmail,
        restaurant_name: cleanRestaurantName,
        restaurant_address: cleanRestaurantAddress,
        opt_in_updates: optInUpdates || false,
      });

    if (dbError) {
      console.error('Database error:', dbError);
      return NextResponse.json(
        { error: 'Failed to join waitlist' },
        { status: 500 }
      );
    }
    console.log('Database insert successful:', cleanEmail);

    const updatesText = optInUpdates
      ? "You've opted in to receive updates about Trivvi's development. We'll keep you posted on our progress!"
      : "You've chosen not to receive development updates. No worries - we'll only contact you when we're ready to onboard partners in your area.";

    console.log('Sending confirmation email...');
    const { error } = await resend.emails.send({
      from: 'Trivvi <contact@trivvi.io>',
      to: cleanEmail,
      subject: "Welcome to Trivvi - You're on the partner waitlist!",
      html: `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Trivvi Partner Waitlist Confirmation</title>
    </head>
    <body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif; color: #111; line-height: 1.5; max-width: 600px; margin: 0 auto; padding: 20px; background: #ffffff;">
      <div style="text-align: center; margin-bottom: 20px;">
        <img src="https://trivvi.io/imageAssets/trivviLogo.svg" alt="Trivvi Logo" width="60" height="60" style="display:block; margin:0 auto 10px auto;" />
      </div>

      <p>Hi there,</p>

      <p>Thanks for signing up <strong>${cleanRestaurantName}</strong> to the Trivvi partner waitlist! We're excited to have you on board.</p>

      <p>${updatesText}</p>

      <p>Here's what's next:</p>
      <ul>
        <li>We'll review your application and confirm your area eligibility.</li>
        <li>Once we launch in your area, we'll reach out to get you set up.</li>
        <li>As a founding partner, you'll get your first month free! No commitments. Cancel anytime!</li>
      </ul>

      <p>Visit <a href="https://trivvi.io/for-restaurants">trivvi.io/for-restaurants</a> for more info.</p>

      <hr style="margin-top: 30px; border: none; border-top: 1px solid #eee;" />
      <p style="font-size: 12px; color: #666;">© 2026 Trivvi. All rights reserved.</p>
    </body>
    </html>
  `,
      text: `Hi there,

Thanks for signing up ${cleanRestaurantName} to the Trivvi partner waitlist! We're excited to have you on board.

${updatesText}

Here's what's next:
- We'll review your application and confirm your area eligibility.
- Once we launch in your area, we'll reach out to get you set up.
- As a founding partner, you'll get your first month free! No commitments. Cancel anytime!

Visit https://trivvi.io/for-restaurants for more info.

© 2026 Trivvi. All rights reserved.`,
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json(
        { error: 'Failed to send confirmation email' },
        { status: 500 }
      );
    }

    console.log('Confirmation email sent to:', cleanEmail);

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('Restaurant waitlist API error:', err);
    return NextResponse.json(
      { error: 'Something went wrong. Please try again.' },
      { status: 500 }
    );
  }
}

// Reject other HTTP methods
export async function GET() {
  return NextResponse.json({ error: 'Method not allowed' }, { status: 405 });
}

export async function PUT() {
  return NextResponse.json({ error: 'Method not allowed' }, { status: 405 });
}

export async function DELETE() {
  return NextResponse.json({ error: 'Method not allowed' }, { status: 405 });
}
