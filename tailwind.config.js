/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",       
    "./js/**/*.js",     
      "./style/**/*.css"      
  ],
  theme: {
    extend: {
      boxShadow: {        
        'custom-sw': '2px 2px 3px 2px rgba(0, 0, 0, 0.3)', // sombra mais forte
      },
    },
  },
  plugins: [],
}
