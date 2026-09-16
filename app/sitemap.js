import { SITE_URL } from '@/lib/seo';
import { PRACTICE_AREAS } from '@/lib/constants/seoLandingPages';
import { CITIES } from '@/lib/constants/seoLandingPages';
import { LAW_UPDATES } from '@/lib/constants/lawUpdates';
import { LEGAL_GUIDES } from '@/lib/constants/legalGuides';
import { FAMILY_LAW_SLUGS } from '@/lib/constants/familyLawPages';
import { COURT_SERVICE_SLUGS } from '@/lib/constants/courtServicePages';
import { CRIMINAL_DELHI_PAGES } from '@/components/criminal/pages';

const STATIC_PAGES = [
  '/',
  '/services',
  '/blogs',
  '/firm',
  '/laws',
  '/contact',
  '/students',
  '/lawyers',
  '/locations',
  '/privacy-policy',
  '/terms-of-use',
  '/court-services',
];

export default function sitemap() {
  const practicePages = PRACTICE_AREAS.map((area) => `/services/${area.slug}`);
  const cityServicePages = CITIES.map((city) => `/services/lawyers-in-${city.slug}`);
  const criminalServicePages = Object.values(CRIMINAL_DELHI_PAGES).map((page) => page.path);
  const familyServicePages = FAMILY_LAW_SLUGS.map((slug) => `/services/family-law/${slug}`);
  const courtServicePages = COURT_SERVICE_SLUGS.map((slug) => `/court-services/${slug}`);
  const lawPages = LAW_UPDATES.map((law) => `/laws/${law.id}`);
  const cityPages = CITIES.map((city) => `/locations/${city.slug}`);
  const blogPages = LEGAL_GUIDES.map((guide) => `/blogs/${guide.slug}`);
  const urls = [...new Set([
    ...STATIC_PAGES,
    ...practicePages,
    ...cityServicePages,
    ...criminalServicePages,
    ...familyServicePages,
    ...courtServicePages,
    ...lawPages,
    ...cityPages,
    ...blogPages,
  ])];

  return urls.map((url) => ({
    url: new URL(url, SITE_URL).toString(),
    lastModified: new Date(),
    changeFrequency: url.includes('/laws/') || url.includes('/blogs/') ? 'weekly' : 'monthly',
    priority: url === '/' ? 1 : url.startsWith('/services/') ? 0.8 : url.startsWith('/court-services/') ? 0.8 : url.startsWith('/laws/') ? 0.7 : url.startsWith('/blogs/') ? 0.7 : 0.6,
  }));
}
