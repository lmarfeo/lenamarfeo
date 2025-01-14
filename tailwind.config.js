/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/react-tailwindcss-datepicker/dist/index.esm.js",
  ],
  darkMode: ["class", '[data-theme="darkAutumn"]'], // Enable dark mode toggle
  theme: {
    extend: {
      keyframes: {
        slideInLeft: {
          '0%': { transform: 'translateX(-100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        slideInRight: {
          '0%': { transform: 'translateX(100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        slideInUp: {
          '0%': { transform: 'translateY(100%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideInDown: {
          '0%': { transform: 'translateY(-100%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        fadeIn: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
      },
      animation: {
        slideInLeft: 'slideInLeft 0.7s ease-out',
        slideInRight: 'slideInRight 0.7s ease-out',
        slideInUp: 'slideInUp 0.7s ease-out',
        slideInDown: 'slideInDown 0.7s ease-out',
        fadeIn: 'fadeIn 0.7s ease-in-out', // Adding fadeIn animation
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")], // Plugins
  daisyui: {
    themes: [
      "autumn", // Default DaisyUI theme
      {
        darkAutumn: {
          primary: "#8c0127",
          "primary-content": "#edd0d2",
          secondary: "#d75250",
          "secondary-content": "#110402",
          accent: "#d59b6b",
          "accent-content": "#100903",
          neutral: "#816a5c",
          "neutral-content": "#e5e0de",
          "base-100": "#1f2937",
          "base-200": "#19222e",
          "base-300": "#141c26",
          "base-content": "#f0f1f1",
          info: "#42adbb",
          "info-content": "#010b0d",
          success: "#4b9380",
          "success-content": "#020706",
          warning: "#e97f14",
          "warning-content": "#130400",
          error: "#d40014",
          "error-content": "#ffd4d1",
        },
      },
    ],
    base: true, // Enable DaisyUI base styles
  },
};
