import { useState } from "react";
import { motion } from "framer-motion";

import { useAppState, useFaderColor } from "logic/StateContext/hooks";
import Button from "components/Button";
import Image from "components/Image";
import { musicLayouts, musicType } from "types";
import Select from "components/Select";

export default function SettingsPage() {
  const { setMusic, music } = useAppState();
  const [formState, setFormState] = useState<musicType>(music);
  const bgcolor = useFaderColor();

  return (
    <div className="relative z-10 h-screen w-screen flex justify-center items-center">
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        className="mx-4 p-2 shadow rounded bg-white"
        style={{ backgroundColor: bgcolor }}
      >
        <div className="max-h-96 overflow-auto">
          <Image src={formState?.image} width="100%" onChange={(e) => setFormState((p) => ({ ...p, image: e }))} />
          <p className="mt-2 mb-2 text-white">Title:</p>
          <input
            className="focus:ring-2 focus:ring-blue-500 focus:outline-none appearance-none w-full text-sm leading-6 text-slate-900 placeholder-slate-400 rounded-md py-2 pl-4 ring-1 ring-slate-200 shadow-sm"
            type="text"
            aria-label="Song Name"
            placeholder="R U Mine?"
            value={formState.name}
            onChange={(e) => setFormState((p) => ({ ...p, name: e.target.value }))}
          />
          <p className="mt-2 mb-2 text-white">Artist:</p>
          <input
            className="focus:ring-2 focus:ring-blue-500 focus:outline-none appearance-none w-full text-sm leading-6 text-slate-900 placeholder-slate-400 rounded-md py-2 pl-4 ring-1 ring-slate-200 shadow-sm"
            type="text"
            aria-label="Artist name"
            placeholder="Arctic Monkeys"
            value={formState.artist}
            onChange={(e) => setFormState((p) => ({ ...p, artist: e.target.value }))}
          />
          <p className="mt-2 mb-2 text-white">Lyrics:</p>
          <textarea
            className="focus:ring-2 focus:ring-blue-500 focus:outline-none appearance-none w-full text-sm leading-6 text-slate-900 placeholder-slate-400 rounded-md py-2 pl-4 ring-1 ring-slate-200 shadow-sm"
            aria-label="Song name"
            placeholder="All I wanna ever say is, 'Are you mine?'"
            value={formState.text}
            onChange={(e) => setFormState((p) => ({ ...p, text: e.target.value }))}
          />
          <Select
            items={musicLayouts}
            value={formState.layout}
            onChange={(v) => setFormState((p) => ({ ...p, layout: v as musicLayouts }))}
          />
        </div>
        <div className="text-center mt-1">
          <Button fade={20} onClick={() => setMusic(formState)}>
            Save
          </Button>
        </div>
      </motion.div>
    </div>
  );
}
