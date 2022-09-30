import { defineConfig } from 'astro/config';
import preact from '@astrojs/preact';
import partytown from '@astrojs/partytown';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import turbolinks from '@astrojs/turbolinks';

export default defineConfig({
  outDir: '../../dist/apps/demo',
  integrations: [preact(), partytown(), sitemap(), tailwind(), turbolinks()],
});
