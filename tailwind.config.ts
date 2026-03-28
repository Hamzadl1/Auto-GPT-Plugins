import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "aui-green-dark": "#1B3A2D",
        "aui-green-mid": "#2D5A3F",
        "aui-green-light": "#3A7A54",
        "aui-cream": "#F5F1EB",
        "aui-gold": "#C8A84E",
        "aui-text-dark": "#1A1A1A",
        "aui-text-muted": "#5A5A5A",
        "aui-text-light": "#E8E8E8",
        "aui-border": "#E2DDD5",
      },
      fontFamily: {
        display: ["'Playfair Display'", "Georgia", "serif"],
        body: ["'DM Sans'", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
