/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'inter': 'Inter'
      },
      flex: {
        '2': '2 2 0%'
      }
    },
  },
  plugins: [],
}