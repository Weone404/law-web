/**
 * components/home/TestimonialsSection.jsx
 */
'use client';
import { motion } from 'framer-motion';
import { useTheme } from '@/hooks/useTheme';
import SectionHeader from '@/components/ui/SectionHeader';

const TESTIMONIALS = [
  { quote: "Lex India's legal team handled our corporate merger with exceptional precision. Their understanding of Indian corporate law is unmatched.", name: 'Rajesh Mehta', title: 'CEO, TechVentures India', icon: '🏢' },
  { quote: "As a law student, the resources on this platform transformed my understanding of constitutional law. The case law library is extraordinary.", name: 'Priya Sharma', title: '3rd Year, National Law School Bangalore', icon: '📚' },
  { quote: "They fought my property dispute with complete dedication. Transparency and professionalism at every step of the case was commendable.", name: 'Sunita Patel', title: 'Property Owner, Mumbai', icon: '🏠' },
];

export default function TestimonialsSection() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  return (
    <section style={{ padding: '100px 24px', background: isDark ? '#050D1A' : '#F0EDE4' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <SectionHeader eyebrow="Client Stories" title="Trusted by Thousands Across India" />
        <div className="responsive-grid-3" style={{ marginTop: 56 }}>
          {TESTIMONIALS.map((t, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.12 }}
              style={{
                background: isDark ? 'rgba(255,255,255,0.04)' : '#FFFFFF',
                border: `1px solid ${isDark ? 'rgba(201,168,76,0.12)' : 'rgba(201,168,76,0.25)'}`,
                borderRadius: 16, padding: '32px 28px',
              }}>
              <div style={{ fontSize: 30, marginBottom: 12 }}>{t.icon}</div>
              <div style={{ color: 'var(--gold-primary)', fontSize: 28, marginBottom: 10, fontFamily: 'Georgia, serif' }}>"</div>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: 17, lineHeight: 1.75, color: isDark ? 'rgba(255,255,255,0.75)' : 'rgba(0,0,0,0.7)', marginBottom: 24 }}>{t.quote}</p>
              <div style={{ borderTop: `1px solid ${isDark ? 'rgba(201,168,76,0.1)' : 'rgba(201,168,76,0.2)'}`, paddingTop: 16 }}>
                <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, color: isDark ? '#F0E8D0' : '#0A1628', fontSize: 15 }}>{t.name}</div>
                <div style={{ fontFamily: 'var(--font-body)', fontSize: 13, color: 'var(--gold-primary)', marginTop: 4 }}>{t.title}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
