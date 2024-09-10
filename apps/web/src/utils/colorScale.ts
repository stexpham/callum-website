type RGB = [number, number, number];

function hexToRgb(hex: string): RGB {
  const bigint = parseInt(hex.slice(1), 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;

  return [r, g, b];
}

function rgbToHex(r: number, g: number, b: number): string {
  return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}

function interpolateColor(
  color1: string,
  color2: string,
  factor: number,
): string {
  const [r1, g1, b1] = hexToRgb(color1);
  const [r2, g2, b2] = hexToRgb(color2);

  const r = Math.round(r1 + (r2 - r1) * factor);
  const g = Math.round(g1 + (g2 - g1) * factor);
  const b = Math.round(b1 + (b2 - b1) * factor);

  return rgbToHex(r, g, b);
}

function generateColorScale(
  startColor: string,
  endColor: string,
  steps: number,
): string[] {
  const scale: string[] = [];
  for (let i = 0; i <= steps; i++) {
    const factor = i / steps;
    scale.push(interpolateColor(startColor, endColor, factor));
  }
  return scale;
}

const startColor = "#50";
const endColor = "#950";
const steps = 9;

export const colorScale = generateColorScale(startColor, endColor, steps);
// console.log("colorScale", colorScale);

export function hexWithOpacity(hex: string, opacity: number): string {
  if (opacity < 0 || opacity > 1) {
    throw new Error("Opacity must be between 0 and 1");
  }

  const alpha = Math.round(opacity * 255);
  const hexAlpha = alpha.toString(16).padStart(2, "0");
  return hex + hexAlpha;
}

const hexColor = "#FF5733";
const opacity = 0.5;

const hexWithAlpha = hexWithOpacity(hexColor, opacity);
// console.log("hexWithAlpha", hexWithAlpha); // Output: "#FF573380"
