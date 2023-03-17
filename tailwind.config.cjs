/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        lobsterTwo: ['Lobster Two', 'sans-serif'],
        lato: ['Lato', 'sans-serif'],
      },
      screens: {
        xs: '480px',
        ss: '620px',
        sm: '768px',
        md: '1060px',
        lg: '1200px',
        xl: '1700px',
      },
      colors: {
        primary: '#00040f',
        secondary: '#33363f',
        secondary2: '#4d4f57',
        secondary3: '#66686f',
        blueColor: '#22b8cf',
        blueColor1: '#91dce7',
        grayColor: '#dcdcdc',
      },
    },
  },
  plugins: [],
};
