/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          primary: '#100507',
          secondary: '#1A090D',
          card: '#230E13',
          cardHover: '#2E131A',
        },
        gold: {
          DEFAULT: '#E5B842',
          light: '#F7D67D',
          dark: '#C59424',
        },
        burgundy: {
          DEFAULT: '#6B1422',
          dark: '#420B14',
          light: '#8E1C2E',
          royal: '#520D19',
        },
        saffron: {
          DEFAULT: '#E89408',
          deep: '#C97705',
        },
        cream: {
          DEFAULT: '#FFF7EA',
          soft: '#F5E8D3',
        },
        muted: '#C4B4A8',
        borderDark: '#3A181E',
        borderGold: 'rgba(229, 184, 66, 0.28)',
      },
      fontFamily: {
        display: ['var(--font-cinzel)', 'Playfair Display', 'Georgia', 'serif'],
        sans: ['var(--font-plus-jakarta)', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'gold-glow': '0 0 25px rgba(229, 184, 66, 0.22)',
        'gold-glow-lg': '0 0 45px rgba(229, 184, 66, 0.35)',
        'burgundy-glow': '0 0 30px rgba(107, 20, 34, 0.35)',
        'card-dark': '0 12px 35px -10px rgba(0, 0, 0, 0.8)',
      },
    },
  },
  plugins: [],
};
