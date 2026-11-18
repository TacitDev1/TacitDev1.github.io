import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import site from './site.config.mjs';

// A user site (<username>.github.io) is served from the domain root.
const SITE_URL = process.env.SITE_URL ?? (site.githubUser ? `https://${site.githubUser.toLowerCase()}.github.io` : 'https://example.github.io');

export default defineConfig({
  site: SITE_URL,
  output: 'static',
  prefetch: { prefetchAll: true, defaultStrategy: 'hover' },
  build: { inlineStylesheets: 'always' },
  integrations: [sitemap()],
});
