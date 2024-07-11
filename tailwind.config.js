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
      height: {
        "27vh": "27vh",
        "35vh": "35vh",
      },
      colors: {
        primary: `${COLOR_PRIMARY}`,
        secondary: `${COLOR_SECONDARY}`,
      }
    },
  },
  plugins: [],
}

