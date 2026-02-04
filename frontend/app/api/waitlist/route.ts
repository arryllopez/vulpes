import { Resend } from 'resend';
import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

const resend = new Resend(process.env.RESEND_API_KEY);

// Email validation regex
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// HTML escape function to prevent XSS in emails
function escapeHtml(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

// Input length limits
const MAX_EMAIL_LENGTH = 254;
const MAX_CITY_LENGTH = 200;

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const {
      email,
      optInUpdates,
      website,
      notFromToronto,
      otherCity,
      primaryNeighbourhood,
      secondaryNeighbourhood,
      primary_lat: primaryLat,
      primary_lng: primaryLng,
      secondary_lat: secondaryLat,
      secondary_lng: secondaryLng
    } = body;

    // Honeypot check
    if (website) {
      return NextResponse.json({ success: true });
    }

    // Validate and sanitize email
    if (!email || typeof email !== 'string') {
      return NextResponse.json(
        { error: 'Email is required' },
        { status: 400 }
      );
    }

    const cleanEmail = email.trim().toLowerCase();

    if (!emailRegex.test(cleanEmail)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      );
    }

    if (cleanEmail.length > MAX_EMAIL_LENGTH) {
      return NextResponse.json(
        { error: 'Email address is too long' },
        { status: 400 }
      );
    }

    // Validate location info
    if (notFromToronto) {
      if (!otherCity || typeof otherCity !== 'string' || !otherCity.trim()) {
        return NextResponse.json(
          { error: 'Please enter your city' },
          { status: 400 }
        );
      }
      if (otherCity.trim().length > MAX_CITY_LENGTH) {
        return NextResponse.json(
          { error: 'City name is too long' },
          { status: 400 }
        );
      }
    } else {
      if (!primaryNeighbourhood) {
        return NextResponse.json(
          { error: 'Please select a primary neighbourhood' },
          { status: 400 }
        );
      }
    }

    // Check for duplicate email
    const { data: existingUser } = await supabase
      .from('waitlist_users')
      .select('id')
      .eq('email', cleanEmail)
      .single();

    if (existingUser) {
      return NextResponse.json(
        { error: 'This email is already on the waitlist' },
        { status: 409 }
      );
    }

    // Insert into database
    const { error: dbError } = await supabase
      .from('waitlist_users')
      .insert({
        email: cleanEmail,
        not_from_toronto: notFromToronto || false,
        other_city: notFromToronto ? otherCity?.trim() : null,
        primary_neighbourhood: notFromToronto ? null : primaryNeighbourhood,
        secondary_neighbourhood: notFromToronto ? null : secondaryNeighbourhood,
        primary_lat: notFromToronto ? null : primaryLat,
        primary_lng: notFromToronto ? null : primaryLng,
        secondary_lat: notFromToronto ? null : secondaryLat,
        secondary_lng: notFromToronto ? null : secondaryLng,
        opt_in_updates: optInUpdates || false,
      })
      .select();

    if (dbError) {
      return NextResponse.json(
        { error: 'Failed to join waitlist' },
        { status: 500 }
      );
    }

    const updatesText = optInUpdates
      ? "You've opted in to receive updates about Trivvi's development. We'll keep you posted on our progress!"
      : "You've chosen not to receive development updates. No worries - we'll only contact you when we launch in your area.";

    const safeCity = otherCity ? escapeHtml(otherCity.trim()) : '';
    const locationText = notFromToronto
      ? `We'll notify you when Trivvi expands to ${safeCity}.`
      : secondaryNeighbourhood
        ? `We'll notify you when Trivvi launches in ${primaryNeighbourhood} or ${secondaryNeighbourhood}.`
        : `We'll notify you when Trivvi launches in ${primaryNeighbourhood}.`;

    const { error } = await resend.emails.send({
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
        <li>${locationText}</li>
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
- ${locationText}
- You'll be among the first to discover great food deals nearby.

Visit https://trivvi.io for more info.

© 2026 Trivvi. All rights reserved.`,
    });

    if (error) {
      return NextResponse.json(
        { error: 'Failed to send confirmation email' },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (err) {
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