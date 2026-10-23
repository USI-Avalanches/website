// @ts-check
import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';

import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';
import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
  site: 'https://usi-avalanches.at',
  base: '/',
  integrations: [tailwind(), sitemap(), icon(), mdx()],
});
