/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"], // Enable class-based dark mode
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      colors: {
        // Add custom colors if needed
      },
      backgroundImage: {
        // Define the dark mode gradient
        darkBg: "linear-gradient(to bottom, #2c3e50, #34495e)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
