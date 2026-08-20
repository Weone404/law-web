'use client';

import { usePathname } from 'next/navigation';
import { SITE_URL } from '@/lib/seo';

const LABELS = {
  students: 'For Law Students',
  services: 'Legal Services',
  firm: 'Our Firm',
  laws: 'Indian Laws',
  contact: 'Contact',
  'privacy-policy': 'Privacy Policy',
  'terms-of-use': 'Terms of Use',
};

export default function BreadcrumbSchema() {
  const pathname = usePathname();
  if (!pathname || pathname === '/') return null;

  const segments = pathname.split('/').filter(Boolean);
  const items = [{ '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL }];
  let path = '';
  segments.forEach((segment, index) => {
    path += `/${segment}`;
    items.push({
      '@type': 'ListItem',
      position: index + 2,
      name: LABELS[segment] || decodeURIComponent(segment).replaceAll('-', ' '),
      item: `${SITE_URL}${path}`,
    });
  });

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: items }) }} />;
}
