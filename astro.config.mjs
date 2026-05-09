import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://conta-rapida.com',
  integrations: [tailwind()],
  server: { port: 4321 },
});
