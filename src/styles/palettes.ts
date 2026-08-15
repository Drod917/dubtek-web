export type PaletteName = "Ember" | "Magenta" | "Ultraviolet" | "Iridescent" | "Medal";

export const PALETTES: Record<PaletteName, { stops: string[]; bg: string[] }> = {
  Ember: { stops: ["ffe9a3", "ffb020", "ff3a2e", "d0186a", "4a2fd0", "0b1550"], bg: ["05081c", "010207"] },
  Magenta: { stops: ["ffe2ec", "ff5fa8", "ff1f5e", "c01050", "6a0a3a", "2a0518"], bg: ["1d0310", "080105"] },
  Ultraviolet: { stops: ["ffd0a0", "ff6a4a", "ff2f4f", "b02ad0", "5a2ee0", "2a1ab0"], bg: ["160c58", "050220"] },
  Iridescent: { stops: ["eafcff", "58efff", "9a5cff", "ff3fa2", "ff6a2a", "07070c"], bg: ["0b0a14", "000000"] },
  Medal: { stops: ["f7e2ff", "ffb3f0", "7ee8ff", "3aa8ff", "5b3fd6", "07060f"], bg: ["0a0912", "000000"] },
};

/**
 * Outer background stop — what the shader fades to at the edges (`mix(uBg[0], uBg[1], vign)`), so
 * it's the right flat color for html/body/theme-color behind the safe-area insets.
 */
export function backdropColor(name: PaletteName): string {
  return `#${PALETTES[name].bg[1]}`;
}
