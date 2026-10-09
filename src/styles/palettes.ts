export type PaletteName = "Ember" | "Magenta" | "Ultraviolet" | "Iridescent" | "Medal";

export const PALETTES: Record<PaletteName, { stops: string[]; bg: string[] }> = {
  Ember: { stops: ["ffe9a3", "ffb020", "ff3a2e", "d0186a", "4a2fd0", "0b1550"], bg: ["05081c", "010207"] },
  Magenta: { stops: ["ffe2ec", "ff5fa8", "ff1f5e", "c01050", "6a0a3a", "2a0518"], bg: ["1d0310", "080105"] },
  Ultraviolet: { stops: ["ffd0a0", "ff6a4a", "ff2f4f", "b02ad0", "5a2ee0", "2a1ab0"], bg: ["160c58", "050220"] },
  Iridescent: { stops: ["eafcff", "58efff", "9a5cff", "ff3fa2", "ff6a2a", "07070c"], bg: ["0b0a14", "000000"] },
  Medal: { stops: ["f7e2ff", "ffb3f0", "7ee8ff", "3aa8ff", "5b3fd6", "07060f"], bg: ["0a0912", "000000"] },
};

const hexToRgb = (h: string) => [0, 2, 4].map((i) => parseInt(h.slice(i, i + 2), 16) / 255);
const rgbToHex = (c: number[]) =>
  "#" + c.map((v) => Math.round(Math.min(1, Math.max(0, v)) * 255).toString(16).padStart(2, "0")).join("");
const smoothstep = (e0: number, e1: number, x: number) => {
  const t = Math.min(1, Math.max(0, (x - e0) / (e1 - e0)));
  return t * t * (3 - 2 * t);
};

// Mirrors the shader's ramp(): stop positions along the rim-to-core depth axis.
const RAMP_POS = [0, 0.03, 0.16, 0.36, 0.62, 1];
function ramp(stops: number[][], s: number): number[] {
  let c = stops[0];
  for (let k = 1; k < stops.length; k++) {
    const w = smoothstep(RAMP_POS[k - 1], RAMP_POS[k], s);
    c = c.map((v, i) => v + (stops[k][i] - v) * w);
  }
  return c;
}

// Blob glow reaches the frame edges most of the time; modeled over the drift cycle it averages ~0.55
// of full strength on desktop and ~0.7 on phones, which is where the browser chrome matters most.
const TYPICAL_EDGE_GLOW = 0.65;

/**
 * The colors LavaBackground paints at the top and bottom edges of the frame. Mirrors the shader's background
 * term (`mix(uBg[0], uBg[1], vign) + mix(uBg[0], vec3(1.0), 0.25) * lift * uLift`) at its fixed spread (0.5)
 * and vignette (1), plus a typical amount of blob glow (`ramp(0.30) * spill * 0.085`), so keep the two in
 * sync. Use `top` for theme-color (the status bar sits there) and `bottom` for the html/body/main
 * backgrounds Safari shows behind its bottom toolbar.
 */
export function lavaEdgeColors(name: PaletteName, lift: number): { top: string; bottom: string } {
  const [bg0, bg1] = PALETTES[name].bg.map(hexToRgb);
  const glow = ramp(PALETTES[name].stops.map(hexToRgb), 0.3).map((v) => v * TYPICAL_EDGE_GLOW * 0.085);
  const edge = (y: number) => {
    const vign = Math.min(Math.abs(y) * 0.9, 1);
    const rise = smoothstep(0.575, -0.55, y) * lift;
    return rgbToHex(bg0.map((c, i) => c + (bg1[i] - c) * vign + (c + (1 - c) * 0.25) * rise + glow[i]));
  };
  return { top: edge(0.5), bottom: edge(-0.5) };
}
