import PropertyLawPage from '@/components/property/PropertyLawPage';
import { PROPERTY_LAW_PAGES } from '@/lib/constants/propertyLawPages';
import { createMetadata } from '@/lib/seo';

const page = PROPERTY_LAW_PAGES['real-estate-lawyer-delhi'];

export const metadata = {
  ...createMetadata('/real-estate-lawyer-delhi', {
    title: page.metaTitle,
    description: page.metaDescription,
  }),
  keywords: ['real estate lawyer delhi', 'builder dispute lawyer delhi', 'property purchase lawyer delhi', 'sale agreement lawyer delhi', 'real estate documentation lawyer'],
};

export default function RealEstateLawyerDelhiPage() {
  return <PropertyLawPage page={{ ...page, path: '/real-estate-lawyer-delhi' }} basePath="/property-law" />;
}
