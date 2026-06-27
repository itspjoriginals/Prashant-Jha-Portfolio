/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "sans-serif",
        ],
        mono: [
          "ui-monospace",
          "SFMono-Regular",
          "Roboto Mono",
          "Menlo",
          "Monaco",
          "Liberation Mono",
          "DejaVu Sans Mono",
          "Courier New",
          "monospace",
        ],
      },
      colors: {
        brand: {
          black: "#000000",
          white: "#ffffff",
          charcoal: "#3f3c39",
          accent: "#ff2d1a",
          muted: "#e5e7eb",
        },
      },
      boxShadow: {
        soft: "0 16px 44px rgba(17, 17, 17, 0.07)",
        bold: "0 24px 70px rgba(17, 17, 17, 0.12)",
        accent: "0 18px 45px rgba(255, 45, 26, 0.16)",
        strong: "0 24px 70px rgba(17, 17, 17, 0.16)",
      },
      borderRadius: {
        xl: "8px",
      },
    },
  },
  plugins: [],
};
