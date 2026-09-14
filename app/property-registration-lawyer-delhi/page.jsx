import PropertyLawPage from '@/components/property/PropertyLawPage';
import { PROPERTY_LAW_PAGES } from '@/lib/constants/propertyLawPages';
import { createMetadata } from '@/lib/seo';

const page = PROPERTY_LAW_PAGES['property-registration-lawyer-delhi'];

export const metadata = {
  ...createMetadata('/property-registration-lawyer-delhi', {
    title: page.metaTitle,
    description: page.metaDescription,
  }),
  keywords: ['property registration lawyer delhi', 'sale deed registration lawyer delhi', 'property document lawyer delhi', 'registration dispute lawyer delhi', 'stamp duty review lawyer'],
};

export default function PropertyRegistrationLawyerDelhiPage() {
  return <PropertyLawPage page={{ ...page, path: '/property-registration-lawyer-delhi' }} basePath="/property-law" />;
}
