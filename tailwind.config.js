/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#9C0077",
        secondary: "#FBDDE9",
        accent: "#F6EC72",
        light: "#F6F6F6",
        dark: "#0D3B4A",
      },
      fontFamily: {
        sans: ["Inter", "poppins"],
      },
    },
  },
  plugins: [],
}
