/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  themes: [
    {
      mytheme: {

        "primary": "#aaffd4",

        "secondary": "#ffccfe",

        "accent": "#6faf08",

        "neutral": "#1E2029",

        "base-100": "#E0E5F0",

        "info": "#92A6E2",

        "success": "#55ECA1",

        "warning": "#D9A90D",

        "error": "#6047EC",
      },
    },
  ],
  plugins: [require("daisyui")],
}
