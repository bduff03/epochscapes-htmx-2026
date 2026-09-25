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
│       ├── header.njk        # Fixed nav (Alpine.js mobile menu)
│       ├── footer.njk        # Footer with address and nav links
│       └── product-grid.njk  # HTMX partial — product card grid
└── public/
    └── css/
        └── style.css    # Compiled Tailwind output (git-ignored)
tailwind.config.js
```

---

## Homepage Sections

1. **Hero** — "Build Your Next Great Adventure" headline, CTA buttons, decorative tile grid
2. **Category split** — Kits card / Tiles card with distinct styling
3. **Feature trio** — Double-Sided Tiles · Magnetic Connection · Modular Terrain
4. **Story block 1** — "Insanely Intuitive to Build (And Change)"
5. **Products** — HTMX-filtered product grid (All / Kits / Tiles / Accessories tabs)
6. **CTA banner** — "Create Battle Maps on the Fly"
7. **Story block 2** — "Craft Immersive Scenes Fast" + biome showcase grid
8. **FAQ** — Alpine.js accordion, 5 common questions
9. **Footer** — Address · Shop links · Legal

---

## HTMX Usage

The product filter tabs use HTMX to swap the grid partial:

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

Reference: Figma `ZS7IbTXovclmwq3ixg08B7` node `22-62` (access required).  
Fallback: live site https://epochscapes.com was used for structure, copy, and section order.  
Visual theme: dark navy/charcoal background, Cinzel display font, gold `#c9a227` accent, CSS-only product thumbnails pending real product photography.

---

## Tech Stack

| Layer | Choice |
|---|---|
| Server | Express 4 |
| Templates | Nunjucks 3 |
| Styles | Tailwind CSS 3 (compiled) |
| Interactivity | HTMX 1.9 (partials), Alpine.js 3 (mobile nav, FAQ accordion) |
| Runtime | Node.js ≥ 18 |
| Package manager | pnpm (or npm) |
