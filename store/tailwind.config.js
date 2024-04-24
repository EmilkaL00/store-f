/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'neutral-000': '#FFFFFF',
        'neutral-100': '#EBEBF0',
        'neutral-300': '#9898A5',
        'neutral-400': '#62636C',
        'neutral-500': '#363742',
        'neutral-800': '#070B26',
        'neutral-900': '#07021C',
        'neutral-950': '#050212',

        blue: '#3CC6F2',
        blueMalibu: '#01D1E0',
        turq: '#06D2DA',
        seledin: '#44DC9C',
        peas: '#6DE372',
        yellow: '#D8FB4A',
        malibu: '#7378FF',
        facebook: '#1877F2',
        linkedin: '#0A66C2',
        deepPurple: '#6B4BC7',
        deepPink: '#D13C99',
        vividOrange: '#FD5341',
        goldenYellow: '#FFB84F',

        'gradient-dark': '#0BD2D540',
        'gradient-blue': '#0BD2D540',
        'gradient-green': '#509A5240',
      },
    },
  },
  plugins: [],
}

