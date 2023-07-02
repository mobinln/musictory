import { useAppState } from "logic/StateContext/hooks";
import Button from "components/Button";
import Image from "components/Image";

export default function Settings() {
  const { setMusic, music } = useAppState();

  return (
    <div className="relative z-10 h-screen w-screen flex justify-center items-center">
      <div className="mx-4 p-2 shadow rounded bg-white">
        <p className="font-medium leading-6 text-gray-900 mb-4">Song</p>
        <Image src={music?.image} width="100%" onChange={(e) => setMusic((p) => ({ ...p, image: e }))} />
        <input
          className="mt-4 focus:ring-2 focus:ring-blue-500 focus:outline-none appearance-none w-full text-sm leading-6 text-slate-900 placeholder-slate-400 rounded-md py-2 pl-4 ring-1 ring-slate-200 shadow-sm"
          type="text"
          aria-label="Artist name"
          placeholder="Arctic Monkeys"
          value={music.artist}
          onChange={(e) => setMusic((p) => ({ ...p, artist: e.target.value }))}
        />
        <input
          className="mt-4 focus:ring-2 focus:ring-blue-500 focus:outline-none appearance-none w-full text-sm leading-6 text-slate-900 placeholder-slate-400 rounded-md py-2 pl-4 ring-1 ring-slate-200 shadow-sm"
          type="text"
          aria-label="Song Name"
          placeholder="R U Mine?"
          value={music.name}
          onChange={(e) => setMusic((p) => ({ ...p, name: e.target.value }))}
        />
        <textarea
          className="mt-4 focus:ring-2 focus:ring-blue-500 focus:outline-none appearance-none w-full text-sm leading-6 text-slate-900 placeholder-slate-400 rounded-md py-2 pl-4 ring-1 ring-slate-200 shadow-sm"
          aria-label="Song name"
          placeholder="All I wanna ever say is, 'Are you mine?'"
          value={music.text}
          onChange={(e) => setMusic((p) => ({ ...p, text: e.target.value }))}
        />
      </div>
    </div>
  );
}
