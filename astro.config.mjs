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
  adapter: netlify({
    publish: "src/pages",
  }),
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
            name: "posts",
            label: "Posts",
            folder: "src/pages/posts",
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
            ],
          },

          {
            name: "pages",
            label: "Pages",
            folder: "src/pages",
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
            ],
          },

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

        // This is the default config for the Netlify CMS
        // You can find more information about the config options here:
        // https://www.netlifycms.org/docs/configuration-options/

        // If you want to add a custom widget, you can do so here.
        // widgets: [],

        // If you want to add a custom preview template, you can do so here.
        // previewTemplates: [],

        // If you want to extend or override any of the built-in
        // Netlify CMS styles, you can do so here.
        // styles: [],

        // If you want to add custom scripts to the Netlify CMS UI, you can do so here.
        // scripts: [],

        // If you want to add custom styles to the Netlify CMS UI, you can do so here.
        // stylesheets: [],

        // If you want to add custom icons to the Netlify CMS UI, you can do so here.
        // customIcons: [],

        // If you want to add custom fields to the Netlify CMS UI, you can do so here.
        // customFields: [],

        // If you want to add custom widgets to the Netlify CMS UI, you can do so here.
        // customWidgets: [],

        // If you want to add custom previews to the Netlify CMS UI, you can do so here.
        // customPreviews: [],
      },
    }),
  ],
});
