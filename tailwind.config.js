/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui"

export default {
  content: ["./index.html","./src/**/*.{js,jsx}",],
  theme: {
    extend: {
      screens :{
      'tablet': '768px',
      // => @media (min-width: 768px) { ... }

      'laptob': '1024px',
      // => @media (min-width: 1024px) { ... }
      },
      backgroundImage : {
        myHero : "url('./src/Images/ven.jpg')",
        foot : "url('./src/Images/the-town-bg-02.jpg')"
      }
    },
  },
  plugins: [
    daisyui,
  ],
}

