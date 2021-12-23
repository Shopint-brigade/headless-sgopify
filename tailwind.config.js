module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      minWidth: { 
      '23': '23%',   
      },
      spacing: { 
        '3.4rem': '3.4rem',   
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
