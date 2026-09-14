import Link from 'next/link';
import SectionHeader from '@/components/ui/SectionHeader';
import LawyerCard from '@/components/ui/LawyerCard';
import CTABanner from '@/components/home/CTABanner';
import JsonLd from '@/components/seo/JsonLd';
import FamilyMarkdownContent from '@/components/family/FamilyMarkdownContent';
import { FAMILY_LAW_PAGES } from '@/lib/constants/familyLawPages';
import { LAWYERS } from '@/lib/constants/lawyers';
import { SITE_URL, BRAND_NAME, OFFICES } from '@/lib/seo';

const RELATED = [
  { slug: 'divorce-lawyer-delhi', label: 'Divorce Lawyer Delhi', icon: '⚖️' },
  { slug: 'mutual-divorce-lawyer-delhi', label: 'Mutual Divorce Lawyer Delhi', icon: '🤝' },
  { slug: 'child-custody-lawyer-delhi', label: 'Child Custody Lawyer Delhi', icon: '👨‍👩‍👧' },
  { slug: 'maintenance-lawyer-delhi', label: 'Maintenance Lawyer Delhi', icon: '💼' },
  { slug: 'domestic-violence-lawyer-delhi', label: 'Domestic Violence Lawyer Delhi', icon: '🛡️' },
];

function Card({ children, style = {} }) {
  return <div style={{ background: 'var(--card-bg)', border: '1px solid var(--border-color)', borderRadius: 16, padding: '28px 24px', ...style }}>{children}</div>;
}

