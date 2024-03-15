/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      animation: {
        blob_primary: "primary 7s infinite ease",
        blob_secondary: "secondary 7s infinite ease",
      },
      keyframes: {
        primary: {
          "0%, 100%": {
            transform: "translate(20px, 10px) scale(1)",
          },
          "33%": {
            transform: "translate(30px, 15px) scale(1.2)",
          },
          "66%": {
            transform: "translate(10px, 20px) scale(1.3)",
          },
        },
        secondary: {
          "0%, 100%": {
            transform: "translate(8px, -2px) scale(1.1)",
          },
          "33%": {
            transform: "translate(30px, -2px) scale(1)",
          },
          "66%": {
            transform: "translate(20px, 10px) scale(1)",
          },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
  daisyui: {
    themes: ["sunset"],
  },
};
