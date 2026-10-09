# Dubtek — Marketing Site

A static, single-page marketing site for a mobile app development studio, built with
Astro + Tailwind CSS. No backend, no CMS, no client-side framework — just fast,
semantic HTML shipped as static files.

## Stack

- [Astro](https://astro.build) (SSG, `output: "static"`)
- Tailwind CSS (via `@astrojs/tailwind`)
- TypeScript
- `@astrojs/sitemap` for automatic sitemap generation

## Project structure

```
src/
  components/       Landing (the hero) and LavaBackground (WebGL canvas)
  layouts/
    BaseLayout.astro   <head>, SEO tags, JSON-LD
  pages/
    index.astro        Homepage — the Landing lava hero
    404.astro          Not-found page — Landing with 404 copy
  styles/
    global.css          Tailwind layers + shared classes (.wrap, .btn, .btn-aqua)
public/
  favicon.ico          Tab icon (16/32/48px) — white D on a lava-purple tile
  apple-touch-icon.png iOS home-screen / bookmark icon (180×180)
  favicon/icon-192.png High-res icon for Android and pinned tabs
  images/og-cover.png   Social share image (1200×630, rendered from the lava hero)
  icons/
  robots.txt
```

## Run locally

Requires Node.js 18.17+ (20 LTS recommended).

```bash
yarn install
yarn dev
```

The site will be available at `http://localhost:4321`.

## Build for production

```bash
yarn build
```

Static output is written to `dist/`. Preview it locally with:

```bash
yarn preview
```

## Before you deploy — replace these placeholders

1. **Business details** — company name, tagline, and copy live in
   `src/components/*.astro`. Search for "Dubtek" to find every mention.
2. **Domain** — the production URL is `SITE_URL` in `astro.config.mjs`; canonical, social,
   JSON-LD, and sitemap URLs derive from it. Also update the sitemap line in `public/robots.txt`.
3. **Social preview image** — `public/images/og-cover.png` (1200×630) is rendered from
   the lava hero; replace it with a final brand export when you have one.
4. **Favicon** — generated from `src/assets/images/dubtek_D_white.png`; regenerate the
   three icon files if the mark changes.
5. **Contact details** — the Contact button email is in `src/components/Landing.astro`.

## Deploying

The site builds to plain static files (`dist/`), so any static host works.

### Netlify

- Build command: `yarn build`
- Publish directory: `dist`
- (Optional) add a `netlify.toml` with the same values if you prefer config-as-code.

### Vercel

- Framework preset: **Astro** (auto-detected)
- Build command: `yarn build`
- Output directory: `dist`

### Cloudflare Pages

- Build command: `yarn build`
- Build output directory: `dist`

### GitHub Pages

- Set `site` (and `base` if deploying to a project page, e.g.
  `https://username.github.io/repo-name`) in `astro.config.mjs`.
- Build with `yarn build` and publish the `dist/` folder via GitHub Actions or
  the `gh-pages` branch.

## Performance notes

- No client-side JavaScript framework is used — the only script is the WebGL lava
  background.
- Fonts are loaded from Google Fonts with `preconnect` + `font-display: swap`.
- `prefers-reduced-motion` is respected globally.
