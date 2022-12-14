import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import astroI18next from "astro-i18next";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: "https://anro-magazine.com",
  integrations: [sitemap(), tailwind(), astroI18next()],
});
