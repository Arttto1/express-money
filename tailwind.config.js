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
        customLightBlueContrast: "#2f9da3",
        customBackground: "#ccd2db",
        customGreen: "#4DBD7C"
      },
      maxWidth: {
        "80vw": "80vw",
      },
    },
  },
  plugins: [],
};
