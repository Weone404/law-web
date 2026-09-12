import Link from 'next/link';
import SectionHeader from '@/components/ui/SectionHeader';
import LawyerCard from '@/components/ui/LawyerCard';
import CTABanner from '@/components/home/CTABanner';
import JsonLd from '@/components/seo/JsonLd';
import { BRAND_NAME, OFFICES, SITE_URL } from '@/lib/seo';
import { LAWYERS } from '@/lib/constants/lawyers';

const STATS = [
  { value: '2,400+', label: 'Cases Won' },
  { value: '15+', label: 'Years Experience' },
  { value: '98%', label: 'Client Satisfaction' },
];

const RELATED = [
  { slug: 'criminal-lawyer-delhi', label: 'Criminal Lawyer Delhi', icon: '⚖️' },
  { slug: 'criminal-advocate-delhi', label: 'Criminal Advocate Delhi', icon: '🏛️' },
  { slug: 'bail-lawyer-delhi', label: 'Bail Lawyer Delhi', icon: '🛡️' },
  { slug: 'fir-lawyer-delhi', label: 'FIR Lawyer Delhi', icon: '📄' },
  { slug: 'anticipatory-bail-advocate-delhi', label: 'Anticipatory Bail Advocate Delhi', icon: '🔒' },
];

function Card({ children, style = {} }) {
  return (
    <div style={{
      background: 'var(--card-bg)',
      border: '1px solid var(--border-color)',
      borderRadius: 16,
      padding: '28px 24px',
      ...style,
    }}>
      {children}
    </div>
  );
}

