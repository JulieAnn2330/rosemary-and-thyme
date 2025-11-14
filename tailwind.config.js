/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50:  '#f8faf8',
          100: '#eef6ef',
          200: '#d9ebdc',
          300: '#b8d6be',
          400: '#8fbea0',
          500: '#70a987',
          600: '#5b8d71',
          700: '#4a735d',
          800: '#3e5e4c',
          900: '#344d3f'
        }
      },
      boxShadow: { card: '0 4px 20px rgba(0,0,0,0.06)' }
    }
  },
  plugins: []
};
