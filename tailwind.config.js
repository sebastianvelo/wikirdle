const defaultColors = require('tailwindcss/colors')

module.exports = {
  mode: 'jit',
  darkMode: 'class',
  content: [
    './src/**/*.{js,ts,jsx,tsx,json}',
    './public/index.html',
  ],
  theme: {
    extend: {
      colors: {
        primary: defaultColors.indigo,
        secondary: defaultColors.slate,
        accent: defaultColors.blue
      },
      animation: {
        "spin-slow": "spin 3s linear infinite",
        "spin-fast": "spin 0.5s linear infinite",
      },
    },
  },
  variants: {},
  plugins: [],
};
