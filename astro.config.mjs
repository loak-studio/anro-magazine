import { defineConfig } from 'astro/config';
import compress from "astro-compress";
import sitemap from "@astrojs/sitemap";
import astroI18next from "astro-i18next";
import tailwind from "@astrojs/tailwind";
import node from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
  site: "https://anro-magazine.com",
  integrations: [compress(), sitemap(), tailwind(), astroI18next()],
  output: "server",
  adapter: node({
    mode:'standalone'
  })
});