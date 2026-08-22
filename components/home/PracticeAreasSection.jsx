/**
 * components/home/PracticeAreasSection.jsx
 */
'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useTheme } from '@/hooks/useTheme';
import SectionHeader from '@/components/ui/SectionHeader';

const AREAS = [
  { icon: '⚖️', title: 'Criminal Law', desc: 'Our criminal lawyers advise on bail, investigation, trial, appeals, and defence or prosecution strategy under BNS 2023 and related laws. We explain urgent options clearly while protecting due process and your rights.', href: '/services/criminal-law' },
  { icon: '🏛️', title: 'Constitutional Law', desc: 'We handle fundamental-rights claims, writ petitions, public interest litigation, and Supreme Court matters. Our constitutional expertise connects careful research with practical representation.', href: '/services/constitutional-law' },
  { icon: '🏢', title: 'Corporate Law', desc: 'Businesses receive advice on company formation, M&A, SEBI compliance, NCLT proceedings, contracts, and commercial disputes. We help leadership teams manage legal risk as they grow.', href: '/services/corporate-law' },
  { icon: '👨‍👩‍👧', title: 'Family Law', desc: 'Our family lawyers support clients through divorce, custody, adoption, succession, maintenance, and matrimonial disputes. Sensitive advice and mediation remain central to our approach.', href: '/services/family-law' },
  { icon: '🏠', title: 'Property Law', desc: 'We assist with title verification, real estate disputes, RERA complaints, registrations, and property documentation. Early legal review can prevent costly conflict and protect long-term ownership.', href: '/services/property-law' },
  { icon: '💼', title: 'Civil Litigation', desc: 'Our civil litigators represent individuals and businesses in contract disputes, injunctions, recovery claims, tort matters, and appeals. We build each case around evidence, procedure, and a clear remedy.', href: '/services/civil-law' },
];

export function PracticeAreasSection() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  return (
    <section style={{ padding: '100px 24px', background: isDark ? 'var(--bg-secondary)' : '#ffffff' }}>
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
                  border: `1px solid ${isDark ? 'rgba(201,168,76,0.1)' : 'rgba(20,24,32,0.16)'}`,
                  borderRadius: 16, padding: '32px 28px', height: '100%',
                  transition: 'all 0.3s ease',
                }}
                  onMouseEnter={(e) => { const el = e.currentTarget; el.style.transform = 'translateY(-6px)'; el.style.borderColor = 'rgba(201,168,76,0.5)'; el.style.boxShadow = '0 20px 40px rgba(201,168,76,0.1)'; }}
                  onMouseLeave={(e) => { const el = e.currentTarget; el.style.transform = ''; el.style.borderColor = isDark ? 'rgba(201,168,76,0.1)' : 'rgba(20,24,32,0.16)'; el.style.boxShadow = ''; }}
                >
                  <div style={{ fontSize: 38, marginBottom: 16 }}>{area.icon}</div>
                  <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: 20, fontWeight: 700, color: isDark ? 'var(--dark-ink)' : '#0A1628', marginBottom: 10 }}>{area.title}</h3>
                  <p style={{ fontFamily: 'var(--font-body)', fontSize: 16, color: isDark ? 'rgba(247, 242, 232, 0.78)' : 'rgba(0,0,0,0.72)', lineHeight: 1.65, marginBottom: 16 }}>{area.desc}</p>
                  <span style={{ color: 'var(--gold-primary)', fontSize: 13, fontFamily: 'var(--font-body)' }}>Learn more about {area.title} →</span>
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
