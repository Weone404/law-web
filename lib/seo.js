export const SITE_URL = 'https://www.legalgroup.in';
export const BRAND_NAME = 'LegalGroup';
export const LEGAL_ENTITY = 'LegalGroup';

export const SITE_METADATA = {
  '/': {
    title: 'Legal Services & Lawyers in India | LegalGroup',
    description: 'LegalGroup helps individuals and businesses access legal services in India, including criminal law, family law, property disputes, corporate matters, and legal advice.',
  },
  '/legal-services': {
    title: 'Legal Services in India | LegalGroup',
    description: 'Explore legal services for criminal, family, property, corporate, civil and constitutional matters with LegalGroup in India.',
  },
  '/legal-guides': {
    title: 'Legal Guides & Indian Law Explained | LegalGroup',
    description: 'Read practical legal guides on Indian law, legal procedures, and common legal questions from LegalGroup.',
  },
  '/about': {
    title: 'About LegalGroup | Indian Legal Services',
    description: 'Learn about LegalGroup, its legal practice areas, and how the firm supports clients across India with legal consultation and representation.',
  },
  '/lawyers': {
    title: 'Lawyers in India | LegalGroup',
    description: 'Find experienced lawyers and advocates in India for criminal, family, corporate, civil and property legal matters.',
  },
  '/students': {
    title: 'Law Student Resources, Case Laws & Bare Acts | LegalGroup',
    description: 'Study Indian law with organized legal resources, case laws, bare acts, and practical guidance for law students across India.',
  },
  '/blogs': {
    title: 'Legal Blogs & Indian Law Insights | LegalGroup',
    description: 'Read practical legal insights, Indian law updates, and legal analysis from LegalGroup.',
  },
  '/services': {
    title: 'Legal Services in India | LegalGroup',
    description: 'Find legal services for criminal law, family law, property disputes, corporate matters and civil litigation across India.',
  },
  '/firm': {
    title: 'About LegalGroup: Advocates & Legal Team in India',
    description: 'Meet the LegalGroup team and learn how the firm supports clients with research-led legal advice and representation.',
  },
  '/laws': {
    title: 'Indian Laws & Legal Updates | LegalGroup',
    description: 'Explore Indian laws, legal updates, and analysis covering property, family, criminal, constitutional and corporate legal matters.',
  },
  '/contact': {
    title: 'Contact LegalGroup for Legal Consultation in India',
    description: 'Contact LegalGroup for legal consultation and representation across India. Speak with a lawyer about your legal matter.',
  },
  '/privacy-policy': {
    title: 'Privacy Policy | LegalGroup',
    description: 'Read the LegalGroup privacy policy covering consultation requests, cookies and personal information on the website.',
  },
  '/terms-of-use': {
    title: 'Terms of Use | LegalGroup',
    description: 'Review the LegalGroup terms of use for accessing legal resources and services on the website.',
  },
};

export function createMetadata(pathname, overrides = {}) {
  const normalizedPath = pathname && pathname !== '' ? pathname : '/';
  const baseMeta = SITE_METADATA[normalizedPath] || {};
  const merged = { ...baseMeta, ...overrides };
  const canonicalPath = normalizedPath === '/' ? '/' : normalizedPath.replace(/\/+$/, '');
  const canonical = new URL(canonicalPath, SITE_URL).toString();
  const defaultImage = `${SITE_URL}/opengraph-image`;
  const title = merged.title || 'Legal Services & Lawyers in India | LegalGroup';
  const description = merged.description || 'Find legal services and legal guidance in India with LegalGroup.';
  const noindex = Boolean(merged.noindex);

  return {
    title,
    description,
    metadataBase: new URL(SITE_URL),
    alternates: { canonical },
    robots: {
      index: !noindex,
      follow: true,
      googleBot: {
        index: !noindex,
        follow: true,
      },
    },
    openGraph: {
      type: merged.type || 'website',
      url: canonical,
      siteName: BRAND_NAME,
      title,
      description,
      images: [{ url: merged.ogImage || defaultImage, width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [merged.ogImage || defaultImage],
    },
    ...(merged.keywords ? { keywords: merged.keywords } : {}),
  };
}

export const ORGANIZATION_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: BRAND_NAME,
  url: SITE_URL,
  logo: `${SITE_URL}/opengraph-image`,
  description: 'LegalGroup provides legal services and legal guidance across India for individuals and businesses.',
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'IN',
    addressLocality: 'New Delhi',
    streetAddress: 'Connaught Place, New Delhi',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'customer service',
    areaServed: 'IN',
    availableLanguage: ['en', 'hi'],
  },
};

export const OFFICES = [
  { city: 'New Delhi', name: 'LegalGroup New Delhi Office', address: '5th Floor, Connaught Place, New Delhi 110001', phone: '+91 11 4000 1234' },
  { city: 'Mumbai', name: 'LegalGroup Mumbai Office', address: 'Nariman Point, BKC, Mumbai 400051', phone: '+91 22 6600 5678' },
  { city: 'Bangalore', name: 'LegalGroup Bangalore Office', address: 'MG Road, Indiranagar, Bangalore 560038', phone: '+91 80 4100 7890' },
];
