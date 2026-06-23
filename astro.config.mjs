import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  output: 'static',
  site: 'https://onwardcraft.com',
  integrations: [
    // No global `lastmod`: stamping every URL with the build time on each deploy
    // tells Google "all 900+ pages changed" every time, which trains it to
    // distrust lastmod and wastes crawl budget re-fetching unchanged pages.
    // Omitting it lets Google judge freshness per page from its own crawl history.
    sitemap({
      entryLimit: 10000,
    }),
  ],
});
