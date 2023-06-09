import { useEffect, useRef } from "react";
import { downloadImage } from "logic";

import MusicCard from "components/MusicCard";
import { useAppState } from "logic/StateContext/hooks";

export default function HomePage() {
  const { music, takeShot, color, setTakeShot } = useAppState();
  const previewRef = useRef<HTMLDivElement | null>(null);

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
  }, [setTakeShot, takeShot]);

  if (takeShot) {
    return (
      <div
        ref={previewRef}
        className="relative z-10 h-screen w-screen flex justify-center items-center"
        style={{ backgroundColor: color?.rgb, minHeight: "100vh" }}
      >
        <MusicCard music={music} />
      </div>
    );
  }

  return (
    <div className="relative z-10 h-screen w-screen flex justify-center items-center" ref={previewRef}>
      <MusicCard music={music} />
    </div>
  );
}
