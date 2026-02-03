import { Resend } from 'resend';
import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

const resend = new Resend(process.env.RESEND_API_KEY);

// Email validation regex
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  console.log('[Waitlist API] POST request received');
  
  try {
    const body = await request.json();
    console.log('[Waitlist API] Request body:', JSON.stringify(body, null, 2));
    
    const { 
      email, 
      optInUpdates, 
      website, 
      primaryNeighbourhood, 
      secondaryNeighbourhood,
      primary_lat: primaryLat,
      primary_lng: primaryLng,
      secondary_lat: secondaryLat,
      secondary_lng: secondaryLng
    } = body;

    // Honeypot check
    if (website) {
      console.log('[Waitlist API] Honeypot triggered, returning fake success');
      return NextResponse.json({ success: true });
    }

    // Validate and sanitize email
    if (!email || typeof email !== 'string') {
      console.log('[Waitlist API] Email validation failed - missing or invalid type:', { email, type: typeof email });
      return NextResponse.json(
        { error: 'Email is required' },
        { status: 400 }
      );
    }

    const cleanEmail = email.trim().toLowerCase();
    console.log('[Waitlist API] Cleaned email:', cleanEmail);

    if (!emailRegex.test(cleanEmail)) {
      console.log('[Waitlist API] Email regex validation failed for:', cleanEmail);
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      );
    }

    // Validate neighbourhoods
    if (!primaryNeighbourhood || !secondaryNeighbourhood) {
      console.log('[Waitlist API] Neighbourhood validation failed:', { primaryNeighbourhood, secondaryNeighbourhood });
      return NextResponse.json(
        { error: 'Please select both neighbourhoods' },
        { status: 400 }
      );
    }

    console.log('[Waitlist API] Checking for duplicate email...');
    
    // Check for duplicate email
    const { data: existingUser, error: lookupError } = await supabase
      .from('waitlist_users')
      .select('id')
      .eq('email', cleanEmail)
      .single();

    if (lookupError && lookupError.code !== 'PGRST116') {
      console.log('[Waitlist API] Supabase lookup error:', lookupError);
    }

    if (existingUser) {
      console.log('[Waitlist API] Duplicate email found:', cleanEmail);
      return NextResponse.json(
        { error: 'This email is already on the waitlist' },
        { status: 409 }
      );
    }

    console.log('[Waitlist API] Inserting new user into database...');
    
    // Insert into database
    const { data: insertData, error: dbError } = await supabase
      .from('waitlist_users')
      .insert({
        email: cleanEmail,
        primary_neighbourhood: primaryNeighbourhood,
        secondary_neighbourhood: secondaryNeighbourhood,
        primary_lat: primaryLat,
        primary_lng: primaryLng,
        secondary_lat: secondaryLat,
        secondary_lng: secondaryLng,
        opt_in_updates: optInUpdates || false,
      })
      .select();

    if (dbError) {
      console.error('[Waitlist API] Database insert error:', dbError);
      return NextResponse.json(
        { error: 'Failed to join waitlist' },
        { status: 500 }
      );
    }

    console.log('[Waitlist API] User inserted successfully:', insertData);

    const updatesText = optInUpdates
      ? "You've opted in to receive updates about Trivvi's development. We'll keep you posted on our progress!"
      : "You've chosen not to receive development updates. No worries - we'll only contact you when we launch in your area.";

    console.log('[Waitlist API] Sending confirmation email via Resend...');
    
    const { data: emailData, error } = await resend.emails.send({
      from: 'Trivvi <contact@trivvi.io>',
      to: cleanEmail,
      subject: "You're on the Trivvi waitlist!",
      html: `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Trivvi Waitlist Confirmation</title>
    </head>
    <body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif; color: #111; line-height: 1.5; max-width: 600px; margin: 0 auto; padding: 20px; background: #ffffff;">
      <div style="text-align: center; margin-bottom: 20px;">
        <img src="https://trivvi.io/imageAssets/trivviLogo.svg" alt="Trivvi Logo" width="60" height="60" style="display:block; margin:0 auto 10px auto;" />
      </div>

      <p>Hi there,</p>

      <p>Thanks for joining the Trivvi waitlist! We're excited to have you on board.</p>

      <p>${updatesText}</p>

      <p>Here's what's next:</p>
      <ul>
        <li>We'll notify you when Trivvi launches in ${primaryNeighbourhood} or ${secondaryNeighbourhood}.</li>
        <li>You'll be among the first to discover great food deals nearby.</li>
      </ul>

      <p>Visit <a href="https://trivvi.io">trivvi.io</a> for more info.</p>

      <hr style="margin-top: 30px; border: none; border-top: 1px solid #eee;" />
      <p style="font-size: 12px; color: #666;">© 2026 Trivvi. All rights reserved.</p>
    </body>
    </html>
  `,
      text: `Hi there,

Thanks for joining the Trivvi waitlist! We're excited to have you on board.

${updatesText}

Here's what's next:
- We'll notify you when Trivvi launches in ${primaryNeighbourhood} or ${secondaryNeighbourhood}.
- You'll be among the first to discover great food deals nearby.

Visit https://trivvi.io for more info.

© 2026 Trivvi. All rights reserved.`,
    });

    if (error) {
      console.error('[Waitlist API] Resend email error:', error);
      return NextResponse.json(
        { error: 'Failed to send confirmation email' },
        { status: 500 }
      );
    }

    console.log('[Waitlist API] Email sent successfully:', emailData);
    console.log('[Waitlist API] Waitlist signup complete!');

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('[Waitlist API] Unexpected error:', err);
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