import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      btnOrange: "#fd7e14",
      white: "#ffffff",
      black: "#000000",
    },
    backgroundImage: {
      "hero-bg": "url('/hero_bg.jpg')",
    },
    boxShadow: {
      overlay: "inset 0 0 0 1000px rgba(0, 0, 0, 0.5)",
    },
  },
  plugins: [],
};
export default config;
