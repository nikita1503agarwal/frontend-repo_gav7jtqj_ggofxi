import { motion } from "framer-motion";

export default function Hero({ onOpenStory, onOpenDetails, onOpenRSVP }) {
  return (
    <section className="relative min-h-[90vh] flex flex-col items-center justify-center px-6 pt-28 pb-16 bg-[linear-gradient(to_bottom,#0c0c0d,rgba(12,12,13,0))]">
      {/* Background ivory texture */}
      <div className="absolute inset-0 -z-10 bg-[#f6f3ec]" />
      {/* Subtle vignette */}
      <div className="pointer-events-none absolute inset-0 -z-0 bg-[radial-gradient(1200px_600px_at_50%_0%,rgba(0,0,0,0.06),transparent_60%)]" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        className="max-w-3xl text-center"
      >
        {/* Monogram */}
        <div className="mx-auto mb-8 inline-flex items-center justify-center w-24 h-24 rounded-full bg-[#0f0f10] text-[#d2c39a] ring-1 ring-[#b5a47a]/40">
          <span className="font-serif text-4xl tracking-widest">A • J</span>
        </div>

        <h1 className="font-serif text-5xl sm:text-6xl tracking-tight text-[#0f0f10]">
          Alexandra & James
        </h1>
        <p className="mt-4 text-lg text-stone-700">Request the pleasure of your company to celebrate their marriage</p>

        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <button onClick={onOpenDetails} className="px-6 py-3 bg-[#0f0f10] text-[#f6f3ec] rounded-full ring-1 ring-black/10 hover:bg-black transition-colors">
            Event Details
          </button>
          <button onClick={onOpenStory} className="px-6 py-3 bg-transparent text-[#0f0f10] rounded-full ring-1 ring-black/10 hover:bg-black hover:text-[#f6f3ec] transition-colors">
            Our Story
          </button>
          <button onClick={onOpenRSVP} className="px-6 py-3 bg-transparent text-[#0f0f10] rounded-full ring-1 ring-[#b5a47a]/60 hover:bg-[#0f0f10] hover:text-[#f6f3ec] transition-colors">
            RSVP
          </button>
        </div>

        <p className="mt-10 text-stone-600">Saturday, June 14th, 2025 — The Langford Estate</p>
      </motion.div>

      {/* Scroll cue */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-stone-500 text-xs tracking-widest uppercase">Scroll</div>
    </section>
  );
}
