/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#0A0A0A',
        foreground: '#F5F5F5',
        card: '#1A1A1A',
        'card-foreground': '#F5F5F5',
        accent: '#D4AF37',
        'accent-foreground': '#0A0A0A',
        secondary: '#4B0082',
        'secondary-foreground': '#F5F5F5',
        border: '#333333',
        input: '#1A1A1A',
        muted: '#666666',
        'muted-foreground': '#999999',
      },
      fontFamily: {
        cinzel: ['Cinzel', 'serif'],
        playfair: ['Playfair Display', 'serif'],
        inter: ['Inter', 'sans-serif'],
        nunito: ['Nunito', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

