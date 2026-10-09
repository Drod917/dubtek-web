import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";

// GitHub Pages serves the apex domain (www is only a DNS forward), so absolute URLs must use it.
const SITE_URL = "https://dubtek.io";

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
