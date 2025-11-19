import { motion } from "framer-motion";

export default function Section({ title, subtitle, children }) {
  const fadeSlide = {
    hidden: { opacity: 0, y: 14 },
    show: { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.22,1,0.36,1] } }
  };

  return (
    <section className="relative px-6 py-24 bg-[#0a0a0a]">
      {/* Soft vignette and subtle greenery mist */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(1000px_600px_at_50%_0%,rgba(255,255,255,0.05),transparent_65%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(800px_400px_at_10%_20%,rgba(95,127,110,0.08),transparent_60%)]" />

      <div className="relative max-w-4xl mx-auto">
        <motion.h2
          variants={fadeSlide}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          className="font-serif text-3xl sm:text-4xl text-white"
        >
          {title}
        </motion.h2>
        {subtitle && (
          <motion.p
            variants={fadeSlide}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.4 }}
            className="mt-2 text-stone-300"
          >
            {subtitle}
          </motion.p>
        )}
        <motion.div
          variants={fadeSlide}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="mt-8"
        >
          {children}
        </motion.div>
      </div>
    </section>
  );
}
