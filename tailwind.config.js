const plugin = require('tailwindcss/plugin')

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}'
  ],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    
    extend: {
      colors: {
        // 'accent-1': '#FAFAFA',
        // 'accent-2': '#EAEAEA',
        // 'accent-7': '#333',
        // success: '#0070f3',
        // cyan: '#79FFE1'
      },
      spacing: {
        // 28: '7rem'
      },
      letterSpacing: {
        // tighter: '-.04em'
      },
      lineHeight: {
        // tight: 1.2
      },
      fontSize: {
        // '5xl': '2.5rem',
        // '6xl': '2.75rem',
        // '7xl': '4.5rem',
        // '8xl': '6.25rem'
      },
      boxShadow: {
        small: '0 5px 10px rgba(0, 0, 0, 0.12)',
        medium: '0 8px 30px rgba(0, 0, 0, 0.12)'
      },
      typography: {}
    },
    screens: {
      'xs': {'max': '475px'},
    }
  },
  variants: {
    extend: {}
  },
  plugins: [
    plugin(function ({ addBase, theme }) {
      addBase({
        h1: { fontSize: theme('fontSize.4xl') },
        h2: { fontSize: theme('fontSize.3xl') },
        h3: { fontSize: theme('fontSize.2xl') },
        h4: { fontSize: theme('fontSize.xl') }
      })
    }),
    require('@tailwindcss/typography'),
    require('daisyui')
  ],
  daisyui: {
    themes: [
      'mytheme',
      'forest',
      'retro',
      'dark',
      'light',
      // 'synthwave',
      'emerald',
      {
        mytheme: {
          primary: '#4ade80',
          secondary: '#22d3ee',
          accent: '#fcd34d',
          neutral: '#059669',
          'base-100': '#FFFFFF',
          info: '#3ABFF8',
          success: '#36D399',
          warning: '#FBBD23',
          error: '#F87272'
        },
        myothertheme: {
          // custom theme
          primary: '#007ebd',
          'primary-focus': '#005c8a',
          'primary-content': '#ffffff'
          // other colors
        }
      }
    ]
  }
}
