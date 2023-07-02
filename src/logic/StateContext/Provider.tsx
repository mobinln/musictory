import { useState, ReactNode } from "react";

import { musicType } from "types";
import stateContext, { defaultValue } from "./context";

export default function StateProvider({ children }: { children: ReactNode }) {
  const [color, setColor] = useState(defaultValue.color);
  const [music, setMusic] = useState<musicType>(defaultValue.music);
  const [takeShot, setTakeShot] = useState(defaultValue.takeShot);

  return (
    <stateContext.Provider value={{ color, setColor, music, setMusic, takeShot, setTakeShot }}>
      {children}
    </stateContext.Provider>
  );
}
