import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)"],
        heading: ["var(--font-poppins)"],
      },
      colors: {
        heading: "#041D1A",
        primary: "#252B37",
        secondary: "#535862",
        "status-good": "#062F29",
        "content-link": "#0278A2",
      },
    },
  },
  plugins: [],
};

export default config;
