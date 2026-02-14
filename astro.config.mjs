import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

export default defineConfig({
  site: 'https://lizyoko9.github.io',
  integrations: [tailwind()]
});