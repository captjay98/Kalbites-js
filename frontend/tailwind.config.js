/** @type {import('tailwindcss').Config} */
export default {
  mode: "jit",
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        myBlue: "#0a1829",
      },
      fontFamily: {
        sans: ["Comic Sans MS", "Helvetica", "Arial", "sans-serif"],
      },
    },
  },
  plugins: [],
};
