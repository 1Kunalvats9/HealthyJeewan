/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        sage: {
          50: '#f8faf8',
          100: '#e8efe8',
          200: '#d1e0d1',
          300: '#b3c9b3',
          400: '#92ad92',
          500: '#738f73',
          600: '#5c725c',
          700: '#4a5c4a',
          800: '#3d4b3d',
          900: '#333d33',
        },
      },
      fontFamily: {
        dancing: ['"Dancing Script"', 'cursive'],
        quicksand: ['Quicksand', 'sans-serif'],
      },
    },
  },
  plugins: [],
};