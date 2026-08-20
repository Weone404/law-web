const SITEMAP_URL = 'https://www.legalgroup.in/sitemap.xml';

export const runtime = 'nodejs';

export function GET() {
  const robots = `User-agent: *
Allow: /
Sitemap: ${SITEMAP_URL}
`;

  return new Response(robots, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
    },
  });
}
