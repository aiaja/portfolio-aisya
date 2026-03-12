/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",],
  theme: {
    extend: {colors: {
        beige: "#F7F4D5",
        "green-primary": "#125464",
        "green-secondary": "#1C7A8F",
        "pink-primary": "#CB9289",
        "pink-light": "#E8D9D6",
        charcoal: "#2C2C2A",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
      },
      borderRadius: {
        bento: "1.25rem",
      },},
  },
  plugins: [],
}

