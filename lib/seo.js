export const SITE_URL = 'https://www.legalgroup.in';
export const BRAND_NAME = 'legalgroup';

export const SITE_METADATA = {
  '/': {
    title: 'Legal Services, Lawyers & Indian Law Resources | legalgroup',
    description: 'Find trusted lawyers, legal services, Indian law updates and student resources on legalgroup, a nationwide legal platform for clients and professionals.',
  },
  '/students': {
    title: 'Law Student Resources, Case Laws & Bare Acts | legalgroup',
    description: 'Study Indian law with organized law notes, case laws, bare acts, legal blogs and career guidance built for law students across India.',
  },
  '/blogs': {
    title: 'Legal Blogs & Indian Law Insights | legalgroup',
    description: 'Read practical legal insights, Indian law updates and expert analysis from the legalgroup editorial team and practicing advocates.',
  },
  '/services': {
    title: 'Hire a Lawyer in India: Criminal, Corporate & Family Law | legalgroup',
    description: 'Find experienced lawyers in India for criminal, corporate, family, property, constitutional, cyber, consumer and tax law matters.',
  },
  '/firm': {
    title: 'About legalgroup: Advocates & Legal Team in India',
    description: 'Meet the legalgroup law team and learn how our advocates deliver research-led representation across Indian courts, tribunals and advisory matters.',
  },
  '/laws': {
    title: 'Indian Laws & Acts Database 2026: Bare Acts & Amendments | legalgroup',
    description: 'Search Indian laws, bare acts, amendments and major legal updates across criminal, civil, corporate, tax, family and constitutional law.',
  },
  '/contact': {
    title: 'Contact Lawyers for a Legal Consultation in India | legalgroup',
    description: 'Contact legalgroup for a legal consultation. Reach experienced advocates in Delhi, Mumbai and Bangalore for advice and representation.',
  },
  '/privacy-policy': {
    title: 'Privacy Policy | legalgroup',
    description: 'Read the legalgroup privacy policy covering personal data, consultation requests, cookies and how information is protected on our platform.',
  },
  '/terms-of-use': {
    title: 'Terms of Use | legalgroup',
    description: 'Review the legalgroup terms of use for accessing legal resources, lawyer listings, consultations and services on our website.',
  },
};

export function createMetadata(pathname, overrides = {}) {
  const page = SITE_METADATA[pathname] || overrides;
  const canonical = `${SITE_URL}${pathname === '/' ? '' : pathname}`;
  const imagePath = {
    '/': '/opengraph-image',
    '/services': '/services/opengraph-image',
    '/laws': '/laws/opengraph-image',
    '/firm': '/firm/opengraph-image',
  }[pathname] || '/opengraph-image';
  return {
    title: page.title,
    description: page.description,
    alternates: { canonical },
    openGraph: {
      type: 'website',
      url: canonical,
      siteName: BRAND_NAME,
      title: page.title,
      description: page.description,
      images: [{ url: `${SITE_URL}${imagePath}`, width: 1200, height: 630, alt: page.title }],
    },
    twitter: {
      card: 'summary_large_image',
      title: page.title,
      description: page.description,
      images: [`${SITE_URL}${imagePath}`],
    },
  };
}

export const ORGANIZATION_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: BRAND_NAME,
  url: SITE_URL,
  logo: `${SITE_URL}/favicon.ico`,
  sameAs: [
    'https://www.linkedin.com/',
    'https://twitter.com/',
    'https://www.youtube.com/',
  ],
};

export const OFFICES = [
  { city: 'New Delhi', name: 'legalgroup New Delhi Office', address: '5th Floor, Connaught Place, New Delhi 110001', phone: '+91 11 4000 1234' },
  { city: 'Mumbai', name: 'legalgroup Mumbai Office', address: 'Nariman Point, BKC, Mumbai 400051', phone: '+91 22 6600 5678' },
  { city: 'Bangalore', name: 'legalgroup Bangalore Office', address: 'MG Road, Indiranagar, Bangalore 560038', phone: '+91 80 4100 7890' },
];
