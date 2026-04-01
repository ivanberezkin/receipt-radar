/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'radar-dark': '#12181F',
        'radar-card': '#1F2937',
        'radar-green': '#4ADE80',
      },
    },
  },
  plugins: [],
};
