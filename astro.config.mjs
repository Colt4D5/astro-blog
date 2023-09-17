import { defineConfig } from 'astro/config';
import nodejs from '@astrojs/node';
import react from "@astrojs/react";
import svelte from "@astrojs/svelte";

import node from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
  output: 'server',
  adapter: node({
    mode: "standalone"
  }),
  integrations: [react(), svelte()]
});