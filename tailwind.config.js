import { COLOR_PRIMARY, COLOR_SECONDARY } from "./src/utils/constants";
/** @type {import('tailwindcss').Config} */
console.log(COLOR_PRIMARY, COLOR_SECONDARY);
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: `${COLOR_PRIMARY}`,
        secondary: `${COLOR_SECONDARY}`,
      },
      height: {
        "27vh": "27vh",
        "35vh": "35vh",
      },
      width: {
        "55vw": "55vw",
      },
      zIndex: {
        1: '1'
      }
    },
  },
  plugins: [],
}

