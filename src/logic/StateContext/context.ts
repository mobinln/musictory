import { createContext } from "react";
import { colorType, musicType } from "types";

import arcticMonkeys from "assets/arctic_monkeys.webp";

export const defaultValue = {
  color: { rgb: "#000000", array: [0, 0, 0] } as colorType,
  setColor: () => undefined,
  music: {
    image: arcticMonkeys,
    artist: "Arctic Monkeys",
    name: "R U Mine?",
    text: "All I wanna ever say is, 'Are you mine?'",
    layout: "spotify",
  } as musicType,
  setMusic: () => undefined,
  takeShot: false,
  setTakeShot: () => undefined,
};

const stateContext = createContext<{
  color: colorType;
  setColor: React.Dispatch<React.SetStateAction<colorType>>;
  music: musicType;
  setMusic: React.Dispatch<React.SetStateAction<musicType>>;
  takeShot: boolean;
  setTakeShot: React.Dispatch<React.SetStateAction<boolean>>;
}>(defaultValue);

export default stateContext;
