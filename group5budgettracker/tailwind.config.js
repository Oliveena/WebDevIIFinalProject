/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      colors: {
        primary: {
          500: "#003566", // medium blue
          600: "#001D3D", // dark navy
          700: "#000814", // deepest navy
        },
        accent: {
          500: "#FFD60A", // bright yellow
          600: "#FFC300", // golden yellow
        },
      },
    }, 
  },
  plugins: [],
}
