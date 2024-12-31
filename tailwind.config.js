/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        a5dhr: "#CCF32F",
        azra9: "#141B34",
        mchak7l: "#1E1E1E",
      },
      fontFamily: {
        gothic: ["'Trade Gothic LT Std'", "sans-serif"],
        playfairdisplay: [" 'Playfair Display'", "serif"],
        inter: ["'Inter'", "sans-serif"],
        montserrat: ["'Montserrat'", "sans-serif"],
      },
    },
  },
  plugins: [],
};
