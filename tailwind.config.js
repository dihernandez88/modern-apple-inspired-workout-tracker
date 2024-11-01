/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'ios-blue': '#0A84FF',
        'ios-purple': '#5E5CE6',
        'ios-green': '#30D158',
        'ios-red': '#FF453A',
      }
    },
  },
  plugins: [],
}
