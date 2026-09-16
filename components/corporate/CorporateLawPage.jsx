import Link from 'next/link';
import JsonLd from '@/components/seo/JsonLd';
import SectionHeader from '@/components/ui/SectionHeader';
import CTABanner from '@/components/home/CTABanner';
import { LAWYERS } from '@/lib/constants/lawyers';
import { SITE_URL, BRAND_NAME, OFFICES } from '@/lib/seo';

const RELATED = [
  { slug: 'corporate-lawyer-delhi', label: 'Corporate Lawyer Delhi', icon: '🏢' },
  { slug: 'company-registration-lawyer-delhi', label: 'Company Registration Lawyer Delhi', icon: '🧾' },
  { slug: 'business-lawyer-delhi', label: 'Business Lawyer Delhi', icon: '💼' },
  { slug: 'contract-lawyer-delhi', label: 'Contract Lawyer Delhi', icon: '📜' },
];

function Card({ children, style = {} }) {
  return <div style={{ background: 'var(--card-bg)', border: '1px solid var(--border-color)', borderRadius: 16, padding: '28px 24px', ...style }}>{children}</div>;
}

export default function CorporateLawPage({ page, isOverview = false, basePath = '/corporate-law' }) {
  const lawyers = LAWYERS.filter((lawyer) => lawyer.area === 'Corporate').slice(0, 3);
  const resolveBasePath = page.path && page.path.startsWith('/corporate-law') ? '/corporate-law' : basePath;
  const detailPath = page.path || `${resolveBasePath}/${page.slug}`;
  const url = `${SITE_URL}${detailPath}`;
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      { '@type': ['LegalService', 'Attorney'], name: `${BRAND_NAME} - ${page.title}`, url, areaServed: 'Delhi', serviceType: page.title, telephone: OFFICES[0].phone, address: { '@type': 'PostalAddress', streetAddress: OFFICES[0].address, addressLocality: 'New Delhi', addressCountry: 'IN' } },
      { '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL }, { '@type': 'ListItem', position: 2, name: 'Legal Services', item: `${SITE_URL}/services` }, { '@type': 'ListItem', position: 3, name: 'Corporate Law', item: `${SITE_URL}${resolveBasePath}` }, ...(isOverview ? [] : [{ '@type': 'ListItem', position: 4, name: page.title, item: url }])] },
      ...(!isOverview && page.faqs ? [{ '@type': 'FAQPage', mainEntity: page.faqs.map(([question, answer]) => ({ '@type': 'Question', name: question, acceptedAnswer: { '@type': 'Answer', text: answer } })) }] : [])
    ],
  };

  return (
    <>
      <JsonLd data={schema} />
      <main style={{ background: 'var(--bg-primary)', color: 'var(--text-primary)' }}>
        <section style={{ background: 'var(--dark-hero)', padding: '122px 24px 76px' }}>
          <div style={{ maxWidth: 1280, margin: '0 auto' }}>
            <nav aria-label="Breadcrumb" style={{ color: 'var(--gold-light)', fontFamily: 'var(--font-body)', fontSize: 14, marginBottom: 34 }}>
              <Link href="/">Home</Link>
              <span aria-hidden="true"> / </span>
              <Link href="/services">Legal Services</Link>
              <span aria-hidden="true"> / </span>
              {isOverview ? <span>Corporate Law</span> : <><Link href={resolveBasePath}>Corporate Law</Link> <span aria-hidden="true"> / </span><span>{page.title}</span></>}
            </nav>

            <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: 36, alignItems: 'stretch' }}>
              <div>
                <div style={{ display: 'inline-block', border: '1px solid rgba(201,168,76,0.35)', borderRadius: 20, padding: '6px 16px', color: 'var(--gold-light)', fontFamily: 'var(--font-body)', fontSize: 12, letterSpacing: '0.18em', textTransform: 'uppercase' }}>
                  {isOverview ? '● Corporate Law · India' : `● ${page.shortTitle} · Delhi`}
                </div>
                <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(38px, 6vw, 72px)', lineHeight: 1.1, maxWidth: 850, margin: '24px 0 22px', color: 'var(--dark-ink)' }}>
                  {page.title}
                </h1>
                <p style={{ maxWidth: 720, color: 'rgba(247,242,232,0.82)', fontFamily: 'var(--font-body)', fontSize: 20, lineHeight: 1.7, marginBottom: 34 }}>
                  {page.subtitle}
                </p>
                <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap', marginBottom: 48 }}>
                  <Link href="/contact" className="lex-btn lex-btn-primary" style={{ textDecoration: 'none', fontSize: 16 }}>📞 Book a Consultation</Link>
                  <a href="tel:+911140001234" className="lex-btn lex-btn-outline" style={{ textDecoration: 'none', fontSize: 16 }}>💬 Talk to a Lawyer</a>
                </div>
              </div>

              <Card style={{ background: 'rgba(10,24,32,0.38)', border: '1px solid rgba(201,168,76,0.25)', color: 'var(--dark-ink)', alignSelf: 'center' }}>
                <div style={{ fontFamily: 'var(--font-body)', fontSize: 12, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--gold-light)', marginBottom: 18 }}>Corporate legal support</div>
                <ul style={{ listStyle: 'none', display: 'grid', gap: 14, padding: 0, margin: 0 }}>
                  {(page.trustPoints || ['Confidential consultation', 'Business-first counsel', 'Clear legal guidance']).map((point) => (
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
          <div style={{ maxWidth: 1280, margin: '0 auto', display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', gap: 36, alignItems: 'start' }}>
            <div>
              <div style={{ fontFamily: 'var(--font-body)', fontSize: 12, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--gold-primary)', marginBottom: 16 }}>Corporate legal guidance</div>
              <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(30px, 3.7vw, 52px)', color: 'var(--text-primary)', marginBottom: 18 }}>{page.introTitle}</h2>
              {page.intro.map((paragraph) => (
                <p key={paragraph.slice(0, 40)} style={{ color: 'var(--text-secondary)', fontFamily: 'var(--font-body)', fontSize: 18, marginBottom: 18 }}>{paragraph}</p>
              ))}
            </div>
            <Card style={{ marginTop: 8 }}>
              <div style={{ fontFamily: 'var(--font-body)', fontSize: 12, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--gold-primary)', marginBottom: 18 }}>Business priorities</div>
              <ul style={{ listStyle: 'none', display: 'grid', gap: 12 }}>
                {['Entity structuring', 'Commercial risk review', 'Shareholder clarity', 'Contract enforcement', 'Governance support', 'Dispute readiness'].map((item) => (
                  <li key={item} style={{ display: 'flex', alignItems: 'center', gap: 12, color: 'var(--text-primary)', fontFamily: 'var(--font-body)', fontSize: 18 }}>
                    <span aria-hidden="true" style={{ width: 10, height: 10, borderRadius: '50%', background: 'var(--gold-primary)' }} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </section>

        <section style={{ padding: '92px 24px', background: 'var(--bg-primary)' }}>
          <div style={{ maxWidth: 1280, margin: '0 auto' }}>
            <SectionHeader eyebrow="Why choose us" title="Why businesses choose our corporate lawyers" subtitle="We combine practical legal advice, commercial awareness and direct communication so you can move forward with more certainty." />
            <div className="responsive-grid-3" style={{ marginTop: 52 }}>
              {page.reasons.map(([icon, title, text]) => (
                <Card key={title}>
                  <div style={{ fontSize: 34, marginBottom: 14 }}>{icon}</div>
                  <h3 style={{ color: 'var(--text-primary)', fontSize: 21, marginBottom: 10 }}>{title}</h3>
                  <p style={{ color: 'var(--text-secondary)', fontSize: 16 }}>{text}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="services" style={{ padding: '92px 24px', background: 'var(--bg-secondary)' }}>
          <div style={{ maxWidth: 1100, margin: '0 auto' }}>
            <SectionHeader eyebrow="Core services" title={page.process ? 'Corporate legal services' : 'How we help'} subtitle="Clear legal guidance at each stage of the business lifecycle, from formation to risk management and dispute support." />
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

        {page.process && (
          <section style={{ padding: '92px 24px', background: 'var(--bg-primary)' }}>
            <div style={{ maxWidth: 1100, margin: '0 auto' }}>
              <SectionHeader eyebrow="Business lifecycle" title={page.process[0][1] === 'Understand the business' ? 'How a corporate lawyer can help your business' : (page.process[0][1] === 'Create the terms' ? 'Contract services' : 'Legal support across the business lifecycle')} subtitle="The right legal support works with your business objective rather than against it." />
              <div style={{ display: 'grid', gap: 16, marginTop: 52 }}>
                {page.process.map(([step, title, text]) => (
                  <Card key={title} style={{ display: 'flex', gap: 20, alignItems: 'flex-start' }}>
                    <div style={{ flexShrink: 0, width: 42, height: 42, borderRadius: '50%', background: 'var(--gold-primary)', color: '#050D1A', display: 'grid', placeItems: 'center', fontFamily: 'var(--font-heading)', fontWeight: 800 }}>{step}</div>
                    <div>
                      <h3 style={{ color: 'var(--text-primary)', fontSize: 20, marginBottom: 6 }}>{title}</h3>
                      <p style={{ color: 'var(--text-secondary)', fontSize: 16 }}>{text}</p>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </section>
        )}

        <section style={{ padding: '92px 24px', background: 'var(--bg-secondary)' }}>
          <div style={{ maxWidth: 1280, margin: '0 auto' }}>
            <SectionHeader eyebrow="Trust and credibility" title="Professional legal support you can depend on" subtitle="A well-structured legal relationship reduces friction, protects commercial decisions and helps you move forward with clarity." />
            <div className="responsive-grid-4" style={{ marginTop: 52 }}>
              {[
                ['Business review', 'Document-first advisory'],
                ['Practice areas', 'Contracts, compliance, governance'],
                ['Clear process', 'Facts before action'],
                ['24/7', 'Consultation response']
              ].map(([value, label]) => (
                <Card key={label} style={{ textAlign: 'center' }}>
                  <div style={{ color: 'var(--gold-primary)', fontFamily: 'var(--font-heading)', fontSize: 30, fontWeight: 800 }}>{value}</div>
                  <div style={{ fontFamily: 'var(--font-body)', fontSize: 14, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--text-meta)', marginTop: 8 }}>{label}</div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {!isOverview && page.faqs && (
          <section style={{ padding: '92px 24px', background: 'var(--bg-primary)' }}>
            <div style={{ maxWidth: 900, margin: '0 auto' }}>
              <SectionHeader eyebrow="Frequently asked questions" title="Questions clients ask before hiring a corporate lawyer" subtitle="Practical answers to common commercial and corporate legal concerns in Delhi." />
              <div style={{ display: 'grid', gap: 12, marginTop: 44 }}>
                {page.faqs.map(([question, answer]) => (
                  <details key={question} style={{ background: 'var(--card-bg)', border: '1px solid var(--border-color)', borderRadius: 14, padding: '18px 22px' }}>
                    <summary style={{ cursor: 'pointer', fontFamily: 'var(--font-body)', fontSize: 20, color: 'var(--text-primary)', listStyle: 'none' }}>{question}</summary>
                    <p style={{ marginTop: 12, color: 'var(--text-secondary)', fontFamily: 'var(--font-body)', fontSize: 18 }}>{answer}</p>
                  </details>
                ))}
              </div>
            </div>
          </section>
        )}

        <section style={{ padding: '92px 24px', background: 'var(--bg-secondary)' }}>
          <div style={{ maxWidth: 1280, margin: '0 auto' }}>
            <SectionHeader eyebrow="Corporate law pages" title="Explore our related Delhi legal services" subtitle="Strong internal linking helps businesses find the right support for each issue they are facing." />
            <div className="responsive-grid-4" style={{ marginTop: 52 }}>
              {RELATED.map((item) => (
                <Link key={item.slug} href={`/${item.slug}`} style={{ textDecoration: 'none' }}>
                  <Card style={{ height: '100%', transition: 'transform 0.2s ease' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 10 }}>
                      <span style={{ fontSize: 26 }}>{item.icon}</span>
                      <h3 style={{ color: 'var(--text-primary)', fontSize: 18 }}>{item.label}</h3>
                    </div>
                    <p style={{ color: 'var(--text-secondary)', fontFamily: 'var(--font-body)', fontSize: 17 }}>Explore this corporate law service for practical legal guidance and next steps.</p>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section id="advocates" style={{ padding: '92px 24px', background: 'var(--bg-primary)' }}>
          <div style={{ maxWidth: 1280, margin: '0 auto' }}>
            <SectionHeader eyebrow="Delhi counsel" title="Corporate lawyers for complex business matters" subtitle="Connect with counsel whose practice aligns with the legal issues facing modern businesses and founders." />
            <div className="responsive-grid-3" style={{ marginTop: 52 }}>
              {lawyers.map((lawyer) => (
                <div key={lawyer.name} style={{ background: 'var(--card-bg)', border: '1px solid var(--border-color)', borderRadius: 16, padding: '28px 24px' }}>
                  <div style={{ display: 'flex', gap: 16, marginBottom: 20, alignItems: 'center' }}>
                    <div style={{ width: 56, height: 56, borderRadius: '50%', display: 'grid', placeItems: 'center', background: 'rgba(201,168,76,0.12)', fontSize: 26 }}>{lawyer.icon}</div>
                    <div>
                      <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: 22, color: 'var(--text-primary)' }}>{lawyer.name}</h3>
                      <p style={{ color: 'var(--gold-primary)', fontFamily: 'var(--font-body)', fontSize: 16 }}>{lawyer.specialization}</p>
                    </div>
                  </div>
                  <p style={{ color: 'var(--text-secondary)', fontFamily: 'var(--font-body)', fontSize: 18, marginBottom: 16 }}>{lawyer.bio}</p>
                  <div style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--text-meta)', fontFamily: 'var(--font-body)', fontSize: 14 }}>
                    <span>{lawyer.exp}</span>
                    <span>{lawyer.city}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <CTABanner title="Need Legal Guidance for Your Business?" description="Speak with our legal team about your corporate, commercial and contractual requirements in Delhi." />
      </main>
    </>
  );
}
