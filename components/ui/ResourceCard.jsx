/**
 * components/ui/ResourceCard.jsx
 */
'use client';
import { useTheme } from '@/hooks/useTheme';

const TAG_COLORS = {
  Core: '#3B82F6', Criminal: '#EF4444', Procedure: '#8B5CF6',
  Civil: '#10B981', Evidence: '#F59E0B', Property: '#6366F1',
  Constitutional: '#EC4899', 'Fundamental Rights': '#3B82F6', PIL: '#10B981',
  Contract: '#F59E0B', 'Tort Law': '#EF4444', Corporate: '#6366F1',
  Family: '#EC4899', New: '#C9A84C', Landmark: '#C9A84C', Classic: '#8B5CF6',
  Important: '#10B981', LegalTech: '#3B82F6', Certification: '#C9A84C',
  Judiciary: '#3B82F6', Skills: '#10B981', Exam: '#8B5CF6', Internship: '#EC4899',
};

export default function ResourceCard({ item }) {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const tagColor = TAG_COLORS[item.tag] || '#C9A84C';

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
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 2, background: `linear-gradient(90deg, ${tagColor}, transparent)` }} />

      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 12 }}>
        <span style={{ background: `${tagColor}22`, color: tagColor, fontSize: 11, padding: '3px 10px', borderRadius: 20, fontFamily: 'var(--font-body)', letterSpacing: '0.08em' }}>{item.tag}</span>
        <span style={{ fontSize: 12, color: isDark ? 'rgba(255,255,255,0.35)' : 'rgba(0,0,0,0.35)', fontFamily: 'var(--font-body)' }}>{item.updated}</span>
      </div>

      <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: 16, fontWeight: 700, color: isDark ? '#F0E8D0' : '#0A1628', marginBottom: 8, lineHeight: 1.4 }}>{item.title}</h3>
      <p style={{ fontFamily: 'var(--font-body)', fontSize: 14, color: isDark ? 'rgba(255,255,255,0.5)' : 'rgba(0,0,0,0.5)', marginBottom: 16 }}>{item.subject}</p>
      <span style={{ color: 'var(--gold-primary)', fontSize: 13, fontFamily: 'var(--font-body)' }}>Review this legal resource →</span>
    </div>
  );
}
