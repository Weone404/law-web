import Link from 'next/link';
import PageHeader from '@/components/ui/PageHeader';
import { createMetadata } from '@/lib/seo';

export const metadata = createMetadata('/locations', {
  title: 'Legal Services by City in India | LegalGroup',
  description: 'Find legal services across Delhi, Mumbai, Bangalore, Chennai, Pune, Kolkata and Hyderabad with LegalGroup.',
});

const CITIES = [
  { city: 'Delhi', slug: 'delhi' },
  { city: 'Mumbai', slug: 'mumbai' },
  { city: 'Bangalore', slug: 'bangalore' },
  { city: 'Chennai', slug: 'chennai' },
  { city: 'Pune', slug: 'pune' },
  { city: 'Kolkata', slug: 'kolkata' },
  { city: 'Hyderabad', slug: 'hyderabad' },
];

export default function LocationsPage() {
  return (
    <div className="dark-gold-surface" style={{ minHeight: '100vh', paddingTop: 72, background: 'var(--dark-bg)' }}>
      <PageHeader
        eyebrow="City legal support"
        title="Legal Services by City"
        subtitle="Explore legal consultation and advocacy support across major Indian cities served by LegalGroup."
      />
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '40px 24px 80px' }}>
        <div className="responsive-grid-3">
          {CITIES.map((city) => (
            <Link key={city.slug} href={`/services/lawyers-in-${city.slug}`} style={{ textDecoration: 'none' }}>
              <div style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid var(--dark-border)', borderRadius: 16, padding: '32px 24px', minHeight: 150 }}>
                <p style={{ color: 'var(--gold-primary)', textTransform: 'uppercase', letterSpacing: '0.2em', fontSize: 12 }}>Location</p>
                <h2 style={{ fontFamily: 'var(--font-heading)', color: '#F0E8D0', margin: '16px 0 8px', fontSize: 28 }}>{city.city}</h2>
                <p style={{ color: 'rgba(255,255,255,0.7)', fontFamily: 'var(--font-body)', fontSize: 18 }}>Legal services and lawyers in {city.city}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
