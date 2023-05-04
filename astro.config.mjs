import { defineConfig } from 'astro/config';
const SITE_URL = import.meta.env.SITE_URL

// https://astro.build/config
export default defineConfig({
  site: SITE_URL
});
