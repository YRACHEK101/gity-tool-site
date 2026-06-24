import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        night: "#0f172a", // page background (slate-900)
        surface: "#1e293b", // cards / surfaces (slate-800)
        term: "#0b1120", // terminal / code background
        line: { DEFAULT: "#334155", soft: "#2a3953" }, // borders
        ink: "#f8fafc", // primary text
        muted: "#94a3b8", // muted text
        subtle: "#64748b", // secondary text / connectors
        sky: "#38bdf8", // identity accent 1
        emerald: "#34d399", // identity accent 2
        orange: "#fb923c", // identity accent 3
        npm: "#cb3837", // npm brand red
      },
      fontFamily: {
        sans: ["var(--font-inter)", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "sans-serif"],
        mono: ["var(--font-jbmono)", "Fira Code", "ui-monospace", "SFMono-Regular", "Menlo", "monospace"],
      },
      maxWidth: {
        container: "1120px",
      },
      // Desktop-first max-width breakpoints to mirror the original design
      screens: {
        wide: { max: "960px" },
        tablet: { max: "820px" },
        mobile: { max: "560px" },
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(56,189,248,0.15), 0 20px 50px -20px rgba(56,189,248,0.25)",
        soft: "0 10px 30px -10px rgba(0,0,0,0.5)",
      },
      keyframes: {
        blink: { "50%": { opacity: "0" } },
      },
      animation: {
        blink: "blink 1s step-end infinite",
      },
    },
  },
  plugins: [],
};

export default config;
