/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./src/app/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
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
      },
    },
  },
  plugins: [],
};
