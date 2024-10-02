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
        primary: '#EA7100',
        secondary: ''
      },
      animation: {
        sliding: 'sliding 5s linear 1'
      },
      keyframes: {
        sliding: {
          '0%': { opacity: 0, 'margin-left': '-2000px' },
          '100%': { opacity: 1, 'margin-left': '0px' }
        }
      }
    },
  },
  plugins: [],
}

