/**
 * components/home/TestimonialsSection.jsx
 */
'use client';
import { motion } from 'framer-motion';
import { useTheme } from '@/hooks/useTheme';
import SectionHeader from '@/components/ui/SectionHeader';

const TESTIMONIALS = [
  { quote: 'The site helped me understand the legal process in plain language before I spoke to a lawyer.', name: 'Anonymous client', title: 'Family-law consultation', icon: '🧭' },
  { quote: 'Clear explanations, useful next steps, and a more practical approach to a complicated dispute.', name: 'Anonymous client', title: 'Property-law review', icon: '📘' },
  { quote: 'A good starting point for understanding the legal options, the documents involved, and the likely process.', name: 'Anonymous client', title: 'Business legal advisory', icon: '🏢' },
];

export default function TestimonialsSection() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  return (
    <section className="light-gold-surface" style={{ padding: '100px 24px', background: isDark ? 'var(--bg-primary)' : '#F0EDE4' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <SectionHeader eyebrow="How clients use the site" title="Practical legal information, not inflated promises" />
        <div className="responsive-grid-3" style={{ marginTop: 56 }}>
          {TESTIMONIALS.map((t, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.12 }}
              style={{
                background: isDark ? 'rgba(255,255,255,0.04)' : '#FFFFFF',
                border: `1px solid ${isDark ? 'rgba(201,168,76,0.12)' : 'rgba(201,168,76,0.25)'}`,
                borderRadius: 16, padding: '32px 28px',
              }}>
              <div style={{ fontSize: 30, marginBottom: 12 }}>{t.icon}</div>
              <div style={{ color: 'var(--gold-primary)', fontSize: 28, marginBottom: 10, fontFamily: 'Georgia, serif' }}>“</div>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: 17, lineHeight: 1.75, color: isDark ? 'rgba(247, 242, 232, 0.82)' : 'rgba(0,0,0,0.74)', marginBottom: 24 }}>{t.quote}</p>
              <div style={{ borderTop: `1px solid ${isDark ? 'rgba(201,168,76,0.1)' : 'rgba(201,168,76,0.2)'}`, paddingTop: 16 }}>
                <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, color: isDark ? 'var(--dark-ink)' : '#0A1628', fontSize: 15 }}>{t.name}</div>
                <div style={{ fontFamily: 'var(--font-body)', fontSize: 13, color: 'var(--gold-primary)', marginTop: 4 }}>{t.title}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
