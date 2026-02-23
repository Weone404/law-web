/**
 * components/home/PracticeAreasSection.jsx
 */
'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useTheme } from '@/hooks/useTheme';
import SectionHeader from '@/components/ui/SectionHeader';

const AREAS = [
  { icon: '⚖️', title: 'Criminal Law',       desc: 'Expert defence and prosecution across all criminal matters under BNS 2023.',   href: '/services' },
  { icon: '🏛️', title: 'Constitutional Law',  desc: 'Fundamental rights, writ petitions, PIL, and Supreme Court matters.',           href: '/services' },
  { icon: '🏢', title: 'Corporate Law',       desc: 'Company formation, M&A, SEBI, NCLT, and complex commercial disputes.',          href: '/services' },
  { icon: '👨‍👩‍👧', title: 'Family Law',         desc: 'Divorce, custody, adoption, succession, and matrimonial disputes.',            href: '/services' },
  { icon: '🏠', title: 'Property Law',        desc: 'Real estate disputes, title verification, RERA, and property registrations.',   href: '/services' },
  { icon: '💼', title: 'Civil Litigation',    desc: 'Contract disputes, tort claims, injunctions, and civil court representation.',  href: '/services' },
];

export function PracticeAreasSection() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  return (
    <section style={{ padding: '100px 24px', background: isDark ? '#080F1E' : '#ffffff' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <SectionHeader eyebrow="Practice Areas" title="Comprehensive Legal Expertise" subtitle="From criminal defence to corporate advisory — our team handles every dimension of Indian law." />
        <div className="responsive-grid-3" style={{ marginTop: 60 }}>
          {AREAS.map((area, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ delay: i * 0.09 }}
              data-cursor="scale"
            >
              <Link href={area.href} style={{ textDecoration: 'none', display: 'block' }}>
                <div style={{
                  background: isDark ? 'rgba(255,255,255,0.03)' : '#F8F6F0',
                  border: `1px solid ${isDark ? 'rgba(201,168,76,0.1)' : 'rgba(201,168,76,0.2)'}`,
                  borderRadius: 16, padding: '32px 28px', height: '100%',
                  transition: 'all 0.3s ease',
                }}
                  onMouseEnter={(e) => { const el = e.currentTarget; el.style.transform = 'translateY(-6px)'; el.style.borderColor = 'rgba(201,168,76,0.5)'; el.style.boxShadow = '0 20px 40px rgba(201,168,76,0.1)'; }}
                  onMouseLeave={(e) => { const el = e.currentTarget; el.style.transform = ''; el.style.borderColor = isDark ? 'rgba(201,168,76,0.1)' : 'rgba(201,168,76,0.2)'; el.style.boxShadow = ''; }}
                >
                  <div style={{ fontSize: 38, marginBottom: 16 }}>{area.icon}</div>
                  <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: 20, fontWeight: 700, color: isDark ? '#F0E8D0' : '#0A1628', marginBottom: 10 }}>{area.title}</h3>
                  <p style={{ fontFamily: 'var(--font-body)', fontSize: 16, color: isDark ? 'rgba(255,255,255,0.55)' : 'rgba(0,0,0,0.55)', lineHeight: 1.65, marginBottom: 16 }}>{area.desc}</p>
                  <span style={{ color: 'var(--gold-primary)', fontSize: 13, fontFamily: 'var(--font-body)' }}>Learn more →</span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PracticeAreasSection;
