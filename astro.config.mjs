import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://SEU-DOMINIO-AQUI', // <-- substitua depois
  integrations: [tailwind(), sitemap()],
  server: { port: 4321 }
});
