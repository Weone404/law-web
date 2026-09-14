import CorporateLawPage from '@/components/corporate/CorporateLawPage';
import { CORPORATE_LAW_OVERVIEW } from '@/lib/constants/corporateLawPages';
import { createMetadata } from '@/lib/seo';

export const metadata = {
  ...createMetadata('/corporate-law', {
    title: CORPORATE_LAW_OVERVIEW.metaTitle,
    description: CORPORATE_LAW_OVERVIEW.metaDescription,
  }),
  keywords: ['corporate lawyer delhi', 'business lawyer delhi', 'company registration lawyer delhi', 'contract lawyer delhi', 'corporate legal services delhi'],
};

export default function CorporateLawLandingPage() {
  return <CorporateLawPage page={{ ...CORPORATE_LAW_OVERVIEW, path: '/corporate-law' }} basePath="/corporate-law" isOverview />;
}
