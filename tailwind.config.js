const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      gray: colors.gray,
      'white': 'hsl(0, 0%, 100%)',
      'navbar': 'hsl(228, 45%, 44%)',
      'learn-yellow': 'hsl(51, 100%, 49%)',
      'learn-soft-red': 'hsl(7, 99%, 70%)',
      'photography': 'hsl(198, 62%, 26%)',
      'graphic-design': 'hsl(167, 40%, 24%)',
      'grayish-blue': 'hsl(210, 4%, 67%)',
      'grayish-blue-dark': 'hsl(232, 10%, 55%)',
      'grayish-blue-darkest': 'hsl(213, 9%, 39%)',
      'light-green': '#90d4c5',
      'footer': 'rgb(69, 140, 126)',
      'attribution': 'hsl(228, 45%, 44%)'
    },
    extend: {
      fontFamily: {
        'barlow': ['Barlow', 'sans-serif'],
          'Fraunces': ['Fraunces', 'serif']
      },
      backgroundImage: {
        'header-dekstop': "url('/image-header-dekstop.jpg')",
        'header-mobile': "url('/image-header-mobile.jpg')",
        'graphic-design-mobile': "url('/image-graphic-design-mobile.jpg')",
        'graphic-design-dekstop': "url('/image-graphic-design-dekstop.jpg')",
        'photography-mobile': "url('/image-photography-mobile.jpg')",
        'photography-dekstop': "url('/image-photography-dekstop.jpg')",
      }
    },
  },
  plugins: [],
}
