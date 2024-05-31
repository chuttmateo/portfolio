// eslint-disable-next-line no-undef
const { nextui } = require("@nextui-org/react");
/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['selector'],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
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
  plugins: [nextui()],
}

