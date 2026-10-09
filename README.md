# dubtek.io

Source for [dubtek.io](https://dubtek.io), the Dubtek studio site. Built with Astro and Tailwind, deployed to GitHub Pages.

## Develop

Needs Node 18.17 or newer.

```bash
yarn install
yarn dev       # http://localhost:4321
yarn build     # static output in dist/
yarn preview   # serve dist/ locally
```

## Layout

```
src/
  components/
    Landing.astro          hero: logo, status bar, terminal lines, button
    LavaBackground.astro   WebGL lava canvas
  layouts/BaseLayout.astro head tags, structured data, fonts
  pages/
    index.astro
    404.astro              Landing without the logo, with 404 copy
  styles/
    global.css
    palettes.ts            lava palettes, SITE_LAVA, edge colors for theme-color
public/
  favicon.ico, apple-touch-icon.png, favicon/icon-192.png
  images/og-cover.png      1200×630 share image
  robots.txt
```

## Notes

- The domain is `SITE_URL` in `astro.config.mjs`. Canonical, social, structured-data, and sitemap URLs come from it; the sitemap line in `public/robots.txt` is hardcoded.
- The contact address is in `src/components/Landing.astro`.
- Favicons are generated from `src/assets/images/dubtek_D_white.png` on a `#5b3fd6` tile.
- Every push to `main` builds and deploys via `.github/workflows/deploy.yml`.
