/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",  // adjust if your code is in /src
    "./public/index.html"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Roboto", "sans-serif"], // example custom font
      },
      gridTemplateColumns: {
        '70-30' :'70% 30%',
      },
    },
  },
  plugins: [],
}
