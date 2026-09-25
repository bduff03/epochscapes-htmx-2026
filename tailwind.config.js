/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/views/**/*.njk',
    './src/public/js/**/*.js',
  ],
  safelist: [
    // Dynamic product thumbnail gradient classes
    'thumb-kits',
    'thumb-tiles',
    'thumb-accessories',
    // Dynamic product accent line classes
    'accent-kits',
    'accent-tiles',
    'accent-accessories',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          green:       '#4a7c59',
          'green-light': '#5b9469',
          'green-dark':  '#3a6148',
          red:         '#e74c3c',
          'red-dark':  '#c0392b',
          black:       '#0a0a0a',
          'off-black': '#111111',
          muted:       '#666666',
          'muted-light': 'rgba(255,255,255,0.65)',
        },
      },
      fontFamily: {
        display: ['Oswald', 'Barlow Condensed', 'Arial Narrow', 'sans-serif'],
        sans:    ['Inter', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'hero-overlay': `
          linear-gradient(
            to bottom,
            rgba(0,0,0,0.55) 0%,
            rgba(0,0,0,0.35) 40%,
            rgba(0,0,0,0.70) 100%
          )
        `,
        'hero-atmosphere': `
          radial-gradient(ellipse at 65% 40%, rgba(80,30,120,0.35) 0%, transparent 55%),
          radial-gradient(ellipse at 30% 80%, rgba(20,60,30,0.25) 0%, transparent 45%),
          linear-gradient(180deg, #0a0a0a 0%, #1a0a1e 50%, #0a0a0a 100%)
        `,
        'section-smoke': `
          linear-gradient(180deg, #0a0a0a 0%, #0a0a0a 60%, transparent 100%)
        `,
        'join-bg': `
          radial-gradient(ellipse at 50% 100%, rgba(60,30,90,0.6) 0%, transparent 60%),
          linear-gradient(180deg, #0a0a0a 0%, #0d0818 60%, #0a0a0a 100%)
        `,
      },
      animation: {
        'fade-up': 'fadeUp 0.5s ease-out both',
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
