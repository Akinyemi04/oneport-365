/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      borderColor:{
        containerType:'rgb(156,163,175)'
      },
      spacing:{
        size:'-118px',
        type:'-83px'
      },
      textColor:{
        active:'rgb(19,156,51)'
      }
    },
  },
  plugins: [],
}

