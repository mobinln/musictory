import ColorThief from "colorthief";
import html2canvas from "html2canvas";

export const getDominantColor = (img: HTMLImageElement) => {
  const ct = new ColorThief();
  const rgb = ct.getColor(img);
  return { array: rgb, rgb: `rgb(${rgb.join(",")})` };
};

export function getInvertedColor(rgb: string): string {
  // Remove whitespace and convert the RGB string to an array of values
  const rgbArray = rgb.replace(/\s/g, "").split(",");

  // Extract the red, green, and blue values from the RGB array
  const red = parseInt(rgbArray[0]);
  const green = parseInt(rgbArray[1]);
  const blue = parseInt(rgbArray[2]);

  // Calculate the inverted color values
  const invertedRed = 255 - red;
  const invertedGreen = 255 - green;
  const invertedBlue = 255 - blue;

  // Combine the inverted color values into a single RGB color string
  const invertedColor = `rgb(${invertedRed}, ${invertedGreen}, ${invertedBlue})`;

  // Return the inverted color
  return invertedColor;
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

export function downloadImage(element: HTMLElement) {
  html2canvas(element)
    .then((canvas) => {
      const imageUrl = canvas.toDataURL();

      const link = document.createElement("a");
      link.href = imageUrl;
      link.download = "story.png";
      link.click();
    })
    .catch((e) => console.log(e));
}
