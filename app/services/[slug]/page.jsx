import Link from 'next/link';
import { notFound } from 'next/navigation';
import LawyerCard from '@/components/ui/LawyerCard';
import JsonLd from '@/components/seo/JsonLd';
import { SITE_URL, BRAND_NAME, createMetadata, OFFICES } from '@/lib/seo';
import { PRACTICE_AREAS } from '@/lib/constants/seoLandingPages';
import { CITIES } from '@/lib/constants/seoLandingPages';
import { LAWYERS } from '@/lib/constants/lawyers';
import CriminalLawHub from '@/components/criminal/CriminalLawHub';

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
    title: 'Criminal Lawyer in India | Bail, Trial & Defence | legalgroup',
    description: 'Consult experienced criminal lawyers in India for FIR, bail, anticipatory bail, trial and appeals. Advocates across Delhi, Mumbai, Bangalore & more.',
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
        <p style={{ color: 'var(--gold-primary)', fontFamily: 'var(--font-body)', textTransform: 'uppercase', letterSpacing: '0.2em' }}>Legal Services</p>
        <h1 style={{ fontFamily: 'var(--font-heading)', color: 'var(--text-primary)', fontSize: 'clamp(36px, 6vw, 64px)', margin: '16px 0' }}>{area.label} Lawyer in India</h1>
        <p style={{ maxWidth: 680, color: 'var(--text-secondary)', fontFamily: 'var(--font-body)', fontSize: 20, lineHeight: 1.7 }}>{area.description}</p>
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
