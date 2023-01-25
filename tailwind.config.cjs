/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      borderWidth: {
        1: "1px",
      },
      colors: {
        dark: "rgb(17 24 39 / 0.9)",
        light: "rgb(217 119 6)",
        header: "rgb(217 119 6)",
        sub: "rgb(107 114 128)",
      },
      borderColor: {
        line: "rgb(107 114 128)",
      },
    },
  },
  plugins: [],
};
