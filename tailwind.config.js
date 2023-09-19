module.exports = {
  purge: {
    content: [
      './public/index.html',
      './src/**/*.{js,jsx,ts,tsx}',
    ],
  },
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
