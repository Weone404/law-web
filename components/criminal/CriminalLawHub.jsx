import Link from 'next/link';
import SectionHeader from '@/components/ui/SectionHeader';
import LawyerCard from '@/components/ui/LawyerCard';
import CTABanner from '@/components/home/CTABanner';
import JsonLd from '@/components/seo/JsonLd';
import { BRAND_NAME, OFFICES, SITE_URL } from '@/lib/seo';
import { LAWYERS } from '@/lib/constants/lawyers';

const SERVICES = [
  ['📄', 'FIR & Police Investigation', 'Guidance from the moment an FIR is registered or a police notice is received, including responses to summons under Section 35/179 BNSS and representation during investigation.'],
  ['🛡️', 'Bail & Anticipatory Bail', 'Regular bail after arrest and anticipatory pre-arrest bail under Section 482 BNSS, argued before Sessions Courts and High Courts across India.'],
  ['⚖️', 'Criminal Trial Defence', 'Representation through framing of charges, cross-examination, evidence and final arguments before Magistrate and Sessions Courts.'],
  ['⬆️', 'Appeals & Revisions', 'Challenging convictions, acquittals or orders through appeal or revision before the High Court or Supreme Court.'],
  ['💼', 'Economic & White-Collar Offences', 'Defence in matters involving cheating, criminal breach of trust, forgery and financial fraud under the BNS.'],
  ['💻', 'Cyber Crime & Digital Offences', 'Representation in online fraud, hacking, identity theft and offences under the IT Act read with the BNS.'],
  ['🏛️', 'Special Statute Matters', 'Experience with NDPS Act, POCSO Act and Prevention of Corruption Act matters where procedure and bail standards differ.'],
  ['🔎', 'Quashing of FIR / Proceedings', 'Petitions under Section 528 BNSS, formerly Section 482 CrPC, before the High Court where proceedings are an abuse of process or do not disclose an offence.'],
];

const PROCESS = [
  ['Case Assessment', 'We review the FIR, notice, chargesheet or order, and assess the stage of the matter and immediate risk involved.'],
  ['Strategy & Grounds', 'Counsel identifies the applicable factual, procedural or statutory defence and the forum best suited to raise it.'],
  ['Filing & Representation', 'Applications, replies and petitions are prepared and filed, and the matter is argued before the relevant court.'],
  ['Ongoing Case Management', 'We track hearing dates, compliance requirements and next steps through to resolution.'],
  ['Appeal, if Required', 'Where an order is adverse, we assess and pursue appeal or revision options.'],
];

const CITY_LINKS = [
  ['Criminal Lawyer in Delhi', '/services/criminal-law/criminal-lawyer-delhi'],
  ['Criminal Advocate in Delhi', '/services/criminal-law/criminal-advocate-delhi'],
  ['Anticipatory Bail Advocate in Delhi', '/services/criminal-law/anticipatory-bail-advocate-delhi'],
  ['Bail Lawyer in Delhi', '/services/criminal-law/bail-lawyer-delhi'],
  ['FIR Lawyer in Delhi', '/services/criminal-law/fir-lawyer-delhi'],
];

const FAQS = [
  ['What does a criminal lawyer do?', 'A criminal lawyer advises and represents a person at every stage of a criminal matter, from responding to a police notice or FIR to seeking bail, defending at trial and filing appeals if required.'],
  ['What is the difference between the old IPC/CrPC and the new BNS/BNSS?', 'The Bharatiya Nyaya Sanhita (BNS) and Bharatiya Nagarik Suraksha Sanhita (BNSS), 2023 have replaced the Indian Penal Code and Code of Criminal Procedure, renumbering and revising several provisions, including those governing bail and anticipatory bail.'],
  ['When should I contact a criminal lawyer?', 'As early as possible, ideally as soon as you receive a police notice, learn that an FIR may be or has been registered, or are contacted by an investigating agency.'],
  ['Do you handle cases outside Delhi?', 'Yes. Our advocate network covers Delhi NCR, Mumbai, Bangalore, Chennai, Pune, Kolkata and Hyderabad, in addition to matters elsewhere in India.'],
  ['Can a criminal case be resolved without going to trial?', 'For some offences, compounding, quashing or other arrangements may be available depending on the nature of the offence and stage of the case. An advocate can assess whether an option applies.'],
];

function Card({ children, style = {} }) {
  return <div style={{ background: 'var(--card-bg)', border: '1px solid var(--border-color)', borderRadius: 16, padding: '28px 24px', ...style }}>{children}</div>;
}

