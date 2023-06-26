/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*[js,jsx]"],
  theme: {
    extend: {
      backgroundImage:{
        Bit:"url('./public/Bitbackground1.jpg')",
        Nav:"url('./public/Bitbackground4.jpg')",
      } 
    },
  },
  plugins: [],
}

