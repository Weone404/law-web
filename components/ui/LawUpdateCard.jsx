/**
 * components/ui/LawUpdateCard.jsx
 */
'use client';
import { motion } from 'framer-motion';
import { useTheme } from '@/hooks/useTheme';

const TYPE_COLORS = {
  'New Law': '#10B981', Amendment: '#3B82F6', 'Court Order': '#8B5CF6',
  Budget: '#F59E0B', Guidelines: '#EC4899', Ordinance: '#EF4444',
};

export default function LawUpdateCard({ item, index = 0 }) {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const tc = TYPE_COLORS[item.type] || '#6B7280';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.06 }}
      style={{
        background: isDark ? 'rgba(255,255,255,0.04)' : '#FFFFFF',
        border: `1px solid ${item.urgent ? 'rgba(201,168,76,0.3)' : isDark ? 'rgba(255,255,255,0.07)' : 'rgba(0,0,0,0.08)'}`,
        borderRadius: 12, padding: '24px', cursor: 'pointer',
        transition: 'all 0.22s', position: 'relative',
      }}
      onMouseEnter={(e) => { const el = e.currentTarget; el.style.transform = 'translateY(-4px)'; el.style.boxShadow = '0 12px 30px rgba(0,0,0,0.14)'; }}
      onMouseLeave={(e) => { const el = e.currentTarget; el.style.transform = ''; el.style.boxShadow = ''; }}
    >
      {item.urgent && (
        <div style={{ position: 'absolute', top: 12, right: 12, background: 'rgba(201,168,76,0.15)', border: '1px solid rgba(201,168,76,0.4)', borderRadius: 10, padding: '2px 8px', fontSize: 10, color: 'var(--gold-primary)', fontFamily: 'var(--font-body)', letterSpacing: '0.1em' }}>NEW</div>
      )}
      <div style={{ marginBottom: 12 }}>
        <span style={{ background: `${tc}20`, color: tc, fontSize: 11, padding: '3px 10px', borderRadius: 20, fontFamily: 'var(--font-body)' }}>{item.type}</span>
      </div>
      <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: 16, fontWeight: 700, color: isDark ? '#F0E8D0' : '#0A1628', marginBottom: 12, lineHeight: 1.45 }}>{item.title}</h3>
      {item.summary && <p style={{ fontFamily: 'var(--font-body)', fontSize: 14, color: isDark ? 'rgba(255,255,255,0.5)' : 'rgba(0,0,0,0.5)', marginBottom: 12, lineHeight: 1.6 }}>{item.summary}</p>}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span style={{ fontFamily: 'var(--font-body)', fontSize: 13, color: isDark ? 'rgba(255,255,255,0.38)' : 'rgba(0,0,0,0.38)' }}>{item.date}</span>
        <span style={{ color: 'var(--gold-primary)', fontSize: 13, fontFamily: 'var(--font-body)' }}>View details →</span>
      </div>
    </motion.div>
  );
}
