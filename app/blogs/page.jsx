/**
 * app/blogs/page.jsx — Legal Blog
 * Practical legal analysis and Indian law updates for clients, lawyers, and students.
 */

import Link from 'next/link';
import PageHeader from '@/components/ui/PageHeader';
import ResourceCard from '@/components/ui/ResourceCard';
import JsonLd from '@/components/seo/JsonLd';
import { LEGAL_GUIDE_INDEX } from '@/lib/constants/legalGuides';
import { BRAND_NAME, SITE_URL, createMetadata } from '@/lib/seo';

export const metadata = createMetadata('/blogs');

export default function BlogsPage() {
  const blogs = LEGAL_GUIDE_INDEX;

  return (
    <div className="dark-gold-surface" style={{ minHeight: '100vh', paddingTop: 72, background: 'var(--dark-bg)' }}>
      <JsonLd data={{
        '@context': 'https://schema.org',
        '@type': 'CollectionPage',
        name: 'Legal Blogs',
        description: metadata.description,
        url: `${SITE_URL}/blogs`,
        isPartOf: { '@type': 'WebSite', name: BRAND_NAME, url: SITE_URL },
      }} />

      <PageHeader
        eyebrow="Legal Insights"
        title="Legal Blogs"
        subtitle="Clear, practical analysis of Indian law, important legal developments, and the issues that matter to you."
      />

      <section style={{ maxWidth: 1280, margin: '0 auto', padding: '48px 24px 80px' }} aria-labelledby="latest-legal-blogs">
        <div style={{ marginBottom: 36 }}>
          <p style={{
            fontFamily: 'var(--font-body)', fontSize: 12, letterSpacing: '0.2em',
            textTransform: 'uppercase', color: 'var(--gold-primary)', marginBottom: 10,
          }}>From the legalgroup editorial desk</p>
          <h2 id="latest-legal-blogs" style={{ fontFamily: 'var(--font-heading)', fontSize: 32, color: '#F0E8D0' }}>
            Latest insights
          </h2>
        </div>

        <div className="responsive-grid-3">
          {blogs.map((blog) => (
            <Link key={blog.slug} href={`/blogs/${blog.slug}`} style={{ textDecoration: 'none' }}>
              <ResourceCard item={blog} headingLevel={3} />
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
