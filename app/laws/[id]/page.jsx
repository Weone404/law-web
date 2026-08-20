import { notFound } from 'next/navigation';
import Link from 'next/link';
import JsonLd from '@/components/seo/JsonLd';
import { LAW_UPDATES } from '@/lib/constants/lawUpdates';
import { SITE_URL, BRAND_NAME, createMetadata } from '@/lib/seo';

export const dynamicParams = false;

export function generateStaticParams() {
  return LAW_UPDATES.map(({ id }) => ({ id }));
}

export function generateMetadata({ params }) {
  const law = LAW_UPDATES.find((entry) => entry.id === params.id);
  if (!law) return {};
  return createMetadata(`/laws/${law.id}`, {
    title: `${law.title}: Sections, Provisions & Updates | ${BRAND_NAME}`,
    description: `Read the ${law.title}, key provisions, status, amendments and important legal updates in India's law database from ${BRAND_NAME}.`,
  });
}

export default function LawDetailPage({ params }) {
  const law = LAW_UPDATES.find((entry) => entry.id === params.id);
  if (!law) notFound();
  const url = `${SITE_URL}/laws/${law.id}`;
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      { '@type': 'Article', headline: law.title, description: law.description, url, dateModified: law.amendedOn || law.enforcedOn || undefined, author: { '@type': 'Organization', name: BRAND_NAME } },
      { '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Indian Laws', item: `${SITE_URL}/laws` }, { '@type': 'ListItem', position: 2, name: law.title, item: url }] },
    ],
  };

  return (
    <main style={{ minHeight: '100vh', padding: '120px 24px 80px', background: 'var(--bg-primary)' }}>
      <JsonLd data={schema} />
      <article style={{ maxWidth: 860, margin: '0 auto' }}>
        <Link href="/laws" style={{ color: 'var(--gold-primary)', fontFamily: 'var(--font-body)' }}>← Indian Laws Database</Link>
        <p style={{ color: 'var(--gold-primary)', fontFamily: 'var(--font-body)', textTransform: 'uppercase', letterSpacing: '0.16em', marginTop: 32 }}>{law.category} · {law.status}</p>
        <h1 style={{ fontFamily: 'var(--font-heading)', color: 'var(--text-primary)', fontSize: 'clamp(36px, 6vw, 64px)', margin: '16px 0' }}>{law.title}</h1>
        <p style={{ color: 'var(--text-secondary)', fontFamily: 'var(--font-body)', fontSize: 20, lineHeight: 1.75 }}>{law.description}</p>
        <dl style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: 16, margin: '40px 0', color: 'var(--text-secondary)', fontFamily: 'var(--font-body)' }}>
          {law.enforcedOn && <div><dt style={{ color: 'var(--gold-primary)' }}>Enforced</dt><dd>{law.enforcedOn}</dd></div>}
          {law.amendedOn && <div><dt style={{ color: 'var(--gold-primary)' }}>Amended</dt><dd>{law.amendedOn}</dd></div>}
          {law.ministry && <div><dt style={{ color: 'var(--gold-primary)' }}>Ministry</dt><dd>{law.ministry}</dd></div>}
        </dl>
        {law.keyChanges?.length > 0 && <><h2 style={{ fontFamily: 'var(--font-heading)', color: 'var(--text-primary)' }}>Key provisions and changes</h2><ul style={{ color: 'var(--text-secondary)', fontFamily: 'var(--font-body)', fontSize: 18, lineHeight: 1.8, marginTop: 16 }}>{law.keyChanges.map((change) => <li key={change}>{change}</li>)}</ul></>}
      </article>
    </main>
  );
}
