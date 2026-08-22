/**
 * components/ui/ResourceCard.jsx
 */
'use client';
import { useTheme } from '@/hooks/useTheme';

const TAG_COLORS = {
  Core: 'blue', Criminal: 'red', Procedure: 'purple', Civil: 'green', Evidence: 'orange', Property: 'blue',
  Constitutional: 'pink', 'Fundamental Rights': 'blue', PIL: 'green', Contract: 'orange', 'Tort Law': 'red', Corporate: 'blue',
  Family: 'pink', New: 'gold', Landmark: 'gold', Classic: 'purple', Important: 'green', LegalTech: 'blue', Certification: 'gold',
  Judiciary: 'blue', Skills: 'green', Exam: 'purple', Internship: 'pink',
};

const TAG_STYLES = {
  gold: { bg: 'var(--badge-gold-bg)', text: 'var(--badge-gold-text)' }, purple: { bg: 'var(--badge-purple-bg)', text: 'var(--badge-purple-text)' },
  red: { bg: 'var(--badge-red-bg)', text: 'var(--badge-red-text)' }, green: { bg: 'var(--badge-green-bg)', text: 'var(--badge-green-text)' },
  blue: { bg: 'var(--badge-blue-bg)', text: 'var(--badge-blue-text)' }, pink: { bg: 'var(--badge-pink-bg)', text: 'var(--badge-pink-text)' },
  orange: { bg: 'var(--badge-orange-bg)', text: 'var(--badge-orange-text)' },
};

export default function ResourceCard({ item, headingLevel = 3 }) {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const tagStyle = TAG_STYLES[TAG_COLORS[item.tag] || 'gold'];
  const Heading = `h${headingLevel}`;

  return (
    <div
      data-cursor="book"
      style={{
        background: isDark ? 'rgba(255,255,255,0.04)' : '#FFFFFF',
        border: `1px solid ${isDark ? 'rgba(255,255,255,0.07)' : 'rgba(0,0,0,0.08)'}`,
        borderRadius: 12, padding: '24px', cursor: 'pointer',
        transition: 'all 0.25s', position: 'relative', overflow: 'hidden',
      }}
      onMouseEnter={(e) => { const el = e.currentTarget; el.style.borderColor = 'rgba(201,168,76,0.4)'; el.style.transform = 'translateY(-4px)'; el.style.boxShadow = '0 14px 32px rgba(0,0,0,0.15)'; }}
      onMouseLeave={(e) => { const el = e.currentTarget; el.style.borderColor = isDark ? 'rgba(255,255,255,0.07)' : 'rgba(0,0,0,0.08)'; el.style.transform = ''; el.style.boxShadow = ''; }}
    >
      {/* Top accent bar */}
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 2, background: `linear-gradient(90deg, ${tagStyle.bg}, transparent)` }} />

      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 12 }}>
        <span style={{ background: tagStyle.bg, color: tagStyle.text, fontSize: 11, padding: '3px 10px', borderRadius: 20, fontFamily: 'var(--font-body)', letterSpacing: '0.08em' }}>{item.tag}</span>
        <span style={{ fontSize: 12, color: 'var(--text-meta)', fontFamily: 'var(--font-body)' }}>{item.updated}</span>
      </div>

      <Heading style={{ fontFamily: 'var(--font-heading)', fontSize: 16, fontWeight: 700, color: isDark ? '#F0E8D0' : '#0A1628', marginBottom: 8, lineHeight: 1.4 }}>{item.title}</Heading>
      <p style={{ fontFamily: 'var(--font-body)', fontSize: 14, color: isDark ? 'rgba(255,255,255,0.5)' : 'rgba(0,0,0,0.5)', marginBottom: 16 }}>{item.subject}</p>
      <span style={{ color: 'var(--gold-primary)', fontSize: 13, fontFamily: 'var(--font-body)' }}>Review this legal resource →</span>
    </div>
  );
}
