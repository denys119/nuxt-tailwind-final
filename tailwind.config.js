module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
  ],
  theme: {
    extend: {
      colors: {
        "logo": "#10b981",
        "bgButton": "#06b6d4",
        "bgHoverButton": "#0e7490",
        "textColor": "#9ca3af",
        "titleColor": "#1e293b",
        "contactBg": "#4E59C6",
        "footerBg": "#11121F",
        "textWhite": "#FFFFFF",
        "bgGray": "#E5E7EB",
        "bgSlate": "#E2E8F0",
        "bgOrange": "#FDBA74",
        "bgHoverOrange": "#F97316"
      }
    },
    container: {
      center: true,
      screens: {
        lg: "1124px",
        xl: "1124px",
        "2xl": "1124px",
      }   
    },
    fontFamily: {
      Poppins: ["Poppins, sans-serif"]
    }
  },
  plugins: [],
}