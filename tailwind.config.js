import defaultTheme from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{ts,tsx,jsx,js}"],
  theme: {
    
    extend: {      
      screens: {
        'xl': '1250px',
      '2xl': '1384px',
      '3xl': '1536px'
    },
      maxWidth: {
        '1/4': '25%',
        '1/2': '50%',
        '3/4': '75%',
      }
    },
    fontFamily: {
      'sans': ['Manrope', ...defaultTheme.fontFamily.sans]
    }
  },
  plugins: [],
}

