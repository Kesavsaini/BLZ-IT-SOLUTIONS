/** @type {import('tailwindcss').Config} */
import colors, { indigo } from 'tailwindcss/colors';
export default {
  content: [
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
    "./node_modules/preline/preline.js",
  ],
  darkMode: "class",
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: "#000000",
      white: "#ffffff",
      gray: colors.gray,
      indigo: colors.indigo,
      neutral: colors.neutral,  // Used mainly for text color
      yellow: {
        50: "#fefce8",
        100: "#fef9c3",
        400: "#facc15",
        500: "#eab308",
      }, // Accent colors, used mainly for star color, heading and buttons
      orange: {
        100: "#ffedd5",
        200: "#fed7aa",
        300: "#fb713b",
        400: "#fa5a15",
        500: "#e14d0b",
        600: "#ea580c",
      }, // Primary colors, used mainly for links, buttons and svg icons
      blue: {
        100: "#dbeafe",
        200: "#bfdbfe",
        300: "#60a5fa",
        400: "#3b82f6",
        500: "#2563eb",
        600: "#1d4ed8",
      },
      teal: {
        100: "#ccfbf1",
        200: "#99f6e4",
        300: "#2dd4bf",
        400: "#14b8a6",
        500: "#0d9488",
        600: "#0f766e",
      },
      purple: {
        100: "#ede9fe",
        200: "#ddd6fe",
        300: "#a78bfa",
        400: "#8b5cf6",
        500: "#7c3aed",
        600: "#6d28d9",
      },
      indigo:{
        100: "#e0e7ff",
        200: "#c7d2fe",
        300: "#a5b4fc",
        400: "#818cf8",
        500: "#6366f1",
        600: "#4f46e5",
      },
      red: colors.red, // Used for bookmark icon
      zinc: colors.zinc, // Used mainly for box-shadow
    },
    extend: {
      backgroundImage: {
        'web-dev': "url('../../../images/webdevelopment.jpg')",
      }
    },
  },
  plugins: [
    require("tailwindcss/nesting"),
    require("preline/plugin"),
    require("@tailwindcss/forms"),
  ],
};
