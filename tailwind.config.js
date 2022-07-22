/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#126a87",
      },
      fontFamily: {
        sans: ["Sawarabi Gothic"],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
