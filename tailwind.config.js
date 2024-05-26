/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'title-color': '#3c3c43',
        'description-color': '#67676c',
        'card-color': '#f6f6f7',
        'dark-color': '#1b1b1f',
        'dark-card-color':'#202127',
        'dark-text-color':'#dfdfd6'
      }
    },
  },
  plugins: [],
}

