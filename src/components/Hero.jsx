import { motion } from "framer-motion";

export default function Hero({ onOpenStory, onOpenDetails, onOpenRSVP }) {
  return (
    <section className="relative min-h-[92vh] flex flex-col items-center justify-center px-6 pt-28 pb-16">
      {/* Monochrome canvas with soft vignette */}
      <div className="absolute inset-0 -z-10 bg-[#0a0a0a]" />
      <div className="absolute inset-0 -z-0 bg-[radial-gradient(1200px_700px_at_50%_40%,rgba(255,255,255,0.06),transparent_65%)]" />
      {/* Botanical whisper */}
      <div className="pointer-events-none absolute -z-0 inset-0 bg-[radial-gradient(800px_400px_at_80%_10%,rgba(95,127,110,0.10),transparent_60%)]" />

      {/* Floating greenery ribbon */}
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 0.9, scale: 1 }}
        transition={{ duration: 1.2, ease: [0.22,1,0.36,1] }}
        className="pointer-events-none absolute -z-0 inset-x-0 top-0 h-64 bg-[conic-gradient(from_180deg_at_50%_0%,rgba(95,127,110,0.12),transparent_40%)] blur-2xl"
      />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        className="max-w-3xl text-center"
      >
        {/* Monogram */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1, duration: 1.1, ease: [0.22,1,0.36,1] }}
          className="mx-auto mb-8 inline-flex items-center justify-center w-24 h-24 rounded-full bg-[#0f0f10] text-[#9fb6ab] ring-1 ring-[#5f7f6e]/40"
        >
          <span className="font-serif text-4xl tracking-widest text-white/90">A • J</span>
        </motion.div>

        <motion.h1
          initial={{ letterSpacing: "0.17em" }}
          animate={{ letterSpacing: "0.02em" }}
          transition={{ duration: 1.4, ease: [0.22,1,0.36,1] }}
          className="font-serif text-5xl sm:text-6xl tracking-tight text-white"
        >
          Alexandra & James
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 1.0 }}
          className="mt-4 text-lg text-stone-300"
        >
          Request the pleasure of your company to celebrate their marriage
        </motion.p>

        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <motion.button whileHover={{ y: -2 }} whileTap={{ y: 0 }} onClick={onOpenDetails} className="px-6 py-3 bg-white text-black rounded-full ring-1 ring-white/20 hover:bg-stone-100 transition-colors">
            Event Details
          </motion.button>
          <motion.button whileHover={{ y: -2 }} whileTap={{ y: 0 }} onClick={onOpenStory} className="px-6 py-3 bg-transparent text-white rounded-full ring-1 ring-white/30 hover:bg-white/10 transition-colors">
            Our Story
          </motion.button>
          <motion.button whileHover={{ y: -2 }} whileTap={{ y: 0 }} onClick={onOpenRSVP} className="px-6 py-3 bg-transparent text-white rounded-full ring-1 ring-[#5f7f6e]/60 hover:bg-[#5f7f6e]/20 transition-colors">
            RSVP
          </motion.button>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 1.0 }}
          className="mt-10 text-stone-300"
        >
          Saturday, June 14th, 2025 — The Langford Estate
        </motion.p>
      </motion.div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.8 }}
        transition={{ delay: 1.0, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-stone-300 text-xs tracking-widest uppercase"
      >
        Scroll
      </motion.div>
    </section>
  );
}
