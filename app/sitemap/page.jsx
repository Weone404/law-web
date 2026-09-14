import Link from 'next/link';
import JsonLd from '@/components/seo/JsonLd';
import { LAW_UPDATES } from '@/lib/constants/lawUpdates';
import { PRACTICE_AREAS, CITIES } from '@/lib/constants/seoLandingPages';
import { FAMILY_LAW_PAGES, FAMILY_LAW_SLUGS } from '@/lib/constants/familyLawPages';
import { CORPORATE_LAW_PAGES, CORPORATE_LAW_SLUGS } from '@/lib/constants/corporateLawPages';
import { COURT_SERVICE_PAGES, COURT_SERVICE_SLUGS } from '@/lib/constants/courtServicePages';
import { CRIMINAL_DELHI_PAGES } from '@/components/criminal/pages';
import { SITE_URL, BRAND_NAME, createMetadata } from '@/lib/seo';

export const metadata = createMetadata('/sitemap', {
  title: 'Sitemap | Legal Group',
  description: 'Explore the legal services, court representation, Indian law resources and information pages available from Legal Group.',
});

const MAIN_PAGES = [
  ['Home', '/'],
  ['For Students', '/students'],
  ['Legal Services', '/services'],
  ['Court Services', '/court-services'],
  ['Corporate Law', '/corporate-law'],
  ['Family Law', '/family-law'],
  ['Property Law', '/property-law'],
  ['Our Firm', '/firm'],
  ['Indian Laws', '/laws'],
  ['Contact', '/contact'],
];

const PROPERTY_PAGES = [
  ['Property Lawyer in Delhi', '/property-lawyer-delhi'],
  ['Property Dispute Lawyer in Delhi', '/property-dispute-lawyer-delhi'],
  ['Real Estate Lawyer in Delhi', '/real-estate-lawyer-delhi'],
  ['Property Registration Lawyer in Delhi', '/property-registration-lawyer-delhi'],
];

const LEGAL_PAGES = [
  ['Privacy Policy', '/privacy-policy'],
  ['Terms of Use', '/terms-of-use'],
];

function uniqueLinks(links) {
  const seen = new Set();
  return links.filter(([, href]) => {
    if (seen.has(href)) return false;
    seen.add(href);
    return true;
  });
}

function titleCase(slug) {
  return slug
    .split('-')
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(' ');
}

function linksFromRecords(records, getHref, getLabel) {
  return records.map((record) => [getLabel(record), getHref(record)]);
}

const SECTIONS = [
  { title: 'Main Pages', links: MAIN_PAGES },
  {
    title: 'Legal Services',
    links: [
      ...linksFromRecords(PRACTICE_AREAS, (area) => `/services/${area.slug}`, (area) => area.label),
      ...linksFromRecords(CITIES, (city) => `/services/lawyers-in-${city.slug}`, (city) => `Lawyers in ${city.name}`),
      ['Family Law Services', '/services/family-law'],
    ],
  },
  {
    title: 'Family Law',
    links: [
      ...linksFromRecords(FAMILY_LAW_SLUGS, (slug) => `/family-law/${slug}`, (slug) => FAMILY_LAW_PAGES[slug].title),
      ...linksFromRecords(FAMILY_LAW_SLUGS, (slug) => `/services/family-law/${slug}`, (slug) => `${FAMILY_LAW_PAGES[slug].title} (Services)`),
    ],
  },
  {
    title: 'Corporate Law',
    links: [
      ...linksFromRecords(CORPORATE_LAW_SLUGS, (slug) => `/${slug}`, (slug) => CORPORATE_LAW_PAGES[slug].title),
    ],
  },
  {
    title: 'Court Services',
    links: linksFromRecords(
      COURT_SERVICE_SLUGS,
      (slug) => `/court-services/${slug}`,
      (slug) => COURT_SERVICE_PAGES[slug].title
    ),
  },
  {
    title: 'Criminal Law',
    links: linksFromRecords(
      Object.values(CRIMINAL_DELHI_PAGES),
      (page) => page.path,
      (page) => page.title
    ),
  },
  { title: 'Property Law', links: PROPERTY_PAGES },
  {
    title: 'Indian Laws & Resources',
    links: linksFromRecords(
      LAW_UPDATES,
      (law) => `/laws/${law.id}`,
      (law) => law.title
    ),
  },
  { title: 'Legal Information', links: LEGAL_PAGES },
].map((section) => ({ ...section, links: uniqueLinks(section.links) }));

function SitemapCard({ label, href }) {
  return (
    <Link
      href={href}
      className="sitemap-card card-hover"
      aria-label={`View ${label}`}
    >
      <span className="sitemap-card-label">{label}</span>
      <span className="sitemap-card-url">{href}</span>
      <span className="sitemap-card-action">View Page <span aria-hidden="true">→</span></span>
    </Link>
  );
}

export default function SitemapPage() {
  const pageCount = new Set(SECTIONS.flatMap((section) => section.links.map(([, href]) => href))).size;
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Website Sitemap',
    description: metadata.description,
    url: `${SITE_URL}/sitemap`,
    isPartOf: { '@type': 'WebSite', name: BRAND_NAME, url: SITE_URL },
  };

  return (
    <main className="sitemap-page">
      <JsonLd data={schema} />
      <section className="sitemap-hero">
        <div className="sitemap-container">
          <p className="sitemap-eyebrow">Legal Group Directory</p>
          <h1>Website Sitemap</h1>
          <div className="section-divider" />
          <p className="sitemap-intro">
            Explore all pages and legal services available on Legal Group. Use the links below
            to quickly navigate to the information and services you need.
          </p>
          <p className="sitemap-count">{pageCount} public pages</p>
        </div>
      </section>

      <div className="sitemap-container sitemap-directory">
        {SECTIONS.map((section) => (
          <section key={section.title} className="sitemap-section" aria-labelledby={`sitemap-${section.title}`}>
            <div className="sitemap-section-heading">
              <p className="sitemap-eyebrow">Directory</p>
              <h2 id={`sitemap-${section.title}`}>{section.title}</h2>
            </div>
            <div className="sitemap-grid">
              {section.links.map(([label, href]) => (
                <SitemapCard key={href} label={label} href={href} />
              ))}
            </div>
          </section>
        ))}
      </div>
    </main>
  );
}
