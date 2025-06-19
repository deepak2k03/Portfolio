/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        cyber: {
          50: '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: '#22c55e',
          600: '#16a34a',
          700: '#15803d',
          800: '#166534',
          900: '#14532d',
        },
        neon: {
          cyan: '#00ffff',
          purple: '#9d4edd',
          pink: '#ff006e',
          green: '#39ff14',
          blue: '#0066ff',
        }
      },
      fontFamily: {
        mono: ['JetBrains Mono', 'Monaco', 'Consolas', 'monospace'],
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'pulse-glow': 'pulse-glow 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'rotate-cube': 'rotate-cube 10s linear infinite',
        'gradient-shift': 'gradient-shift 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 5px theme(colors.neon.cyan), 0 0 10px theme(colors.neon.cyan), 0 0 15px theme(colors.neon.cyan)' },
          '100%': { boxShadow: '0 0 10px theme(colors.neon.cyan), 0 0 20px theme(colors.neon.cyan), 0 0 30px theme(colors.neon.cyan)' },
        },
        'pulse-glow': {
          '0%, 100%': { 
            boxShadow: '0 0 20px theme(colors.neon.cyan/50)',
            opacity: '1'
          },
          '50%': { 
            boxShadow: '0 0 30px theme(colors.neon.cyan), 0 0 40px theme(colors.neon.cyan)',
            opacity: '0.8'
          },
        },
        'rotate-cube': {
          '0%': { transform: 'rotateX(0deg) rotateY(0deg)' },
          '100%': { transform: 'rotateX(360deg) rotateY(360deg)' },
        },
        'gradient-shift': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'cyber-grid': 'linear-gradient(rgba(0,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,255,255,0.1) 1px, transparent 1px)',
      },
      backdropBlur: {
        xs: '2px',
      }
    },
  },
  plugins: [],
};