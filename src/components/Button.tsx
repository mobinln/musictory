import { CSSProperties, ReactNode } from "react";
import { getFaderColor } from "../logic";

export default function Button({
  fade,
  color,
  style,
  height,
  children,
  onClick,
}: {
  fade?: number;
  color?: string;
  height?: number | string;
  children: ReactNode;
  style?: CSSProperties;
  onClick?: () => void;
}) {
  return (
    <button
      className="h-10 px-6 rounded-md text-white"
      style={{ backgroundColor: getFaderColor(color || "0,0,0", fade || 10), height, ...style }}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
