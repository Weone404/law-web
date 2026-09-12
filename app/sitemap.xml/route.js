import fs from 'node:fs';
import path from 'node:path';
import { LAW_UPDATES } from '@/lib/constants/lawUpdates';
import { PRACTICE_AREAS, CITIES } from '@/lib/constants/seoLandingPages';
import { CRIMINAL_DELHI_PAGES } from '@/components/criminal/pages';

const SITE_URL = 'https://www.legalgroup.in';

const PUBLIC_ROUTES = [
  '/',
  '/students',
  '/services',
  '/firm',
  '/laws',
  '/contact',
  '/privacy-policy',
  '/terms-of-use',
];

const ROUTE_FILES = {
  '/': 'app/page.jsx',
  '/students': 'app/students/page.jsx',
  '/services': 'app/services/page.jsx',
  '/firm': 'app/firm/page.jsx',
  '/laws': 'app/laws/page.jsx',
  '/contact': 'app/contact/page.jsx',
  '/privacy-policy': 'app/privacy-policy/page.jsx',
  '/terms-of-use': 'app/terms-of-use/page.jsx',
};

function lastModified(relativeFile) {
  try {
    return fs.statSync(path.join(process.cwd(), relativeFile)).mtime.toISOString();
  } catch {
    return undefined;
  }
}

function hasDynamicRoute(directory) {
  return ['[id]', '[slug]'].some((segment) =>
    ['page.js', 'page.jsx', 'page.ts', 'page.tsx'].some((file) =>
      fs.existsSync(path.join(process.cwd(), 'app', directory, segment, file))
    )
  );
}

function addRecords(records, basePath, data, sourceFile) {
  if (!hasDynamicRoute(basePath)) return;

  const modified = lastModified(sourceFile);
  data.forEach((record) => {
    const identifier = record.slug || record.id;
    if (!identifier) return;
    records.push({
      url: `${basePath}/${encodeURIComponent(identifier)}`,
      lastModified: modified,
    });
  });
}

function getEntries() {
  const entries = PUBLIC_ROUTES.map((url) => ({
    url,
    lastModified: lastModified(ROUTE_FILES[url]),
  }));

  addRecords(entries, '/laws', LAW_UPDATES, 'lib/constants/lawUpdates.js');
  if (fs.existsSync(path.join(process.cwd(), 'app', 'laws', '[id]', 'page.jsx'))) {
    const modified = lastModified('app/laws/[id]/page.jsx');
    LAW_UPDATES.forEach(({ id }) => entries.push({ url: `/laws/${encodeURIComponent(id)}`, lastModified: modified }));
  }
  if (fs.existsSync(path.join(process.cwd(), 'app', 'services', '[slug]', 'page.jsx'))) {
    const modified = lastModified('app/services/[slug]/page.jsx');
    PRACTICE_AREAS.forEach(({ slug }) => entries.push({ url: `/services/${encodeURIComponent(slug)}`, lastModified: modified }));
  }
  if (fs.existsSync(path.join(process.cwd(), 'app', 'services', '[slug]', 'page.jsx'))) {
    const modified = lastModified('app/services/[slug]/page.jsx');
    CITIES.forEach(({ slug }) => entries.push({ url: `/services/lawyers-in-${encodeURIComponent(slug)}`, lastModified: modified }));
  }
  const criminalPageModified = lastModified('app/services/criminal-law/[page]/page.jsx');
  Object.values(CRIMINAL_DELHI_PAGES).forEach(({ path: pagePath }) => {
    entries.push({ url: pagePath, lastModified: criminalPageModified });
  });

  return entries.filter((entry, index, all) =>
    all.findIndex((candidate) => candidate.url === entry.url) === index
  );
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

function toSiteUrl(pathname) {
  return new URL(pathname, `${SITE_URL}/`).toString();
}

export async function GET() {
  const urls = getEntries()
    .map(({ url, lastModified }) => `
    <url>
      <loc>${escapeXml(toSiteUrl(url))}</loc>${lastModified ? `
      <lastmod>${lastModified}</lastmod>` : ''}
      <changefreq>${url === '/' ? 'weekly' : 'monthly'}</changefreq>
      <priority>${url === '/' ? '1.0' : '0.8'}</priority>
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
