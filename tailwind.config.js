/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/views/**/*.njk',
    './src/public/js/**/*.js',
  ],
  safelist: [
    // Dynamically assigned product thumbnail gradient classes
    'thumb-kits',
    'thumb-tiles',
    'thumb-accessories',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          // Confirmed from Figma design system + live site
          green:         '#4a7c59',
          'green-light': '#5b9469',
          'green-dark':  '#3a6148',
          red:           '#e74c3c',  // coral CTA — all buttons
          'red-dark':    '#c0392b',
          // Pure #000000 black confirmed from Figma (not off-black)
          black:         '#000000',
          // Body text hierarchy confirmed from Figma design system
          'text-primary':   '#333333',
          'text-secondary': '#666666',
          'text-light':     '#999999',
        },
      },
      fontFamily: {
        // Montserrat confirmed: live site declares it, Figma uses non-condensed bold sans-serif
        display: ['Montserrat', 'Helvetica Neue', 'Arial', 'sans-serif'],
        sans:    ['Montserrat', 'Helvetica Neue', 'Arial', 'sans-serif'],
      },
      fontSize: {
        // Figma-specified heading scale (px → rem at 16px base)
        'hero':    ['3.5rem',  { lineHeight: '1.05', letterSpacing: '-0.02em' }],  // 56px
        'display': ['2.625rem', { lineHeight: '1.1',  letterSpacing: '-0.01em' }], // 42px
        'h3':      ['1.25rem', { lineHeight: '1.3',  letterSpacing: '0.04em'  }],  // 20px
      },
      maxWidth: {
        // Figma canvas is 1440px; container is 1400px (20px padding each side)
        'container': '1400px',
      },
      backgroundImage: {
        'hero-atmosphere': `
          radial-gradient(ellipse at 65% 40%, rgba(80,30,120,0.35) 0%, transparent 55%),
          radial-gradient(ellipse at 30% 80%, rgba(20,60,30,0.25) 0%, transparent 45%),
          linear-gradient(180deg, #000000 0%, #1a0a1e 50%, #000000 100%)
        `,
        'join-bg': `
          radial-gradient(ellipse at 50% 100%, rgba(60,30,90,0.6) 0%, transparent 60%),
          linear-gradient(180deg, #000000 0%, #0d0818 60%, #000000 100%)
        `,
      },
      animation: {
        'fade-up': 'fadeUp 0.5s ease-out both',
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
