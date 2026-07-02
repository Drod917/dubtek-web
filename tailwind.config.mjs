/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#14161A", // primary text — dark charcoal
          soft: "#5B6270", // secondary text
          faint: "#8A90A0", // tertiary / placeholder text
        },
        surface: {
          DEFAULT: "#FFFFFF",
          raised: "#F7F8FA", // very light gray surface
          border: "#E7E9EE",
        },
        accent: {
          50: "#EEF0FF",
          100: "#E0E3FF",
          400: "#7C7FF2",
          500: "#5B5FEE", // primary indigo accent
          600: "#4640DE",
          700: "#3730A3",
          900: "#1E1B4B",
        },
        emerald: {
          400: "#34D399",
          500: "#10B981",
          600: "#059669",
        },
      },
      fontFamily: {
        display: ["'Manrope Variable'", "Manrope", "sans-serif"],
        body: ["'Inter Variable'", "Inter", "sans-serif"],
        mono: ["'JetBrains Mono'", "ui-monospace", "monospace"],
      },
      fontSize: {
        "display-xl": ["clamp(2.75rem, 6vw, 5rem)", { lineHeight: "1.02", letterSpacing: "-0.03em" }],
        "display-lg": ["clamp(2.25rem, 4.2vw, 3.5rem)", { lineHeight: "1.05", letterSpacing: "-0.025em" }],
        "display-md": ["clamp(1.75rem, 2.8vw, 2.5rem)", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
      },
      maxWidth: {
        content: "1240px",
      },
      boxShadow: {
        soft: "0 1px 2px rgba(20,22,26,0.04), 0 8px 24px -8px rgba(20,22,26,0.08)",
        card: "0 1px 1px rgba(20,22,26,0.03), 0 12px 32px -16px rgba(20,22,26,0.12)",
        lift: "0 20px 48px -16px rgba(70,64,222,0.28)",
        glow: "0 0 0 1px rgba(91,95,238,0.12), 0 24px 64px -24px rgba(91,95,238,0.35)",
      },
      borderRadius: {
        xl2: "1.25rem",
        xl3: "1.75rem",
      },
      backgroundImage: {
        "grid-dots": "radial-gradient(circle, #E7E9EE 1px, transparent 1px)",
        "accent-radial": "radial-gradient(60% 60% at 50% 30%, rgba(91,95,238,0.16), transparent 70%)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(14px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px) rotate(var(--tilt, 0deg))" },
          "50%": { transform: "translateY(-10px) rotate(var(--tilt, 0deg))" },
        },
        "pill-cycle": {
          "0%, 22%": { opacity: "1", transform: "translateY(0)" },
          "28%, 100%": { opacity: "0", transform: "translateY(-6px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.7s cubic-bezier(0.16,1,0.3,1) both",
        float: "float 6s ease-in-out infinite",
        shimmer: "shimmer 3s linear infinite",
      },
    },
  },
  plugins: [],
};
