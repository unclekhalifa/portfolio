/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      animation: {
        blob_primary: "float_primary 6s ease-in-out infinite",
        blob_secondary: "float_secondary 5s ease-in-out infinite",
      },
      keyframes: {
        float_secondary: {
          "0%, 100%": {
            transform: "translate(0, 0)",
          },
          "25%": {
            transform: "translate(12px, -12px)",
          },
          "50%": {
            transform: "translate(18, -18px)",
          },
          "75%": {
            transform: "translate(-12px, -12px)",
          },
        },
        float_primary: {
          "0%, 100%": {
            transform: "translate(10, -10)",
          },
          "25%": {
            transform: "translate(-12px, 12px)",
          },
          "50%": {
            transform: "translate(-18, 18px)",
          },
          "75%": {
            transform: "translate(12px, 12px)",
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
