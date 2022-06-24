/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    darkMode: 'class',
    extend: {},
    colors: {
      transparent: 'transparent',
      textPrimary: '#19191B',
      textSecondary: '#252641',
      primary: '#5454D4'
    },
    fontFamily: {
      'poppins': ["Poppins", "sans-serif"],
    }
  },
}
