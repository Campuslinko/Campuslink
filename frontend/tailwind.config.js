/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './index.html', // Important for Vite projects
    './src/**/*.{js,ts,jsx,tsx}', // Scans all your React components
  ],
  theme: {
    // Extend Tailwind's default theme to add your custom values
    extend: {
      // 1. Colors
      colors: {
        // Core Neutrals based on the logo
        'white': '#FFFFFF',
        'black': '#000000',
        'transparent': 'transparent',
        'current': 'currentColor',

        // Grays for text, backgrounds, borders
        'gray': {
          50: '#F9F9F9', // Very light gray, for backgrounds
          100: '#F3F4F6', // Lightest gray for backgrounds
          200: '#E5E7EB', // Lighter gray for subtle borders, dividers
          300: '#D1D5DB', // Light gray for borders, disabled states
          400: '#9CA3AF', // Medium-light gray for secondary text
          500: '#6B7280', // Medium gray for default text
          600: '#4B5563', // Darker gray for headings, stronger text
          700: '#374151', // Dark gray for primary text, more contrast
          800: '#1F2937', // Very dark gray, almost black, for strong headings
          900: '#111827', // Near black, for deepest dark elements
        },

        // Primary Accent Color (from previous discussion, complements the modern feel)
        'campus-blue': {
          DEFAULT: '#456DEF', // Main accent blue (fully opaque)
          'light': '#A3BBFF', // Lighter tint
          'dark': '#2D4B9C',   // Darker shade
          'transparent-80': 'rgba(69, 109, 239, 0.81)', // Your original #456DEFCF
        },

        // Secondary Accent (Optional, for highlights or specific interactive states)
        'secondary-accent': {
          DEFAULT: '#2ECC71', // A fresh green
          'light': '#6EE7B7',
          'dark': '#10B981',
        },
      },

      // 2. Typography
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', '"Helvetica Neue"', 'Arial', '"Noto Sans"', 'sans-serif', '"Apple Color Emoji"', '"Segoe UI Emoji"', '"Segoe UI Symbol"', '"Noto Color Emoji"'],
        serif: ['Georgia', 'serif'],
        mono: ['Menlo', 'Monaco', 'Consolas', '"Liberation Mono"', '"Courier New"', 'monospace'],
      },
      fontSize: {
        'xs': '0.75rem',  // 12px
        'sm': '0.875rem', // 14px
        'base': '1rem',   // 16px
        'lg': '1.125rem', // 18px
        'xl': '1.25rem',  // 20px
        '2xl': '1.5rem',  // 24px
        '3xl': '1.875rem',// 30px
        '4xl': '2.25rem', // 36px
        '5xl': '3rem',    // 48px
        '6xl': '3.75rem', // 60px
        '7xl': '4.5rem',  // 72px
        '8xl': '6rem',    // 96px
        '9xl': '8rem',    // 128px
        'heading-xl': '3.5rem',
        'heading-lg': '2.75rem',
      },

      // 3. Spacing (Padding, Margin, Width, Height)
      spacing: {
        '1/2': '50%', '1/3': '33.333333%', '2/3': '66.666667%', '1/4': '25%', '3/4': '75%',
        '1/5': '20%', '2/5': '40%', '3/5': '60%', '4/5': '80%',
        'full': '100%', 'screen': '100vw', 'min': 'min-content', 'max': 'max-content', 'fit': 'fit-content',
        '13': '3.25rem', '15': '3.75rem', '18': '4.5rem', '22': '5.5rem', '26': '6.5rem',
      },

      // 4. Breakpoints (Screens)
      screens: {
        'sm': '640px', 'md': '768px', 'lg': '1024px', 'xl': '1280px', '2xl': '1536px', '3xl': '1920px',
      },

      // 5. Borders and Shadows
      borderRadius: {
        'none': '0', 'sm': '0.125rem', 'DEFAULT': '0.25rem', 'md': '0.375rem', 'lg': '0.5rem',
        'xl': '0.75rem', '2xl': '1rem', '3xl': '1.5rem', 'full': '9999px',
      },
      boxShadow: {
        'sm': '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        'DEFAULT': '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
        'md': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'lg': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        'xl': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
        'inner': 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
        'none': 'none',
        'card-subtle': '0 2px 8px rgba(0, 0, 0, 0.04)',
      },

      // 6. Transitions & Animations
      transitionDuration: {
        DEFAULT: '150ms', '75': '75ms', '100': '100ms', '150': '150ms', '200': '200ms',
        '300': '300ms', '500': '500ms', '700': '700ms', '1000': '1000ms',
      },
      transitionTimingFunction: {
        'linear': 'linear', 'in': 'cubic-bezier(0.4, 0, 1, 1)', 'out': 'cubic-bezier(0, 0, 0.2, 1)',
        'in-out': 'cubic-bezier(0.4, 0, 0.2, 1)', 'expo-out': 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
      keyframes: {
        fadeIn: { '0%': { opacity: 0 }, '100%': { opacity: 1 }, },
        slideInRight: { '0%': { transform: 'translateX(100%)', opacity: 0 }, '100%': { transform: 'translateX(0)', opacity: 1 }, },
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'slide-in-right': 'slideInRight 0.5s ease-out forwards',
      },

      // 7. Z-Index
      zIndex: {
        '0': '0', '10': '10', '20': '20', '30': '30', '40': '40', '50': '50', 'auto': 'auto',
        'dropdown': '1000', 'sticky': '1020', 'fixed': '1030', 'modal-backdrop': '1040',
        'modal': '1050', 'popover': '1060', 'tooltip': '1070',
      },
    },
  },
  // Variants control which utility plugins are generated
  variants: {
    extend: {
      backgroundColor: ['active'],
      borderColor: ['active'],
      textColor: ['active'],
      opacity: ['group-hover'],
      transform: ['hover', 'focus'],
    },
  },
  plugins: [
    require('@tailwindcss/typography'), 
    require('@tailwindcss/forms'),     
    require('@tailwindcss/aspect-ratio'),
  ],
};
