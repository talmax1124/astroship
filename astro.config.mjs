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
        // Use Netlify’s “Git Gateway” authentication and target our default branch
        backend: {
          name: "git-gateway",
          branch: "latest",
        },
        // Configure where our media assets are stored & served from
        media_folder: "public/assets/blog",
        public_folder: "/assets/blog",
        // Configure the content collections
        collections: [
          {
            name: "posts",
            label: "Blog Posts",
            label_singular: "Blog Post",
            folder: "src/pages/blog",
            create: true,
            delete: true,
            fields: [
              { name: "title", widget: "string", label: "Post Title" },
              {
                name: "date",
                widget: "datetime",
                label: "Post Date",
                dateFormat: "YYYY-MM-DD",
                timeFormat: "HH:mm",
                required: false,
              },
              {
                name: "author",
                widget: "string",
                label: "Author Name",
                required: false,
              },
              {
                name: "authorURL",
                widget: "string",
                label: "Author URL",
                required: false,
              },
              {
                name: "description",
                widget: "string",
                label: "Description",
                required: false,
              },
              { name: "body", widget: "markdown", label: "Post Body" },
              {
                name: "layout",
                widget: "select",
                default: "../../layouts/BlogLayout.astro",
                options: [
                  {
                    label: "Blog Post",
                    value: "../../layouts/BlogLayout.astro",
                  },
                ],
              },

              {
                name: "image",
                widget: "image",
                label: "Post Image",
                required: false,
              },

              {
                name: "imageAlt",
                widget: "string",
                label: "Image Alt Text",
                required: false,
              },
            ],
          },
        ],
      },
    }),
  ],
});
