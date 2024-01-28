/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#7c3aed',
        'bright-primary': "#6d28d9",
        'background-darkmode': '#101826',
        'bright-background-darkmode': '#162030',
      }
    },  
  },
  plugins: [],
}

