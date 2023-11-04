/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors:{
      deepBlue: "#120078",
      OffWhite: "#F7F1E3",
      txtColor: "#1D130A",
      Gold: "#DAA520",
      SlytherinGreen: " #1A472A",
      GryffindorRed: "#740001"
    },
    extend: {},
  },
  plugins: [require("rippleui")],
}