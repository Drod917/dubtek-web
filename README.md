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
  components/       Section components (Hero, Services, Process, FAQ, ...)
  layouts/
    BaseLayout.astro   <head>, SEO tags, JSON-LD, global scroll-reveal script
  pages/
    index.astro        Homepage — assembles all sections
    404.astro
  styles/
    global.css          Tailwind layers + reusable component classes (.btn, .card, ...)
public/
  favicon/favicon.svg
  images/og-cover.svg   Placeholder social share image — swap for your own
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
2. **Domain** — set your real production URL in `astro.config.mjs` (`SITE_URL`) and
   in the `LocalBusiness` JSON-LD block in `src/layouts/BaseLayout.astro`.
3. **Social preview image** — replace `public/images/og-cover.svg` with a real
   1200×630 PNG/JPG export of your brand, and update the `image` prop default in
   `BaseLayout.astro`.
4. **Favicon** — swap `public/favicon/favicon.svg` for your own mark.
5. **Contact details** — email address and social links are in
   `src/components/CTA.astro` and `src/components/Footer.astro`.
6. **Screenshots** — the case studies in `src/components/Projects.astro` use CSS
   gradients as screenshot placeholders; replace the placeholder `<div>` with real
   `<img>` / `<Image>` app screenshots when you have them.

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

- No client-side JavaScript framework is used — the only scripts are the mobile
  nav-scroll effect and a small `IntersectionObserver` for scroll-reveal
  animations, both under a kilobyte.
- Fonts are loaded from Google Fonts with `preconnect` + `font-display: swap`.
- `prefers-reduced-motion` is respected globally.
- All interactive disclosure (FAQ) uses native `<details>/<summary>` — no JS
  required, fully keyboard and screen-reader accessible.
