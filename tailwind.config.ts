import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      width: {
        contain: "1488px",
      },
      maxWidth: {
        contain: "1488px",
      },
      colors: {
        darkShade: "#151515",
      },
    },
  },
  plugins: [],
};
export default config;
