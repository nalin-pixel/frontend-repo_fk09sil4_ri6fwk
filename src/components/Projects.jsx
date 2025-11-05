import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const items = [
  {
    id: 1,
    title: 'Motion-first Portfolio',
    tags: ['Framer Motion', 'React', '3D'],
    description:
      'An immersive portfolio template featuring tasteful motion, interactive 3D and a clean content structure.',
    image:
      'https://images.unsplash.com/photo-1542834369-f10ebf06d3cb?q=80&w=1600&auto=format&fit=crop',
    link: '#',
  },
  {
    id: 2,
    title: 'Realtime Dashboard',
    tags: ['Vite', 'Tailwind', 'Charts'],
    description:
      'A data-rich admin dashboard with live charts, keyboard shortcuts and delightful micro-interactions.',
    image:
      'https://images.unsplash.com/photo-1551281044-8d8d0d8b03b1?q=80&w=1600&auto=format&fit=crop',
    link: '#',
  },
  {
    id: 3,
    title: 'E-commerce Experience',
    tags: ['Shop', 'UX', 'Animations'],
    description:
      'A polished shopping flow with progressive disclosure, smooth transitions and a focus on conversion.',
    image:
      'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1600&auto=format&fit=crop',
    link: '#',
  },
];

export default function Projects() {
  const [active, setActive] = useState(null);

  return (
    <section id="projects" className="relative py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white">Featured Projects</h2>
            <p className="mt-2 text-neutral-700 dark:text-neutral-300 max-w-2xl">
              Click a card to open a quick preview with details and actions. Smooth, springy animations keep it fun.
            </p>
          </div>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item) => (
            <motion.button
              key={item.id}
              onClick={() => setActive(item)}
              whileHover={{ y: -4 }}
              whileTap={{ scale: 0.98 }}
              className="group text-left rounded-2xl overflow-hidden border border-black/5 dark:border-white/10 bg-white/70 dark:bg-neutral-900/50 backdrop-blur shadow-sm"
            >
              <div className="relative h-48 overflow-hidden">
                <img src={item.image} alt="Project cover" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              </div>
              <div className="p-5">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-lg text-neutral-900 dark:text-white">{item.title}</h3>
                  <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-200">
                    <ArrowUpRight size={16} />
                  </span>
                </div>
                <div className="mt-3 flex flex-wrap gap-2">
                  {item.tags.map((t) => (
                    <span key={t} className="text-xs px-2.5 py-1 rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 border border-black/5 dark:border-white/10">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {active && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setActive(null)} />
            <motion.div
              initial={{ y: 40, opacity: 0, scale: 0.98 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: 20, opacity: 0, scale: 0.98 }}
              transition={{ type: 'spring', stiffness: 220, damping: 24 }}
              className="relative w-full max-w-2xl rounded-2xl overflow-hidden border border-black/10 dark:border-white/10 bg-white dark:bg-neutral-900 shadow-2xl"
            >
              <div className="relative h-56">
                <img src={active.image} alt="Preview" className="w-full h-full object-cover" />
                <button
                  onClick={() => setActive(null)}
                  className="absolute top-3 right-3 px-3 py-1.5 rounded-full text-xs font-medium bg-white/80 dark:bg-neutral-900/80 text-neutral-900 dark:text-white border border-black/5 dark:border-white/10"
                >
                  Close
                </button>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-neutral-900 dark:text-white">{active.title}</h3>
                <p className="mt-2 text-neutral-700 dark:text-neutral-300">{active.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {active.tags.map((t) => (
                    <span key={t} className="text-xs px-2.5 py-1 rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 border border-black/5 dark:border-white/10">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="mt-6 flex gap-3">
                  <a href={active.link} className="px-4 py-2 rounded-lg bg-black text-white dark:bg-white dark:text-black font-medium hover:scale-105 active:scale-95 transition">
                    Visit project
                  </a>
                  <button onClick={() => setActive(null)} className="px-4 py-2 rounded-lg border border-black/10 dark:border-white/20 bg-white/60 dark:bg-neutral-900/40 text-neutral-900 dark:text-white">
                    Maybe later
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
