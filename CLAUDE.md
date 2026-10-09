# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

A static, single-page marketing site for Dubtek (a mobile app development studio), built with Astro + Tailwind CSS. No backend, no CMS, no client-side framework — just semantic HTML shipped as static files (`output: "static"` in `astro.config.mjs`).

## Commands

Package manager is **yarn** (see `.github/workflows/deploy.yml` and the `npm -> yarn` migration commit) even though `README.md` still shows `npm` examples — use `yarn` for actual work.

```bash
yarn install
yarn dev       # astro dev, http://localhost:4321
yarn build     # astro build -> dist/
yarn preview   # serve the built dist/ locally
```

There is no lint, format, or test tooling configured in this repo.

## Architecture

- `src/pages/index.astro` is the entire site: it renders `BaseLayout` around `Landing.astro`, the full-screen lava hero (logo, status bar, terminal lines, Contact button over `LavaBackground.astro`). It also sets the palette/lift and derives the browser chrome colors from them via `lavaEdgeColors()` in `src/styles/palettes.ts`. `src/pages/404.astro` is a standalone not-found message.
- `src/layouts/BaseLayout.astro` owns everything in `<head>`: SEO meta tags, Open Graph/Twitter cards, the `LocalBusiness` JSON-LD block, Google Fonts loading, and imports `src/styles/global.css`.
- Each file in `src/components/` is self-contained (`.astro`) with its own markup and Tailwind styling; data flows only through props (e.g. palette and lift from `index.astro` into `Landing` and `LavaBackground`).
- `src/styles/global.css` defines Tailwind layers plus reusable component classes: `.wrap` (content max-width container), `.btn`/`.btn-primary`, and `.eyebrow`. Prefer these over ad-hoc utility combos.
- `tailwind.config.mjs` defines the design tokens: `ink`/`surface`/`accent`/`aqua` colors, `display`/`body`/`mono`/`pixel`/`terminal` font families (Manrope/Inter/JetBrains Mono/Silkscreen/VT323), a `display-lg` font size, and custom shadows (`soft`, `lift`). Use these tokens rather than raw hex values or arbitrary Tailwind sizes.
- Path aliases (`tsconfig.json`): `@/*` → `src/*`, `@components/*` → `src/components/*`, `@layouts/*` → `src/layouts/*`.
- No client JS framework is used anywhere — the only client script is the lava WebGL canvas, an inline `<script>` in `LavaBackground.astro`.

## Content and placeholders

This started as a templated marketing site; several placeholders may still need real content when working on copy/branding tasks:
- Business details/copy live inline in `src/components/*.astro` (search for "Dubtek").
- Production domain is set via `SITE_URL` in `astro.config.mjs` and mirrored in the `LocalBusiness` JSON-LD in `BaseLayout.astro`.
- `public/images/og-cover.svg` is a placeholder OG image; `public/favicon/favicon.svg` is a placeholder favicon.
- The Contact button's email lives in `src/components/Landing.astro`.

## Deployment

`.github/workflows/deploy.yml` builds with `yarn install && yarn build` and deploys `dist/` to GitHub Pages on every push to `main`.
