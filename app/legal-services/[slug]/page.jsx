import { permanentRedirect } from 'next/navigation';

export default function LegalServicesDetailPage({ params }) {
  permanentRedirect(`/services/${params.slug}`);
}
