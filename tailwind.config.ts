import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/slices/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          main: "#CC2F25",
          alt: "#FF5555",
        },
        gray: {
          main: "#F3EED9",
          alt: "#F2F2F2",
        },
        black: "#1E1E1E",
      },
      fontFamily: {
        primary: ["var(--font-righteous)"],
        secondary: ["var(--font-inter)"],
      },
    },
  },
  plugins: [],
};

export default config;
