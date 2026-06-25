import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Marca Gobierno de Guadalajara
        gold: {
          DEFAULT: "#cc9f52",
          50: "#faf5ea",
          100: "#f3e8cf",
          200: "#e8d2a3",
          300: "#dcb974",
          400: "#d4a85a",
          500: "#cc9f52",
          600: "#b3853d",
          700: "#8f6831",
          800: "#6b4e26",
          900: "#48341a",
        },
        navy: {
          DEFAULT: "#16243f",
          50: "#eef1f6",
          100: "#d6dde9",
          200: "#aebccf",
          300: "#7e92b0",
          400: "#4f6691",
          500: "#2f456e",
          600: "#22344f",
          700: "#16243f",
          800: "#101a2e",
          900: "#0a111e",
        },
        accent: {
          pink: "#e96cb0",
          purple: "#9264cc",
          blue: "#009ade",
          green: "#6cca98",
          yellow: "#ffb700",
          orange: "#ff9d6c",
          gray: "#808080",
        },
      },
      fontFamily: {
        sans: ["Seravek", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      boxShadow: {
        card: "0 1px 2px rgba(16,26,46,0.04), 0 8px 24px rgba(16,26,46,0.06)",
        cardHover: "0 2px 6px rgba(16,26,46,0.06), 0 16px 40px rgba(16,26,46,0.12)",
      },
      borderRadius: {
        xl2: "1.25rem",
      },
    },
  },
  plugins: [],
};

export default config;
