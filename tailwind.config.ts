import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        paper: "#FFFFFF",   // gallery-white background
        ink: "#0F0F0F",     // text + primary marks
        muted: "#737373",   // captions / secondary
        line: "#E4E4E4",    // hairlines
      },
      fontFamily: {
        display: ["var(--font-display)", "ui-sans-serif", "system-ui"],
        body: ["var(--font-body)", "ui-sans-serif", "system-ui"],
      },
      letterSpacing: {
        placard: "0.18em", // wall-label small caps
      },
    },
  },
  plugins: [],
};

export default config;