export default function DelhiCriminalLanding({ page }) {
  const lawyers = LAWYERS.filter((lawyer) => lawyer.area === 'Criminal').slice(0, 3);
  const url = `${SITE_URL}${page.path}`;
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': ['LegalService', 'Attorney'],
        name: `${BRAND_NAME} - ${page.title}`,
        url,
        areaServed: 'Delhi',
        serviceType: page.title,
        telephone: OFFICES[0].phone,
        address: { '@type': 'PostalAddress', streetAddress: OFFICES[0].address, addressLocality: 'New Delhi', addressCountry: 'IN' },
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
          { '@type': 'ListItem', position: 2, name: 'Legal Services', item: `${SITE_URL}/services` },
          { '@type': 'ListItem', position: 3, name: 'Criminal Law', item: `${SITE_URL}/services/criminal-law` },
          { '@type': 'ListItem', position: 4, name: page.title, item: url },
        ],
      },
      {
        '@type': 'FAQPage',
        mainEntity: page.faqs.map((faq) => ({
          '@type': 'Question',
          name: faq.question,
          acceptedAnswer: { '@type': 'Answer', text: faq.answer },
        })),
      },
    ],
  };

  return (
    <>
      <JsonLd data={schema} />
      <main style={{ background: 'var(--bg-primary)', color: 'var(--text-primary)' }}>
        <section style={{ background: 'var(--dark-hero)', padding: '122px 24px 76px' }}>
          <div style={{ maxWidth: 1280, margin: '0 auto' }}>
            <nav aria-label="Breadcrumb" style={{ color: 'var(--gold-light)', fontFamily: 'var(--font-body)', fontSize: 14, marginBottom: 34 }}>
              <Link href="/">Home</Link> <span aria-hidden="true"> / </span>
              <Link href="/services">Legal Services</Link> <span aria-hidden="true"> / </span>
              <Link href="/services/criminal-law">Criminal Law</Link> <span aria-hidden="true"> / </span>
              <span>{page.title}</span>
            </nav>
            <div style={{ display: 'inline-block', border: '1px solid rgba(201,168,76,0.35)', borderRadius: 20, padding: '6px 16px', color: 'var(--gold-light)', fontFamily: 'var(--font-body)', fontSize: 12, letterSpacing: '0.18em', textTransform: 'uppercase' }}>● Criminal Law · Delhi NCR</div>
            <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(38px, 6vw, 72px)', lineHeight: 1.1, maxWidth: 850, margin: '24px 0 22px', color: 'var(--dark-ink)' }}>{page.h1}</h1>
            <div style={{ maxWidth: 720, color: 'rgba(247,242,232,0.82)', fontFamily: 'var(--font-body)', fontSize: 20, lineHeight: 1.7, marginBottom: 34 }}>
              {(Array.isArray(page.hero) ? page.hero : [page.hero]).map((paragraph) => <p key={paragraph} style={{ marginBottom: 14 }}>{paragraph}</p>)}
            </div>
            <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap', marginBottom: 62 }}>
              <Link href="/contact" className="lex-btn lex-btn-primary" style={{ textDecoration: 'none', fontSize: 16 }}>📞 Book Free Consultation</Link>
              <a href="#advocates" className="lex-btn lex-btn-outline" style={{ textDecoration: 'none', fontSize: 16 }}>⚖️ View Delhi Advocates</a>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', borderTop: '1px solid rgba(201,168,76,0.2)', paddingTop: 28 }} className="stats-grid">
              {STATS.map((stat) => <div key={stat.label} style={{ padding: '0 16px' }}><div style={{ color: 'var(--gold-light)', fontFamily: 'var(--font-heading)', fontSize: 32, fontWeight: 800 }}>{stat.value}</div><div style={{ color: 'rgba(247,242,232,0.7)', fontFamily: 'var(--font-body)', fontSize: 12, letterSpacing: '0.12em', textTransform: 'uppercase' }}>{stat.label}</div></div>)}
            </div>
          </div>
        </section>

        <section style={{ padding: '92px 24px', background: 'var(--bg-secondary)' }}>
          <div style={{ maxWidth: 1280, margin: '0 auto' }}>
            <SectionHeader eyebrow="Your Situation" title={page.scenarioTitle} subtitle={page.scenarioIntro} />
            <div className="responsive-grid-3" style={{ marginTop: 52 }}>
              {page.scenarios.map((scenario) => <Card key={scenario.title}><div style={{ fontSize: 34, marginBottom: 14 }}>{scenario.icon}</div><h3 style={{ color: 'var(--text-primary)', fontSize: 21, marginBottom: 10 }}>{scenario.title}</h3><p style={{ color: 'var(--text-secondary)', fontSize: 16 }}>{scenario.text}</p></Card>)}
            </div>
          </div>
        </section>

        <section style={{ padding: '92px 24px', background: 'var(--bg-primary)' }}>
          <div style={{ maxWidth: 1100, margin: '0 auto' }}>
            <SectionHeader eyebrow="How We Help" title="Our Process" subtitle={page.processIntro} />
            <div style={{ display: 'grid', gap: 16, marginTop: 52 }}>
              {page.process.map((step, index) => <Card key={step.title} style={{ display: 'flex', gap: 20, alignItems: 'flex-start' }}><div style={{ flexShrink: 0, width: 42, height: 42, borderRadius: '50%', background: 'var(--gold-primary)', color: '#050D1A', display: 'grid', placeItems: 'center', fontFamily: 'var(--font-heading)', fontWeight: 800 }}>{index + 1}</div><div><h3 style={{ color: 'var(--text-primary)', fontSize: 20, marginBottom: 6 }}>{step.title}</h3><p style={{ color: 'var(--text-secondary)', fontSize: 16 }}>{step.text}</p></div></Card>)}
            </div>
          </div>
        </section>

        <section id="advocates" style={{ padding: '92px 24px', background: 'var(--bg-secondary)' }}>
          <div style={{ maxWidth: 1280, margin: '0 auto' }}>
            <SectionHeader eyebrow="Delhi Counsel" title="Delhi Advocates for This Matter" subtitle="Connect with criminal-law counsel whose existing practice and court experience match your matter." />
            <div className="responsive-grid-3" style={{ marginTop: 52 }}>{lawyers.map((lawyer) => <LawyerCard key={lawyer.name} lawyer={lawyer} headingLevel={3} />)}</div>
          </div>
        </section>

        {page.caseTypes && (
          <section style={{ padding: '92px 24px', background: 'var(--bg-primary)' }}>
            <div style={{ maxWidth: 1100, margin: '0 auto' }}>
              <SectionHeader eyebrow={page.caseTypes.eyebrow} title={page.caseTypes.title} />
              <div className="responsive-grid-3" style={{ marginTop: 48 }}>
                {page.caseTypes.items.map((item) => <Card key={item} style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}><span style={{ color: 'var(--gold-primary)', fontSize: 22 }}>✓</span><p style={{ color: 'var(--text-secondary)', fontSize: 17 }}>{item}</p></Card>)}
              </div>
            </div>
          </section>
        )}

        {page.courts && (
          <section style={{ padding: '92px 24px', background: 'var(--bg-secondary)' }}>
            <div style={{ maxWidth: 1100, margin: '0 auto' }}>
              <SectionHeader eyebrow={page.courts.eyebrow} title={page.courts.title} subtitle={page.courts.intro} />
              <div className="responsive-grid-3" style={{ marginTop: 48 }}>
                {page.courts.items.map((item) => <Card key={item}><h3 style={{ color: 'var(--text-primary)', fontSize: 19 }}>{item}</h3></Card>)}
              </div>
            </div>
          </section>
        )}

        {page.actionSteps && (
          <section style={{ padding: '92px 24px', background: 'var(--bg-primary)' }}>
            <div style={{ maxWidth: 1100, margin: '0 auto' }}>
              <SectionHeader eyebrow={page.actionSteps.eyebrow} title={page.actionSteps.title} subtitle={page.actionSteps.intro} />
              <div style={{ display: 'grid', gap: 16, marginTop: 48 }}>
                {page.actionSteps.items.map((item, index) => <Card key={item.title} style={{ display: 'flex', gap: 20, alignItems: 'flex-start' }}><div style={{ flexShrink: 0, width: 42, height: 42, borderRadius: '50%', background: 'var(--gold-primary)', color: '#050D1A', display: 'grid', placeItems: 'center', fontFamily: 'var(--font-heading)', fontWeight: 800 }}>{index + 1}</div><div><h3 style={{ color: 'var(--text-primary)', fontSize: 20, marginBottom: 6 }}>{item.title}</h3><p style={{ color: 'var(--text-secondary)', fontSize: 16 }}>{item.text}</p></div></Card>)}
              </div>
            </div>
          </section>
        )}

        {page.quashing && (
          <section style={{ padding: '92px 24px', background: 'var(--bg-secondary)' }}>
            <div style={{ maxWidth: 1000, margin: '0 auto' }}>
              <SectionHeader eyebrow={page.quashing.eyebrow} title={page.quashing.title} subtitle={page.quashing.intro} />
              <div className="responsive-grid-3" style={{ marginTop: 48 }}>
                {page.quashing.items.map((item) => <Card key={item} style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}><span style={{ color: 'var(--gold-primary)', fontSize: 22 }}>✓</span><p style={{ color: 'var(--text-secondary)', fontSize: 17 }}>{item}</p></Card>)}
              </div>
              <p style={{ color: 'var(--text-secondary)', fontFamily: 'var(--font-body)', fontSize: 17, lineHeight: 1.7, marginTop: 28 }}>{page.quashing.note}</p>
            </div>
          </section>
        )}

        {page.whyChoose && (
          <section style={{ padding: '92px 24px', background: 'var(--bg-primary)' }}>
            <div style={{ maxWidth: 1100, margin: '0 auto' }}>
              <SectionHeader eyebrow={page.whyChoose.eyebrow} title={page.whyChoose.title} />
              <div className="responsive-grid-3" style={{ marginTop: 48 }}>
                {page.whyChoose.items.map((item) => <Card key={item} style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}><span style={{ color: 'var(--gold-primary)', fontSize: 22 }}>✓</span><p style={{ color: 'var(--text-secondary)', fontSize: 17 }}>{item}</p></Card>)}
              </div>
            </div>
          </section>
        )}

        {page.comparison && (
          <section style={{ padding: '92px 24px', background: 'var(--bg-secondary)' }}>
            <div style={{ maxWidth: 900, margin: '0 auto' }}>
              <SectionHeader eyebrow={page.comparison.eyebrow} title={page.comparison.title} />
              <Card style={{ marginTop: 44 }}>
                {page.comparison.paragraphs.map((paragraph) => <p key={paragraph} style={{ color: 'var(--text-secondary)', fontSize: 18, marginBottom: 16 }}>{paragraph}</p>)}
              </Card>
            </div>
          </section>
        )}

        <section style={{ padding: '92px 24px', background: 'var(--bg-primary)' }}>
          <div style={{ maxWidth: 900, margin: '0 auto' }}>
            <SectionHeader eyebrow="Answers" title="Frequently Asked Questions" subtitle="Clear answers to common questions about this Delhi criminal-law service." />
            <div style={{ display: 'grid', gap: 12, marginTop: 44 }}>{page.faqs.map((faq) => <details key={faq.question} style={{ background: 'var(--card-bg)', border: '1px solid var(--border-color)', borderRadius: 10, padding: '18px 20px' }}><summary style={{ cursor: 'pointer', color: 'var(--text-primary)', fontFamily: 'var(--font-heading)', fontSize: 18, fontWeight: 700 }}>{faq.question}</summary><p style={{ color: 'var(--text-secondary)', fontSize: 16, marginTop: 14 }}>{faq.answer}</p></details>)}</div>
          </div>
        </section>

        <section style={{ padding: '92px 24px', background: 'var(--bg-secondary)' }}>
          <div style={{ maxWidth: 1280, margin: '0 auto' }}>
            <SectionHeader eyebrow="Explore Criminal Law" title="Related Delhi Services" subtitle="Choose the page that best matches the next step in your matter." />
            <div className="responsive-grid-3" style={{ marginTop: 48 }}>{RELATED.filter((item) => item.slug !== page.slug).map((item) => <Link key={item.slug} href={`/services/criminal-law/${item.slug}`} style={{ textDecoration: 'none' }}><Card style={{ height: '100%' }}><div style={{ fontSize: 30, marginBottom: 12 }}>{item.icon}</div><h3 style={{ color: 'var(--text-primary)', fontSize: 19, marginBottom: 8 }}>{item.label}</h3><span style={{ color: 'var(--gold-primary)', fontFamily: 'var(--font-body)', fontSize: 14 }}>Learn more →</span></Card></Link>)}<Link href="/services/criminal-law" style={{ textDecoration: 'none' }}><Card style={{ height: '100%' }}><div style={{ fontSize: 30, marginBottom: 12 }}>⚖️</div><h3 style={{ color: 'var(--text-primary)', fontSize: 19, marginBottom: 8 }}>Criminal Law Overview</h3><span style={{ color: 'var(--gold-primary)', fontFamily: 'var(--font-body)', fontSize: 14 }}>View main service →</span></Card></Link></div>
          </div>
        </section>
      </main>
      <CTABanner title={page.ctaTitle} description={page.ctaDescription} />
    </>
  );
}
