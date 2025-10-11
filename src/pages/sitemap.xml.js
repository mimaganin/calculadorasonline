import { CALCS } from '../data/calculators.js';

export async function get({ site }) {
  const base = site || 'https://www.conta-rapida.com';
  const now = new Date().toISOString();

  const staticPages = [
    { url: '/', priority: 1.0, changefreq: 'daily' },
    { url: '/calculadoras/', priority: 0.9, changefreq: 'weekly' },
    { url: '/sobre/', priority: 0.4, changefreq: 'yearly' },
    { url: '/politica-privacidade/', priority: 0.3, changefreq: 'yearly' },
  ];

  const calcPages = CALCS.map(c => ({
    url: c.href,
    priority: 0.8,
    changefreq: 'monthly',
  }));

  const urls = [...staticPages, ...calcPages];

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    u => `<url>
  <loc>${base}${u.url}</loc>
  <lastmod>${now}</lastmod>
  <changefreq>${u.changefreq}</changefreq>
  <priority>${u.priority}</priority>
</url>`
  )
  .join('\n')}
</urlset>`;

  return new Response(body, {
    headers: { 'Content-Type': 'application/xml' },
  });
}