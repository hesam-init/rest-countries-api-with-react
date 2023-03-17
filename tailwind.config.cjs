/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{ts,tsx}", "./index.html"],
  theme: {
    extend: {
      screens: {
        xss: "540px",
        tablet: "960px",
        xxl: "1440px"
      },
      colors: {
        "dark-main": "hsl(207, 26%, 17%)",
        "dark-sec": "hsl(209, 23%, 22%)"
      }
    }
  },
  plugins: []
};
