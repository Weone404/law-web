/**
 * app/api/contact/route.js
 * API route for consultation form submissions.
 * Currently returns mock success — connect to Resend/Nodemailer for production.
 *
 * Future: npm install resend
 * import { Resend } from 'resend';
 * const resend = new Resend(process.env.RESEND_API_KEY);
 */

import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, phone, service, message } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email and message are required.' },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email address.' },
        { status: 400 }
      );
    }

    /**
     * PRODUCTION: Uncomment to send email via Resend
     *
     * await resend.emails.send({
    *   from: 'legalgroup <noreply@legalgroup.in>',
     *   to: process.env.CONTACT_EMAIL,
     *   subject: `New Consultation Request — ${service || 'General'} — ${name}`,
     *   html: `
     *     <h2>New Consultation Request</h2>
     *     <p><strong>Name:</strong> ${name}</p>
     *     <p><strong>Email:</strong> ${email}</p>
     *     <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
     *     <p><strong>Practice Area:</strong> ${service || 'Not specified'}</p>
     *     <hr/>
     *     <p><strong>Message:</strong><br/>${message}</p>
     *   `,
     * });
     */

    // Log submission (replace with DB insert in production)
    console.log('Consultation request received:', { name, email, phone, service, timestamp: new Date().toISOString() });

    return NextResponse.json(
      { success: true, message: 'Your consultation request has been received. We will contact you within 24 hours.' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact API error:', error);
    return NextResponse.json(
      { error: 'An internal error occurred. Please try again.' },
      { status: 500 }
    );
  }
}
