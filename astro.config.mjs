import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  output: 'static',
  site: 'https://onwardcraft.com',
  integrations: [
    sitemap({
      entryLimit: 10000,
    }),
  ],
});
