/**
 * app/contact/page.jsx — Contact & Consultation Booking
 * Contact form, office locations, business hours
 */

'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import ConsultationForm from '@/components/forms/ConsultationForm';

const OFFICES = [
  { city: 'New Delhi (HQ)', icon: '🏛️', addr: '5th Floor, Connaught Place, New Delhi — 110001', phone: '+91 11 4000 1234', email: 'info@legalgroup.in' },
  { city: 'Mumbai',          icon: '🌆', addr: 'Nariman Point, BKC, Mumbai — 400051',            phone: '+91 22 6600 5678', email: 'info@legalgroup.in' },
  { city: 'Bangalore',       icon: '🌿', addr: 'MG Road, Indiranagar, Bangalore — 560038',       phone: '+91 80 4100 7890', email: 'info@legalgroup.in' },
];

export default function ContactPage() {
  return (
    <div className="dark-gold-surface" style={{ minHeight: '100vh', paddingTop: 72, background: 'var(--dark-bg)' }}>
      {/* Header */}
      <div style={{
        background: 'linear-gradient(135deg, #0A1628, #0D1F3C)',
        padding: '60px 24px 80px',
      }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(32px,5vw,60px)', color: '#fff', fontWeight: 900, marginBottom: 12 }}>
              Contact Us
            </h1>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: 19, color: 'rgba(255,255,255,0.6)' }}>
              Reach out for a consultation. Our team responds within 24 hours.
            </p>
          </motion.div>
        </div>
      </div>

      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '60px 24px 80px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 60 }} className="contact-grid">
          {/* Consultation Form */}
          <ConsultationForm />

          {/* Office Info */}
          <div>
            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 28, fontWeight: 700, color: '#F0E8D0', marginBottom: 32 }}>
              Our Offices
            </h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 20, marginBottom: 40 }}>
              {OFFICES.map((office, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.15 }}
                  style={{
                    background: 'rgba(255,255,255,0.04)',
                    border: '1px solid var(--dark-border)',
                    borderRadius: 12, padding: '24px',
                  }}
                >
                  <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: 17, fontWeight: 700, color: 'var(--gold-primary)', marginBottom: 8 }}>
                    {office.icon} {office.city}
                  </h3>
                  <p style={{ fontFamily: 'var(--font-body)', fontSize: 15, color: 'rgba(255,255,255,0.65)', marginBottom: 6 }}>{office.addr}</p>
                  <p style={{ fontFamily: 'var(--font-body)', fontSize: 15, color: 'var(--gold-primary)', marginBottom: 4 }}>{office.phone}</p>
                  <p style={{ fontFamily: 'var(--font-body)', fontSize: 14, color: 'var(--text-meta)' }}>{office.email}</p>
                </motion.div>
              ))}
            </div>

            {/* Hours */}
            <div style={{
              background: 'linear-gradient(135deg, rgba(201,168,76,0.08), rgba(201,168,76,0.03))',
              border: '1px solid rgba(201,168,76,0.2)',
              borderRadius: 12, padding: '28px 24px',
            }}>
              <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: 18, color: 'var(--gold-primary)', marginBottom: 16 }}>
                ⏰ Business Hours
              </h3>
              <div style={{ fontFamily: 'var(--font-body)', fontSize: 15, color: 'rgba(255,255,255,0.65)', lineHeight: 2.2 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}><span>Monday – Friday</span><span>9:00 AM – 7:00 PM</span></div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}><span>Saturday</span><span>10:00 AM – 4:00 PM</span></div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}><span>Sunday</span><span style={{ color: 'rgba(255,255,255,0.3)' }}>Closed</span></div>
                <p style={{ color: 'var(--gold-primary)', marginTop: 12, fontSize: 14 }}>
                  ⚡ Emergency consultations available 24/7
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`@media (max-width: 768px) { .contact-grid { grid-template-columns: 1fr !important; } }`}</style>
    </div>
  );
}
