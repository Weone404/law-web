import { notFound } from 'next/navigation';
import { createMetadata } from '@/lib/seo';
import DelhiCriminalLanding from '@/components/criminal/DelhiCriminalLanding';
import { CRIMINAL_DELHI_PAGES } from '@/components/criminal/pages';

export const dynamicParams = false;

export function generateStaticParams() {
  return Object.keys(CRIMINAL_DELHI_PAGES).map((page) => ({ page }));
}

export function generateMetadata({ params }) {
  const page = CRIMINAL_DELHI_PAGES[params.page];
  if (!page) return {};
  return createMetadata(page.path, {
    title: page.metaTitle,
    description: page.metaDescription,
  });
}

export default function CriminalDelhiPage({ params }) {
  const page = CRIMINAL_DELHI_PAGES[params.page];
  if (!page) notFound();
  return <DelhiCriminalLanding page={page} />;
}
