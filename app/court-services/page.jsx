import Link from 'next/link';
import { COURT_SERVICE_SLUGS, COURT_SERVICE_PAGES } from '@/lib/constants/courtServicePages';
import { createMetadata } from '@/lib/seo';

export const metadata = createMetadata('/court-services', {
  title: 'Court Services in Delhi | legalgroup',
  description: 'Explore legalgroup court representation and litigation services for Delhi High Court, Supreme Court, district court and wider litigation matters.',
});

export default function CourtServicesIndexPage() {
  return (
    <main style={{ minHeight: '70vh', padding: '140px 24px 100px', background: 'var(--bg-primary)' }}>
      <div style={{ maxWidth: 1180, margin: '0 auto' }}>
        <p style={{ color: 'var(--gold-primary)', font: '600 12px var(--font-body)', letterSpacing: '.2em', textTransform: 'uppercase' }}>Court Services</p>
        <h1 style={{ font: 'clamp(42px, 6vw, 72px) var(--font-heading)', lineHeight: 1.08, maxWidth: 760, margin: '18px 0' }}>Representation shaped around the forum and the facts.</h1>
        <p style={{ color: 'var(--text-secondary)', font: '20px/1.7 var(--font-body)', maxWidth: 650 }}>Explore our court-focused legal services for clients seeking considered advice, preparation and representation in Delhi.</p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(240px,1fr))', gap: 16, marginTop: 52 }}>
          {COURT_SERVICE_SLUGS.map((slug) => {
            const page = COURT_SERVICE_PAGES[slug];
            return <Link key={slug} href={`/court-services/${slug}`} className="card-hover" style={{ display: 'block', padding: 28, border: '1px solid var(--border-color)', background: 'var(--card-bg)', color: 'var(--text-primary)' }}><span style={{ color: 'var(--gold-primary)', font: '14px var(--font-body)' }}>Court service</span><h2 style={{ font: '24px var(--font-heading)', margin: '24px 0 12px' }}>{page.title}</h2><span style={{ color: 'var(--gold-primary)', font: '16px var(--font-body)' }}>Explore service →</span></Link>;
          })}
        </div>
      </div>
    </main>
  );
}
