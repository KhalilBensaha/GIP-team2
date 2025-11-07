/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"], // ✅ required for dark mode toggle
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./lib/**/*.{js,ts,jsx,tsx}", // ✅ needed because you import from "@/lib/utils"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
