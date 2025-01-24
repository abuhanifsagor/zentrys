/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [".src/**/*.{html,js}"],
    theme: {
      extend: {
        colors: {
          'blue': 'rgb(16, 24, 40)',
        },
        w: {
          'bd': '140px',
        },
      },
    },
    plugins: [],
}