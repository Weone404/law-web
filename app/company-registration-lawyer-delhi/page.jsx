import CorporateLawPage from '@/components/corporate/CorporateLawPage';
import { CORPORATE_LAW_PAGES } from '@/lib/constants/corporateLawPages';
import { createMetadata } from '@/lib/seo';

const page = CORPORATE_LAW_PAGES['company-registration-lawyer-delhi'];

export const metadata = {
  ...createMetadata('/company-registration-lawyer-delhi', {
    title: page.metaTitle,
    description: page.metaDescription,
  }),
  keywords: ['company registration lawyer delhi', 'company registration lawyer in delhi', 'company incorporation lawyer delhi', 'private limited company registration lawyer delhi', 'business registration lawyer delhi'],
};

export default function CompanyRegistrationLawyerDelhiPage() {
  return <CorporateLawPage page={{ ...page, path: '/company-registration-lawyer-delhi' }} basePath="/corporate-law" />;
}
