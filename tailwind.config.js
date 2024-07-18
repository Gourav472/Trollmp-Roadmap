/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'Dela': "'Dela Gothic One',sans-serif",
        'Balsamiq': "'Balsamiq Sans',sans-serif",

      },
      screens: {
        'sm': '576px',
        'md': '768px',
        'lg': '992px',
        'xl': '1200px',
        '2xl': '1400px',
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "12px",
        },
      },
      colors: {
        dark_blue: "#0F2440",
        dark_red:"#DF4741",
      },
      boxShadow: {
        "3xl": "0px 2px 48px 0px #00000014",
        "4xl": "8px 8px 0px 0px #DF4741",
        "5xl": "8px 8px 0px 0px #ffffff",
      },
      backgroundImage: {
        "non_binding_bg": "url(./assets/webp/Binding-bg.webp)",
      },
    },
  },
  plugins: [],
}

