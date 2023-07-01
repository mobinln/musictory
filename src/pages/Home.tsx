import { useEffect, useRef, useState } from "react";
import { downloadImage } from "logic";

import MusicCard from "components/MusicCard";
import { useAppState } from "logic/StateContext/hooks";

export default function HomePage() {
  const { music, color } = useAppState();
  const previewRef = useRef<HTMLDivElement | null>(null);
  const [takeShot, setTakeShot] = useState(false);

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
    <div
      className="relative z-10 h-screen w-screen flex justify-center items-center"
      style={{ backgroundColor: color?.rgb }}
      ref={previewRef}
    >
      <MusicCard music={music} />
    </div>
  );
}
