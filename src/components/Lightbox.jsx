import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function Lightbox({ images = [] }) {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);
  const openAt = (i) => { setIndex(i); setOpen(true); };

  return (
    <div>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        {images.map((src, i) => (
          <button key={i} onClick={() => openAt(i)} className="group relative overflow-hidden rounded-xl ring-1 ring-black/5">
            <img src={src} alt="Gallery" className="aspect-[4/5] w-full object-cover grayscale contrast-110" />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
          </button>
        ))}
      </div>

      <AnimatePresence>
        {open && (
          <motion.div className="fixed inset-0 z-50" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <div className="absolute inset-0 bg-black/80" onClick={() => setOpen(false)} />
            <div className="absolute inset-0 flex items-center justify-center p-6">
              <motion.div
                initial={{ scale: 0.98, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.98, opacity: 0 }}
                transition={{ duration: 0.35 }}
                className="relative max-w-3xl w-full"
              >
                <div className="relative overflow-hidden rounded-[18px] ring-1 ring-[#b5a47a]/40 shadow-2xl">
                  <img src={images[index]} alt="Large" className="w-full h-auto object-contain" />
                  <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(800px_400px_at_50%_50%,rgba(0,0,0,0.35),transparent_60%)]" />
                </div>
                <div className="mt-4 flex justify-between text-stone-300 text-sm">
                  <button className="px-3 py-1 rounded-full ring-1 ring-white/20 hover:bg-white/10" onClick={() => setIndex((index - 1 + images.length) % images.length)}>Prev</button>
                  <button className="px-3 py-1 rounded-full ring-1 ring-white/20 hover:bg-white/10" onClick={() => setOpen(false)}>Close</button>
                  <button className="px-3 py-1 rounded-full ring-1 ring-white/20 hover:bg-white/10" onClick={() => setIndex((index + 1) % images.length)}>Next</button>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
