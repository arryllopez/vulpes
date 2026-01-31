import { Resend } from 'resend';
import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

const resend = new Resend(process.env.RESEND_API_KEY);

// Email validation regex
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Simple in-memory rate limiting (for production, use Upstash or Vercel KV)
const rateLimit = new Map<string, { count: number; timestamp: number }>();
const RATE_LIMIT_WINDOW = 60 * 1000; // 1 minute
const MAX_REQUESTS = 5;

function isRateLimited(identifier: string): boolean {
  const now = Date.now();
  const record = rateLimit.get(identifier);

  if (!record || now - record.timestamp > RATE_LIMIT_WINDOW) {
    rateLimit.set(identifier, { count: 1, timestamp: now });
    return false;
  }

  if (record.count >= MAX_REQUESTS) {
    return true;
  }

  record.count++;
  return false;
}

export async function POST(request: Request) {
  try {
    // Rate limiting by IP
    const forwarded = request.headers.get('x-forwarded-for');
    const ip = forwarded ? forwarded.split(',')[0].trim() : 'unknown';
    console.log('Incoming request from IP:', ip);

    if (isRateLimited(ip)) {
      console.log('Rate limited:', ip);
      return NextResponse.json(
        { error: 'Too many requests. Please try again later.' },
        { status: 429 }
      );
    }

    const { email, optInUpdates, website, lat, lng } = await request.json();
    console.log('Request body:', { email, optInUpdates, website, lat, lng });

    // Honeypot check
    if (website) {
      console.log('Honeypot triggered - bot detected');
      return NextResponse.json({ success: true });
    }

    // Validate and sanitize email
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

    // Check for duplicate email
    console.log('Checking for existing email in database...');
    const { data: existingUser } = await supabase
      .from('waitlist_users')
      .select('id')
      .eq('email', cleanEmail)
      .single();

    if (existingUser) {
      console.log('Duplicate email found:', cleanEmail);
      return NextResponse.json(
        { error: 'This email is already on the waitlist' },
        { status: 409 }
      );
    }

    // Insert into database
    console.log('Inserting new email into database...');
    const { error: dbError } = await supabase
      .from('waitlist_users')
      .insert({
        email: cleanEmail,
        lat: lat || null,
        lng: lng || null,
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
      : "You've chosen not to receive development updates. No worries - we'll only contact you when we launch in your area.";

    console.log('Sending confirmation email...');
    const { error } = await resend.emails.send({
      from: 'Trivvi <contact@trivvi.io>',
      to: cleanEmail,
      subject: "You're on the Trivvi waitlist!",
      html: `...your email HTML...`,
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
    console.error('Waitlist API error:', err);
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
