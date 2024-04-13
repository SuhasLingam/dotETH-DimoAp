/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        customFont: ['"customFont"', "DM Sans"],
      },
      backgroundImage: {
        "test-bg": "url('../src/assets/unsplash_E8Ufcyxz514.png')",
      },
    },
  },
  plugins: [],
};
