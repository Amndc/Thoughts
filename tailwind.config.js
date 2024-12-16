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
        'custom-yellow':'rgba(242, 212, 39, 0.4)',
        'custom-orange':'rgba(224, 131, 38, 0.4)',
        'custom-purple':'rgba(90, 35, 161, 0.4)',
        'custom-cyan':'rgba(38, 193, 224, 0.4)',        
      },
      textColor:{
        'custom-title': 'rgb(0, 207, 200)',
      }
      
    },
  },
  plugins: [],
}

