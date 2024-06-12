module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Roboto', 'sans-serif'],
      },
      backgroundImage: {
        'custom-gradient': "linear-gradient(-26.5deg, #565872, #31355b)",
      },
      colors: {
        'primary': '#6F2CF5',
        'secondary': '#1D4ED8',
        'purple': {
          '500': '#9D50BB',
          '600': '#8E44AD',
          '700': '#732D91',
        },
      },
    },
  },
  plugins: [],
}
