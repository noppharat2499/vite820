/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      colors: {
        primaryTitle:"#02735E",
        primaryContent:"#00635A",
        primarySubcontent:"#00635A",
        primaryBase:"#32A89C",
        primaryAccent:"#00635A",
        primaryBg:"#FFFFFF",
      },
    },
  },
  plugins: [],
}

