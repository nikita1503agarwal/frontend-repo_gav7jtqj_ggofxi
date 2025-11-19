import { useState } from 'react'
import { motion } from 'framer-motion'
import Hero from './components/Hero'
import Section from './components/Section'
import Modal from './components/Modal'
import Lightbox from './components/Lightbox'

const bw = [
  'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1506377711779-4a51b7fcd5b1?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1503342452485-86ff0a7d7000?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=1200&auto=format&fit=crop'
]

function App() {
  const [storyOpen, setStoryOpen] = useState(false)
  const [detailsOpen, setDetailsOpen] = useState(false)
  const [rsvpOpen, setRsvpOpen] = useState(false)

  return (
    <div className="min-h-screen bg-[#f6f3ec] text-[#0f0f10]">
      {/* Header bar */}
      <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-[#f6f3ec]/75 bg-[#f6f3ec] border-b border-black/10">
        <div className="max-w-5xl mx-auto flex items-center justify-between px-6 py-4">
          <div className="font-serif tracking-widest text-xl">A • J</div>
          <nav className="flex items-center gap-6 text-sm">
            <button onClick={() => setDetailsOpen(true)} className="hover:text-stone-600">Details</button>
            <button onClick={() => setStoryOpen(true)} className="hover:text-stone-600">Our Story</button>
            <button onClick={() => setRsvpOpen(true)} className="rounded-full px-4 py-1.5 bg-[#0f0f10] text-[#f6f3ec]">RSVP</button>
          </nav>
        </div>
      </header>

      <main>
        <Hero onOpenStory={() => setStoryOpen(true)} onOpenDetails={() => setDetailsOpen(true)} onOpenRSVP={() => setRsvpOpen(true)} />

        <Section title="The Day" subtitle="An evening ceremony followed by dinner and dancing">
          <div className="grid sm:grid-cols-3 gap-6">
            {["Ceremony", "Dinner", "Dancing"].map((t, i) => (
              <motion.div key={t}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.6 }}
                className="rounded-2xl ring-1 ring-black/10 p-6 bg-white/60"
              >
                <div className="font-serif text-xl mb-2">{t}</div>
                <p className="text-stone-700 text-sm">Ivory invitations, candlelit rooms, and a string quartet set the tone.</p>
              </motion.div>
            ))}
          </div>
        </Section>

        <Section title="Gallery" subtitle="Black-and-white moments from the journey">
          <Lightbox images={bw} />
        </Section>

        <footer className="px-6 py-16 bg-[#f6f3ec] text-center text-stone-600">
          With love, Alexandra and James
        </footer>
      </main>

      {/* Our Story Modal */}
      <Modal open={storyOpen} onClose={() => setStoryOpen(false)}>
        <div className="p-8">
          <div className="text-center mb-6">
            <div className="font-serif text-2xl tracking-wide">Our Story</div>
            <div className="mt-1 text-sm text-stone-600">In quiet rooms and city streets</div>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="relative overflow-hidden rounded-xl ring-1 ring-black/10">
              <img src={bw[0]} alt="story" className="w-full h-full object-cover grayscale" />
              <div className="absolute inset-0 bg-[radial-gradient(600px_300px_at_50%_50%,rgba(0,0,0,0.15),transparent_60%)]" />
            </div>
            <div>
              <p className="font-serif text-lg leading-relaxed">They met in a library, where conversations sounded like secrets and time kept a slower rhythm. Years later, the rhythm remains.</p>
              <p className="mt-4 text-stone-700">What followed were trains and late dinners, handwritten notes and Sunday mornings. Now, with family and friends, they begin a new chapter.</p>
            </div>
          </div>
        </div>
      </Modal>

      {/* Event Details Card */}
      <Modal open={detailsOpen} onClose={() => setDetailsOpen(false)}>
        <div className="p-10">
          <div className="text-center">
            <div className="font-serif text-3xl">The Wedding of Alexandra & James</div>
            <div className="mt-2 text-stone-700">Saturday, June 14th, 2025</div>
            <div className="mt-1 text-stone-700">The Langford Estate, 7:00 in the evening</div>
            <div className="mt-6 tracking-widest text-sm text-[#6f643f] uppercase">Black Tie</div>
          </div>
        </div>
      </Modal>

      {/* RSVP Modal */}
      <Modal open={rsvpOpen} onClose={() => setRsvpOpen(false)}>
        <div className="p-8">
          <div className="text-center mb-6">
            <div className="font-serif text-2xl">RSVP</div>
            <div className="text-sm text-stone-600">Kindly respond by May 1st</div>
          </div>
          <form className="grid gap-4 max-w-xl mx-auto">
            <div>
              <label className="block text-sm mb-1">Full Name</label>
              <input className="w-full rounded-md bg-white/80 border border-[#b5a47a]/40 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#b5a47a]/60" placeholder="Your name" />
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm mb-1">Email</label>
                <input type="email" className="w-full rounded-md bg-white/80 border border-[#b5a47a]/40 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#b5a47a]/60" placeholder="email@example.com" />
              </div>
              <div>
                <label className="block text-sm mb-1">Attending</label>
                <select className="w-full rounded-md bg-white/80 border border-[#b5a47a]/40 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#b5a47a]/60">
                  <option>Accepts with pleasure</option>
                  <option>Regretfully declines</option>
                </select>
              </div>
            </div>
            <div>
              <label className="block text-sm mb-1">Dietary Notes</label>
              <input className="w-full rounded-md bg-white/80 border border-[#b5a47a]/40 px-3 py-2" placeholder="Optional" />
            </div>
            <div className="text-center mt-2">
              <button type="button" onClick={() => setRsvpOpen(false)} className="inline-flex items-center justify-center rounded-full px-6 py-2 bg-[#0f0f10] text-[#f6f3ec]">Send RSVP</button>
            </div>
          </form>
        </div>
      </Modal>
    </div>
  )
}

export default App
