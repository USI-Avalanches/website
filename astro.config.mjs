// @ts-check
import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';

import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';
import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.usi-avalanches.at',
  base: process.env.GITHUB_PAGES === 'true' ? '/website/' : '/',
  integrations: [tailwind(), sitemap(), icon(), mdx()],
});
