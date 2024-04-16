/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        'fr': '1100px',
        'ds': '1440px',
      },
      colors: {
        'midnight': '#001b84',
        'heading': '#1d1e20',
        'body': '#575e66',
        'webbg': '#f8fafe',
      },
    },
  },
  plugins: [],
};
