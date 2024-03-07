/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', 'node_modules/flowbite-react/lib/esm/**/*.js'],
  theme: {
    extend: {
      screens: {
        'xs': '475px'
      }
    },
  },
  darkMode: 'class',
  plugins: [
    require('flowbite/plugin')
  ]
}

