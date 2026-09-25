'use strict';

const express  = require('express');
const nunjucks = require('nunjucks');
const path     = require('path');

const products = require('./data/products');

const app  = express();
const PORT = process.env.PORT || 3000;

/* ── Template engine ──────────────────────────────────────── */
nunjucks.configure(path.join(__dirname, 'views'), {
  autoescape:  true,
  express:     app,
  watch:       process.env.NODE_ENV !== 'production',
  noCache:     process.env.NODE_ENV !== 'production',
});

/* ── Static assets ───────────────────────────────────────── */
app.use(express.static(path.join(__dirname, 'public')));

/* ── Route helpers ───────────────────────────────────────── */

// Renders stub.njk with a consistent context so every coming-soon
// page has navigation and a sensible back-link.
function stub(page, opts = {}) {
  return (_req, res) => res.render('stub.njk', {
    title: `${page} — Epochscapes`,
    page,
    ...opts,
  });
}

/* ── Routes ──────────────────────────────────────────────── */

// Homepage
app.get('/', (req, res) => {
  res.render('index.njk', {
    title:         'Epochscapes — Magnetic Dungeon Tiles & Modular Terrain',
    products:      products.featured,
    elfsightAppId: process.env.ELFSIGHT_APP_ID || null,
  });
});

// ── Shop routes ───────────────────────────────────────────

// Kits listing (stub — full catalog page in a future PR)
app.get('/kits', stub('Kits', {
  description: 'Complete themed terrain kits — tiles, walls, and accessory pieces.',
  backLabel: '← Back to home',
  backHref: '/',
}));

// Tiles listing (stub)
app.get('/tiles', stub('Tile Packs', {
  description: 'Packs of 12 double-sided tiles across dozens of biome combinations.',
  backLabel: '← Back to home',
  backHref: '/',
}));

// Terrain listing (stub)
app.get('/terrain', stub('Terrain', {
  description: 'Detailed terrain pieces — trees, pillars, crystals, walls, and more.',
  backLabel: '← Back to home',
  backHref: '/',
}));

// All-products catalog (stub)
app.get('/products', stub('All Products', {
  description: 'Every Epochscapes kit, tile pack, and terrain accessory.',
  backLabel: '← Back to home',
  backHref: '/',
}));

// Product detail page (stub — real PDP in future PR)
app.get('/products/:id', (req, res) => {
  const product = products.all.find(p => p.id === req.params.id);
  res.render('stub.njk', {
    title:       product ? `${product.name} — Epochscapes` : 'Product — Epochscapes',
    page:        product ? product.name : 'Product Detail',
    description: product ? product.description : 'Full product detail page coming soon.',
    price:       product ? product.priceLabel : null,
    backLabel:   '← Back to products',
    backHref:    '/products',
    // TODO: wire to Hostinger product + checkout when ready
  });
});

// ── Support / legal routes ────────────────────────────────

app.get('/support/shipping',  stub('Shipping & Returns',  { backHref: '/', backLabel: '← Back to home' }));
app.get('/support/faq',       stub('FAQ',                 { backHref: '/', backLabel: '← Back to home' }));
app.get('/legal/privacy',     stub('Privacy Policy',      { backHref: '/', backLabel: '← Back to home' }));
app.get('/legal/terms',       stub('Terms of Service',    { backHref: '/', backLabel: '← Back to home' }));

// ── Other pages ───────────────────────────────────────────

app.get('/about', stub('About', {
  description: 'Learn the story behind Epoch Possibilities LLC and the Epochscapes terrain system.',
  backLabel: '← Back to home',
  backHref: '/',
}));

app.get('/cart', stub('Cart', {
  description: 'Your shopping cart is empty — find some terrain to fill it.',
  backLabel: '← Keep shopping',
  backHref: '/products',
  // TODO: wire to Hostinger cart API
}));

/* ── HTMX partial: product grid ─────────────────────────── */
app.get('/partials/products', (req, res) => {
  const { category } = req.query;
  const items = category
    ? products.all.filter(p => p.category === category)
    : products.featured;
  res.render('partials/product-grid.njk', { products: items });
});

/* ── Start ───────────────────────────────────────────────── */
app.listen(PORT, () => {
  console.log(`\n  Epochscapes → http://localhost:${PORT}\n`);
});
