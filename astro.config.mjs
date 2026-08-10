import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

const site = process.env.SITE_URL ?? 'https://optionone.io';
const base = process.env.SITE_BASE ?? '/';

const PRIORITY = {
  '/': 1.0,
  '/services': 0.9,
  '/services/design': 0.8,
  '/services/build': 0.8,
  '/services/integrate': 0.8,
  '/services/communicate': 0.8,
  '/about': 0.7,
  '/contact': 0.7,
  '/insights': 0.5,
  '/insights/minimal-precise-operations': 0.6,
};

export default defineConfig({
  site,
  base,
  trailingSlash: 'ignore',
  build: {
    format: 'directory',
  },
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/404') && !page.includes('/legal/'),
      serialize(item) {
        const route = new URL(item.url).pathname
          .replace(base.replace(/\/$/, ''), '')
          .replace(/\/$/, '') || '/';
        item.priority = PRIORITY[route] ?? 0.3;
        item.changefreq = route === '/insights' ? 'weekly' : 'monthly';
        return item;
      },
    }),
  ],
});
