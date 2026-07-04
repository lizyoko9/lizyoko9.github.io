import { defineConfig } from "astro/config";

import { unified } from "@astrojs/markdown-remark";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import rehypeKatex from "rehype-katex";
import remarkMath from "remark-math";

export default defineConfig({
  site: 'https://lizyoko9.github.io',
  markdown: {
    processor: unified({
      remarkPlugins: [remarkMath],
      rehypePlugins: [rehypeKatex],
    }),
  },
  integrations: [tailwind(), mdx()]
});
