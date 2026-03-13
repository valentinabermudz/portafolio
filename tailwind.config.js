/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        beige: "#e8dce1",
        beigeSoft: "#b291a0",
        brownLight: "#5b3b46",
        brown: "#553847",
        brownDark: "#371c2a",
      },
      animation: {
        blob: "blob 20s infinite",
        blob2: "blob 25s infinite",
        blob3: "blob 30s infinite",
      },
      keyframes: {
        blob: {
          "0%": { transform: "translate(0px, 0px) scale(1)" },
          "33%": { transform: "translate(30px, -50px) scale(1.1)" },
          "66%": { transform: "translate(-20px, 20px) scale(0.9)" },
          "100%": { transform: "translate(0px, 0px) scale(1)" },
        },
      },
      fontFamily: {
            syne: ["Syne", "sans-serif"],
            montserrat: ["Montserrat Alternates", "sans-serif"],
      },
    },
  },
  plugins: [],
}