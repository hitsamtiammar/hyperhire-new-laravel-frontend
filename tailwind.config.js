/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#101828',
        secondary: '#1D2939',
        bluegrey: {
          DEFAULT: '#667085',
          200: '#EAECF0',
          300: '#D0D5DD',
          400: '#98A2B3',
          600: '#475467',
          900: '#101828'
        },
        limegreen: '#9FF443',
        bluegray: '#101828',
        arthicBlue: '#253BFF'
      }
    },
    fontFamily: {
      sans: ['Plus Jakarta Sans', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}

