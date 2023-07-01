import { useContext } from "react";
import stateContext from "./context";
import { getFaderColor } from "logic";

export function useFaderColor(fade = 25) {
  const { color } = useAppState();
  const colorsStr = color?.array.join(",") || "0,0,0";
  return getFaderColor(colorsStr, fade);
}

export function useAppState() {
  return useContext(stateContext);
}
