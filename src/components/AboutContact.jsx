import { motion } from 'framer-motion';
import { Mail, Github, Linkedin } from 'lucide-react';

export default function AboutContact() {
  return (
    <section id="about" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <motion.div
            initial={{ x: -20, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl p-6 sm:p-8 border border-black/5 dark:border-white/10 bg-white/70 dark:bg-neutral-900/50 backdrop-blur"
          >
            <h3 className="text-2xl font-bold text-neutral-900 dark:text-white">About</h3>
            <p className="mt-3 text-neutral-700 dark:text-neutral-300">
              I blend aesthetics with performance to create interfaces that feel alive. My toolkit spans React, Tailwind,
              Framer Motion and playful 3D touches when it elevates the story.
            </p>
            <p className="mt-3 text-neutral-700 dark:text-neutral-300">
              Beyond pixels, I value accessibility, thoughtful content, and a workflow that keeps iteration fast and fun.
            </p>
          </motion.div>

          <motion.div
            id="contact"
            initial={{ x: 20, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl p-6 sm:p-8 border border-black/5 dark:border-white/10 bg-white/70 dark:bg-neutral-900/50 backdrop-blur"
          >
            <h3 className="text-2xl font-bold text-neutral-900 dark:text-white">Contact</h3>
            <p className="mt-3 text-neutral-700 dark:text-neutral-300">Open to collaborations, roles, and creative experiments.</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="mailto:hello@example.com"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-black text-white dark:bg-white dark:text-black hover:scale-105 active:scale-95 transition"
              >
                <Mail size={18} /> Email me
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-black/10 dark:border-white/20 bg-white/60 dark:bg-neutral-900/40 text-neutral-900 dark:text-white"
              >
                <Github size={18} /> GitHub
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-black/10 dark:border-white/20 bg-white/60 dark:bg-neutral-900/40 text-neutral-900 dark:text-white"
              >
                <Linkedin size={18} /> LinkedIn
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
