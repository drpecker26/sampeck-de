import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./content/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Sampled from the original Gamma deck so the site still reads as "Sam's".
        ink: {
          950: "#08060f", // page base
          900: "#0d0a1a", // section base
          850: "#141026",
          800: "#1b1633", // card surface
          700: "#2a2247", // card border / hairline
        },
        accent: {
          DEFAULT: "#a17de8", // deck link purple
          bright: "#c0a6f5",
          deep: "#6d4fc4",
        },
        paper: {
          DEFAULT: "#f2f0f4", // heading white
          muted: "#dcd7e5", // body text
          dim: "#a09ab3", // secondary text
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "Montserrat", "sans-serif"],
        body: ["var(--font-body)", "Heebo", "system-ui", "sans-serif"],
      },
      maxWidth: {
        shell: "72rem",
      },
      keyframes: {
        "fade-up": {
          from: { opacity: "0", transform: "translateY(12px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.5s ease-out both",
      },
    },
  },
  plugins: [],
};

export default config;
