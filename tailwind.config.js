module.exports = {
  purge: ['./src/components/**/*.{js,jsx,ts,tsx}', './src/components/**/**/*.{js,jsx,ts,tsx}',,'./src/pages/**/*.{js,jsx,ts,tsx}', './src/pages/**/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
  ],
}
