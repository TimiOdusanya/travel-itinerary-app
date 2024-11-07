import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "nav-border": "#EBEAEA",
        "light-white-100": "#F1F4F5",
        "black-50": "#E7F0FF",
        "blue-300": "#0D6EFD",
        gray: "#4D4A4A",
        "black-100": "#252525",
        "primary-purple": "#9747FF",
        "gray-25": "#F0F2F5",
        "gray-50": "#D9D9D9",
        "gray-100": "#647995",
        "gray-200": "#1D2433",
        "gray-300": "#344054",
        "brown-50": "#FEF4E6",
        "brown-100": "#7A4504",
        "red-50": "#FBEAE9",
        "red-500": "#9E0A05",
      },
      fontFamily: {
        sans: ["var(--font-poppins)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
