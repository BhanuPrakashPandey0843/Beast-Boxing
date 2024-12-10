/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Add this line
  ],
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 3s linear infinite', 
        'fade-in': 'fadeIn 1.5s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
      }, // Closing curly brace for keyframes
    }, // Closing curly brace for extend
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
}
