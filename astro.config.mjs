import { defineConfig } from 'astro/config';
import react from "@astrojs/react";
import yaml from '@rollup/plugin-yaml';

export default defineConfig({
  integrations: [react()],
  assetsInclude: ['**/*.yml'],
  vite: {
    plugins: [yaml()]
  }
});