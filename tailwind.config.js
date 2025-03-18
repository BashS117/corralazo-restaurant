/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'white': '#F7F7F7',
      'orange': '#FF570C',
      'gray': '#606470',
      'dark-gray': '#323643',
   
    },
    screens: {
      'sm': {'min': '320px', 'max': '425px'},
      // => @media (min-width: 640px and max-width: 767px) { ... }

      'md': {'min': '426px', 'max': '845px'},
      // => @media (min-width: 768px and max-width: 1023px) { ... }

      'lg': {'min': '846px', 'max': '1279px'},
      // => @media (min-width: 1024px and max-width: 1279px) { ... }

      'xl': {'min': '1280px', 'max': '1535px'},
      // => @media (min-width: 1280px and max-width: 1535px) { ... }

      '2xl': {'min': '1536px'},
      // => @media (min-width: 1536px) { ... }
    },
    extend: {},
  },
  plugins: [],
}

