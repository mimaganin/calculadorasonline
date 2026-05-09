import { CALCS } from '../data/calculators.js';
import { IMC_EXAMPLES, PERCENTAGE_EXAMPLES } from '../data/seo-examples.js';

export const prerender = true;

export async function GET({ site }) {
  const base = site || 'https://conta-rapida.com';
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

  const longTailPages = [
    ...PERCENTAGE_EXAMPLES.map(({ porcentagem, valor }) => ({
      url: `/calculadora-de-porcentagem/${porcentagem}-de-${valor}/`,
      priority: 0.6,
      changefreq: 'yearly',
    })),
    ...IMC_EXAMPLES.map(({ altura, peso }) => ({
      url: `/calculadora-de-imc/${altura}-${peso}/`,
      priority: 0.6,
      changefreq: 'yearly',
    })),
  ];

  const urls = [...staticPages, ...calcPages, ...longTailPages];

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    u => `<url>
  <loc>${new URL(u.url, base).href}</loc>
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
