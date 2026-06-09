"use client";

import { motion } from "framer-motion";
import SplitChars from "./SplitChars";

type PageHeroProps = {
  label: string;
  title: string;
  subtitle?: string;
};

export default function PageHero({ label, title, subtitle }: PageHeroProps) {
  return (
    <section className="pt-40 pb-20 px-6 border-b border-white/10 relative overflow-hidden">
      <motion.div
        className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-dh-gold/5 blur-3xl blob-morph pointer-events-none"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <svg className="absolute bottom-0 left-0 w-full h-24 opacity-15" viewBox="0 0 1440 80" fill="none" aria-hidden="true">
        <motion.path
          d="M0 40 Q360 0, 720 40 T1440 40"
          stroke="#c9a962"
          strokeWidth="1"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, ease: [0.22, 1, 0.36, 1] }}
        />
      </svg>
      <div className="max-w-7xl mx-auto relative">
        <motion.p
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-dh-gold text-sm uppercase tracking-[0.4em] mb-6 font-art italic text-lg"
        >
          {label}
        </motion.p>
        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.95] mb-6">
          <SplitChars text={title} stagger={0.025} />
        </h1>
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-dh-muted text-lg max-w-2xl font-art text-xl leading-relaxed"
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    </section>
  );
}
