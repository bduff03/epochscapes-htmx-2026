'use strict';

const express  = require('express');
const nunjucks = require('nunjucks');
const path     = require('path');

const products = require('./data/products');

const app  = express();
const PORT = process.env.PORT || 3000;

/* ── Template engine ──────────────────────────────────────── */
const env = nunjucks.configure(path.join(__dirname, 'views'), {
  autoescape:  true,
  express:     app,
  watch:       process.env.NODE_ENV !== 'production',
  noCache:     process.env.NODE_ENV !== 'production',
});

/* ── Static assets ───────────────────────────────────────── */
app.use(express.static(path.join(__dirname, 'public')));

/* ── Routes ──────────────────────────────────────────────── */

// Homepage
app.get('/', (req, res) => {
  res.render('index.njk', {
    title:          'Epochscapes — Magnetic Dungeon Tiles & Modular Terrain',
    products:       products.featured,
    // Elfsight social-feed widget ID (set ELFSIGHT_APP_ID in .env to activate)
    elfsightAppId:  process.env.ELFSIGHT_APP_ID || null,
  });
});

// HTMX partial: product grid (ready for category filter)
app.get('/partials/products', (req, res) => {
  const { category } = req.query;
  const items = category
    ? products.all.filter(p => p.category === category)
    : products.featured;
  res.render('partials/product-grid.njk', { products: items });
});

// Stub routes so nav links resolve during dev
app.get('/kits',   (_req, res) => res.redirect('/#categories'));
app.get('/tiles',  (_req, res) => res.redirect('/#categories'));
app.get('/cart',   (_req, res) => res.render('stub.njk', { page: 'Cart', title: 'Cart — Epochscapes' }));
app.get('/about',  (_req, res) => res.render('stub.njk', { page: 'About', title: 'About — Epochscapes' }));

/* ── Start ───────────────────────────────────────────────── */
app.listen(PORT, () => {
  console.log(`\n  Epochscapes running at http://localhost:${PORT}\n`);
});
