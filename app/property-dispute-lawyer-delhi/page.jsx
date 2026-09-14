import PropertyLawPage from '@/components/property/PropertyLawPage';
import { PROPERTY_LAW_PAGES } from '@/lib/constants/propertyLawPages';
import { createMetadata } from '@/lib/seo';

const page = PROPERTY_LAW_PAGES['property-dispute-lawyer-delhi'];

export const metadata = {
  ...createMetadata('/property-dispute-lawyer-delhi', {
    title: page.metaTitle,
    description: page.metaDescription,
  }),
  keywords: ['property dispute lawyer delhi', 'ownership dispute lawyer delhi', 'possession dispute lawyer delhi', 'partition lawyer delhi', 'property injunction lawyer delhi'],
};

export default function PropertyDisputeLawyerDelhiPage() {
  return <PropertyLawPage page={{ ...page, path: '/property-dispute-lawyer-delhi' }} basePath="/property-law" />;
}
