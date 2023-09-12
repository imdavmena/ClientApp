/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      'xs': '320px',
      // => @media (min-width: 340px) { ... }
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
      },
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        white: {
          50: '#FFFFFF',
          100: '#EFEFEF',
          200: '#F9F9F9',
          '50-8%': '#ffffff17'
        },
        purple: {
          50: '#880A9C',
          100: '#560265',
        },
        gray: {
          50:  '#D6D6D6',
          100: '#606060',
          200: '#818181',
          300: '#949494',
          400: '#E6E6E6',
          500: '#DDDDDD',
          600: '#F7F7F7',
          700: '#292929'
        },
        yellow: {
          50: '#FBDD0D',
          100: '#FFDD00',
          200: '#FCDE0A',
        },
        blue: {
          50: '#1F2036',
          100: '#0088FF',
          200: '#0095D2'
        },
        black: '#000000',
        orange:{
          50: '#F64800',
          100: '#FFBA4E'
        },
        green:{
          50: '#B2DF8A',
        }
      },
    },
  },
  plugins: [],
}

