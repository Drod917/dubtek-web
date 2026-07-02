import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";

const SITE_URL = "https://www.dubtek.io";

export default defineConfig({
  site: SITE_URL,
  base: "/",
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
    sitemap(),
  ],
  output: "static",
  compressHTML: true,
});
