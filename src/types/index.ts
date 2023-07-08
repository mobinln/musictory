import { RGBColor } from "colorthief";

export const musicLayouts = ["spotify", "player", "gradient"];
export type musicLayouts = "spotify" | "player" | "gradient";

export type musicType = {
  artist: string;
  name: string;
  text: string;
  image: string;
  layout: musicLayouts;
};

export type colorType = {
  array: RGBColor;
  rgb: string;
};
