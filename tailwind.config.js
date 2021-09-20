module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      buttercup: '#f2a70c',
      blackPearl: '#01141f',
      blackPearlLight: '#021b29',
      osloGray: '#808a8f',
    },
    fontFamily: {
      'antonio': ['Antonio', 'sans-serif'],
      'spartan': ['Spartan', 'sans-serif'],
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
