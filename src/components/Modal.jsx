import { motion, AnimatePresence } from "framer-motion";

export default function Modal({ open, onClose, children, tone = "light", maxWidth = "max-w-2xl" }) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          role="dialog"
          aria-modal="true"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50"
        >
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-[1px]" 
            onClick={onClose}
          />
          <div className="absolute inset-0 flex items-start justify-center overflow-y-auto py-20 px-6">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 20, opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className={`${maxWidth} w-full`}
            >
              <div className={`${tone === "dark" ? "bg-[#0f0f10] text-stone-200" : "bg-[#f8f6f1] text-stone-800"} relative rounded-[20px] shadow-2xl ring-1 ring-black/10`}> 
                {/* Hairline gold border */}
                <div className="pointer-events-none absolute inset-0 rounded-[20px] ring-1 ring-[#b5a47a]/40" />
                {children}
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