export default function CriminalLawHub() {
  const lawyers = LAWYERS.filter((lawyer) => lawyer.area === 'Criminal');
  const url = `${SITE_URL}/services/criminal-law`;
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      { '@type': ['LegalService', 'Attorney'], name: `${BRAND_NAME} Criminal Law`, url, areaServed: 'India', serviceType: 'Criminal Law', telephone: OFFICES[0].phone, address: { '@type': 'PostalAddress', streetAddress: OFFICES[0].address, addressCountry: 'IN' } },
      { '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL }, { '@type': 'ListItem', position: 2, name: 'Legal Services', item: `${SITE_URL}/services` }, { '@type': 'ListItem', position: 3, name: 'Criminal Law', item: url }] },
      { '@type': 'FAQPage', mainEntity: FAQS.map(([question, answer]) => ({ '@type': 'Question', name: question, acceptedAnswer: { '@type': 'Answer', text: answer } })) },
    ],
  };

  return (
    <>
      <JsonLd data={schema} />
      <main style={{ background: 'var(--bg-primary)', color: 'var(--text-primary)' }}>
        <section style={{ background: 'var(--dark-hero)', padding: '122px 24px 76px' }}>
          <div style={{ maxWidth: 1280, margin: '0 auto' }}>
            <nav aria-label="Breadcrumb" style={{ color: 'var(--gold-light)', fontFamily: 'var(--font-body)', fontSize: 14, marginBottom: 34 }}>
              <Link href="/">Home</Link> <span aria-hidden="true"> / </span><Link href="/services"> Legal Services</Link> <span aria-hidden="true"> / Criminal Law</span>
            </nav>
            <div style={{ display: 'inline-block', border: '1px solid rgba(201,168,76,0.35)', borderRadius: 20, padding: '6px 16px', color: 'var(--gold-light)', fontFamily: 'var(--font-body)', fontSize: 12, letterSpacing: '0.18em', textTransform: 'uppercase' }}>● Criminal Law · India</div>
            <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(38px, 6vw, 72px)', lineHeight: 1.1, maxWidth: 900, margin: '24px 0 22px', color: 'var(--dark-ink)' }}>Criminal Lawyer in India — Defence, Bail &amp; Trial Representation</h1>
            <div style={{ maxWidth: 760, color: 'rgba(247,242,232,0.82)', fontFamily: 'var(--font-body)', fontSize: 20, lineHeight: 1.7, marginBottom: 34 }}>
              <p style={{ marginBottom: 14 }}>A criminal case moves fast, and the wrong step early on — an unrepresented statement, a missed bail window, a poorly drafted reply to a notice — can be difficult to undo later. Our criminal law advocates represent clients at every stage: from the first police notice or FIR, through bail and anticipatory bail, to trial, appeal and revision, across Sessions Courts, High Courts and the Supreme Court.</p>
              <p>legalgroup connects you with criminal defence advocates experienced under India&apos;s current criminal statutes — the Bharatiya Nyaya Sanhita (BNS), Bharatiya Nagarik Suraksha Sanhita (BNSS), and Bharatiya Sakshya Adhiniyam (BSA) — as well as related special laws.</p>
            </div>
            <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap', marginBottom: 62 }}><Link href="/contact" className="lex-btn lex-btn-primary" style={{ textDecoration: 'none', fontSize: 16 }}>⚖️ Book a Free Consultation</Link><Link href="/services" className="lex-btn lex-btn-outline" style={{ textDecoration: 'none', fontSize: 16 }}>📞 Talk to a Criminal Lawyer Today</Link></div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', borderTop: '1px solid rgba(201,168,76,0.2)', paddingTop: 28 }} className="stats-grid">
              {[['Legal review', 'Document-first advice'], ['Practice areas', 'Bail, trial, FIR, appeals'], ['Response', 'Initial consultation']].map(([value, label]) => <div key={label} style={{ padding: '0 16px' }}><div style={{ color: 'var(--gold-light)', fontFamily: 'var(--font-heading)', fontSize: 32, fontWeight: 800 }}>{value}</div><div style={{ color: 'rgba(247,242,232,0.7)', fontFamily: 'var(--font-body)', fontSize: 12, letterSpacing: '0.12em', textTransform: 'uppercase' }}>{label}</div></div>)}
            </div>
          </div>
        </section>

        <section style={{ padding: '92px 24px', background: 'var(--bg-secondary)' }}><div style={{ maxWidth: 1280, margin: '0 auto' }}><SectionHeader eyebrow="Our Criminal Practice" title="Criminal Law Services We Handle" subtitle="From the first police contact to appellate proceedings, our criminal defence team helps you understand the available legal route." /><div className="responsive-grid-3" style={{ marginTop: 52 }}>{SERVICES.map(([icon, title, text]) => <Card key={title}><div style={{ fontSize: 34, marginBottom: 14 }}>{icon}</div><h2 style={{ color: 'var(--text-primary)', fontSize: 20, marginBottom: 10 }}>{title}</h2><p style={{ color: 'var(--text-secondary)', fontSize: 16 }}>{text}</p></Card>)}</div></div></section>

        <section style={{ padding: '92px 24px', background: 'var(--bg-primary)' }}><div style={{ maxWidth: 1100, margin: '0 auto' }}><SectionHeader eyebrow="How We Work" title="Our Criminal Defence Process" /><div style={{ display: 'grid', gap: 16, marginTop: 52 }}>{PROCESS.map(([title, text], index) => <Card key={title} style={{ display: 'flex', gap: 20, alignItems: 'flex-start' }}><div style={{ flexShrink: 0, width: 42, height: 42, borderRadius: '50%', background: 'var(--gold-primary)', color: '#050D1A', display: 'grid', placeItems: 'center', fontFamily: 'var(--font-heading)', fontWeight: 800 }}>{index + 1}</div><div><h2 style={{ color: 'var(--text-primary)', fontSize: 20, marginBottom: 6 }}>{title}</h2><p style={{ color: 'var(--text-secondary)', fontSize: 16 }}>{text}</p></div></Card>)}</div></div></section>

        <section style={{ padding: '92px 24px', background: 'var(--bg-secondary)' }}><div style={{ maxWidth: 1100, margin: '0 auto' }}><SectionHeader eyebrow="Experience & Trust" title="Why Choose legalgroup for Criminal Law Matters" /><div className="responsive-grid-3" style={{ marginTop: 48 }}>{['Advocates with direct courtroom experience across Sessions Courts, High Courts and the Supreme Court', 'Coverage across major Indian cities — Delhi, Mumbai, Bangalore, Chennai, Pune, Kolkata and Hyderabad', 'Familiarity with India’s current criminal law framework (BNS, BNSS, BSA) alongside older IPC/CrPC precedents', 'Transparent, case-specific advice rather than generic templates'].map((item) => <Card key={item} style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}><span style={{ color: 'var(--gold-primary)', fontSize: 22 }}>✓</span><p style={{ color: 'var(--text-secondary)', fontSize: 17 }}>{item}</p></Card>)}</div></div></section>

        <section style={{ padding: '92px 24px', background: 'var(--bg-primary)' }}><div style={{ maxWidth: 1280, margin: '0 auto' }}><SectionHeader eyebrow="Our Advocates" title="Experienced Criminal Law Advocates" /><div className="responsive-grid-3" style={{ marginTop: 52 }}>{lawyers.map((lawyer) => <LawyerCard key={lawyer.name} lawyer={lawyer} headingLevel={3} />)}</div></div></section>

        <section style={{ padding: '92px 24px', background: 'var(--bg-secondary)' }}><div style={{ maxWidth: 1100, margin: '0 auto' }}><SectionHeader eyebrow="Explore by City" title="Explore Criminal Law Services by City" subtitle="Start with a focused Delhi criminal-law service or contact us about representation in another major Indian city." /><div className="responsive-grid-3" style={{ marginTop: 48 }}>{CITY_LINKS.map(([label, href]) => <Link key={href} href={href} style={{ textDecoration: 'none' }}><Card style={{ height: '100%' }}><h2 style={{ color: 'var(--text-primary)', fontSize: 19, marginBottom: 8 }}>{label}</h2><span style={{ color: 'var(--gold-primary)', fontFamily: 'var(--font-body)', fontSize: 14 }}>View service →</span></Card></Link>)}</div></div></section>

        <section style={{ padding: '92px 24px', background: 'var(--bg-primary)' }}><div style={{ maxWidth: 900, margin: '0 auto' }}><SectionHeader eyebrow="Answers" title="Frequently Asked Questions" /><div style={{ display: 'grid', gap: 12, marginTop: 44 }}>{FAQS.map(([question, answer]) => <details key={question} style={{ background: 'var(--card-bg)', border: '1px solid var(--border-color)', borderRadius: 10, padding: '18px 20px' }}><summary style={{ cursor: 'pointer', color: 'var(--text-primary)', fontFamily: 'var(--font-heading)', fontSize: 18, fontWeight: 700 }}>{question}</summary><p style={{ color: 'var(--text-secondary)', fontSize: 16, marginTop: 14 }}>{answer}</p></details>)}</div></div></section>
      </main>
      <CTABanner title="Need a Criminal Lawyer in India?" description="Speak with an experienced criminal defence advocate about your case, the forum and the options available to you." />
    </>
  );
}
