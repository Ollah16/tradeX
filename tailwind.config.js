/** @type {import('tailwindcss').Config} */

const plugin = require('tailwindcss/plugin')

const rotateY = plugin(function ({ addUtilities }) {
  addUtilities({
    '.rotate-x-180': {
      transform: 'rotateX(180deg)'
    },
  })
})

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [rotateY]
}

