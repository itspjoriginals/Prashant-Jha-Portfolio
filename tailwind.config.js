/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        mono: [
          "__GeistMono_46451f",
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
        soft: "5px 5px 0px 0px rgba(0,0,0,1)",
        bold: "8px 8px 0px 0px rgba(0,0,0,1)",
        accent: "6px 6px 0px 0px rgba(255,45,26,1)",
        strong: "10px 10px 0px 0px rgba(0,0,0,1)",
      },
      borderRadius: {
        xl: "8px",
      },
    },
  },
  plugins: [],
};
