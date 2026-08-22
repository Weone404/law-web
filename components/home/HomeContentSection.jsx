'use client';

import Link from 'next/link';
import { useTheme } from '@/hooks/useTheme';

export default function HomeContentSection() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const headingColor = isDark ? 'var(--dark-ink)' : '#0A1628';
  const bodyColor = isDark ? 'rgba(247, 242, 232, 0.82)' : 'rgba(0,0,0,0.72)';

  return (
    <section style={{ padding: '96px 24px', background: isDark ? 'var(--bg-secondary)' : '#F8F6F0' }}>
      <div style={{ maxWidth: 1120, margin: '0 auto' }}>
        <div style={{ maxWidth: 780, marginBottom: 72 }}>
          <p style={{ color: 'var(--gold-primary)', fontFamily: 'var(--font-body)', fontSize: 12, letterSpacing: '0.24em', textTransform: 'uppercase', marginBottom: 16 }}>About legalgroup</p>
          <h2 style={{ color: headingColor, fontFamily: 'var(--font-heading)', fontSize: 'clamp(30px, 4vw, 48px)', marginBottom: 22 }}>Practical legal expertise for decisions that matter</h2>
          <p style={{ color: bodyColor, fontFamily: 'var(--font-body)', fontSize: 18, lineHeight: 1.8, marginBottom: 18 }}>
            legalgroup is an India-focused legal platform and law practice connecting individuals, businesses, lawyers, and law students with dependable legal knowledge. Since 2009, our team has worked across litigation, advisory, legal research, and professional education, helping people understand their rights and choose a clear next step. We combine the care of a personal legal adviser with the reach and organization of a modern technology platform.
          </p>
          <p style={{ color: bodyColor, fontFamily: 'var(--font-body)', fontSize: 18, lineHeight: 1.8 }}>
            Our advocates bring experience from trial courts, High Courts, tribunals, and Supreme Court matters. Whether you need urgent criminal defence, a carefully reviewed property document, guidance for a growing company, or support through a family dispute, legalgroup approaches each matter with preparation, candour, and respect for the people affected by the outcome. Our goal is not simply to provide information, but to make expert legal help easier to access and easier to act on.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, minmax(0, 1fr))', gap: 24, marginBottom: 72 }} className="home-content-grid">
          <article style={{ background: isDark ? 'rgba(255,255,255,0.04)' : '#FFFFFF', border: '1px solid rgba(20,24,32,0.14)', borderRadius: 12, padding: '32px 30px' }}>
            <h2 style={{ color: headingColor, fontFamily: 'var(--font-heading)', fontSize: 28, marginBottom: 16 }}>Our Approach</h2>
            <p style={{ color: bodyColor, fontFamily: 'var(--font-body)', fontSize: 17, lineHeight: 1.8, marginBottom: 14 }}>
              Good representation begins with listening. We first understand the facts, urgency, practical constraints, and outcome you want. Then we explain the relevant law in plain language, identify the available options, and set out the likely costs, risks, and timelines before recommending a strategy.
            </p>
            <p style={{ color: bodyColor, fontFamily: 'var(--font-body)', fontSize: 17, lineHeight: 1.8 }}>
              Throughout a matter, we value responsive communication, careful legal research, and honest advice. That disciplined process helps clients make informed decisions while allowing our lawyers to pursue justice with the detail and expertise complex cases require.
            </p>
          </article>
          <article style={{ background: isDark ? 'rgba(255,255,255,0.04)' : '#FFFFFF', border: '1px solid rgba(20,24,32,0.14)', borderRadius: 12, padding: '32px 30px' }}>
            <h2 style={{ color: headingColor, fontFamily: 'var(--font-heading)', fontSize: 28, marginBottom: 16 }}>Who We Serve</h2>
            <p style={{ color: bodyColor, fontFamily: 'var(--font-body)', fontSize: 17, lineHeight: 1.8, marginBottom: 14 }}>
              Our clients include families navigating sensitive personal matters, founders and established companies managing legal risk, property owners protecting valuable interests, and people who need a strong defence or a fair hearing. We also support law students with case-law research, bare acts, notes, and career resources.
            </p>
            <p style={{ color: bodyColor, fontFamily: 'var(--font-body)', fontSize: 17, lineHeight: 1.8 }}>
              With offices and professional relationships across New Delhi, Mumbai, Bangalore, Chennai, Pune, Kolkata, and Hyderabad, legalgroup can help coordinate legal support across India. <Link href="/contact" style={{ color: 'var(--gold-primary)' }}>Speak with our team</Link> about the right starting point for your matter.
            </p>
          </article>
        </div>

        <div>
          <h2 style={{ color: headingColor, fontFamily: 'var(--font-heading)', fontSize: 'clamp(28px, 4vw, 42px)', marginBottom: 18 }}>A legal partner for every stage</h2>
          <p style={{ color: bodyColor, fontFamily: 'var(--font-body)', fontSize: 18, lineHeight: 1.8, maxWidth: 820 }}>
            From a first consultation to a negotiated settlement, trial, appeal, or long-term corporate advisory relationship, our work is built around clarity and preparation. Explore our legal services, meet the advocate best suited to your needs, or browse the Indian laws database to begin your research with reliable context.
          </p>
        </div>
      </div>
      <style>{`@media (max-width: 720px) { .home-content-grid { grid-template-columns: 1fr !important; } }`}</style>
    </section>
  );
}
