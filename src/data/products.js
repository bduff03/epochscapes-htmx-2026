'use strict';

// Mock product catalogue — replace with Hostinger Storefront API later.
// TODO: wire up Hostinger Ecommerce API (catalog sync + checkout redirect)

const products = {

  featured: [
    {
      id:          'hidden-temple-kit',
      name:        'Hidden Temple Kit',
      slug:        '/kits/hidden-temple',
      price:       { min: 95, max: 110 },
      priceLabel:  '$95 – $110',
      category:    'kits',
      badge:       'Best Seller',
      thumb:       'thumb-kits',
      description: 'Crumbling walls, mossy pillars, and ancient altar pieces — everything you need to run a temple delve.',
    },
    {
      id:          'crystal-caverns-kit',
      name:        'Crystal Caverns Kit',
      slug:        '/kits/crystal-caverns',
      price:       { min: 95, max: 110 },
      priceLabel:  '$95 – $110',
      category:    'kits',
      badge:       null,
      thumb:       'thumb-kits',
      description: 'Jagged crystal formations and glittering cave floors that bring any underground lair to life.',
    },
    {
      id:          'ancient-woodlands-kit',
      name:        'Ancient Woodlands Kit',
      slug:        '/kits/ancient-woodlands',
      price:       { min: 95, max: 110 },
      priceLabel:  '$95 – $110',
      category:    'kits',
      badge:       'New',
      thumb:       'thumb-kits',
      description: 'Dense tree canopy tiles, root paths, and forest floor pieces for open-world wilderness sessions.',
    },
    {
      id:          'endless-sands-kit',
      name:        'Endless Sands Kit',
      slug:        '/kits/endless-sands',
      price:       { min: 95, max: 110 },
      priceLabel:  '$95 – $110',
      category:    'kits',
      badge:       null,
      thumb:       'thumb-kits',
      description: 'Dunes, oasis tiles, and desert ruins for campaigns set in arid wastelands.',
    },
    {
      id:          'tiles-stone-water',
      name:        'Stone & Water — Pack of 12',
      slug:        '/tiles/stone-water',
      price:       { min: 30, max: 35 },
      priceLabel:  '$30 – $35',
      category:    'tiles',
      badge:       null,
      thumb:       'thumb-tiles',
      description: 'Reversible tiles: weathered stone on one side, flowing water on the other.',
    },
    {
      id:          'tiles-castle-grass',
      name:        'Castle & Grass — Pack of 12',
      slug:        '/tiles/castle-grass',
      price:       { min: 30, max: 35 },
      priceLabel:  '$30 – $35',
      category:    'tiles',
      badge:       null,
      thumb:       'thumb-tiles',
      description: 'Castle courtyard and lush meadow in a single pack — great for siege adventures.',
    },
    {
      id:          'tiles-sand-water',
      name:        'Sand & Water — Pack of 12',
      slug:        '/tiles/sand-water',
      price:       { min: 30, max: 35 },
      priceLabel:  '$30 – $35',
      category:    'tiles',
      badge:       null,
      thumb:       'thumb-tiles',
      description: 'Desert shores and shallow waters — perfect for coastal or riverside encounters.',
    },
    {
      id:          'castle-walls-10',
      name:        'Castle Walls — Pack of 10',
      slug:        '/accessories/castle-walls',
      price:       { min: 8, max: 10 },
      priceLabel:  '$8 – $10',
      category:    'accessories',
      badge:       null,
      thumb:       'thumb-accessories',
      description: 'Straight and corner wall pieces that stack neatly and connect magnetically.',
    },
  ],

  all: [], // populated below
};

products.all = [...products.featured];

module.exports = products;
