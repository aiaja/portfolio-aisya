/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // V1 Colors
        beige: "#F7F4D5",
        "green-primary": "#125464",
        "green-secondary": "#1C7A8F",
        "pink-primary": "#CB9289",
        "pink-light": "#E8D9D6",
        charcoal: "#2C2C2A",
        // V2 Colors (Mapped to CSS Variables)
        primary: "oklch(var(--primary) / <alpha-value>)",
        "primary-10": "oklch(var(--primary-10))",
        "primary-20": "oklch(var(--primary-20))",
        bg: "var(--bg)",
        surface: "var(--surface)",
        "surface-2": "var(--surface-2)",
        border: "var(--border)",
        "border-strong": "var(--border-strong)",
        text: "var(--text)",
        muted: "var(--muted)",
        subtle: "var(--subtle)",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
      },
      borderRadius: {
        bento: "1.25rem",
      },
    },
  },
  plugins: [],
};
