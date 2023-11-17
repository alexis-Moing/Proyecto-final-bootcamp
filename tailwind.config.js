/** @type {import('tailwindcss').Config} */
export default {
  content: [
        "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-fondo': "url('./src/assets/fondo2.jpg')"
      }
    },
  },
  plugins: [
    require('tailwindcss-animated')
  ],
}