export default function FamilyLawLanding({ page, basePath = '/services/family-law' }) {
  const lawyers = LAWYERS.filter((lawyer) => lawyer.area === 'Family').slice(0, 3);
  const isOverview = page.slug === 'family-law';
  const resolvedBasePath = page.path && page.path.startsWith('/family-law') ? '/family-law' : basePath;
  const detailPath = page.path || `${resolvedBasePath}/${page.slug}`;
  const url = `${SITE_URL}${detailPath}`;
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      { '@type': ['LegalService', 'Attorney'], name: `${BRAND_NAME} - ${page.title}`, url, areaServed: 'Delhi', serviceType: page.title, telephone: OFFICES[0].phone, address: { '@type': 'PostalAddress', streetAddress: OFFICES[0].address, addressLocality: 'New Delhi', addressCountry: 'IN' } },
      { '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL }, { '@type': 'ListItem', position: 2, name: 'Legal Services', item: `${SITE_URL}/services` }, { '@type': 'ListItem', position: 3, name: 'Family Law', item: `${SITE_URL}${resolvedBasePath}` }, ...(isOverview ? [] : [{ '@type': 'ListItem', position: 4, name: page.title, item: url }]) ] },
      ...(!isOverview && page.faqs ? [{ '@type': 'FAQPage', mainEntity: page.faqs.map(([question, answer]) => ({ '@type': 'Question', name: question, acceptedAnswer: { '@type': 'Answer', text: answer } })) }] : []),
    ],
  };
  const situations = page.reasons.map(([icon, title, text]) => ({ icon, title, text }));

  return <>
    <JsonLd data={schema} />
    <main style={{ background: 'var(--bg-primary)', color: 'var(--text-primary)' }}>
      <section style={{ background: 'var(--dark-hero)', padding: '122px 24px 76px' }}><div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <nav aria-label="Breadcrumb" style={{ color: 'var(--gold-light)', fontFamily: 'var(--font-body)', fontSize: 14, marginBottom: 34 }}><Link href="/">Home</Link> <span aria-hidden="true"> / </span><Link href="/services">Legal Services</Link> <span aria-hidden="true"> / </span>{isOverview ? <span>Family Law</span> : <><Link href={resolvedBasePath}>Family Law</Link> <span aria-hidden="true"> / </span><span>{page.title}</span></>}</nav>
        <div style={{ display: 'inline-block', border: '1px solid rgba(201,168,76,0.35)', borderRadius: 20, padding: '6px 16px', color: 'var(--gold-light)', fontFamily: 'var(--font-body)', fontSize: 12, letterSpacing: '0.18em', textTransform: 'uppercase' }}>● Family Law · {isOverview ? 'India' : 'Delhi NCR'}</div>
        <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(38px, 6vw, 72px)', lineHeight: 1.1, maxWidth: 850, margin: '24px 0 22px', color: 'var(--dark-ink)' }}>{page.title}</h1>
        <div style={{ maxWidth: 720, color: 'rgba(247,242,232,0.82)', fontFamily: 'var(--font-body)', fontSize: 20, lineHeight: 1.7, marginBottom: 34 }}><p>{page.subtitle}</p></div>
        <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap', marginBottom: 62 }}><Link href="/contact" className="lex-btn lex-btn-primary" style={{ textDecoration: 'none', fontSize: 16 }}>📞 Book Free Consultation</Link><a href="#advocates" className="lex-btn lex-btn-outline" style={{ textDecoration: 'none', fontSize: 16 }}>⚖️ View Delhi Advocates</a></div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', borderTop: '1px solid rgba(201,168,76,0.2)', paddingTop: 28 }} className="stats-grid">{page.stats.slice(0, 3).map(([value, label]) => <div key={label} style={{ padding: '0 16px' }}><div style={{ color: 'var(--gold-light)', fontFamily: 'var(--font-heading)', fontSize: 32, fontWeight: 800 }}>{value}</div><div style={{ color: 'rgba(247,242,232,0.7)', fontFamily: 'var(--font-body)', fontSize: 12, letterSpacing: '0.12em', textTransform: 'uppercase' }}>{label}</div></div>)}</div>
      </div></section>

      <section style={{ padding: '92px 24px', background: 'var(--bg-secondary)' }}><div style={{ maxWidth: 1280, margin: '0 auto' }}><SectionHeader eyebrow="Your Situation" title={`When You Need a ${page.shortTitle} Lawyer in Delhi`} subtitle="Early, practical advice can protect your position and clarify the next step." /><div className="responsive-grid-3" style={{ marginTop: 52 }}>{situations.map((item) => <Card key={item.title}><div style={{ fontSize: 34, marginBottom: 14 }}>{item.icon}</div><h3 style={{ color: 'var(--text-primary)', fontSize: 21, marginBottom: 10 }}>{item.title}</h3><p style={{ color: 'var(--text-secondary)', fontSize: 16 }}>{item.text}</p></Card>)}</div></div></section>

      <section style={{ padding: '92px 24px', background: 'var(--bg-primary)' }}><div style={{ maxWidth: 1100, margin: '0 auto' }}><SectionHeader eyebrow="How We Help" title="Our Process" subtitle="We keep the wider family-law strategy visible while responding to the immediate need." /><div style={{ display: 'grid', gap: 16, marginTop: 52 }}>{page.steps.map(([number, title, text]) => <Card key={title} style={{ display: 'flex', gap: 20, alignItems: 'flex-start' }}><div style={{ flexShrink: 0, width: 42, height: 42, borderRadius: '50%', background: 'var(--gold-primary)', color: '#050D1A', display: 'grid', placeItems: 'center', fontFamily: 'var(--font-heading)', fontWeight: 800 }}>{number}</div><div><h3 style={{ color: 'var(--text-primary)', fontSize: 20, marginBottom: 6 }}>{title}</h3><p style={{ color: 'var(--text-secondary)', fontSize: 16 }}>{text}</p></div></Card>)}</div></div></section>

      <section style={{ padding: '92px 24px', background: 'var(--bg-secondary)' }}><div style={{ maxWidth: 900, margin: '0 auto' }}><SectionHeader eyebrow="Delhi Family Law Guide" title={page.explainerTitle} subtitle="Understand the legal framework, local courts and practical considerations before you decide how to proceed." /><Card style={{ marginTop: 44, padding: '10px 28px' }}><FamilyMarkdownContent slug={page.slug} /></Card></div></section>

      <section id="advocates" style={{ padding: '92px 24px', background: 'var(--bg-primary)' }}><div style={{ maxWidth: 1280, margin: '0 auto' }}><SectionHeader eyebrow="Delhi Counsel" title="Delhi Advocates for This Matter" subtitle="Connect with family-law counsel whose existing practice and court experience match your matter." /><div className="responsive-grid-3" style={{ marginTop: 52 }}>{lawyers.map((lawyer) => <LawyerCard key={lawyer.name} lawyer={lawyer} headingLevel={3} />)}</div></div></section>

      {!isOverview && <section style={{ padding: '92px 24px', background: 'var(--bg-secondary)' }}><div style={{ maxWidth: 900, margin: '0 auto' }}><SectionHeader eyebrow="Answers" title="Frequently Asked Questions" subtitle={`Clear answers to common questions about this Delhi ${page.shortTitle.toLowerCase()} service.`} /><div style={{ display: 'grid', gap: 12, marginTop: 44 }}>{page.faqs.map(([question, answer]) => <details key={question} style={{ background: 'var(--card-bg)', border: '1px solid var(--border-color)', borderRadius: 10, padding: '18px 20px' }}><summary style={{ cursor: 'pointer', color: 'var(--text-primary)', fontFamily: 'var(--font-heading)', fontSize: 18, fontWeight: 700 }}>{question}</summary><p style={{ color: 'var(--text-secondary)', fontSize: 16, marginTop: 14 }}>{answer}</p></details>)}</div></div></section>}

      <section style={{ padding: '92px 24px', background: 'var(--bg-primary)' }}><div style={{ maxWidth: 1280, margin: '0 auto' }}><SectionHeader eyebrow="Explore Family Law" title="Related Delhi Services" subtitle="Choose the page that best matches the next step in your matter." /><div className="responsive-grid-3" style={{ marginTop: 48 }}>{RELATED.filter((item) => item.slug !== page.slug).map((item) => <Link key={item.slug} href={`${resolvedBasePath}/${item.slug}`} style={{ textDecoration: 'none' }}><Card style={{ height: '100%' }}><div style={{ fontSize: 30, marginBottom: 12 }}>{item.icon}</div><h3 style={{ color: 'var(--text-primary)', fontSize: 19, marginBottom: 8 }}>{item.label}</h3><span style={{ color: 'var(--gold-primary)', fontFamily: 'var(--font-body)', fontSize: 14 }}>Learn more →</span></Card></Link>)}{!isOverview && <Link href={resolvedBasePath} style={{ textDecoration: 'none' }}><Card style={{ height: '100%' }}><div style={{ fontSize: 30, marginBottom: 12 }}>👨‍👩‍👧</div><h3 style={{ color: 'var(--text-primary)', fontSize: 19, marginBottom: 8 }}>Family Law Overview</h3><span style={{ color: 'var(--gold-primary)', fontFamily: 'var(--font-body)', fontSize: 14 }}>View main service →</span></Card></Link>}</div></div></section>
    </main>
    <CTABanner title={`Need a ${page.shortTitle.toLowerCase()} lawyer in Delhi?`} description="Share the essentials of your matter with our family-law team and identify the next practical step." />
    <style>{`.family-source-content{padding:28px 0;color:var(--text-secondary);font:18px/1.8 var(--font-body)}.family-source-content h1{font-size:clamp(30px,5vw,50px);color:var(--text-primary);margin-bottom:18px}.family-source-content h2{font-size:clamp(25px,4vw,36px);color:var(--text-primary);margin:38px 0 14px}.family-source-content p{margin:0 0 18px}.family-source-content ul,.family-source-content ol{padding-left:26px;margin:0 0 22px}.family-source-content li{padding:4px 0}.family-source-content a{color:var(--gold-primary);text-decoration:underline}.family-source-content strong{color:var(--text-primary)}`}</style>
  </>;
}
