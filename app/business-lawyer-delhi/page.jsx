import CorporateLawPage from '@/components/corporate/CorporateLawPage';
import { CORPORATE_LAW_PAGES } from '@/lib/constants/corporateLawPages';
import { createMetadata } from '@/lib/seo';

const page = CORPORATE_LAW_PAGES['business-lawyer-delhi'];

export const metadata = {
  ...createMetadata('/business-lawyer-delhi', {
    title: page.metaTitle,
    description: page.metaDescription,
  }),
  keywords: ['business lawyer delhi', 'business lawyer in delhi', 'business legal advisor delhi', 'business advocate delhi', 'commercial lawyer delhi'],
};

export default function BusinessLawyerDelhiPage() {
  return <CorporateLawPage page={{ ...page, path: '/business-lawyer-delhi' }} basePath="/corporate-law" />;
}
