import { useRef, useState } from "react";
import { downloadImage, getDominantColor, getFaderColor } from "./logic";
import { musicType } from "./types";

import "./styles/main.css";
import Image from "./components/Image";
import SettingsModal from "./components/Settings/Modal";
import Button from "./components/Button";
import SongPreview from "./components/SongPreview";

function App() {
  const [settingsModal, setSettingsModal] = useState(false);
  const [music, setMusic] = useState<Partial<musicType>>();
  const [colors, setColors] = useState<{ array: number[]; rgb: string }>();
  const colorsStr = colors?.array.join(",") || "0,0,0";
  const [fade, setFade] = useState(25);
  const previewRef = useRef<HTMLDivElement | null>(null);

  const handleOnLoad = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    setColors(getDominantColor(e.currentTarget));
  };

  return (
    <>
      <SettingsModal
        color={colorsStr}
        open={settingsModal}
        onClose={() => setSettingsModal(false)}
        onSave={(m) => setMusic(m)}
      />
      <div
        className="relative z-10 h-screen w-screen flex justify-center items-center"
        style={{ backgroundColor: colors?.rgb }}
      >
        <div
          className="w-10/12 md:w-1/4 lg:w-2/4 text-white p-4 rounded-lg"
          style={{ backgroundColor: getFaderColor(colorsStr, fade) }}
        >
          <Image width="100%" src={music?.image} onLoad={handleOnLoad} />
          <div className="flex mt-4">
            <div className="mr-auto">
              <p className="font-bold text-lg">{music?.name}</p>
              <p className="font-light text-base font-sans text-justify">{music?.artist}</p>
            </div>
            <Button
              fade={fade - 20}
              color={colorsStr}
              height="auto"
              onClick={() => previewRef.current && downloadImage(previewRef.current)}
              style={{ marginRight: 8 }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path d="M10.5 8.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
                <path d="M2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4H2zm.5 2a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm9 2.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0z" />
              </svg>
            </Button>
            <Button fade={fade - 20} color={colorsStr} height="auto" onClick={() => setSettingsModal(true)}>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path d="M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872l-.1-.34zM8 10.93a2.929 2.929 0 1 1 0-5.86 2.929 2.929 0 0 1 0 5.858z" />
              </svg>
            </Button>
          </div>
          <p className="my-4 text-lg">{music?.text}</p>
          <input type="range" className="w-full" value={fade} onChange={(e) => setFade(Number(e.target.value))} />
        </div>
      </div>
      {music && <SongPreview ref={previewRef} color={colorsStr} fade={fade} music={music as any} />}
    </>
  );
}

export default App;
