
/** @type {import('tailwindcss').Config} */

const {
  colors,
  typography,
  spacing,
  radiuses,
  shadows,
} = require("./design-system/theme.js");

module.exports = {
  darkMode: "class",

  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    extend: {
      colors: {
        ...colors,

        primary: "#3B82F6",
        secondary: "#0B1220",
        accent: "#F59E0B",

        gx: {
          black: "#080D16",
          background: "#0B1220",
          surface: "#111D2E",
          elevated: "#162337",
          border: "#29364A",

          amber: "#F59E0B",
          teal: "#14B8A6",
          blue: "#3B82F6",

          positive: "#14B8A6",
          negative: "#EF4444",
          warning: "#F59E0B",

          muted: "#94A3B8",
          text: "#F1F5F9",
        },

        slate: {
          950: "#080D16",
          900: "#101B2C",
          800: "#1B2A3D",
          700: "#33445A",
          600: "#52647A",
          500: "#718096",
          400: "#94A3B8",
          300: "#CBD5E1",
          200: "#E2E8F0",
          100: "#F1F5F9",
          50: "#F8FAFC",
        },
      },

      fontFamily: {
        sans: ["Inter", "sans-serif"],
        rounded: ["Inter", "sans-serif"],
        heading: ["Manrope", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },

      fontSize: {
        ...typography.fontSize,
        "6xl": "3.75rem",
        "7xl": "4.5rem",
      },

      fontWeight: {
        normal: "400",
        medium: "500",
        semibold: "600",
        bold: "700",
        extrabold: "800",
      },

      spacing: {
        ...spacing,
        18: "4.5rem",
        28: "7rem",
        32: "8rem",
      },

      borderRadius: {
        ...radiuses,
        "4xl": "2rem",
      },

      boxShadow: {
        ...shadows,

        terminal: "0 8px 30px rgba(0,0,0,0.25)",
        card: "0 4px 20px rgba(0,0,0,0.15)",
        elevated: "0 12px 35px rgba(0,0,0,0.25)",

        amberGlow: "0 0 18px rgba(245,158,11,0.15)",
        blueGlow: "0 0 18px rgba(59,130,246,0.18)",
        tealGlow: "0 0 18px rgba(20,184,166,0.15)",
      },

      transitionDuration: {
        fast: "150ms",
        normal: "250ms",
        slow: "350ms",
      },

      maxWidth: {
        terminal: "1800px",
      },

      letterSpacing: {
        terminal: "0.18em",
      },
    },
  },

  plugins: [],
};
