import PropertyLawPage from '@/components/property/PropertyLawPage';
import { PROPERTY_LAW_PAGES } from '@/lib/constants/propertyLawPages';
import { createMetadata } from '@/lib/seo';

const page = PROPERTY_LAW_PAGES['property-lawyer-delhi'];

export const metadata = {
  ...createMetadata('/property-lawyer-delhi', {
    title: page.metaTitle,
    description: page.metaDescription,
  }),
  keywords: ['property lawyer delhi', 'property advocate delhi', 'title verification lawyer', 'property documentation lawyer', 'sale deed lawyer delhi', 'property ownership lawyer'],
};

export default function PropertyLawyerDelhiPage() {
  return <PropertyLawPage page={{ ...page, path: '/property-lawyer-delhi' }} basePath="/property-law" />;
}
