import Link from 'next/link';
import SectionHeader from '@/components/ui/SectionHeader';
import CTABanner from '@/components/home/CTABanner';
import JsonLd from '@/components/seo/JsonLd';
import { LAWYERS } from '@/lib/constants/lawyers';
import { SITE_URL, BRAND_NAME, OFFICES } from '@/lib/seo';
import { PROPERTY_LAW_PAGES } from '@/lib/constants/propertyLawPages';

const RELATED = [
  { slug: 'property-lawyer-delhi', label: 'Property Lawyer Delhi', icon: '🏠' },
  { slug: 'property-dispute-lawyer-delhi', label: 'Property Dispute Lawyer Delhi', icon: '⚖️' },
  { slug: 'real-estate-lawyer-delhi', label: 'Real Estate Lawyer Delhi', icon: '🏢' },
  { slug: 'property-registration-lawyer-delhi', label: 'Property Registration Lawyer Delhi', icon: '🧾' },
];

function Card({ children, style = {} }) {
  return <div style={{ background: 'var(--card-bg)', border: '1px solid var(--border-color)', borderRadius: 16, padding: '28px 24px', ...style }}>{children}</div>;
}

export default function PropertyLawPage({ page, isOverview = false, basePath = '/property-law' }) {
  const lawyers = LAWYERS.filter((lawyer) => lawyer.area === 'Property').slice(0, 3);
  const resolveBasePath = page.path && page.path.startsWith('/property-law') ? '/property-law' : basePath;
  const detailPath = page.path || `${resolveBasePath}/${page.slug}`;
  const url = `${SITE_URL}${detailPath}`;
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      { '@type': ['LegalService', 'Attorney'], name: `${BRAND_NAME} - ${page.title}`, url, areaServed: 'Delhi', serviceType: page.title, telephone: OFFICES[0].phone, address: { '@type': 'PostalAddress', streetAddress: OFFICES[0].address, addressLocality: 'New Delhi', addressCountry: 'IN' } },
      { '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL }, { '@type': 'ListItem', position: 2, name: 'Legal Services', item: `${SITE_URL}/services` }, { '@type': 'ListItem', position: 3, name: 'Property Law', item: `${SITE_URL}${resolveBasePath}` }, ...(isOverview ? [] : [{ '@type': 'ListItem', position: 4, name: page.title, item: url }]) ] },
      ...(!isOverview && page.faqs ? [{ '@type': 'FAQPage', mainEntity: page.faqs.map(([question, answer]) => ({ '@type': 'Question', name: question, acceptedAnswer: { '@type': 'Answer', text: answer } })) }] : []),
    ],
  };
  const trustPoints = page.trustPoints || ['Confidential consultation', 'Document-first review', 'Delhi-based legal support'];

  return <>
    <JsonLd data={schema} />
    <main style={{ background: 'var(--bg-primary)', color: 'var(--text-primary)' }}>
      <section style={{ background: 'var(--dark-hero)', padding: '122px 24px 76px' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <nav aria-label="Breadcrumb" style={{ color: 'var(--gold-light)', fontFamily: 'var(--font-body)', fontSize: 14, marginBottom: 34 }}>
            <Link href="/">Home</Link>
            <span aria-hidden="true"> / </span>
            <Link href="/services">Legal Services</Link>
            <span aria-hidden="true"> / </span>
            {isOverview ? <span>Property Law</span> : <><Link href={resolveBasePath}>Property Law</Link> <span aria-hidden="true"> / </span><span>{page.title}</span></>}
          </nav>

          <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: 36, alignItems: 'stretch' }}>
            <div>
              <div style={{ display: 'inline-block', border: '1px solid rgba(201,168,76,0.35)', borderRadius: 20, padding: '6px 16px', color: 'var(--gold-light)', fontFamily: 'var(--font-body)', fontSize: 12, letterSpacing: '0.18em', textTransform: 'uppercase' }}>
                {isOverview ? '● Property Law · India' : `● Property Law · ${page.shortTitle}`}
              </div>
              <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(38px, 6vw, 72px)', lineHeight: 1.1, maxWidth: 850, margin: '24px 0 22px', color: 'var(--dark-ink)' }}>
                {page.title}
              </h1>
              <p style={{ maxWidth: 720, color: 'rgba(247,242,232,0.82)', fontFamily: 'var(--font-body)', fontSize: 20, lineHeight: 1.7, marginBottom: 34 }}>
                {page.subtitle}
              </p>
              <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap', marginBottom: 48 }}>
                <Link href="/contact" className="lex-btn lex-btn-primary" style={{ textDecoration: 'none', fontSize: 16 }}>📞 Book a Consultation</Link>
                <a href="#services" className="lex-btn lex-btn-outline" style={{ textDecoration: 'none', fontSize: 16 }}>🏠 Explore Property Services</a>
              </div>
            </div>

            <Card style={{ background: 'rgba(10,24,32,0.38)', border: '1px solid rgba(201,168,76,0.25)', color: 'var(--dark-ink)', alignSelf: 'center' }}>
              <div style={{ fontFamily: 'var(--font-body)', fontSize: 12, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--gold-light)', marginBottom: 18 }}>Property Law Support</div>
              <ul style={{ listStyle: 'none', display: 'grid', gap: 14, padding: 0, margin: 0 }}>
                {trustPoints.map((point) => (
                  <li key={point} style={{ display: 'flex', gap: 10, alignItems: 'flex-start', color: 'rgba(247,242,232,0.9)', fontFamily: 'var(--font-body)', fontSize: 17, lineHeight: 1.6 }}>
                    <span aria-hidden="true" style={{ color: 'var(--gold-light)', marginTop: 2 }}>✓</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', borderTop: '1px solid rgba(201,168,76,0.2)', paddingTop: 28, marginTop: 28 }} className="stats-grid">
            {page.stats.map(([value, label]) => (
              <div key={label} style={{ padding: '0 16px' }}>
                <div style={{ color: 'var(--gold-light)', fontFamily: 'var(--font-heading)', fontSize: 32, fontWeight: 800 }}>{value}</div>
                <div style={{ color: 'rgba(247,242,232,0.7)', fontFamily: 'var(--font-body)', fontSize: 12, letterSpacing: '0.12em', textTransform: 'uppercase' }}>{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: '92px 24px', background: 'var(--bg-secondary)' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <SectionHeader eyebrow="Property Law Guidance" title={page.explainerTitle} subtitle="A careful review of ownership, documents and transaction facts helps clients avoid avoidable loss and legal friction." />
          <div className="responsive-grid-3" style={{ marginTop: 52 }}>
            {page.issues.map(([icon, title, text]) => (
              <Card key={title}>
                <div style={{ fontSize: 34, marginBottom: 14 }}>{icon}</div>
                <h3 style={{ color: 'var(--text-primary)', fontSize: 21, marginBottom: 10 }}>{title}</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: 16 }}>{text}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="services" style={{ padding: '92px 24px', background: 'var(--bg-primary)' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <SectionHeader eyebrow="Core Services" title="How We Help With Property Matters" subtitle="We work through the document, risk and timeline issues that matter most in a real property matter." />
          <div style={{ display: 'grid', gap: 18, marginTop: 52 }}>
            {page.services.map(([title, text]) => (
              <Card key={title} style={{ display: 'flex', gap: 20, alignItems: 'flex-start' }}>
                <div style={{ flexShrink: 0, width: 42, height: 42, borderRadius: '50%', background: 'var(--gold-primary)', color: '#050D1A', display: 'grid', placeItems: 'center', fontFamily: 'var(--font-heading)', fontWeight: 800 }}>✓</div>
                <div>
                  <h3 style={{ color: 'var(--text-primary)', fontSize: 20, marginBottom: 6 }}>{title}</h3>
                  <p style={{ color: 'var(--text-secondary)', fontSize: 16 }}>{text}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: '92px 24px', background: 'var(--bg-secondary)' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <SectionHeader eyebrow="The Legal Process" title="A Practical Path Forward" subtitle="We help clients act on the right legal issue without overreacting or overlooking the risk that matters most." />
          <div style={{ display: 'grid', gap: 16, marginTop: 52 }}>
            {page.process.map(([number, title, text]) => (
              <Card key={title} style={{ display: 'flex', gap: 20, alignItems: 'flex-start' }}>
                <div style={{ flexShrink: 0, width: 42, height: 42, borderRadius: '50%', background: 'var(--gold-primary)', color: '#050D1A', display: 'grid', placeItems: 'center', fontFamily: 'var(--font-heading)', fontWeight: 800 }}>{number}</div>
                <div>
                  <h3 style={{ color: 'var(--text-primary)', fontSize: 20, marginBottom: 6 }}>{title}</h3>
                  <p style={{ color: 'var(--text-secondary)', fontSize: 16 }}>{text}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: '92px 24px', background: 'var(--bg-primary)' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <SectionHeader eyebrow="Legal Review" title="Key Considerations" subtitle="The best property strategy depends on clean facts, careful document review and a realistic understanding of the remedy." />
          <div style={{ display: 'grid', gap: 18, marginTop: 52 }}>
            {page.explainer.map((paragraph) => (
              <Card key={paragraph.slice(0, 30)} style={{ padding: '24px 26px' }}>
                <p style={{ color: 'var(--text-secondary)', fontSize: 17, lineHeight: 1.8 }}>{paragraph}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {page.faqs && <section style={{ padding: '92px 24px', background: 'var(--bg-secondary)' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <SectionHeader eyebrow="Answers" title="Frequently Asked Questions" subtitle="Straightforward answers on the common issues that arise in property and real-estate matters." />
          <div style={{ display: 'grid', gap: 12, marginTop: 44 }}>
            {page.faqs.map(([question, answer]) => (
              <details key={question} style={{ background: 'var(--card-bg)', border: '1px solid var(--border-color)', borderRadius: 10, padding: '18px 20px' }}>
                <summary style={{ cursor: 'pointer', color: 'var(--text-primary)', fontFamily: 'var(--font-body)', fontWeight: 600 }}>{question}</summary>
                <p style={{ color: 'var(--text-secondary)', fontSize: 16, lineHeight: 1.8, marginTop: 12 }}>{answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>}

      <section style={{ padding: '92px 24px', background: 'var(--bg-primary)' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <SectionHeader eyebrow="Related Property Pages" title="Explore the Right Property Service" subtitle="Choose the area that matches the issue you need help with most directly." />
          <div className="responsive-grid-3" style={{ marginTop: 52 }}>
            {RELATED.filter((item) => item.slug !== page.slug).map((item) => (
              <Link key={item.slug} href={`/${item.slug}`} style={{ textDecoration: 'none' }}>
                <Card style={{ height: '100%' }}>
                  <div style={{ fontSize: 30, marginBottom: 12 }}>{item.icon}</div>
                  <h3 style={{ color: 'var(--text-primary)', fontSize: 19, marginBottom: 8 }}>{item.label}</h3>
                  <span style={{ color: 'var(--gold-primary)', fontFamily: 'var(--font-body)', fontSize: 14 }}>Learn more →</span>
                </Card>
              </Link>
            ))}
            {!isOverview && <Link href="/property-law" style={{ textDecoration: 'none' }}>
              <Card style={{ height: '100%' }}>
                <div style={{ fontSize: 30, marginBottom: 12 }}>🏠</div>
                <h3 style={{ color: 'var(--text-primary)', fontSize: 19, marginBottom: 8 }}>Property Law Overview</h3>
                <span style={{ color: 'var(--gold-primary)', fontFamily: 'var(--font-body)', fontSize: 14 }}>View main service →</span>
              </Card>
            </Link>}
          </div>
        </div>
      </section>

      <section id="advocates" style={{ padding: '92px 24px', background: 'var(--bg-secondary)' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <SectionHeader eyebrow="Property Counsel" title="Delhi Property Lawyers" subtitle="Connect with legal counsel who can assess the document, title and risk issues behind your matter." />
          <div className="responsive-grid-3" style={{ marginTop: 52 }}>
            {lawyers.map((lawyer) => (
              <div key={lawyer.name} style={{ background: 'var(--card-bg)', border: '1px solid var(--border-color)', borderRadius: 16, padding: 20 }}>
                <div style={{ fontFamily: 'var(--font-heading)', fontSize: 24, marginBottom: 8 }}>{lawyer.name}</div>
                <div style={{ color: 'var(--gold-primary)', fontSize: 14, letterSpacing: '0.08em', textTransform: 'uppercase' }}>{lawyer.area}</div>
                <p style={{ color: 'var(--text-secondary)', marginTop: 12 }}>{lawyer.about || 'Property and real-estate legal support for title, transactions and disputes.'}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
    <CTABanner title={`Need a ${page.shortTitle.toLowerCase()} lawyer in Delhi?`} description="Share the essentials of your property matter and identify the next practical step with a legal review." />
  </>;
}
