/** @type {import('tailwindcss').Config} */
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
      }
    },
  },
  plugins: [],
}

