/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        neon: {
          500: '#00FFC6',
          600: '#00E0B0',
          700: '#00C29A'
        }
      },
      backgroundImage: {
        grid: 'radial-gradient(circle at 1px 1px, rgba(0,255,198,0.12) 1px, transparent 0)'
      },
      boxShadow: {
        glow: '0 0 24px rgba(0, 255, 198, 0.35), inset 0 0 16px rgba(0, 255, 198, 0.12)'
      }
    }
  },
  darkMode: 'class',
  plugins: []
};
