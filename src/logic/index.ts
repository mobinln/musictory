import ColorThief from "colorthief";

export const getDominantColor = (img: HTMLImageElement) => {
  const ct = new ColorThief();
  const rgb = ct.getColor(img);
  return { array: rgb, rgb: `rgb(${rgb.join(",")})` };
};

function padZero(str: string | number, len?: number) {
  len = len || 2;
  const zeros = new Array(len).join("0");
  return (zeros + str).slice(-len);
}

export function invertColor(hex: string, bw?: boolean) {
  if (hex.indexOf("#") === 0) {
    hex = hex.slice(1);
  }

  if (hex.length === 3) {
    hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
  }
  if (hex.length !== 6) {
    throw new Error("Invalid HEX color.");
  }

  let r = String(parseInt(hex.slice(0, 2), 16));
  let g = String(parseInt(hex.slice(2, 4), 16));
  let b = String(parseInt(hex.slice(4, 6), 16));

  if (bw) {
    return Number(r) * 0.299 + Number(g) * 0.587 + Number(b) * 0.114 > 186 ? "#000000" : "#FFFFFF";
  }

  r = (255 - Number(r)).toString(16);
  g = (255 - Number(g)).toString(16);
  b = (255 - Number(b)).toString(16);

  return "#" + padZero(r) + padZero(g) + padZero(b);
}

export function getFaderColor(rgb: string, percentage: number): string {
  // Remove whitespace and convert the RGB string to an array of values
  const rgbArray = rgb.replace(/\s/g, "").split(",");

  // Extract the red, green, and blue values from the RGB array
  const red = parseInt(rgbArray[0]);
  const green = parseInt(rgbArray[1]);
  const blue = parseInt(rgbArray[2]);

  // Calculate the fade color values based on the percentage
  const fadeRed = Math.round(red + (255 - red) * (percentage / 100));
  const fadeGreen = Math.round(green + (255 - green) * (percentage / 100));
  const fadeBlue = Math.round(blue + (255 - blue) * (percentage / 100));

  // Combine the fade color values into a single RGB color string
  const fadeColor = `rgb(${fadeRed}, ${fadeGreen}, ${fadeBlue})`;

  // Return the fade color
  return fadeColor;
}
