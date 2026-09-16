import Link from 'next/link';
import { notFound } from 'next/navigation';
import LawyerCard from '@/components/ui/LawyerCard';
import JsonLd from '@/components/seo/JsonLd';
import { SITE_URL, BRAND_NAME, createMetadata, OFFICES } from '@/lib/seo';
import { PRACTICE_AREAS } from '@/lib/constants/seoLandingPages';
import { CITIES } from '@/lib/constants/seoLandingPages';
import { LAWYERS } from '@/lib/constants/lawyers';
import CriminalLawHub from '@/components/criminal/CriminalLawHub';

const SERVICE_CONTENT = {
  'criminal-law': {
    intro: 'Criminal law matters can move quickly, and strong legal advice early can protect your rights at every stage of investigation, bail, trial, and appeal.',
    sections: [
      { heading: 'When criminal legal help is needed', body: 'People usually seek criminal defence services when they are facing an FIR, a police investigation, a charge sheet, bail concerns, or a court summons. Early legal advice can help clarify what facts matter most and how to respond without creating unnecessary risk.' },
      { heading: 'Common criminal matters', body: 'Typical criminal matters include bail applications, anticipatory bail, trial representation, appeal work, investigation support, and defence against allegations involving property, personal injury, or financial disputes.' },
      { heading: 'How the process usually works', body: 'A criminal matter may begin with an FIR, proceed through investigation, and then move to charge framing, hearings, and trial. A lawyer helps review the material, prepare legal arguments, and advise on the best next steps for the client.' },
    ],
    faqs: [
      { q: 'What should I do if I receive a police notice?', a: 'Do not ignore it. Gather the relevant documents, note deadlines, and speak with a criminal lawyer promptly so the response is accurate and legally sound.' },
      { q: 'Is anticipatory bail always available?', a: 'No. Courts consider the facts, the allegation, and the risk of arrest before granting protection, so legal advice is important before making an application.' },
    ],
    relatedLink: '/blogs/what-is-anticipatory-bail',
  },
  'family-law': {
    intro: 'Family law matters often involve emotional strain, financial issues, and long-term consequences, which is why clear legal guidance matters from the start.',
    sections: [
      { heading: 'Family disputes commonly involve', body: 'Divorce, separation, child custody, maintenance, domestic rights, inheritance-related family conflicts, and mediation. Each matter can involve both legal and practical considerations that need careful review.' },
      { heading: 'Why early legal advice helps', body: 'A lawyer can help clarify the issues, document the facts, and prepare for negotiation or court process before positions harden. This is especially important when children, property, or long-term financial arrangements are involved.' },
      { heading: 'How family matters are usually handled', body: 'Many family disputes begin with documentation, settlement discussions, and mediation. If agreement is not possible, the matter may need formal legal steps before the appropriate forum.' },
    ],
    faqs: [
      { q: 'Can family disputes be settled outside court?', a: 'Yes. Many matters are resolved through negotiation or mediation, but the legal position still needs to be checked before finalising any settlement.' },
      { q: 'What documents matter most?', a: 'Marriage records, financial documents, communication records, property documents, and evidence about living arrangements frequently matter in family disputes.' },
    ],
    relatedLink: '/blogs/how-does-mutual-consent-divorce-work-in-india',
  },
  'property-law': {
    intro: 'Property disputes often turn on documentation, possession, title history, and timelines. A careful review early can prevent costly and time-consuming disputes later.',
    sections: [
      { heading: 'Common property issues', body: 'These may involve title disputes, inheritance conflicts, sale agreements, possession claims, land records, developer delays, or disputes related to registration and compliance.' },
      { heading: 'Document review matters', body: 'A clear chain of title, a review of the property documents, and an understanding of the legal process can materially improve the chances of a practical resolution.' },
      { heading: 'When to involve a lawyer', body: 'Legal advice is often important before signing documents, before filing a claim, or when a dispute involves multiple claimants, developer timelines, or clearly disputed ownership.' },
    ],
    faqs: [
      { q: 'How do I know whether my title is clear?', a: 'A review of the chain of title, registration records, and the relevant property records is the correct first step before drawing conclusions.' },
      { q: 'Can property disputes be resolved without litigation?', a: 'Often yes, but the legal position must still be checked before any agreement is finalised or accepted.' },
    ],
    relatedLink: '/blogs/what-is-rera',
  },
  'corporate-law': {
    intro: 'Corporate legal advice helps founders, businesses, and investors protect contracts, compliance, risk exposure, and commercial decisions from the start.',
    sections: [
      { heading: 'Corporate matters often include', body: 'Company formation, shareholder arrangements, commercial contracts, governance reviews, regulatory compliance, and dispute management in business relationships.' },
      { heading: 'Why legal review matters', body: 'A clear contract, proper documentation, and early legal review can protect the business from avoidable disputes or regulatory risk.' },
      { heading: 'When to consult a lawyer', body: 'Before entering an agreement, restructuring a company, resolving a dispute, or facing a compliance issue, legal advice should be obtained early to avoid preventable harm.' },
    ],
    faqs: [
      { q: 'Do I need legal advice before signing business contracts?', a: 'In most cases, yes. A review of key terms, obligations, and risks can reduce the chance of future disputes or losses.' },
      { q: 'What is usually reviewed in a corporate matter?', a: 'Contracts, regulatory exposure, governance documents, shareholder rights, and commercial liabilities are commonly reviewed.' },
    ],
    relatedLink: '/blogs/what-is-a-civil-suit',
  },
  'civil-law': {
    intro: 'Civil disputes often involve contracts, recoveries, damages, injunctions, or disagreements that require a careful legal strategy and proper documentation.',
    sections: [
      { heading: 'Common civil litigation issues', body: 'Civil matters may include contract enforcement, recovery claims, injunctions, business disputes, property-related disputes, and claims based on a written or oral agreement.' },
      { heading: 'Documents are usually central', body: 'Invoices, contracts, notices, payment records, and communication logs often shape the legal position. A clear record makes the case stronger and helps narrow the issues.' },
      { heading: 'When a lawyer becomes important', body: 'If a notice has been received, a claim is threatened, or the dispute involves significant money or business impact, legal guidance is often essential before steps are taken.' },
    ],
    faqs: [
      { q: 'What is the difference between civil and criminal matters?', a: 'Civil matters generally concern private rights and remedies, while criminal matters involve allegations that the state treats as public wrongs under criminal process.' },
      { q: 'Can I still negotiate after a dispute starts?', a: 'Yes. Many civil disputes are resolved through negotiation, settlement, or mediation before trial begins.' },
    ],
    relatedLink: '/blogs/how-to-respond-to-a-legal-notice',
  },
  'constitutional-law': {
    intro: 'Constitutional law matters often involve public authority, fundamental rights, procedural fairness, and the review of official action under the Constitution.',
    sections: [
      { heading: 'Typical constitutional matters', body: 'This can include writ petitions, challenges to executive action, enforcement of fundamental rights, and disputes involving processes that may be arbitrary or unlawful.' },
      { heading: 'Why these matters are sensitive', body: 'Constitutional issues can affect liberty, equality, administrative fairness, and the legality of state action, so they require careful legal drafting and factual clarity.' },
      { heading: 'When to seek help', body: 'If a public authority has acted beyond its powers, ignored a legal duty, or affected your rights, a constitutional lawyer can assess whether judicial review or another legal remedy is available.' },
    ],
    faqs: [
      { q: 'What is a writ petition?', a: 'A writ is a court remedy used to enforce rights or review the legality of public action, especially where fundamental rights or the scope of public power are involved.' },
      { q: 'Who can approach a constitutional court?', a: 'A person whose rights are affected or who has a legal basis to challenge the action may be able to approach the relevant court, depending on the facts.' },
    ],
    relatedLink: '/blogs/what-is-a-writ-petition',
  },
  'consumer-law': {
    intro: 'Consumer disputes often involve defective goods, poor service, hidden terms, or unfair treatment that affects your rights as a buyer or service user.',
    sections: [
      { heading: 'Common consumer issues', body: 'Refund disputes, poor service quality, product defects, misleading claims, delayed deliveries, and compensation for unfair treatment are common grounds for complaint.' },
      { heading: 'How to approach a claim', body: 'The first step is usually to gather receipts, bookings, contracts, communication, and evidence of losses or defects. That enables a clear complaint and helps narrow the remedy being sought.' },
      { heading: 'When legal assistance helps', body: 'If the issue is large, complex, or involves repeated non-compliance, legal advice can improve the quality of the complaint and the likelihood of an effective remedy.' },
    ],
    faqs: [
      { q: 'Can I file a complaint without a lawyer?', a: 'Yes. Many consumer complaints are filed by the consumer themselves, but a lawyer can help with complex or high-value claims.' },
      { q: 'What evidence should I keep?', a: 'Bills, receipts, email trails, service agreements, complaints, and proof of the loss or defect are very important.' },
    ],
    relatedLink: '/blogs/how-to-file-a-consumer-complaint-in-india',
  },
  'cyber-law': {
    intro: 'Cyber law matters can involve online fraud, privacy issues, digital disputes, and technology-related risks that need careful documentation and a clear legal review.',
    sections: [
      { heading: 'Areas commonly covered', body: 'These matters may involve privacy concerns, online defamation, financial fraud, data misuse, and disputes arising from digital transactions or online platforms.' },
      { heading: 'Why evidence matters', body: 'Screenshots, timestamps, digital records, transaction history, and message logs often form the core of a cyber matter. These records help establish what happened and what remedy is sought.' },
      { heading: 'When to act quickly', body: 'If there is ongoing misuse, a threatened legal claim, or a digital breach, early legal response can help contain the issue and preserve evidence.' },
    ],
    faqs: [
      { q: 'Can I report online fraud?', a: 'Yes, and the right legal route depends on the type of fraud, the platform, and the evidence available. Early review is helpful.' },
      { q: 'What records should I keep?', a: 'Screenshots, payment records, account activity, and the communication trail are often crucial in technology-related disputes.' },
    ],
    relatedLink: '/blogs/how-to-respond-to-a-legal-notice',
  },
  'tax-law': {
    intro: 'Tax disputes often involve records, compliance history, assessment notices, and complex procedural steps. A careful review is important before responding to authorities.',
    sections: [
      { heading: 'Typical tax issues', body: 'Tax matters may involve assessment disputes, scrutiny notices, GST issues, compliance questions, and appeals against demands or adverse orders.' },
      { heading: 'Why documentation matters', body: 'Invoices, filings, notices, correspondence, and prior assessments often determine the legal position. Correct records help narrow the real issues and support the response.' },
      { heading: 'When legal advice helps', body: 'If a notice demands payment, flags possible non-compliance, or raises a procedural question, a lawyer can help assess the legal basis and the next steps.' },
    ],
    faqs: [
      { q: 'Do I need a lawyer for a tax notice?', a: 'Not always, but it is often wise to get legal guidance if the issue is significant, a notice is detailed, or time is limited.' },
      { q: 'What should I keep in a tax dispute?', a: 'All notices, filings, correspondence, payment records, and supporting documents are important to review before responding.' },
    ],
    relatedLink: '/blogs/what-is-a-civil-suit',
  },
};

