/**
 * components/ui/LawyerCard.jsx
 */
'use client';
import { useState } from 'react';
import { useTheme } from '@/hooks/useTheme';

export default function LawyerCard({ lawyer, headingLevel = 3 }) {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const [showModal, setShowModal] = useState(false);
  const Heading = `h${headingLevel}`;

  return (
    <>
      <div
        data-cursor="gavel"
        style={{
          background: isDark ? 'rgba(255,255,255,0.04)' : '#FFFFFF',
          border: `1px solid ${isDark ? 'rgba(201,168,76,0.12)' : 'rgba(0,0,0,0.08)'}`,
          borderRadius: 16, padding: '28px 24px',
          transition: 'all 0.3s', cursor: 'pointer',
        }}
        onMouseEnter={(e) => { const el = e.currentTarget; el.style.transform = 'translateY(-6px)'; el.style.boxShadow = '0 20px 50px rgba(201,168,76,0.12)'; el.style.borderColor = 'rgba(201,168,76,0.4)'; }}
        onMouseLeave={(e) => { const el = e.currentTarget; el.style.transform = ''; el.style.boxShadow = ''; el.style.borderColor = isDark ? 'rgba(201,168,76,0.12)' : 'rgba(0,0,0,0.08)'; }}
      >
        {/* Avatar + info */}
        <div style={{ display: 'flex', gap: 16, marginBottom: 20, alignItems: 'flex-start' }}>
          <div style={{
            width: 64, height: 64, borderRadius: '50%', flexShrink: 0,
            background: 'linear-gradient(135deg, rgba(201,168,76,0.2), rgba(201,168,76,0.05))',
            border: '2px solid rgba(201,168,76,0.35)',
            display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 28,
          }}>{lawyer.icon}</div>
          <div>
            <Heading style={{ fontFamily: 'var(--font-heading)', fontSize: 17, fontWeight: 700, color: isDark ? '#F0E8D0' : '#0A1628', lineHeight: 1.3, marginBottom: 4 }}>{lawyer.name}</Heading>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: 14, color: 'var(--gold-primary)' }}>{lawyer.specialization}</p>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: 13, color: 'var(--text-meta)', marginTop: 2 }}>📍 {lawyer.city}</p>
          </div>
        </div>

        {/* Metrics */}
        <div style={{ display: 'flex', gap: 8, marginBottom: 20 }}>
          {[{ label: 'Exp.', val: lawyer.exp }, { label: 'Cases', val: lawyer.cases }, { label: 'Rating', val: `⭐ ${lawyer.rating}` }].map((m, j) => (
            <div key={j} style={{ flex: 1, textAlign: 'center', background: isDark ? 'rgba(255,255,255,0.03)' : '#F8F6F0', borderRadius: 8, padding: '10px 4px' }}>
              <div style={{ fontFamily: 'var(--font-heading)', fontSize: 15, fontWeight: 700, color: 'var(--gold-primary)' }}>{m.val}</div>
              <div style={{ fontFamily: 'var(--font-body)', fontSize: 11, color: 'var(--text-meta)', marginTop: 2 }}>{m.label}</div>
            </div>
          ))}
        </div>

        <button
          onClick={() => setShowModal(true)}
          style={{
            width: '100%', padding: '11px',
            background: 'linear-gradient(135deg, var(--gold-primary), var(--gold-dark))',
            border: 'none', borderRadius: 8, cursor: 'pointer',
            fontFamily: 'var(--font-body)', fontSize: 14, fontWeight: 700, color: '#050D1A',
          }}
        >Book Consultation</button>
      </div>

      {/* Simple booking modal */}
      {showModal && (
        <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.75)', zIndex: 5000, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 24 }} onClick={() => setShowModal(false)}>
          <div style={{ background: '#0A1628', border: '1px solid rgba(201,168,76,0.3)', borderRadius: 16, padding: '40px', maxWidth: 440, width: '100%' }} onClick={(e) => e.stopPropagation()}>
            <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: 22, color: '#F0E8D0', marginBottom: 8 }}>Book with {lawyer.name.split(' ').slice(-1)[0]}</h3>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: 15, color: 'rgba(255,255,255,0.55)', marginBottom: 24 }}>{lawyer.specialization}</p>
            <a href="/contact" style={{ display: 'block', textAlign: 'center', background: 'linear-gradient(135deg,var(--gold-primary),var(--gold-dark))', padding: '13px', borderRadius: 8, fontFamily: 'var(--font-body)', fontSize: 15, fontWeight: 700, color: '#050D1A', textDecoration: 'none' }}>
              Continue to Booking →
            </a>
            <button onClick={() => setShowModal(false)} style={{ width: '100%', marginTop: 12, background: 'none', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 8, padding: 10, color: 'rgba(255,255,255,0.5)', fontFamily: 'var(--font-body)', fontSize: 14, cursor: 'pointer' }}>Cancel</button>
          </div>
        </div>
      )}
    </>
  );
}
