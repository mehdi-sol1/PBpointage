/** @type {import('tailwindcss').Config} */
export default {
  content: [
   
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        gradient: 'linear-gradient(to right, #ff00ff, #00ff00)', // Adjust colors as needed
      },
      textColor: {
        gradient: 'linear-gradient(to right, #ff00ff, #00ff00)', // Adjust colors as needed
      },
      fontFamily:
      {
      staat:['Staatliches', 'sans-serif'],
        pt: ['PT Sans', 'sans-serif'],
        titiweb:['Titillium Web', 'sans-serif']
      },
      animation:{
        blob:"blob 4s infinite"
      },
      keyframes:{
        blob:{
          "0%": {
            transform: "scale(1)"
          },
          "33%": {
            transform: "scale(1.3)"
          },
          "66%": {
            transform: "scale(0.7)"
          },
          "100%": {
            transform: "scale(1)"
          },
        }
      }

    },
  },
  plugins: [],
}

