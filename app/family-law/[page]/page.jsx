import { notFound } from 'next/navigation';
import FamilyLawLanding from '@/components/family/FamilyLawLanding';
import { FAMILY_LAW_PAGES, FAMILY_LAW_SLUGS } from '@/lib/constants/familyLawPages';
import { createMetadata } from '@/lib/seo';

export const dynamicParams = false;

export function generateStaticParams() {
  return FAMILY_LAW_SLUGS.map((page) => ({ page }));
}

export function generateMetadata({ params }) {
  const page = FAMILY_LAW_PAGES[params.page];
  if (!page) return {};
  const metadata = createMetadata(`/family-law/${page.slug}`, { title: page.metaTitle, description: page.metaDescription });
  return {
    ...metadata,
    keywords: page.slug === 'divorce-lawyer-delhi'
      ? ['divorce lawyer delhi', 'file for divorce in delhi', 'contested divorce lawyer delhi', 'hindu marriage act divorce', 'special marriage act divorce', 'divorce petition delhi', 'grounds for divorce india', 'family court delhi']
      : page.slug === 'mutual-divorce-lawyer-delhi'
        ? ['mutual divorce lawyer delhi', 'mutual consent divorce delhi', 'section 13b hindu marriage act', 'uncontested divorce delhi', 'mutual divorce process india', 'fast divorce delhi', 'divorce settlement lawyer delhi']
        : page.slug === 'child-custody-lawyer-delhi'
          ? ['child custody lawyer delhi', 'guardianship lawyer delhi', 'custody battle india', 'visitation rights lawyer', 'guardians and wards act lawyer', 'joint custody india', 'child custody after divorce delhi']
          : page.slug === 'maintenance-lawyer-delhi'
            ? ['maintenance lawyer delhi', 'alimony lawyer delhi', 'section 125 crpc lawyer', 'section 144 bnss maintenance', 'spousal support india', 'interim maintenance lawyer', 'maintenance pendente lite']
            : ['domestic violence lawyer delhi', 'protection of women act lawyer', '498a lawyer delhi', 'section 85 86 bns cruelty', 'protection order lawyer delhi', 'dowry harassment lawyer', 'residence order lawyer'],
  };
}

export default function FamilyLawDetailPage({ params }) {
  const page = FAMILY_LAW_PAGES[params.page];
  if (!page) notFound();
  return <FamilyLawLanding page={{ ...page, path: `/family-law/${page.slug}` }} basePath="/family-law" />;
}
