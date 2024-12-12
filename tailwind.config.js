/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",          
      "./style/**/*.css",
      "./js/**/*.js"     
  ],
  theme: {
    extend: {
      boxShadow: {        
        'custom-sw': '2px 2px 3px 2px rgba(0, 0, 0, 0.3)', // sombra mais forte
      },
      width:{
        'custom-Cat':'135px',
      },
      backgroundColor:{
        'custom-indigo':'rgb(51 49 94)',
      },
    },
  },
  plugins: [],
}

