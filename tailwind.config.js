/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['Syne', 'sans-serif'],
        body: ['DM Sans', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      colors: {
        ink: '#0A0A0B',
        surface: '#111114',
        panel: '#18181C',
        border: '#252528',
        gold: '#E8C547',
        ember: '#FF6B35',
        text: '#F0EBE3',
        muted: '#6B6B72',
        dim: '#3A3A3F',
      },
    },
  },
  plugins: [],
}

