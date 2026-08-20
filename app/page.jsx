/**
 * app/page.jsx — Home Page (/)
 * Hero, Practice Areas, Stats, Testimonials, CTA sections
 */

import HeroSection from '@/components/home/HeroSection';
import PracticeAreasSection from '@/components/home/PracticeAreasSection';
import StatsSection from '@/components/home/StatsSection';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import CTABanner from '@/components/home/CTABanner';
import JsonLd from '@/components/seo/JsonLd';
import { SITE_URL, BRAND_NAME, createMetadata, OFFICES } from '@/lib/seo';

export const metadata = createMetadata('/');

export default function HomePage() {
  return (
    <>
      <JsonLd data={{
        '@context': 'https://schema.org',
        '@type': 'LegalService',
        name: BRAND_NAME,
        url: SITE_URL,
        areaServed: 'India',
        telephone: OFFICES[0].phone,
        address: { '@type': 'PostalAddress', streetAddress: OFFICES[0].address, addressCountry: 'IN' },
      }} />
      <HeroSection />
      <PracticeAreasSection />
      <StatsSection />
      <TestimonialsSection />
      <CTABanner />
    </>
  );
}
