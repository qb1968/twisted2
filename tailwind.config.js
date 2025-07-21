/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // should cover Home.jsx
  ],

  theme: {
    extend: {
      colors: {
        customBlue: "#2D92B3",
      },
      fontFamily: {
        body: ["Roboto", "sans-serif"],
        heading: ['"PT Serif"', "serif"],
        cursive: ['"Cedarville Cursive"', "cursive"],
        script: ['"Dancing Script"', "cursive"],
      },
    },
  },
  plugins: [],
};
