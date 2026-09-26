'use strict';

// Mock product catalogue — replace with Hostinger Storefront API later.
// TODO: wire up Hostinger Ecommerce API (catalog sync + checkout redirect)

// Kit card art from Figma Home-v2 "Explore" (node 94:10). artStyle places the
// product render inside the 251×346 card, as percentages of the card box.
const kitCard = {
  'ancient-woodlands-kit': {
    bg:        '/images/home-v2/kit-bg-woodlands.jpg',
    art:       '/images/home-v2/kit-woodlands.png',
    artStyle:  'left:12.66%;top:7.51%;width:74.69%;height:67.34%;',
    nameLines: ['Ancient', 'Woodlands'],
  },
  'crystal-caverns-kit': {
    bg:        '/images/home-v2/kit-bg-caverns.jpg',
    art:       '/images/home-v2/kit-caverns.png',
    artStyle:  'left:13.47%;top:7.51%;width:73.47%;height:70.52%;',
    nameLines: ['Crystal', 'Caverns'],
  },
  'hidden-temple-kit': {
    bg:        '/images/home-v2/kit-bg-temple.jpg',
    art:       '/images/home-v2/kit-temple.png',
    artStyle:  'left:31.02%;top:11.27%;width:41.22%;height:63.01%;',
    nameLines: ['Hidden', 'Temple'],
  },
  'endless-sands-kit': {
    bg:        '/images/home-v2/kit-bg-sands.jpg',
    art:       '/images/home-v2/kit-sands.png',
    artStyle:  'left:31.02%;top:7.51%;width:38.37%;height:68.5%;',
    nameLines: ['Endless', 'Sands'],
  },
};

const products = {

  featured: [
    {
      id:          'hidden-temple-kit',
      name:        'Hidden Temple Kit',
      slug:        '/products/hidden-temple-kit',
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
      slug:        '/products/crystal-caverns-kit',
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
      slug:        '/products/ancient-woodlands-kit',
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
      slug:        '/products/endless-sands-kit',
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
      slug:        '/products/tiles-stone-water',
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
      slug:        '/products/tiles-castle-grass',
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
      slug:        '/products/tiles-sand-water',
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
      slug:        '/products/castle-walls-10',
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

products.featured.forEach(p => {
  if (kitCard[p.id]) p.card = kitCard[p.id];
});

products.all = [...products.featured];

// Figma "Explore Our Kits" order, left to right
products.homeKits = [
  'ancient-woodlands-kit',
  'crystal-caverns-kit',
  'hidden-temple-kit',
  'endless-sands-kit',
].map(id => products.all.find(p => p.id === id));

module.exports = products;
