/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // 'primary': '#7c3aed',
        'primary': 'var(--primary)',
        'bright-primary': 'var(--bright-primary)',
        'background': 'var(--background)',
        'bright-background': 'var(--bright-background)',
        'nav-bar': 'var(--nav-bar)',
      }
    },  
  },
  plugins: [],
}

