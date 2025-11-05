import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] pt-24 overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 items-center min-h-[70vh]">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="backdrop-blur-sm bg-white/40 dark:bg-neutral-900/40 rounded-2xl p-6 sm:p-8 border border-black/5 dark:border-white/10"
          >
            <p className="text-sm tracking-widest uppercase text-neutral-700 dark:text-neutral-300">Designer • Developer • Creator</p>
            <h1 className="mt-3 text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight text-neutral-900 dark:text-white">
              Building playful, modern experiences
            </h1>
            <p className="mt-4 text-neutral-700 dark:text-neutral-300 text-base sm:text-lg">
              I craft interactive products with delightful motion, immersive 3D and a focus on clean, accessible design.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#projects" className="px-5 py-3 rounded-xl bg-black text-white dark:bg-white dark:text-black hover:scale-105 active:scale-95 transition font-medium">
                View Projects
              </a>
              <a href="#contact" className="px-5 py-3 rounded-xl border border-black/10 dark:border-white/20 bg-white/60 dark:bg-neutral-900/40 backdrop-blur hover:bg-white/90 dark:hover:bg-neutral-900/70 transition font-medium text-neutral-900 dark:text-white">
                Contact Me
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/60 via-transparent to-white dark:from-neutral-900/70 dark:to-neutral-900" />
    </section>
  );
}
