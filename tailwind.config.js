/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary':'#f98866',
        'secondary':'#fff2d7',
      } ,
      fontFamily: {
        'main-font':['Inter','sans-serif']
      }
    },
  },
  plugins: [],
}

