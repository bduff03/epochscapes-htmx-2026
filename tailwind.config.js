/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/views/**/*.njk',
    './src/public/js/**/*.js',
  ],
  safelist: [
    'thumb-kits',
    'thumb-tiles',
    'thumb-accessories',
    'filter-btn',
    'filter-btn-active',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          green:         '#4a7c59',
          'green-light': '#5b9469',
          'green-dark':  '#3a6148',
          red:           '#e74c3c',
          'red-dark':    '#c0392b',
          black:         '#000000',
          'text-primary':   '#1a1a1a',
          'text-secondary': '#666666',
          'text-light':     '#999999',
        },
      },
      fontFamily: {
        display: ['Montserrat', 'Helvetica Neue', 'Arial', 'sans-serif'],
        sans:    ['Montserrat', 'Helvetica Neue', 'Arial', 'sans-serif'],
      },
      fontSize: {
        'hero':    ['4.5rem',   { lineHeight: '1.02', letterSpacing: '-0.015em' }],
        'display': ['2.625rem', { lineHeight: '1.08', letterSpacing: '-0.01em'  }],
        'h3':      ['1.125rem', { lineHeight: '1.35', letterSpacing: '0.04em'   }],
      },
      maxWidth: {
        'container': '1400px',
      },
      animation: {
        'fade-up':    'fadeUp 0.5s ease-out both',
        'pulse-slow': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(16px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};
