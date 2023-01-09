/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        redPrimary: "#FF0000",
        darkPrimary: "#181818",
        darkSecondary: "#303030",
        darkTertiary: "#272727",
        grayPrimary: "#a0a0a9",
      },
    },
    fontFamily: {
      sans: ["Roboto", "sans-serif"],
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
