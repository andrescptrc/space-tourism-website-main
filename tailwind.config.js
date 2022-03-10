const Color = require('color');

const lighten = (color, value) => Color(color).lighten(value).hex().toString();
const darken = (color, value) => Color(color).darken(value).hex().toString();

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/modules/**/*.{js,ts,jsx,tsx}',
    './src/common/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {},
    fontFamily: {
      display: ['Bellefair', 'monospace'],
      body: ['Barlow', 'sans-serif']
    },
    colors: {
      black: '#010101',
      white: '#fffffe',
      'rich-black-fogra-29': {
        light: lighten('#0B0D17', 0.08),
        DEFAULT: '#0B0D17',
        dark: darken('#0B0D17', 0.08)
      },
      'spanish-gray': {
        light: lighten('#979797', 0.08),
        DEFAULT: '#979797',
        dark: darken('#979797', 0.08)
      },
      'lavender-blue': {
        light: lighten('#979797', 0.08),
        DEFAULT: '#979797',
        dark: darken('#979797', 0.08)
      },
      charcoal: {
        light: lighten('#383B4B', 0.08),
        DEFAULT: '#383B4B',
        dark: darken('#383B4B', 0.08)
      },
      'black-coral': {
        light: lighten('#616476', 0.08),
        DEFAULT: '#616476',
        dark: darken('#616476', 0.08)
      },
      cultured: {
        light: lighten('#616476', 0.08),
        DEFAULT: '#616476',
        dark: darken('#616476', 0.08)
      }
    }
  },
  plugins: []
};