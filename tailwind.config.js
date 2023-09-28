/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./node_modules/flowbite-react/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "node_modules/daisyui/**/*.{js,jsx,ts,tsx",
  ],
  theme: {
    extend: {
      colors: {
        text: "#010e0b",
        background: "#e3fdf7",
        primary: "#0d81ab",
        secondary: "#d0dafb",
        accent: "#071c5f",
      },
    },
  },
  plugins: [require("daisyui"), require("flowbite/plugin")],
};
