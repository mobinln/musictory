import { useState } from "react";
import { getDominantColor, getFaderColor } from "./logic";
import { musicType } from "./types";

import parrot from "./assets/parrot_xs.jpg";
import "./styles/main.css";

function App() {
  const [music, setMusic] = useState<musicType>();
  const [colors, setColors] = useState<{ array: number[]; rgb: string }>();

  const handleOnLoad = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    setColors(getDominantColor(e.currentTarget));
  };

  return (
    <div className="h-screen w-screen flex justify-center items-center" style={{ backgroundColor: colors?.rgb }}>
      <div
        className="w-10/12 md:w-1/4 lg:w-2/4 text-white p-4 rounded-lg"
        style={{ backgroundColor: getFaderColor(colors?.array.join(",") || "0,0,0", 25) }}
      >
        <div className="flex">
          <img src={parrot} alt="" className="rounded w-12 h-auto object-cover mr-4" onLoad={handleOnLoad} />
          <div>
            <p className="font-bold text-lg">Sticky</p>
            <p className="font-light text-base">Drake</p>
          </div>
        </div>
        <p className="my-8 text-lg">Lorem ipsum, dolor sit amet?</p>
      </div>
    </div>
  );
}

export default App;
