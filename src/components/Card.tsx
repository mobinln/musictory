import { ReactNode } from "react";
import { motion } from "framer-motion";

import { useFaderColor } from "logic/StateContext/hooks";

export default function Card({ children }: { children: ReactNode }) {
  const colorsStr = useFaderColor();

  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      className="w-10/12 md:w-2/4 text-white p-4 rounded-lg"
      style={{ backgroundColor: colorsStr }}
    >
      {children}
    </motion.div>
  );
}
