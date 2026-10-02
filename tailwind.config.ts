import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        base: "#06060C",
        surface: {
          DEFAULT: "#111118",
          light: "#1A1B23",
          border: "#282833",
        },
        ink: {
          DEFAULT: "#E8E8ED",
          muted: "#88889A",
          dim: "#555567",
        },
        accent: {
          DEFAULT: "#7C7CFF",
          hover: "#9393FF",
          glow: "rgba(124, 124, 255, 0.08)",
          muted: "rgba(124, 124, 255, 0.15)",
        },
        // Restrained bee-inspired signal — statuses + tiny emissive details only.
        signal: {
          DEFAULT: "#E8B34B",
          dim: "rgba(232, 179, 75, 0.14)",
        },
      },
      transitionDuration: {
        fast: "180ms",
        standard: "350ms",
        slow: "700ms",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        mono: ['"JetBrains Mono"', "monospace"],
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out forwards",
        "slide-up": "slideUp 0.7s ease-out forwards",
        "cursor-blink": "blink 1s step-end infinite",
        "grid-scroll": "gridScroll 20s linear infinite",
        "pulse-soft": "pulseSoft 2.4s ease-in-out infinite",
        "flow-dash": "flowDash 2.8s linear infinite",
        "spin-slow": "spin 24s linear infinite",
        "spin-slower": "spin 48s linear infinite reverse",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
        gridScroll: {
          "0%": { transform: "translate(0, 0)" },
          "100%": { transform: "translate(40px, 40px)" },
        },
        pulseSoft: {
          "0%, 100%": { opacity: "0.45" },
          "50%": { opacity: "1" },
        },
        flowDash: {
          "0%": { strokeDashoffset: "24" },
          "100%": { strokeDashoffset: "0" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
