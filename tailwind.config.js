/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'deep-black': '#0A0A0A',
        'electric-blue': '#1E90FF',
        'soft-gray': '#EAEAEA',
        'vibrant-orange': '#FF4500',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Roboto Slab', 'serif'],
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease-out forwards',
      },
    },
  },
  plugins: [],
};