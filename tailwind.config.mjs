/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'sans-serif'],
        display: ['Outfit', 'sans-serif'],
      },
      colors: {
        brand: {
          50:  '#f0f9ff',
          100: '#e0f2fe',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
        },
        accent: {
          400: '#a855f7',
          500: '#8b5cf6',
          600: '#7c3aed',
        },
      },
      animation: {
        blob:        'blob 8s infinite',
        'pulse-glow':'pulseGlow 3s ease-in-out infinite',
        float:       'float 6s ease-in-out infinite',
      },
      keyframes: {
        blob: {
          '0%,100%': { transform: 'translate(0px,0px) scale(1)' },
          '33%':     { transform: 'translate(30px,-40px) scale(1.1)' },
          '66%':     { transform: 'translate(-20px,20px) scale(0.9)' },
        },
        pulseGlow: {
          '0%,100%': { opacity: '0.4' },
          '50%':     { opacity: '0.8' },
        },
        float: {
          '0%,100%': { transform: 'translateY(0px)' },
          '50%':     { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
};
