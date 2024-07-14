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
      grey: "#808080",
      purple: "#cc5de8",
      bgBlue: "#102C57",
      twitterBlue: "#1DA1F2",
      instagram: "#405DE6",
      youtube: "#FF0000",
      bgGray: "#e9ecef",
      bgIcon: "#D6D1F8",
    },
    backgroundImage: {
      "hero-bg": "url('/hero_bg.jpg')",
      "hero-bg-2": "url('/hero_bg_2.png')",
      "hero-bg-3": "url('/hero_bg_3.jpg')",
      "hero-bg-4": "url('/hero_bg_4.jpg')",
      "hero-bg-5": "url('/hero_bg_5.jpg')",
      "hero-bg-6": "url('/hero_bg_6.jpg')",
      "hero-bg-7": "url('/hero_bg_7.jpg')",
    },
    boxShadow: {
      overlay: "inset 0 0 0 1000px rgba(0, 0, 0, 0.5)",
      signOverlay: "inset 0 0 0 1000px rgba(0, 0, 0, 0.4)",
    },
  },
  plugins: [],
};
export default config;
