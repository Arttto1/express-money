/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        customDarkBlue: "#37506C",
        customLightBlue: "#3EC1C9",
        customBackground: "#ccd2db"
      },
      maxWidth: {
        "80vw": "80vw",
      },
    },
  },
  plugins: [],
};
