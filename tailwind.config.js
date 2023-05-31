/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#4db5ff',
        secondary: '#2c2c6c',
        error: '#dc2626',
        lightgrey: '#F6F5F4'
      },
    },
  },
  plugins: [],
}

