import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';

// site는 빌드 시 BLOG_SITE_URL 환경변수로 주입 (DB channels.blog_url에서 동기화)
// scripts/build_blogs.py 또는 BLOG_SITE_URL=https://... npm run build
const SITE = process.env.BLOG_SITE_URL || 'https://interpol-tracker.example.com';

export default defineConfig({
  site: SITE,
  integrations: [mdx(), sitemap()],
  build: { assets: 'assets' },
  markdown: { shikiConfig: { theme: 'github-dark-default' } },
});
