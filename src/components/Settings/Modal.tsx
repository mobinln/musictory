import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";

import Image from "../Image";
import { musicType } from "../../types";
import arcticMonkeys from "../../assets/arctic_monkeys.webp";
import Button from "../Button";

export default function SettingsModal({
  open,
  color,
  onClose,
  onSave,
}: {
  open: boolean;
  color?: string;
  onClose: () => void;
  onSave: (music: Partial<musicType>) => void;
}) {
  const [music, setMusic] = useState<Partial<musicType>>({
    image: arcticMonkeys,
    artist: "Arctic Monkeys",
    name: "R U Mine?",
    text: "All I wanna ever say is, 'Are you mine?'",
  });

  return (
    <Transition appear show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                <Dialog.Title as="h3" className="text-lg font-medium leading-6 text-gray-900">
                  Settings
                </Dialog.Title>
                <hr className="my-4" />
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

                <div className="mt-4">
                  <Button
                    color={color}
                    onClick={() => {
                      if (music) {
                        onSave(music);
                        onClose();
                      }
                    }}
                  >
                    Save
                  </Button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
