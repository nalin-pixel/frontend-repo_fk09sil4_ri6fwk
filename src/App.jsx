import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import AboutContact from './components/AboutContact';
import { motion } from 'framer-motion';

export default function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-neutral-900 selection:bg-black selection:text-white dark:selection:bg-white dark:selection:text-black">
      <Navbar />
      <main>
        <Hero />

        <motion.section
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <Projects />
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <AboutContact />
        </motion.section>
      </main>

      <footer className="py-10 border-t border-black/5 dark:border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-neutral-600 dark:text-neutral-400">© {new Date().getFullYear()} Flames • All rights reserved.</p>
          <a href="#home" className="text-sm text-neutral-800 dark:text-neutral-200 hover:underline">Back to top</a>
        </div>
      </footer>
    </div>
  );
}
