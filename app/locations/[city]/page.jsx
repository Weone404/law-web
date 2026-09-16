import Link from 'next/link';
import { notFound } from 'next/navigation';
import { createMetadata } from '@/lib/seo';

const CITY_DETAILS = {
  delhi: { name: 'Delhi', title: 'Lawyers in Delhi | LegalGroup', description: 'Find legal services and advocates in Delhi for criminal, family, property, civil and corporate matters with LegalGroup.' },
  mumbai: { name: 'Mumbai', title: 'Lawyers in Mumbai | LegalGroup', description: 'Connect with legal services and advocates in Mumbai for corporate, civil and property matters with LegalGroup.' },
  bangalore: { name: 'Bangalore', title: 'Lawyers in Bangalore | LegalGroup', description: 'Find legal support in Bangalore across corporate, civil, property and family law matters with LegalGroup.' },
  chennai: { name: 'Chennai', title: 'Lawyers in Chennai | LegalGroup', description: 'Explore legal consultation and advocacy in Chennai for family, property and civil disputes with LegalGroup.' },
  pune: { name: 'Pune', title: 'Lawyers in Pune | LegalGroup', description: 'Find legal experts in Pune for property, civil and family law matters with LegalGroup.' },
  kolkata: { name: 'Kolkata', title: 'Lawyers in Kolkata | LegalGroup', description: 'Connect with lawyers in Kolkata for civil, family and tax legal services with LegalGroup.' },
  hyderabad: { name: 'Hyderabad', title: 'Lawyers in Hyderabad | LegalGroup', description: 'Find legal services and advocates in Hyderabad for corporate, property and civil matters with LegalGroup.' },
};

export const dynamicParams = false;

export function generateStaticParams() {
  return Object.keys(CITY_DETAILS).map((city) => ({ city }));
}

export function generateMetadata({ params }) {
  const city = CITY_DETAILS[params.city];
  if (!city) return {};
  return createMetadata(`/locations/${params.city}`, {
    title: city.title,
    description: city.description,
  });
}

export default function CityLocationPage({ params }) {
  const city = CITY_DETAILS[params.city];
  if (!city) notFound();

  return (
    <main style={{ minHeight: '100vh', padding: '120px 24px 80px', background: 'var(--bg-primary)' }}>
      <div style={{ maxWidth: 980, margin: '0 auto' }}>
        <p style={{ color: 'var(--gold-primary)', textTransform: 'uppercase', letterSpacing: '0.18em', fontFamily: 'var(--font-body)' }}>Local Legal Support</p>
        <h1 style={{ fontFamily: 'var(--font-heading)', color: 'var(--text-primary)', fontSize: 'clamp(36px, 5vw, 64px)', margin: '16px 0' }}>Lawyers in {city.name}</h1>
        <p style={{ color: 'var(--text-secondary)', fontFamily: 'var(--font-body)', fontSize: 21, lineHeight: 1.7 }}>
          LegalGroup supports clients in {city.name} with legal consultation, advocacy and representation across major areas of Indian law.
        </p>
        <div style={{ marginTop: 28, display: 'flex', flexWrap: 'wrap', gap: 12 }}>
          <Link href={`/services/lawyers-in-${params.city}`} style={{ color: 'var(--gold-primary)', fontFamily: 'var(--font-body)', fontWeight: 700 }}>Browse lawyers in {city.name}</Link>
          <Link href="/contact" style={{ color: 'var(--gold-primary)', fontFamily: 'var(--font-body)', fontWeight: 700 }}>Book a consultation</Link>
        </div>
      </div>
    </main>
  );
}
