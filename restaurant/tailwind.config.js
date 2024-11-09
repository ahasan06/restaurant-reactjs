/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

      fontFamily:{
        sans: ['Roboto', 'sans-serif'],
        heading: ['Bebas Neue', 'sans-serif'],
        menu: ['Quicksand', 'sans-serif'],
      }

    },
  },
  plugins: [],
}