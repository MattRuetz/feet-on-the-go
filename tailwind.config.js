import forms from "@tailwindcss/forms";
import typography from "@tailwindcss/typography";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,svelte,ts}"],

  theme: {
    extend: {
      fontFamily: {
        sans: ["DM Sans", "system-ui", "sans-serif"],
        display: ["DM Sans", "Georgia", "serif"],
      },
      fontSize: {
        xs: "0.875rem", // 14px
        sm: "1rem", // 16px
        base: "1.125rem", // 18px
        lg: "1.25rem", // 20px
        xl: "1.5rem", // 24px
        "2xl": "1.75rem", // 28px
        "3xl": "2rem", // 32px
        "4xl": "2.5rem", // 40px
        "5xl": "3rem", // 48px
        "6xl": "3.75rem", // 60px
      },
    },
  },

  plugins: [typography, forms],
};
