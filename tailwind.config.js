module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: '#F6F3EE',
        orange: '#EDAE00',
        'deep-orange': '#E47A07',
        red: '#ED0000',
        'bubble-gum': '#F8D0EA',
        'sea-green': '#21C59E',
        yellow: '#FEED00',
        'hot-pink': '#FF0066',
        'dark-purple': '#600170',
        'matte-black': '#1C0F0C',
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}