export const dynamicParams = false;

export function generateStaticParams() {
  return [
    ...PRACTICE_AREAS.map(({ slug }) => ({ slug })),
    ...CITIES.map(({ slug }) => ({ slug: `lawyers-in-${slug}` })),
  ];
}

export function generateMetadata({ params }) {
  const area = PRACTICE_AREAS.find((entry) => entry.slug === params.slug);
  const city = CITIES.find((entry) => params.slug === `lawyers-in-${entry.slug}`);
  if (city) return createMetadata(`/services/${params.slug}`, {
    title: `Lawyers in ${city.name}: Legal Consultation & Representation | ${BRAND_NAME}`,
    description: `Find experienced lawyers in ${city.name} for criminal, corporate, family, property and civil law consultations through ${BRAND_NAME}.`,
  });
  if (!area) return {};
  if (area.slug === 'criminal-law') return createMetadata('/services/criminal-law', {
    title: 'Criminal Lawyer in India | Bail, Trial & Defence | LegalGroup',
    description: 'Consult experienced criminal lawyers in India for FIR, bail, anticipatory bail, trial and appeals. Advocates across Delhi, Mumbai, Bangalore and more.',
  });
  return createMetadata(`/services/${area.slug}`, {
    title: `${area.label} Lawyer in India | ${BRAND_NAME}`,
    description: `${area.description} Consult experienced ${area.keyword} through ${BRAND_NAME}.`,
  });
}

