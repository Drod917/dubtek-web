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
        aqua: {
          50: "#E6F6F5", // aqua-tinted white for terminal copy
          DEFAULT: "#A2FBFF", // lava-rim cyan — hero status bar + contact button
        },
      },
      fontFamily: {
        display: ["'Manrope Variable'", "Manrope", "sans-serif"],
        body: ["'Inter Variable'", "Inter", "sans-serif"],
        mono: ["'JetBrains Mono'", "ui-monospace", "monospace"],
        pixel: ["Silkscreen", "ui-monospace", "monospace"], // wide pixel caps for system labels
        terminal: ["VT323", "ui-monospace", "monospace"], // narrow CRT terminal type
      },
      maxWidth: {
        content: "1240px",
      },
    },
  },
  plugins: [],
};
