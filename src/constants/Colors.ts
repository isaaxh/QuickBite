/* const tintColorLight = "#2f95dc"; */

const BLACK = {
  "100": "#101010",
  "200": "#171819",
  "500": "#797D82",
};

const tintColorLight = BLACK["100"];
const tintColorDark = "#fff";

export default {
  light: {
    text: "#000",
    background: "#fff",
    tint: tintColorLight,
    tabIconDefault: "#ccc",
    tabIconSelected: tintColorLight,
  },
  dark: {
    text: "#fff",
    background: "#000",
    tint: tintColorDark,
    tabIconDefault: "#ccc",
    tabIconSelected: tintColorDark,
  },
};

export const COLORS = {
  "primary-100": "#FFA500",
  "primary-200": "#E59400",
  "primary-300": "#CF8600",
  "primary-400": "#BA7800",
  "primary-500": "#A76C00",
  "black-100": "#101010",
  "black-200": "#171819",
  "black-500": "#797D82",
  white: "#fffefe",
  background: "#FFFFFF",
  grey: "#E7E6E6",
  yellow: "#FED600",
  success: "#53A654",
  error: "#F84545",
};
