/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        gold: {
          50: '#FDFBF7',
          100: '#FAF4E8',
          200: '#F3E5AB',
          300: '#E6CF82',
          400: '#D4AF37', // Dourado Primário
          500: '#C5A059', // Dourado Nobre
          600: '#AA7C11',
          700: '#8A6208',
          800: '#5C4105',
          900: '#3D2A03',
        },
        dark: {
          950: '#070707', // Preto Obsidian
          900: '#0D0D0D', // Fundo Principal
          850: '#121212', // Superfície Cards
          800: '#181818', // Bordas e divisores
          700: '#242424',
          600: '#333333',
          500: '#4A4A4A',
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'sans-serif'],
      },
      boxShadow: {
        'gold-sm': '0 0 15px rgba(212, 175, 55, 0.15)',
        'gold-md': '0 0 25px rgba(212, 175, 55, 0.25)',
        'gold-lg': '0 0 40px rgba(212, 175, 55, 0.35)',
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #F9E7B3 0%, #D4AF37 50%, #9B7811 100%)',
        'gold-gradient-hover': 'linear-gradient(135deg, #FFFFFF 0%, #F5D77F 40%, #C5A059 100%)',
        'dark-radial': 'radial-gradient(circle at 50% 0%, rgba(212, 175, 55, 0.1) 0%, rgba(13, 13, 13, 0) 70%)',
      },
      animation: {
        'shimmer': 'shimmer 2.5s infinite linear',
        'float': 'float 4s ease-in-out infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-6px)' },
        }
      }
    },
  },
  plugins: [],
}
