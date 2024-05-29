/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'dessau-medium': ['"Dessau Medium"', 'sans-serif'],
      'solway-bold': ['"Solway Bold"', 'sans-serif'],
      'solway-medium': ['"Solway Medium"', 'sans-serif'],
      'inter-regular': ['"Inter Regular"', 'sans-serif'],
      'inter-bold': ['"Inter Bold"', 'sans-serif'],
      'inter-italic': ['"Inter Italic"', 'sans-serif'],
    },
    extend: {
      colors: {
        'black': '#000000',
        'gray-dark': '#5E5E5E',
        'gray-light': '#C5C5C5',
        'white': '#FFFFFF',
        'blue': {
          DEFAULT: '#379BFF',
          dark: '#318be5',
        },
        'link-blue': '#08ACF2',
        'purple': '#8282FF',
        'orange': '#FF6464',
        'yellow': '#FBD033',
      },
      zIndex: {
        '1': '1',
      }
    },
  },
  plugins: [],
}
