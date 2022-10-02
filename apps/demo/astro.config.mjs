import partytown from '@astrojs/partytown';
import preact from '@astrojs/preact';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import turbolinks from '@astrojs/turbolinks';
import { defineConfig } from 'astro/config';
import { dirname, resolve } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  outDir: '../../dist/apps/demo',
  integrations: [preact(), partytown(), sitemap(), tailwind(), turbolinks()],

  vite: {
    resolve: {
      alias: {
        '~': resolve(__dirname, './src'),
      },
    },
    ssr: {
      external: [],
    },
  },
});
