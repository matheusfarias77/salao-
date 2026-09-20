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
        luxury: {
          offwhite: '#FAFAFA',
          nude: '#F5F2EB',
          sand: '#F8F5EE',
          cream: '#FFFDF9',
          dark: '#111111',
          obsidian: '#0A0A0A',
          charcoal: '#222222',
          muted: '#555555',
          border: '#E8E2D8',
          borderGold: 'rgba(197, 160, 89, 0.35)',
        },
        sand: {
          50: '#FDFBF7',
          100: '#F8F5EE',
          200: '#F4EFE6',
          300: '#EAE2D5',
          400: '#DACDC0',
        },
        gold: {
          50: '#FDFBF7',
          100: '#FAF4E8',
          200: '#F3E5AB',
          300: '#E0C57A',
          400: '#C5A059', // Dourado Nobre
          500: '#B8933E', // Dourado Clássico
          600: '#9B7811',
          700: '#8A6208',
          800: '#5C4105',
          900: '#3D2A03',
        },
        dark: {
          950: '#0B0B0B',
          900: '#111111', // Header & Footer
          850: '#171717',
          800: '#222222',
          700: '#333333',
        }
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', '"Playfair Display"', 'Georgia', 'serif'],
        cormorant: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        playfair: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Montserrat"', '"Plus Jakarta Sans"', 'Inter', 'sans-serif'],
        montserrat: ['"Montserrat"', 'sans-serif'],
      },
      boxShadow: {
        'luxury-sm': '0 4px 20px rgba(0, 0, 0, 0.03)',
        'luxury-md': '0 10px 30px rgba(0, 0, 0, 0.05)',
        'luxury-float': '0 25px 60px -15px rgba(0, 0, 0, 0.07), 0 0 1px rgba(0, 0, 0, 0.05)',
        'luxury-glow': '0 0 35px rgba(197, 160, 89, 0.2)',
        'gold-sm': '0 2px 15px rgba(197, 160, 89, 0.15)',
        'gold-md': '0 4px 25px rgba(197, 160, 89, 0.25)',
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #DFCA88 0%, #C5A059 50%, #9B7811 100%)',
        'gold-metallic': 'linear-gradient(135deg, #F3E5AB 0%, #D8BA68 35%, #C5A059 70%, #A37C1B 100%)',
        'gold-gradient-hover': 'linear-gradient(135deg, #FFFFFF 0%, #EAD494 40%, #C5A059 100%)',
        'sand-gradient': 'linear-gradient(180deg, #FAFAFA 0%, #F5F2EB 100%)',
      },
      animation: {
        'shimmer': 'shimmer 2.5s infinite linear',
        'float': 'float 4s ease-in-out infinite',
        'pulse-subtle': 'pulseSubtle 2.5s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-6px)' },
        },
        pulseSubtle: {
          '0%, 100%': { transform: 'scale(1)', opacity: '1' },
          '50%': { transform: 'scale(1.06)', opacity: '0.92' },
        }
      }
    },
  },
  plugins: [],
}
