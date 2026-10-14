/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: { extend: { colors: { wine: '#321d22', clay: '#a75442', cream: '#f8f4ec' }, fontFamily: { sans: ['DM Sans', 'sans-serif'], display: ['Playfair Display', 'serif'] } } },
  plugins: [],
};
