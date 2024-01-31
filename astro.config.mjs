import { defineConfig } from 'astro/config';

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: "https://shimmering-croquembouche-a2552e.netlify.app",
  integrations: [react()]
});