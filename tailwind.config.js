/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],  theme: {
    extend: {
      rotate: {
        '12': '12deg',
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        montserrat: ["Monserrat", "sans-serif"],
        sans:[ "Montserrat Alternates", "sans-serif"],
        inter: [ "Inter", "sans-serif"]
        
      },
      
    },
  },
  plugins: [],
}

