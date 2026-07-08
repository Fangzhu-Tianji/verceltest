/** @type {import('tailwindcss').Config} */

export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "1rem",
    },
    extend: {
      colors: {
        navy: {
          900: "#0f1322",
          800: "#1a1f36",
          700: "#252b45",
        },
        gold: {
          400: "#d4b87a",
          500: "#c9a96e",
          600: "#b8944f",
        },
      },
      fontFamily: {
        serif: ['"Noto Serif SC"', "serif"],
        sans: ['"Noto Sans SC"', "sans-serif"],
      },
    },
  },
  plugins: [],
};
