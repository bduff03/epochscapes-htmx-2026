# Epochscapes — HTMX Marketing Homepage

Magnetic dungeon tiles & modular TTRPG terrain for **Epoch Possibilities LLC**.

Built with **Express + Nunjucks + Tailwind CSS + HTMX** — no React, no build step required to run.

---

## Quick Start

```bash
git clone https://github.com/bduff03/epochscapes-htmx-2026.git
cd epochscapes-htmx-2026

pnpm install          # or: npm install

pnpm dev              # or: npm run dev
```

Open **http://localhost:3000** in your browser.

> **`pnpm dev`** runs two processes in parallel:
> - `nodemon src/server.js` — Express server with live-reload
> - `tailwindcss --watch` — Tailwind CSS watcher (rebuilds on template changes)

---

## Scripts

| Command | Description |
|---|---|
| `pnpm dev` | Start dev server + Tailwind watcher (port 3000) |
| `pnpm start` | Start production server (no watcher) |
| `pnpm build:css` | One-shot minified CSS build |

Set `PORT=xxxx` in `.env` to change the dev port.

---

## Project Structure

```
src/
├── server.js            # Express app, route definitions
├── data/
│   └── products.js      # Mock product catalogue (replace with Hostinger API)
├── css/
│   └── main.css         # Tailwind entry point (compiled → public/css/style.css)
├── views/
│   ├── base.njk         # HTML skeleton (HTMX, Alpine.js, fonts)
│   ├── index.njk        # Homepage — all sections
│   ├── stub.njk         # Placeholder for future interior pages
│   └── partials/
│       ├── header.njk        # Overlay nav over the hero (Alpine.js dropdowns + mobile menu)
│       ├── footer.njk        # Slim Figma footer: links, address, payment icons
│       ├── ink-divider.njk   # inkDivider() macro — black ink-bleed section seams
│       ├── brush-mask.njk    # brushMask() macro — photo framed by a white brush-stroke PNG
│       └── product-grid.njk  # HTMX partial — product card grid
└── public/
    ├── images/home-v2/  # Figma Home-v2 exports (photos, kit art, ink/brush overlays, icons)
    └── css/
        └── style.css    # Compiled Tailwind output (git-ignored)
tailwind.config.js
```

---

## Homepage Sections

1. **Hero + CTA bar** — "Build Your Next Great Adventure" over the hero photo, with a floating Kits / Tiles / Terrain / Shop tile bar
2. **Features** — "Landscapes as Diverse as Your Imagination", brush-masked POV photo, and a card with Double-Sided Tiles · Magnetic Connection · Modular Terrain
3. **Explore Our Kits** — black band between ink seams with the four kit package cards
4. **Benefits + Modular carousel** — "Insanely Intuitive to Build & Change", brush-masked lifestyle photo, and an Alpine scroll-snap product carousel
5. **Mid CTA** — "Create Battle Maps on the Fly"
6. **Stay Updated** — social buttons and an Instagram feed card (Elfsight widget when `ELFSIGHT_APP_ID` is set, placeholder grid otherwise)
7. **Join the Adventure** — name + email signup (submit is stubbed)
8. **Footer** — Terms · Returns · Privacy · Contact · Account · Cart, address, payment icons

Social profile URLs live in `src/server.js` (`social`) and are placeholders until the real handles are confirmed.

---

## HTMX Usage

The homepage no longer shows the filter gallery (Figma Home-v2 has none), but the partial route is kept for the upcoming shop pages. Filter tabs swap the grid like this:

```html
<button
  hx-get="/partials/products?category=kits"
  hx-target="#product-grid"
  hx-swap="innerHTML"
  hx-indicator="#product-loading">Kits</button>
```

Route `GET /partials/products` (with optional `?category=`) returns the rendered partial.  
This is the main HTMX hook — ready to be extended for pagination, search, and cart interactions.

---

## Hostinger Ecommerce (TODO)

Wiring the real storefront is **out of scope for this PR** but the hooks are in place:

- `src/data/products.js` — replace the static array with a call to `GET /api/products` from the Hostinger Storefront API
- `src/views/partials/product-grid.njk` — product card "View →" links should become Hostinger checkout redirect URLs
- Add `HOSTINGER_STORE_ID` and `HOSTINGER_API_KEY` to `.env` (see `.env.example`)
- Cart route (`/cart`) and checkout flow belong in a follow-up PR

---

## Design

Reference: Figma [Epochscapes Site Design v4 — Home-v2](https://www.figma.com/design/ZS7IbTXovclmwq3ixg08B7/Epochscapes-Site-Design-v4?node-id=22-62) (node `22:62`, 1440px frame, 1060px content column).

| Token | Value |
|---|---|
| Fonts | Montserrat (headings, body) · Open Sans (nav, labels, footer) · Roboto Bold (buttons) · Kameron ("Follow") |
| Green | `#509041` → `#335f28` gradient (active CTA tile, social buttons) |
| Red | `#be2e17` → `#ee4d20` gradient (all CTA buttons) |
| Neutrals | Ink `#333`, muted `#666`, gallery `#efefef`, alabaster `#f7f7f7` |

All imagery comes from Figma exports in `src/public/images/home-v2/`. Section seams use `fade-transition-black.png` through the `inkDivider()` macro (`mirror` for light→dark, `flip` for dark→light); photo frames use the `sight-seeing-44/45` brush PNGs through `brushMask()`.

---

## Tech Stack

| Layer | Choice |
|---|---|
| Server | Express 4 |
| Templates | Nunjucks 3 |
| Styles | Tailwind CSS 3 (compiled) |
| Interactivity | HTMX 1.9 (partials), Alpine.js 3 (nav dropdowns, mobile menu, carousel) |
| Runtime | Node.js ≥ 18 |
| Package manager | pnpm (or npm) |
