/**
 * components/ui/PageHeader.jsx
 * Dark gradient header used at the top of all interior pages.
 */
'use client';
export default function PageHeader({ eyebrow, title, subtitle }) {
  return (
    <div className="dark-gold-surface" style={{
      background: 'var(--dark-hero)',
      padding: '64px 24px 80px', position: 'relative', overflow: 'hidden',
    }}>
      <div style={{
        position: 'absolute', right: '-8%', top: '50%', transform: 'translateY(-50%)',
        width: 420, height: 420, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(201,168,76,0.07) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />
      <div style={{ maxWidth: 1280, margin: '0 auto', position: 'relative' }}>
        {eyebrow && (
          <div style={{
            display: 'inline-block', background: 'rgba(201,168,76,0.12)',
            border: '1px solid rgba(201,168,76,0.3)', borderRadius: 20,
            padding: '5px 16px', marginBottom: 20,
            fontFamily: 'var(--font-body)', fontSize: 11,
            letterSpacing: '0.28em', textTransform: 'uppercase',
            color: 'var(--gold-primary)',
          }}>{eyebrow}</div>
        )}
        <h1 style={{
          fontFamily: 'var(--font-heading)', fontSize: 'clamp(30px,5vw,60px)',
          color: '#FFFFFF', fontWeight: 900, marginBottom: 14,
        }}>{title}</h1>
        {subtitle && (
          <p style={{
            fontFamily: 'var(--font-body)', fontSize: 19,
            color: 'rgba(255,255,255,0.58)', maxWidth: 580, lineHeight: 1.7,
          }}>{subtitle}</p>
        )}
      </div>
    </div>
  );
}
