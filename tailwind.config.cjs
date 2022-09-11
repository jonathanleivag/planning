/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#10172A'
      },
      backgroundImage: {
        logo:
          "url('https://res.cloudinary.com/dq8fpb695/image/upload/v1662878253/jonathanleivag/logo/ohbxjqje4kelihconfov.png')"
      },
      fontFamily: {
        Montserrat: ['Montserrat', 'sans-serif']
      }
    }
  },
  plugins: []
}
