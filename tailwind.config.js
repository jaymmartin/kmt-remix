import defaultTheme from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{ts,tsx,jsx,js}"],
  theme: {
    extend: {},
    fontFamily: {
      'sans': ['Manrope', ...defaultTheme.fontFamily.sans]
    },
    fontSize: {
      ...defaultTheme.fontSize,      
    }
  },
  plugins: [],
}

