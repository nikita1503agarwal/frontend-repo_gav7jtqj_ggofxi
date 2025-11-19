import { motion } from "framer-motion";

export default function Section({ title, subtitle, children }) {
  return (
    <section className="relative px-6 py-24 bg-[#f6f3ec]">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8 }}
          className="font-serif text-3xl sm:text-4xl text-[#0f0f10]"
        >
          {title}
        </motion.h2>
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.9 }}
            className="mt-2 text-stone-700"
          >
            {subtitle}
          </motion.p>
        )}
        <div className="mt-8">
          {children}
        </div>
      </div>
    </section>
  );
}
