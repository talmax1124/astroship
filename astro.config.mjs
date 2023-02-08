import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import image from "@astrojs/image";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import react from "@astrojs/react";
// import NetlifyCMS from "astro-netlify-cms";
import netlify from "@astrojs/netlify";

export default defineConfig({
  site: "https://knighttimesnews.com",
  output: "server",
  adapter: netlify(),
  integrations: [
    tailwind(),
    image({
      serviceEntryPoint: "@astrojs/image/sharp",
    }),
    mdx(),
    sitemap(),
    react(),
  ],
});
