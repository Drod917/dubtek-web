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

- `src/pages/index.astro` is the entire site: it imports `BaseLayout` and every section component from `src/components/` and assembles them in order (Navbar, Hero, TrustedBy, Services, WhyChooseUs, Process, Projects, Testimonials, FAQ, CTA, Footer). To reorder or add a section, edit this file.
- `src/layouts/BaseLayout.astro` owns everything in `<head>`: SEO meta tags, Open Graph/Twitter cards, the `LocalBusiness` JSON-LD block, Google Fonts loading, and imports `src/styles/global.css`. It also contains the one piece of global client-side JS: an `IntersectionObserver` that adds `.is-visible` to any `.reveal` element as it scrolls into view (used for scroll-reveal animations across sections).
- Each file in `src/components/` is a self-contained section (`.astro`) with its own markup and scoped styling via Tailwind classes — there is no shared component state or props flowing between sections.
- `src/styles/global.css` defines Tailwind layers plus reusable component classes: `.wrap` (content max-width container), `.section-pad`, `.btn`/`.btn-primary`/`.btn-secondary`/`.btn-ghost`, `.card`/`.card-hover`, `.eyebrow`, and `.reveal`/`.reveal.is-visible` (paired with the `IntersectionObserver` in `BaseLayout.astro`). Prefer these over ad-hoc utility combos when styling new sections.
- `tailwind.config.mjs` defines the design tokens: `ink`/`surface`/`accent`/`emerald` color scales, `display`/`body`/`mono` font families (Manrope/Inter/JetBrains Mono), custom `display-xl/lg/md` font sizes, and custom shadows (`soft`, `card`, `lift`, `glow`). Use these tokens rather than raw hex values or arbitrary Tailwind sizes.
- `DESIGN_SYSTEM.md` documents the token/component system above with usage guidance; `src/pages/style-guide.astro` (`/style-guide`, not linked from nav, `noindex`) renders it live from the actual config for a visual reference.
- Path aliases (`tsconfig.json`): `@/*` → `src/*`, `@components/*` → `src/components/*`, `@layouts/*` → `src/layouts/*`.
- No client JS framework is used anywhere — interactive bits (FAQ disclosure, mobile nav) rely on native HTML (`<details>/<summary>`) or small inline `<script>` blocks in the relevant `.astro` component, kept intentionally tiny.

## Content and placeholders

This started as a templated marketing site; several placeholders may still need real content when working on copy/branding tasks:
- Business details/copy live inline in `src/components/*.astro` (search for "Dubtek").
- Production domain is set via `SITE_URL` in `astro.config.mjs` and mirrored in the `LocalBusiness` JSON-LD in `BaseLayout.astro`.
- `public/images/og-cover.svg` is a placeholder OG image; `public/favicon/favicon.svg` is a placeholder favicon.
- Contact/social links live in `src/components/CTA.astro` and `src/components/Footer.astro`.
- `src/components/Projects.astro` case studies use CSS-gradient placeholders in place of real app screenshots.

## Deployment

`.github/workflows/deploy.yml` builds with `yarn install && yarn build` and deploys `dist/` to GitHub Pages on every push to `main`.
