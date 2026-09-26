/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/views/**/*.njk',
    './src/data/**/*.js',
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
      // Named after the epochscapes.com styles in Figma Home-v2 (node 22:62)
      colors: {
        brand: {
          green:         '#509041', // Fern Green
          'green-dark':  '#335f28',
          'green-light': '#8ba958', // kit card accent line
          red:           '#be2e17', // Thunderbird
          'red-light':   '#ee4d20', // Pomegranate
          'red-dark':    '#9c2513',
          black:         '#000000',
        },
        ink: {
          DEFAULT: '#333333', // Mine Shaft
          muted:   '#666666', // Dove Gray
          deep:    '#040404',
        },
        gallery:   '#efefef',
        alabaster: '#f7f7f7',
        placeholder: '#d9d9d9',
        instagram: '#4c893d',
      },
      fontFamily: {
        display: ['Montserrat', 'Helvetica Neue', 'Arial', 'sans-serif'],
        sans:    ['Montserrat', 'Helvetica Neue', 'Arial', 'sans-serif'],
        open:    ['"Open Sans"', 'Helvetica Neue', 'Arial', 'sans-serif'],
        roboto:  ['Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
        kameron: ['Kameron', 'Georgia', 'serif'],
      },
      maxWidth: {
        container: '1400px',
        home:      '1060px',
      },
      animation: {
        'fade-up':    'fadeUp 0.7s cubic-bezier(0.22, 1, 0.36, 1) both',
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
