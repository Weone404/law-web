/**
 * app/page.jsx — Home Page (/)
 * Hero, Practice Areas, Stats, Testimonials, CTA sections
 */

import HeroSection from '@/components/home/HeroSection';
import PracticeAreasSection from '@/components/home/PracticeAreasSection';
import StatsSection from '@/components/home/StatsSection';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import CTABanner from '@/components/home/CTABanner';

export const metadata = {
  title: 'Lex India — Premier Legal Platform for India',
  description:
    "India's leading legal technology platform connecting law students, lawyers, and clients. Expert legal services, law notes, case laws, and Indian law updates.",
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <PracticeAreasSection />
      <StatsSection />
      <TestimonialsSection />
      <CTABanner />
    </>
  );
}
