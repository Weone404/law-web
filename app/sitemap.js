import { SITE_URL } from '@/lib/seo';
import { PRACTICE_AREAS } from '@/lib/constants/seoLandingPages';
import { LAW_UPDATES } from '@/lib/constants/lawUpdates';
import { LEGAL_GUIDES } from '@/lib/constants/legalGuides';

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
  '/sitemap',
];

export default function sitemap() {
  const practicePages = PRACTICE_AREAS.map((area) => `/services/${area.slug}`);
  const lawPages = LAW_UPDATES.map((law) => `/laws/${law.id}`);
  const cityPages = ['delhi', 'mumbai', 'bangalore', 'chennai', 'pune', 'kolkata', 'hyderabad'].map((city) => `/locations/${city}`);
  const blogPages = LEGAL_GUIDES.map((guide) => `/blogs/${guide.slug}`);
  const urls = [...new Set([...STATIC_PAGES, ...practicePages, ...lawPages, ...cityPages, ...blogPages])];

  return urls.map((url) => ({
    url: new URL(url, SITE_URL).toString(),
    lastModified: new Date(),
    changeFrequency: url.includes('/laws/') ? 'weekly' : url.includes('/locations/') ? 'monthly' : url.includes('/blogs/') ? 'weekly' : 'monthly',
    priority: url === '/' ? 1 : url.startsWith('/services/') ? 0.8 : url.startsWith('/laws/') ? 0.7 : url.startsWith('/blogs/') ? 0.7 : 0.6,
  }));
}