export default function PracticeAreaPage({ params }) {
  const area = PRACTICE_AREAS.find((entry) => entry.slug === params.slug);
  const city = CITIES.find((entry) => params.slug === `lawyers-in-${entry.slug}`);
  if (city) {
    const cityLawyers = LAWYERS.filter((lawyer) => lawyer.city.toLowerCase() === city.name.toLowerCase());
    const cityUrl = `${SITE_URL}/services/${params.slug}`;
    return (
      <main style={{ minHeight: '100vh', padding: '120px 24px 80px', background: 'var(--bg-primary)' }}>
        <JsonLd data={{ '@context': 'https://schema.org', '@graph': [
          { '@type': ['LegalService', 'Attorney'], name: `${BRAND_NAME} lawyers in ${city.name}`, url: cityUrl, telephone: city.phone, address: { '@type': 'PostalAddress', streetAddress: city.address, addressLocality: city.name, addressCountry: 'IN' }, areaServed: city.name },
          { '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Services', item: `${SITE_URL}/services` }, { '@type': 'ListItem', position: 2, name: `Lawyers in ${city.name}`, item: cityUrl }] },
        ] }} />
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <p style={{ color: 'var(--gold-primary)', fontFamily: 'var(--font-body)', textTransform: 'uppercase', letterSpacing: '0.2em' }}>Local Legal Directory</p>
          <h1 style={{ fontFamily: 'var(--font-heading)', color: 'var(--text-primary)', fontSize: 'clamp(36px, 6vw, 64px)', margin: '16px 0' }}>Lawyers in {city.name}</h1>
          <p style={{ maxWidth: 680, color: 'var(--text-secondary)', fontFamily: 'var(--font-body)', fontSize: 20, lineHeight: 1.7 }}>Connect with experienced advocates in {city.name} for legal advice, litigation and representation across major practice areas.</p>
          <div className="responsive-grid-3" style={{ marginTop: 48 }}>{cityLawyers.map((lawyer) => <LawyerCard key={lawyer.name} lawyer={lawyer} headingLevel={2} />)}</div>
          {cityLawyers.length === 0 && <p style={{ color: 'var(--text-secondary)', fontFamily: 'var(--font-body)', marginTop: 32 }}>Our nationwide panel can connect you with counsel in {city.name}. Contact legalgroup for a referral.</p>}
        </div>
      </main>
    );
  }
  if (!area) notFound();
  if (area.slug === 'criminal-law') return <CriminalLawHub />;
  const lawyers = LAWYERS.filter((lawyer) => lawyer.area === area.area);
  const url = `${SITE_URL}/services/${area.slug}`;
  const content = SERVICE_CONTENT[area.slug] || {
    intro: area.description,
    sections: [{ heading: 'How we help', body: area.description }],
    faqs: [],
    relatedLink: '/blogs',
  };
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      { '@type': 'LegalService', name: `${BRAND_NAME} ${area.label}`, url, areaServed: 'India', serviceType: area.label, telephone: OFFICES[0].phone, address: { '@type': 'PostalAddress', streetAddress: OFFICES[0].address, addressCountry: 'IN' } },
      { '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Services', item: `${SITE_URL}/services` }, { '@type': 'ListItem', position: 2, name: area.label, item: url }] },
    ],
  };

  return (
    <main style={{ minHeight: '100vh', padding: '120px 24px 80px', background: 'var(--bg-primary)' }}>
      <JsonLd data={schema} />
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <nav aria-label="Breadcrumb" style={{ fontFamily: 'var(--font-body)', color: 'var(--gold-primary)', fontSize: 14, marginBottom: 12 }}>
          <Link href="/" style={{ color: 'var(--gold-primary)', textDecoration: 'none' }}>Home</Link>
          <span> / </span>
          <Link href="/services" style={{ color: 'var(--gold-primary)', textDecoration: 'none' }}>Services</Link>
          <span> / </span>
          <span>{area.label}</span>
        </nav>

        <p style={{ color: 'var(--gold-primary)', fontFamily: 'var(--font-body)', textTransform: 'uppercase', letterSpacing: '0.2em' }}>Legal Services</p>
        <h1 style={{ fontFamily: 'var(--font-heading)', color: 'var(--text-primary)', fontSize: 'clamp(36px, 6vw, 64px)', margin: '16px 0' }}>{area.label} Service</h1>
        <p style={{ maxWidth: 760, color: 'var(--text-secondary)', fontFamily: 'var(--font-body)', fontSize: 20, lineHeight: 1.7 }}>{content.intro}</p>

        <div style={{ display: 'grid', gap: 24, marginTop: 40 }}>
          {content.sections.map((section) => (
            <section key={section.heading} style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 16, padding: 24 }}>
              <h2 style={{ fontFamily: 'var(--font-heading)', color: 'var(--text-primary)', marginBottom: 12 }}>{section.heading}</h2>
              <p style={{ color: 'var(--text-secondary)', fontFamily: 'var(--font-body)', fontSize: 18, lineHeight: 1.7, margin: 0 }}>{section.body}</p>
            </section>
          ))}
        </div>

        {content.faqs.length > 0 && (
          <section style={{ marginTop: 52 }} aria-labelledby="service-faqs">
            <h2 id="service-faqs" style={{ fontFamily: 'var(--font-heading)', color: 'var(--text-primary)', marginBottom: 20 }}>Frequently asked questions</h2>
            <div style={{ display: 'grid', gap: 18 }}>
              {content.faqs.map((item) => (
                <div key={item.q} style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 12, padding: 18 }}>
                  <h3 style={{ fontFamily: 'var(--font-heading)', color: 'var(--text-primary)', marginBottom: 8 }}>{item.q}</h3>
                  <p style={{ color: 'var(--text-secondary)', fontFamily: 'var(--font-body)', fontSize: 17, lineHeight: 1.7, margin: 0 }}>{item.a}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        <section style={{ marginTop: 52, display: 'grid', gap: 16, padding: '22px 0 0' }}>
          <Link href={content.relatedLink} style={{ color: 'var(--gold-primary)', fontFamily: 'var(--font-body)', fontSize: 18, textDecoration: 'none' }}>Read a related legal guide →</Link>
          <Link href="/blogs" style={{ color: 'var(--gold-primary)', fontFamily: 'var(--font-body)', fontSize: 18, textDecoration: 'none' }}>Explore more legal insights →</Link>
          <Link href="/contact" style={{ color: 'var(--gold-primary)', fontFamily: 'var(--font-body)', fontSize: 18, textDecoration: 'none' }}>Request a consultation →</Link>
        </section>

        <h2 style={{ fontFamily: 'var(--font-heading)', color: 'var(--text-primary)', margin: '56px 0 24px' }}>Experienced {area.label} Advocates</h2>
        <p style={{ color: 'var(--text-secondary)', fontFamily: 'var(--font-body)', fontSize: 18, marginBottom: 28 }}>{area.lawyers}</p>
        <div className="responsive-grid-3">
          {lawyers.map((lawyer) => <LawyerCard key={lawyer.name} lawyer={lawyer} headingLevel={3} />)}
        </div>
        {lawyers.length === 0 && <p style={{ color: 'var(--text-secondary)', fontFamily: 'var(--font-body)' }}>Our wider panel can connect you with a suitable specialist. <Link href="/contact" style={{ color: 'var(--gold-primary)' }}>Contact legalgroup</Link>.</p>}
      </div>
    </main>
  );
}
