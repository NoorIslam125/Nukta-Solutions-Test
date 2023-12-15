/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      backgroundColor: {
        'custom-sky': '#95e3e3',
      },
      textColor: {
        'custom-sky': '#4d9c9d'
      },
      height: {
        'Card': '450px',
      },
      fontFamily: {
        'Rubik': ['Rubik', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
