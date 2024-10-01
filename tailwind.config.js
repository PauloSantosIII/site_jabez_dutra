/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      fontFamily: {
        spicy: ['SpicyRice', 'sans-serif'],
        exo: ['Exo2-Regular', 'sans-serif'],
        'exo-bold': ['Exo2-Bold', 'sans-serif'],
        'exo-extraBold': ['Exo2-ExtraBold', 'sans-serif']
      },
      colors: {
        primary: '#EABF13',
        secondary: ''
      }
    },
  },
  plugins: [],
}

