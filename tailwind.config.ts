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
        canvas: "#050509",
        surface: {
          DEFAULT: "#0B0B12",
          light: "#101018",
          raised: "#15151F",
          border: "#23232E",
          strong: "#33333F",
        },
        ink: {
          DEFAULT: "#F2F1ED",
          muted: "#9A99A6",
          dim: "#65646F",
        },
        accent: {
          DEFAULT: "#8B8BFF",
          hover: "#A8A8FF",
          glow: "rgba(139, 139, 255, 0.09)",
          muted: "rgba(139, 139, 255, 0.16)",
        },
        signal: {
          DEFAULT: "#E8B34B",
          dim: "rgba(232, 179, 75, 0.12)",
        },
      },
      maxWidth: {
        shell: "1320px",
        prose: "68ch",
      },
      spacing: {
        gutter: "clamp(20px, 4vw, 40px)",
        section: "clamp(72px, 9vw, 140px)",
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
      fontSize: {
        "display-sm": ["clamp(2.25rem, 5vw, 3.5rem)", { lineHeight: "1.02", letterSpacing: "-0.035em" }],
        "display-md": ["clamp(3rem, 7.4vw, 6rem)", { lineHeight: "0.96", letterSpacing: "-0.045em" }],
        "display-lg": ["clamp(3.4rem, 9vw, 8rem)", { lineHeight: "0.92", letterSpacing: "-0.055em" }],
      },
      boxShadow: {
        lift: "0 30px 70px -46px rgba(0, 0, 0, 0.95)",
        glow: "0 0 40px -12px rgba(139, 139, 255, 0.35)",
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
        "orbit-drift": "orbitDrift 34s linear infinite",
        "orbit-drift-reverse": "orbitDrift 52s linear infinite reverse",
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
        orbitDrift: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
