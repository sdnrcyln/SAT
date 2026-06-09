"use client";

import { motion } from "framer-motion";

type PageHeroProps = {
  label: string;
  title: string;
  subtitle?: string;
};

export default function PageHero({ label, title, subtitle }: PageHeroProps) {
  return (
    <section className="pt-40 pb-20 px-6 border-b border-white/10">
      <div className="max-w-7xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-dh-gold text-sm uppercase tracking-[0.4em] mb-6"
        >
          {label}
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.8 }}
          className="font-display text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.95] mb-6"
        >
          {title}
        </motion.h1>
        {subtitle && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-dh-muted text-lg max-w-2xl"
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    </section>
  );
}
