const { fontFamily } = require('tailwindcss/defaultTheme');

module.exports = {
  mode: 'jit',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        ...fontFamily,
        cal: ['CalSans'],
        root: ['PTRootUI'],
        sans: ['PTRootUI', 'Roboto', 'ui-sans-serif', 'system-ui'],
      },
      colors: {
        'nouns-bg-black': '#2C2C2C',
        'nouns-bg-darkgrey': '#151515',
        'nouns-text-grey': '#D0D0D0',
        'nouns-text-nav-header': '#878787',
        'nouns-grey': '#f5f5f5',
        'nouns-bg-blue': '#3E64FF',
        'nouns-earth-blue': '#538cfa',
        'nouns-bg-darkblue': '#1F1D28',
        'nouns-dark-grey': '#7A7A7A',
        'nouns-blue': '#002AFF',
        'nouns-yellow': '#FDF45F',
        'nouns-border': '#C1C1C1',
        'nouns-pink': '#F39E9F',
        'nouns-brown': '#732C2B',
        'nouns-blue-border': '#8EA4FC',
        'nouns-cool': '#D4D7E1',
        'nouns-warm': '#E0D6D4',
        'nouns-cool-text': '#151c3b',
        nounsblue: '#4763F6',
        nounsred: '#E5284A',
        nounsgreen: '#028940',
        nounspurple: '#A734A3',
        grey: {
          lightest: '#F6F9FC',
          lighter: '#F7F6F7',
          light: '#e3e2e2',
          base: '#ebebeb',
        },
        blue: {
          base: '#4763F6',
        },
        black: '#292929',
      },
    },
    screens: {
      xs: '200px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/line-clamp'), require('@tailwindcss/forms')],
};
