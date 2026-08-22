/**
 * components/ui/SectionHeader.jsx
 */
'use client';
import { useTheme } from '@/hooks/useTheme';

export default function SectionHeader({ eyebrow, title, subtitle }) {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  return (
    <div style={{ textAlign: 'center', maxWidth: 640, margin: '0 auto' }}>
      {eyebrow && (
        <div style={{
          display: 'inline-block', fontFamily: 'var(--font-body)',
          fontSize: 11, letterSpacing: '0.3em', textTransform: 'uppercase',
          color: isDark ? 'var(--gold-on-dark)' : 'var(--gold-on-light)', marginBottom: 16,
          padding: '4px 16px', border: `1px solid ${isDark ? 'rgba(201,168,76,0.3)' : 'rgba(20,24,32,0.2)'}`, borderRadius: 20,
        }}>{eyebrow}</div>
      )}
      <h2 style={{
        fontFamily: 'var(--font-heading)', fontSize: 'clamp(26px,3.5vw,42px)', fontWeight: 800,
        color: isDark ? '#F0E8D0' : '#0A1628', marginBottom: 14, lineHeight: 1.2,
      }}>{title}</h2>
      {subtitle && (
        <p style={{
          fontFamily: 'var(--font-body)', fontSize: 18, lineHeight: 1.7,
          color: isDark ? 'rgba(247, 242, 232, 0.82)' : 'rgba(0,0,0,0.68)',
        }}>{subtitle}</p>
      )}
    </div>
  );
}
