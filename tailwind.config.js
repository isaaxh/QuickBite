/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./src/app/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        GiloryExtraBold: ["Gilory-ExtraBold"],
        GiloryBold: ["Gilory-Bold"],
        GilorySemiBold: ["Gilory-SemiBold"],
        GiloryRegular: ["Gilory-Regular"],
        GiloryMedium: ["Gilory-Medium"],
        GiloryLight: ["Gilory-Light"],
      },
      /*figure out how to import the COLORS var from colors.ts */
      colors: {
        primary: {
          100: "#FFA500",
          200: "#E59400",
          300: "#CF8600",
          400: "#BA7800",
          500: "#A76C00",
        },
        black: {
          100: "#101010",
          200: "#171819",
          500: "#797D82",
        },
        success: "#53A654",
        error: "#F84545",
        background: "#FFFFFF",
      },
    },
  },
  plugins: [],
};

/* "Gilory-Bold": require("../../assets/fonts/Gilroy-Bold.ttf"), */
/* "Gilory-ExtraBold": require("../../assets/fonts/Gilroy-ExtraBold.otf"), */
/* "Gilory-SemiBold": require("../../assets/fonts/Gilroy-SemiBold.ttf"), */
/* "Gilory-Regular": require("../../assets/fonts/Gilroy-Regular.ttf"), */
/* "Gilory-Medium": require("../../assets/fonts/Gilroy-Medium.ttf"), */
/* "Gilory-Light": require("../../assets/fonts/Gilroy-Light.otf"), */
