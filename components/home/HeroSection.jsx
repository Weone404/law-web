/**
 * components/home/HeroSection.jsx
 * Main landing hero with animated headline, CTA buttons, and stats row.
 */

'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useTheme } from '@/hooks/useTheme';

const STATS = [
  { value: '2,400+', label: 'Cases Won' },
  { value: '15+', label: 'Years Experience' },
  { value: '180+', label: 'Students Trained' },
  { value: '98%', label: 'Client Satisfaction' },
];

export default function HeroSection() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const [ready, setReady] = useState(false);

  useEffect(() => { const t = setTimeout(() => setReady(true), 80); return () => clearTimeout(t); }, []);

  const fade = (delay) => ({
    opacity: ready ? 1 : 0,
    transform: ready ? 'translateY(0)' : 'translateY(28px)',
    transition: `opacity 0.75s ${delay}s ease, transform 0.75s ${delay}s ease`,
  });

  return (
    <section style={{
      minHeight: '100vh', position: 'relative', overflow: 'hidden',
      display: 'flex', alignItems: 'center',
      background: isDark
        ? 'var(--dark-hero)'
        : 'linear-gradient(135deg, #F8F6F0 0%, #EDE9DC 45%, #E2DAC8 100%)',
    }}>
      {/* Background decorations */}
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
        {/* Gold radial glow */}
        <div style={{
          position: 'absolute', right: '-8%', top: '50%',
          transform: 'translateY(-50%)', width: '55vw', height: '55vw',
          borderRadius: '50%',
          background: `radial-gradient(circle, rgba(201,168,76,${isDark ? '0.06' : '0.1'}) 0%, transparent 68%)`,
          animation: 'heroPulse 7s ease-in-out infinite',
        }} />
        {/* Concentric rings */}
        {[38, 30].map((size, i) => (
          <div key={i} style={{
            position: 'absolute', right: `${6 + i * 7}%`, top: '50%',
            transform: 'translateY(-50%)',
            width: `${size}vw`, height: `${size}vw`, borderRadius: '50%',
            border: `1px solid rgba(201,168,76,${0.08 - i * 0.03})`,
          }} />
        ))}
        {/* Vertical accent lines */}
        {[18, 34, 80, 93].map((x) => (
          <div key={x} style={{
            position: 'absolute', left: `${x}%`, top: 0, bottom: 0, width: 1,
            background: `linear-gradient(to bottom, transparent, rgba(201,168,76,${isDark ? '0.06' : '0.1'}), transparent)`,
          }} />
        ))}
      </div>

      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '130px 24px 90px', width: '100%', position: 'relative' }}>
        {/* Eyebrow */}
        <div style={{ ...fade(0), display: 'inline-flex', alignItems: 'center', gap: 8, marginBottom: 28 }}>
          <span style={{
            background: 'rgba(201,168,76,0.1)', border: '1px solid rgba(201,168,76,0.3)',
            borderRadius: 20, padding: '6px 18px',
            fontFamily: 'var(--font-body)', fontSize: 12, letterSpacing: '0.22em',
            textTransform: 'uppercase', color: 'var(--gold-primary)',
          }}>● Trusted Legal Excellence Since 2009</span>
        </div>

        {/* Headline */}
        <h1 style={{
          ...fade(0.15),
          fontFamily: 'var(--font-heading)',
          fontSize: 'clamp(40px, 6.5vw, 80px)',
          fontWeight: 900, lineHeight: 1.08,
          color: isDark ? 'var(--dark-ink)' : '#0A1628',
          maxWidth: 700, marginBottom: 24,
        }}>
          Where Justice Meets{' '}
          <span className="gold-gradient-text">Expertise</span>
        </h1>

        {/* Sub */}
        <p style={{
          ...fade(0.3),
          fontFamily: 'var(--font-body)', fontSize: 20, lineHeight: 1.75,
          color: isDark ? 'rgba(255,255,255,0.62)' : 'rgba(0,0,0,0.6)',
          maxWidth: 560, marginBottom: 44,
        }}>
          India's premier legal platform connecting law students, practicing lawyers,
          and clients seeking justice — all in one unified ecosystem. Our legal expertise
          helps people understand their options and pursue justice with confidence.
        </p>

        {/* CTAs */}
        <div style={{ ...fade(0.45), display: 'flex', gap: 14, flexWrap: 'wrap', marginBottom: 80 }}>
          {[
            { label: 'For Law Students', icon: '📚', href: '/students', primary: true },
            { label: 'Hire a Lawyer', icon: '⚖️', href: '/services' },
            { label: 'Our Law Firm', icon: '🏛️', href: '/firm' },
          ].map((cta) => (
            <Link
              key={cta.href}
              href={cta.href}
              className={`lex-btn ${cta.primary ? 'lex-btn-primary' : 'lex-btn-outline'}`}
              style={{ textDecoration: 'none', fontSize: 16 }}
            >
              <span>{cta.icon}</span> {cta.label}
            </Link>
          ))}
        </div>

        {/* Stats row */}
        <div style={{
          ...fade(0.65),
          display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)',
          borderTop: `1px solid rgba(201,168,76,0.2)`,
          paddingTop: 36,
        }} className="stats-grid">
          {STATS.map((s, i) => (
            <div key={i} style={{ textAlign: i === 0 ? 'left' : 'center', padding: '0 16px' }}>
              <div style={{ fontFamily: 'var(--font-heading)', fontSize: 34, fontWeight: 800, color: 'var(--gold-primary)' }}>{s.value}</div>
              <div style={{ fontFamily: 'var(--font-body)', fontSize: 12, textTransform: 'uppercase', letterSpacing: '0.15em', color: isDark ? 'rgba(255,255,255,0.45)' : 'rgba(0,0,0,0.45)', marginTop: 4 }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes heroPulse {
          0%,100% { transform: translateY(-50%) scale(1); }
          50% { transform: translateY(-50%) scale(1.025); }
        }
        @media (max-width: 600px) {
          .stats-grid { grid-template-columns: repeat(2,1fr) !important; gap: 24px; }
        }
      `}</style>
    </section>
  );
}
