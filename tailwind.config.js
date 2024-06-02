/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
        heading: ['Righteous', 'sans-serif']
      },
      fontWeight: {
        '600': ['bold']
      },
    },
  },
  plugins: [],
}

