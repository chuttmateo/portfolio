/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['selector'],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-color': '#1b1b1f',
        'dark-card-color':'#202127',
        'dark-text-color':'#dfdfd6'
      }
    },
  },
  plugins: [],
}

