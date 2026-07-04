# Dubtek design system

Written reference for the tokens and component classes used across `src/components/*.astro`. This documents what
already exists in `tailwind.config.mjs` and `src/styles/global.css` — it doesn't introduce anything new. For a live,
rendered version of the same system, run `yarn dev` and visit `/style-guide` (not linked from the site nav —
reference only, marked `noindex`).

If you're adding a new section component, this is what "consistent with the rest of the site" means concretely.

## Colors

| Token | Use |
|---|---|
| `ink` / `ink-soft` / `ink-faint` | Primary / secondary / tertiary text. Never use raw gray hex values. |
| `surface` / `surface-raised` / `surface-border` | Page background / alternate section background / hairline borders. |
| `accent-{50,100,400,500,600,700,900}` | Brand indigo. `accent-500` is the primary brand color; `50`/`100` for tints (icon badge backgrounds), `600`/`700`/`900` for depth (gradients, hover states). |
| `emerald-{400,500,600}` | Secondary accent — used sparingly (e.g. a "why choose us" bullet icon, one project gradient). Not a general-purpose second brand color. |

## Typography

- `font-display` (Manrope) — headings. Applied automatically to `h1`–`h4` in `global.css`, no need to add the class manually.
- `font-body` (Inter) — body copy, the default on `<body>`.
- `font-mono` (JetBrains Mono) — small uppercase labels: eyebrows, tag pills, step numbers. Almost always paired with `uppercase tracking-[0.16em]` or similar.
- `text-display-xl/lg/md` — the three heading sizes, each a `clamp()` with tuned line-height/letter-spacing. Use `display-lg` for section headings (the common case), `display-xl` for the hero only, `display-md` for smaller callouts.

## Layout & spacing

- `.wrap` — content max-width container (`1240px`, `maxWidth.content`), with responsive side padding. Every section's outermost content wrapper.
- `.section-pad` — vertical rhythm for full-width sections (`py-20 sm:py-28`).
- Sections alternate `bg-surface` / `bg-surface-raised` to create visual rhythm without borders — check the surrounding sections in `src/pages/index.astro` before picking one for a new section.

## Shadows & radius

- `shadow-soft` — default resting elevation for cards/buttons.
- `shadow-card` — slightly heavier, for `.card`.
- `shadow-lift` — hover/active elevation (indigo-tinted), paired with a `-translate-y` on hover.
- `shadow-glow` — stronger, indigo halo — used sparingly for the single most important element on a page (e.g. a hero visual).
- `rounded-xl2` (1.25rem) / `rounded-xl3` (1.75rem) — the two "soft" radii used for cards and large containers, above Tailwind's default scale.

## Component classes (`src/styles/global.css`)

- **`.eyebrow`** — small uppercase mono label, used above a section heading to introduce it (e.g. "Services", "Process").
- **`.btn` / `.btn-primary` / `.btn-secondary` / `.btn-ghost`** — `.btn` holds the shared shape/transition; the variant sets emphasis.
  - `.btn-primary` — the one action that matters most in a section (usually a CTA). Gradient fill, lifts on hover.
  - `.btn-secondary` — an alternate action of equal visual weight (outlined).
  - `.btn-ghost` — low-emphasis inline action ("learn more").
- **`.card` / `.card-hover`** — `.card` is a static bordered container with `shadow-card`. Add `.card-hover` when the card itself is the interactive target (lifts + tints border on hover); omit it for cards that just group content.
- **`.reveal`** — add to a section-level element to fade/slide it in on scroll. Requires no extra script — `BaseLayout.astro` runs a single `IntersectionObserver` that adds `.is-visible` to every `.reveal` element the first time it enters the viewport.

## Adding a new section

1. Create `src/components/YourSection.astro`, add markup using the tokens/classes above (not raw hex values or arbitrary Tailwind sizes — see `CLAUDE.md`).
2. Wrap content in `.wrap`, pad the section with `.section-pad`, pick a background that alternates with its neighbors.
3. Use `.eyebrow` + `text-display-lg` for the section heading, `text-ink-soft` for the supporting paragraph.
4. Add `.reveal` to elements that should animate in on scroll.
5. Import and place it in `src/pages/index.astro`.

## Known ad-hoc values

These raw arbitrary-value classes recur across components without a named token. Listed here as known debt rather
than silently promoted to tokens — that would mean touching every consuming file, which is out of scope for a
documentation-only pass.

- `text-[0.7rem]` — uppercase/mono micro-labels, used in `.eyebrow` (`global.css`), `TrustedBy.astro`, and the tag pills in `Projects.astro`.
- `text-[0.95rem]` — comfortable body/button copy, used in `.btn` (`global.css`), `Services.astro`, `Process.astro`, and `Testimonials.astro`.
