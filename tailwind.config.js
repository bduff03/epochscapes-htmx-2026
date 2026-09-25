/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/views/**/*.njk',
    './src/public/js/**/*.js',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          bg:         '#0c0c14',
          surface:    '#141420',
          'surface-2': '#1c1c2e',
          border:     '#2d2d48',
          gold:       '#c9a227',
          'gold-light': '#e4b94a',
          'gold-dark':  '#9a7a1e',
          muted:      '#8888aa',
        },
      },
      fontFamily: {
        display: ['Cinzel', 'Georgia', 'serif'],
        sans:    ['Inter', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'tile-pattern': `
          linear-gradient(rgba(201,162,39,0.08) 1px, transparent 1px),
          linear-gradient(90deg, rgba(201,162,39,0.08) 1px, transparent 1px)
        `,
        'hero-glow': `
          radial-gradient(ellipse at 20% 50%, rgba(201,162,39,0.18) 0%, transparent 60%),
          radial-gradient(ellipse at 80% 20%, rgba(100,60,160,0.12) 0%, transparent 50%),
          radial-gradient(ellipse at 60% 80%, rgba(30,20,60,0.8) 0%, transparent 50%)
        `,
      },
      backgroundSize: {
        'tile': '48px 48px',
      },
      animation: {
        'fade-up': 'fadeUp 0.5s ease-out both',
      },
      keyframes: {
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(20px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  safelist: [
    // Dynamically assigned product thumbnail gradient classes
    'thumb-kits',
    'thumb-tiles',
    'thumb-accessories',
  ],
  plugins: [],
};
