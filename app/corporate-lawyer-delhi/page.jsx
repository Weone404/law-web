import CorporateLawPage from '@/components/corporate/CorporateLawPage';
import { CORPORATE_LAW_PAGES } from '@/lib/constants/corporateLawPages';
import { createMetadata } from '@/lib/seo';

const page = CORPORATE_LAW_PAGES['corporate-lawyer-delhi'];

export const metadata = {
  ...createMetadata('/corporate-lawyer-delhi', {
    title: page.metaTitle,
    description: page.metaDescription,
  }),
  keywords: ['corporate lawyer delhi', 'corporate lawyer in delhi', 'corporate law firm delhi', 'corporate legal services delhi', 'corporate legal advisor delhi'],
};

export default function CorporateLawyerDelhiPage() {
  return <CorporateLawPage page={{ ...page, path: '/corporate-lawyer-delhi' }} basePath="/corporate-law" />;
}
