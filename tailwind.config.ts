import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-space-grotesk)"],
        serif: ["var(--font-italiana)"],
      },
      colors: {
        background: "#FAFAFA",
        foreground: "#18181B",
      },
    },
  },
  plugins: [],
};
export default config;
