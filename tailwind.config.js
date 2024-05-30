/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: "jost, sans-serif"
      },
      colors: {
        "background1": "hsl(231, 100%, 98%)",
        "background2": "hsl(230, 31%, 31%)",
        "background3": "hsl(229, 76%, 58%)",
        "text1": "hsl(230, 33%, 34%)",
        "text2": "hsl(229, 76%, 58%)",
        "purple": "hsl(282, 83%, 52%)",
        "orange": "hsl(14, 84%, 74%)",
        "blue": "hsl(204, 94%, 68%)"
      },
      backgroundImage: {
        "mobileHeaderBg": "url('/suggestions/mobile/background-header.png')",
        "tabletHeaderBg": "url('/suggestions/tablet/background-header.png')",
        "headerBg": "url('/suggestions/desktop/background-header.png')"
      }
    },
  },
  plugins: [],
}