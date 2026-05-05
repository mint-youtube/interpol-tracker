import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';
import tailwind from '@astrojs/tailwind';

const SITE = process.env.BLOG_SITE_URL || 'https://interpol-tracker.dailynote.blog';

export default defineConfig({
  site: SITE,
  integrations: [
    mdx(),
    sitemap(),
    tailwind({ applyBaseStyles: false }),
  ],
  build: { assets: 'assets' },
  markdown: { shikiConfig: { theme: 'github-dark-default' } },
});
