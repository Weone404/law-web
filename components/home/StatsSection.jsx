/**
 * components/home/StatsSection.jsx
 */
'use client';
import { motion } from 'framer-motion';
import { useTheme } from '@/hooks/useTheme';

const STATS = [
  { value: '2,400+', label: 'Cases Successfully Resolved', icon: '⚖️' },
  { value: '15+', label: 'Years of Combined Excellence', icon: '🏛️' },
  { value: '180+', label: 'Law Students Mentored', icon: '📚' },
  { value: '98%', label: 'Client Satisfaction Rate', icon: '🌟' },
];

export default function StatsSection() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  return (
    <section className="dark-gold-surface" style={{
      padding: '80px 24px',
      background: 'var(--dark-hero)',
      position: 'relative', overflow: 'hidden',
    }}>
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
        <div style={{ position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%,-50%)', width: '80%', height: '80%', borderRadius: '50%', background: 'radial-gradient(circle, rgba(201,168,76,0.04) 0%, transparent 70%)' }} />
      </div>
      <div style={{ maxWidth: 1280, margin: '0 auto', position: 'relative' }}>
        <div className="responsive-grid-4">
          {STATS.map((s, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.12 }}
              style={{ textAlign: 'center', padding: '20px' }}>
              <div style={{ fontSize: 36, marginBottom: 12 }}>{s.icon}</div>
              <div style={{ fontFamily: 'var(--font-heading)', fontSize: 40, fontWeight: 900, color: 'var(--gold-primary)', marginBottom: 8 }}>{s.value}</div>
              <div style={{ fontFamily: 'var(--font-body)', fontSize: 14, color: 'rgba(255,255,255,0.8)', letterSpacing: '0.05em' }}>{s.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
