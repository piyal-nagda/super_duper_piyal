/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#0FE9FF', // Neon cyan
        secondary: '#FF10F0', // Neon pink
        accent: '#39FF14', // Neon green
        background: '#0A0A0A', // Very dark gray, almost black
        textPrimary: '#FFFFFF' // White text
      },
      backgroundColor: {
        'dark': '#0A0A0A',
      },
      boxShadow: {
        'neon': '0 0 10px rgba(15, 233, 255, 0.5), 0 0 20px rgba(15, 233, 255, 0.3)', // Cyan glow
        'neon-pink': '0 0 10px rgba(255, 16, 240, 0.5), 0 0 20px rgba(255, 16, 240, 0.3)', // Pink glow
        'neon-green': '0 0 10px rgba(57, 255, 20, 0.5), 0 0 20px rgba(57, 255, 20, 0.3)', // Green glow
      }
    },
  },
  plugins: [],
};