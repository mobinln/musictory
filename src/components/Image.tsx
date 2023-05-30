import { useEffect, useRef, useState } from "react";
import Button from "./Button";

export default function Image({
  src,
  width,
  onLoad,
  onChange,
}: {
  width?: string | number;
  src?: string;
  onLoad?: (e: React.SyntheticEvent<HTMLImageElement, Event>) => void;
  onChange?: (v: string) => void;
}) {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [preview, setPreview] = useState<string>();

  useEffect(() => {
    setPreview(src);
  }, [src]);

  return (
    <>
      <input
        type="file"
        hidden
        ref={inputRef}
        onChange={(e) => {
          if (e.target && e.target?.files && e.target.files?.length > 0) {
            const url = URL.createObjectURL(e.target.files[0]);
            setPreview(url);
            onChange && onChange(url);
          }
        }}
      />
      <img
        src={preview}
        alt=""
        className="rounded w-12 h-auto object-cover mr-4"
        onLoad={onLoad}
        onClick={() => inputRef.current?.click()}
        style={{ width, maxHeight: "200px" }}
      />
      {!preview && <Button onClick={() => inputRef.current?.click()}>Select</Button>}
    </>
  );
}
