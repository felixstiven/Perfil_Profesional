
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "350px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      backgroundImage: {
        'card-gradient': 'linear-gradient(to top right, #040404, #626565, #f1f5f9)',
      },
      colors: {
        brand: {
          bg: "#F8FAFC",
          card: "#FFFFFF",
          dark: "#0A192F",
          teal: "#00A797",
          cyan: "#00C8C8",
          slate: "#1E293B",
          muted: "#64748B",
          border: "#E2E8F0",
          accent: "#00A797",
          live: "#56f2e2",
          title: "#00F0FF",
        },
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        display: ["Outfit", "Space Grotesk", "sans-serif"],
      },
      boxShadow: {
        card: "0 10px 30px -10px rgba(0, 167, 151, 0.12), 0 1px 3px rgba(0, 0, 0, 0.05)",
        cardHover: "0 20px 40px -15px rgba(0, 167, 151, 0.2), 0 4px 6px rgba(0, 0, 0, 0.05)",
        soft: "0 4px 20px -2px rgba(0, 0, 0, 0.05)",
      },
      keyframes:{
        marquee:{
          '0':{ transform: 'translateX(0%)'},
          '100%': { transform: 'translateX(-50%)'},
        },
      },
      animation: {
        marquee: 'marquee 25s linear infinite',
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
  ],
};
