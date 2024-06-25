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
      grey:"#808080",
      purple: "#cc5de8",
      bgBlue: "#102C57",
      twitterBlue : "#1DA1F2",
      instagram: "#405DE6",
      youtube: "#FF0000",
      bgGray: "#e9ecef"
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
