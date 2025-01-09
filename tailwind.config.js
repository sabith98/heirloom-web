/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'martian': ['"Martian Mono"', 'monospace'],
        'prata': ['Prata', 'serif'],
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
      },
      lineHeight: {
        '120': '120%',
        '126': '126%',
        '131': '131%',
        '153': '153%',
        '159': '159%',
        '161': '161%',
        '172': '172%',
        '175': '175%',
        '181': '181%',
      },
      letterSpacing: {
        '0': '0%',
      },
    },
  },
  plugins: [],
};