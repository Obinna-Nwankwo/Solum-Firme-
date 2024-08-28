/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {},
    container: {
      padding: {
        DEFAULT: '1.5rem',
        sm: '2.5rem',
        lg: '4.5rem',
        xl: '8.5rem',
        '2xl': '14rem'
      }
    }
  },
  plugins: []
}

