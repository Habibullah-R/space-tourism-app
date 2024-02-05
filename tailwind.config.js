export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontSize: {
      'para': '18px',
      'nav-text': '16px',
      'h7':'14px'
    },
    letterSpacing: {
      'c-h7': '2.35px',
      'c-nav': '2.7px'
    },
    extend: {
      colors: {
        'body':'#0B0D17',
        'blue':'#D0D6F9',
        'skin':'#FFFFFF'
      },
    },
  },
  plugins: [],
}
