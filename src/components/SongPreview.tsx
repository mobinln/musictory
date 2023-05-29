import { forwardRef } from "react";
import { getFaderColor } from "../logic";
import { musicType } from "../types";
import Image from "./Image";

const SongPreview = forwardRef<HTMLDivElement, { music: musicType; color: string; fade: number }>(
  ({ color, fade, music }, ref) => {
    return (
      <div
        ref={ref}
        className="absolute top-0 h-screen w-screen flex justify-center items-center"
        style={{ backgroundColor: `rgb(${color})` }}
      >
        <div
          className="w-10/12 md:w-1/4 lg:w-2/4 text-white p-4 rounded-lg"
          style={{ backgroundColor: getFaderColor(color, fade) }}
        >
          <Image width="100%" src={music?.image} />
          <div className="flex mt-4">
            <div className="mr-auto">
              <p className="font-bold text-lg">{music?.name}</p>
              <p className="font-light text-base font-sans text-justify">{music?.artist}</p>
            </div>
          </div>
          <p className="my-4 text-lg">{music?.text}</p>
        </div>
      </div>
    );
  }
);

export default SongPreview;
