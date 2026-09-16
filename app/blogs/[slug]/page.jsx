import Link from 'next/link';
import { notFound } from 'next/navigation';
import JsonLd from '@/components/seo/JsonLd';
import { LEGAL_GUIDES } from '@/lib/constants/legalGuides';
import { BRAND_NAME, SITE_URL, createMetadata } from '@/lib/seo';

export const dynamicParams = false;

export function generateStaticParams() {
  return LEGAL_GUIDES.map((guide) => ({ slug: guide.slug }));
}

export function generateMetadata({ params }) {
  const guide = LEGAL_GUIDES.find((entry) => entry.slug === params.slug);
  if (!guide) return {};

  return createMetadata(`/blogs/${guide.slug}`, {
    title: `${guide.title} | ${BRAND_NAME}`,
    description: guide.description,
    type: 'article',
    keywords: [guide.title, guide.category, 'Indian law', 'legal advice', 'LegalGroup'].join(', '),
  });
}

export default function BlogGuidePage({ params }) {
  const guide = LEGAL_GUIDES.find((entry) => entry.slug === params.slug);
  if (!guide) notFound();

  const relatedGuides = LEGAL_GUIDES.filter((entry) => guide.relatedSlugs.includes(entry.slug)).slice(0, 3);
  const serviceUrl = `/services/${guide.serviceSlug}`;

  return (
    <main style={{ minHeight: '100vh', background: 'var(--dark-bg)', paddingTop: 96, color: '#F5F0E1' }}>
      <JsonLd data={{
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: guide.title,
        description: guide.description,
        datePublished: guide.published,
        dateModified: guide.updated,
        author: { '@type': 'Organization', name: BRAND_NAME },
        publisher: { '@type': 'Organization', name: BRAND_NAME, logo: `${SITE_URL}/opengraph-image` },
        mainEntityOfPage: `${SITE_URL}/blogs/${guide.slug}`,
        articleSection: guide.category,
      }} />

      <article style={{ maxWidth: 980, margin: '0 auto', padding: '0 20px 80px' }}>
        <nav aria-label="Breadcrumb" style={{ marginBottom: 24, fontFamily: 'var(--font-body)', color: 'var(--gold-primary)', fontSize: 14 }}>
          <Link href="/" style={{ color: 'var(--gold-primary)', textDecoration: 'none' }}>Home</Link>
          <span> / </span>
          <Link href="/blogs" style={{ color: 'var(--gold-primary)', textDecoration: 'none' }}>Blogs</Link>
          <span> / </span>
          <span>{guide.title}</span>
        </nav>

        <p style={{ fontSize: 12, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--gold-primary)', marginBottom: 12, fontFamily: 'var(--font-body)' }}>{guide.category}</p>
        <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(2.4rem, 4vw, 4rem)', lineHeight: 1.1, margin: '0 0 18px', color: '#F5F0E1' }}>{guide.title}</h1>
        <p style={{ maxWidth: 720, fontSize: 18, lineHeight: 1.7, color: 'rgba(255,255,255,0.74)', marginBottom: 28, fontFamily: 'var(--font-body)' }}>{guide.description}</p>

        <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', fontFamily: 'var(--font-body)', fontSize: 14, color: 'rgba(255,255,255,0.7)', marginBottom: 28 }}>
          <span>Published: {guide.published}</span>
          <span>Updated: {guide.updated}</span>
          <span>By: {guide.author}</span>
        </div>

        <div style={{ display: 'grid', gap: '2rem', marginTop: '2rem' }}>
          {guide.sections.map((section) => {
            const sectionId = section.heading.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
            return (
              <section key={section.heading} aria-labelledby={sectionId} style={{ borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: 20 }}>
                <h2 id={sectionId} style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.5rem, 2vw, 2.2rem)', marginBottom: 12, color: '#F5F0E1' }}>{section.heading}</h2>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: 18, lineHeight: 1.8, color: 'rgba(255,255,255,0.78)', margin: 0 }}>{section.body}</p>
              </section>
            );
          })}
        </div>

        {guide.faq && guide.faq.length > 0 && (
          <section style={{ marginTop: 56 }} aria-labelledby="faq">
            <h2 id="faq" style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(2rem, 3vw, 2.5rem)', marginBottom: 20, color: '#F5F0E1' }}>Frequently asked questions</h2>
            <div style={{ display: 'grid', gap: 18 }}>
              {guide.faq.map((item) => (
                <div key={item.question} style={{ background: 'rgba(255,255,255,0.03)', padding: '20px 22px', borderRadius: 12, border: '1px solid rgba(255,255,255,0.06)' }}>
                  <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: 20, marginBottom: 8, color: '#F5F0E1' }}>{item.question}</h3>
                  <p style={{ fontFamily: 'var(--font-body)', fontSize: 17, lineHeight: 1.7, color: 'rgba(255,255,255,0.8)', margin: 0 }}>{item.answer}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        <section style={{ marginTop: 56, background: 'rgba(201,168,76,0.06)', border: '1px solid rgba(201,168,76,0.25)', borderRadius: 16, padding: 24 }}>
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.8rem, 2vw, 2.3rem)', marginBottom: 12, color: '#F5F0E1' }}>Related legal services</h2>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: 18, lineHeight: 1.7, color: 'rgba(255,255,255,0.8)' }}>
            If this topic affects your own situation, speaking with a lawyer can help you assess your documents, risk, and next steps before you take action.
          </p>
          <Link href={serviceUrl} style={{ display: 'inline-block', marginTop: 12, color: 'var(--gold-primary)', fontFamily: 'var(--font-body)', fontWeight: 600, textDecoration: 'none' }}>
            Explore {guide.category} services →
          </Link>
        </section>

        <section style={{ marginTop: 56 }} aria-labelledby="related-guides">
          <h2 id="related-guides" style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.8rem, 2vw, 2.3rem)', marginBottom: 20, color: '#F5F0E1' }}>Related articles</h2>
          <div style={{ display: 'grid', gap: 16 }}>
            {relatedGuides.map((entry) => (
              <Link key={entry.slug} href={`/blogs/${entry.slug}`} style={{ color: 'var(--gold-primary)', textDecoration: 'none', fontFamily: 'var(--font-body)', fontSize: 18 }}>
                {entry.title}
              </Link>
            ))}
          </div>
        </section>

        {guide.references && guide.references.length > 0 && (
          <section style={{ marginTop: 56 }} aria-labelledby="references">
            <h2 id="references" style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.6rem, 2vw, 2.2rem)', marginBottom: 12, color: '#F5F0E1' }}>References</h2>
            <ul style={{ fontFamily: 'var(--font-body)', fontSize: 17, lineHeight: 1.8, color: 'rgba(255,255,255,0.8)', paddingLeft: 18 }}>
              {guide.references.map((reference) => (
                <li key={reference}>{reference}</li>
              ))}
            </ul>
          </section>
        )}

        <div style={{ marginTop: 48, paddingTop: 24, borderTop: '1px solid rgba(255,255,255,0.08)' }}>
          <Link href="/contact" style={{ display: 'inline-block', background: 'var(--gold-primary)', color: '#111827', padding: '12px 20px', borderRadius: 999, fontFamily: 'var(--font-body)', fontWeight: 700, textDecoration: 'none' }}>
            Request a legal consultation
          </Link>
        </div>
      </article>
    </main>
  );
}
