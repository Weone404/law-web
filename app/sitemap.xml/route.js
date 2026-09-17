import { SITE_URL } from '@/lib/seo';
import { PRACTICE_AREAS, CITIES } from '@/lib/constants/seoLandingPages';
import { LAW_UPDATES } from '@/lib/constants/lawUpdates';
import { LEGAL_GUIDES } from '@/lib/constants/legalGuides';
import { FAMILY_LAW_SLUGS } from '@/lib/constants/familyLawPages';
import { COURT_SERVICE_SLUGS } from '@/lib/constants/courtServicePages';
import { CRIMINAL_DELHI_PAGES } from '@/components/criminal/pages';

const CANONICAL_ORIGIN = SITE_URL;

if (CANONICAL_ORIGIN !== 'https://www.legalgroup.in') {
  throw new Error(`Unexpected sitemap origin: ${CANONICAL_ORIGIN}`);
}

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

function getCanonicalPaths() {
  const practicePages = PRACTICE_AREAS.map((area) => `/services/${area.slug}`);
  const cityServicePages = CITIES.map((city) => `/services/lawyers-in-${city.slug}`);
  const criminalServicePages = Object.values(CRIMINAL_DELHI_PAGES).map((page) => page.path);
  const familyServicePages = FAMILY_LAW_SLUGS.map((slug) => `/services/family-law/${slug}`);
  const courtServicePages = COURT_SERVICE_SLUGS.map((slug) => `/court-services/${slug}`);
  const lawPages = LAW_UPDATES.map((law) => `/laws/${law.id}`);
  const cityPages = CITIES.map((city) => `/locations/${city.slug}`);
  const blogPages = LEGAL_GUIDES.map((guide) => `/blogs/${guide.slug}`);

  return [...new Set([
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
}

function toCanonicalUrl(pathname) {
  if (typeof pathname !== 'string' || !pathname.startsWith('/') || pathname.includes('?') || pathname.includes('#')) {
    throw new Error(`Invalid sitemap pathname: ${pathname}`);
  }

  const url = new URL(pathname, `${CANONICAL_ORIGIN}/`);
  if (url.origin !== CANONICAL_ORIGIN) {
    throw new Error(`Sitemap path resolved outside the canonical origin: ${pathname}`);
  }
  return url.toString();
}

function escapeXml(value) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&apos;');
}

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export function GET() {
  const urls = getCanonicalPaths().map((pathname) => `
    <url>
      <loc>${escapeXml(toCanonicalUrl(pathname))}</loc>
    </url>`)
    .join('');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}
</urlset>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'no-store, must-revalidate',
    },
  });
}
