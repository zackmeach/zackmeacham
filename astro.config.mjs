// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://zackmeacham.com',
  redirects: {
    '/projects': '/work',
    '/projects/boeing-modernization': '/work/boeing',
    '/projects/[slug]': '/work/[slug]',
  },
  vite: {
    plugins: [tailwindcss()]
  }
});
