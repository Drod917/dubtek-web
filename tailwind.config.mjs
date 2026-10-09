/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}"],
  theme: {
    extend: {
      colors: {
        ink: "#14161A", // near-black text on aqua surfaces
        aqua: {
          50: "#E6F6F5", // aqua-tinted white for terminal copy
          DEFAULT: "#A2FBFF", // lava-rim cyan — hero status bar + contact button
        },
      },
      fontFamily: {
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
