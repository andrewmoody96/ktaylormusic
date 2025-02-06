/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        noto: ["Noto Serif", "serif"],
        ewert: ["Ewert", "serif"],
        caveat: ["Caveat", "cursive"],
        fredericka: ["Fredericka the Great", "serif"],
      },
    },
    screens: {
      tablet: "760px",
      desktop: "950px",
      wide: "1200px",
    },
  },
  plugins: [],
};
