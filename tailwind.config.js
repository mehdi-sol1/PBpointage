/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      borderWidth: {
        '12': '12px', // Add a custom border width of 12px
        '16': '16px', // Add a custom border width of 16px
      },
      colors: {

      'background':  '#e4f1fe',
      'background1': '#0f172a',
      'background2': '#1e293b',
      'text1'      : '#d1d5db',
      'text2'      : '#fafafa',
      'texthighlighted': '#1d4ed8',
    },
    fontFamily:
    {
      roboto: ['Roboto Condensed', 'sans-serif'],
      poppin: ['Poppins', 'sans-serif'],
      kanit:  ['Kanit', 'sans-serif'],
      pt:     ['PT Sans', 'sans-serif'],
      albert: ['Albert Sans', 'sans-serif'],
      outfit: ['Outfit', 'sans-serif'],
    },
    animation:{
      blob: "blob 4s infinite",
      blob2:"blob2 4s infinite",
      blob3:"blob2 4s infinite",
    },
    keyframes:{
      blob:{
        "0%": {
          transform: "translate(0px, 0px) scale(1)"
        },
        "33%": {
          transform: "translate(100px, -150px) scale(1.3)"
        },
        "66%": {
          transform: "translate(100px, -100px) scale(0.9)"
        },
        "100%": {
          transform: "translate(0px, 0px) scale(1)"
        },
      },
      blob2:{
        "0%": {
          transform: "translate(0px, 0px) scale(1)"
        },
        "33%": {
          transform: "translate(-200px, 100px) scale(1.1)"
        },
        "66%": {
          transform: "translate(50px, -20px) scale(1.2)"
        },
        "100%": {
          transform: "translate(0px, 0px) scale(1)"
        },
      },
      blob3:{
        "0%": {
          transform: "translate(0px, 0px) scale(1)"
        },
        "33%": {
          transform: "translate(-100px, -50px) scale(1.1)"
        },
        "66%": {
          transform: "translate(100px, -150px) scale(1.3)"
        },
        "100%": {
          transform: "translate(0px, 0px) scale(1)"
        },
      }
    }
  },
    
  },
  plugins: [],
  
}