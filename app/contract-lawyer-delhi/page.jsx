import CorporateLawPage from '@/components/corporate/CorporateLawPage';
import { CORPORATE_LAW_PAGES } from '@/lib/constants/corporateLawPages';
import { createMetadata } from '@/lib/seo';

const page = CORPORATE_LAW_PAGES['contract-lawyer-delhi'];

export const metadata = {
  ...createMetadata('/contract-lawyer-delhi', {
    title: page.metaTitle,
    description: page.metaDescription,
  }),
  keywords: ['contract lawyer delhi', 'contract drafting lawyer delhi', 'contract review lawyer delhi', 'agreement lawyer delhi', 'commercial contract lawyer delhi'],
};

export default function ContractLawyerDelhiPage() {
  return <CorporateLawPage page={{ ...page, path: '/contract-lawyer-delhi' }} basePath="/corporate-law" />;
}
