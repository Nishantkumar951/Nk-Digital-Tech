import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://www.nkdigitaltech.net',
  trailingSlash: 'always',
  integrations: [tailwind()],
  output: 'static',
});
