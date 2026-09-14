import { notFound } from 'next/navigation';
import CourtServicesPage from '@/components/court-services/CourtServicesPage';
import { COURT_SERVICE_PAGES, COURT_SERVICE_SLUGS } from '@/lib/constants/courtServicePages';
import { createMetadata } from '@/lib/seo';

export const dynamicParams = false;

export function generateStaticParams() {
  return COURT_SERVICE_SLUGS.map((slug) => ({ slug }));
}

export function generateMetadata({ params }) {
  const page = COURT_SERVICE_PAGES[params.slug];
  if (!page) return {};
  return {
    ...createMetadata(`/court-services/${page.slug}`, { title: page.metaTitle, description: page.metaDescription }),
    keywords: [page.title.toLowerCase(), 'court representation Delhi', 'legal consultation Delhi', 'litigation services Delhi'],
  };
}

export default function CourtServiceRoute({ params }) {
  const page = COURT_SERVICE_PAGES[params.slug];
  if (!page) notFound();
  return <CourtServicesPage page={page} />;
}
