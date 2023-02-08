import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import image from "@astrojs/image";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import react from "@astrojs/react";
import NetlifyCMS from "astro-netlify-cms";
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
    NetlifyCMS({
      config: {
        backend: {
          name: "git-gateway",
          branch: "main",
        },
        media_folder: "public/uploads",
        public_folder: "/uploads",

        collections: [
          {
            name: "blog",
            label: "Blog",
            folder: "src/pages/blog",
            create: true,
            slug: "{{year}}-{{month}}-{{day}}-{{slug}}",
            fields: [
              {
                label: "Title",
                name: "title",
                widget: "string",
              },
              {
                label: "Date",
                name: "date",
                widget: "datetime",
              },
              {
                label: "Body",
                name: "body",
                widget: "markdown",
              },

              {
                label: "Layout",
                name: "layout",
                widget: "hidden",
                default: "layouts/Post.astro",
              },

              {
                label: "Slug",
                name: "slug",
                widget: "hidden",
                default: "{{year}}-{{month}}-{{day}}-{{slug}}",
              },

              {
                label: "Publish",
                name: "publish",
                widget: "hidden",
                default: "true",
              },

              {
                label: "Tags",
                name: "tags",
                widget: "list",
              },

              {
                label: "Image",
                name: "image",
                widget: "image",
                required: false,
              },

              {
                label: "Description",
                name: "description",
                widget: "string",
                required: false,
              },

              {
                label: "Author",
                name: "author",
                widget: "string",
                required: false,
              },

              {
                label: "Category",
                name: "category",
                widget: "string",
                required: false,
              },

              {
                label: "Featured",
                name: "featured",
                widget: "boolean",
                required: false,
              },
            ],
          },
        ],
      },
    }),
  ],
});
