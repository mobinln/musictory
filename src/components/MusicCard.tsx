import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { downloadImage, getDominantColor, getFaderColor } from "logic";
import { musicType } from "types";

import Image from "components/Image";
import { useAppState } from "logic/StateContext/hooks";

export default function MusicCard({ music }: { music: musicType }) {
  const { color, setColor } = useAppState();
  const colorsStr = color?.array.join(",") || "0,0,0";
  const previewRef = useRef<HTMLDivElement | null>(null);
  const [takeShot, setTakeShot] = useState(false);

  const handleOnLoad = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    setColor(getDominantColor(e.currentTarget));
  };

  useEffect(() => {
    let t: ReturnType<typeof setTimeout>;
    if (takeShot && previewRef.current) {
      t = setTimeout(() => {
        if (previewRef.current) {
          downloadImage(previewRef.current);
          setTakeShot(false);
        }
      }, 100);
    }

    return () => clearTimeout(t);
  }, [takeShot]);

  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      className="w-10/12 md:w-2/4 text-white p-4 rounded-lg"
      style={{ backgroundColor: getFaderColor(colorsStr, 25) }}
    >
      <Image width="100%" src={music?.image} onLoad={handleOnLoad} />
      <div className="flex mt-4">
        <div className="mr-auto">
          <p className="font-bold text-lg">{music?.name}</p>
          <p className="font-light text-base font-sans text-justify">{music?.artist}</p>
        </div>
      </div>
      <p className="my-4 text-2xl font-thin" style={{ fontFamily: "'Roboto', sans-serif" }}>
        {music?.text}
      </p>
    </motion.div>
  );
}
