"use client";

import { motion } from "framer-motion";
import { testimonials } from "@/lib/content";
import Reveal from "./Reveal";

export default function Testimonials() {
  return (
    <section className="py-24 border-y border-white/10 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,#7b9e8710,transparent_60%)]" />
      <div className="max-w-7xl mx-auto px-6 relative">
        <Reveal>
          <p className="text-dh-gold text-sm uppercase tracking-[0.3em] mb-16 text-center">
            Veli & Öğrenci Yorumları
          </p>
        </Reveal>
        <div className="grid md:grid-cols-2 gap-12">
          {testimonials.map((t, i) => (
            <Reveal key={t.author} delay={i * 0.15}>
              <motion.blockquote
                whileHover={{ y: -6 }}
                transition={{ duration: 0.4 }}
                className="relative p-10 rounded-sm border border-white/10 hover:border-dh-gold/40 transition-colors bg-dh-surface/30 backdrop-blur-sm group"
              >
                <motion.span
                  className="font-art text-8xl text-dh-gold/15 absolute top-2 left-6 leading-none"
                  animate={{ rotate: [0, 5, 0] }}
                  transition={{ duration: 5, repeat: Infinity, delay: i }}
                >
                  &ldquo;
                </motion.span>
                <p className="text-lg leading-relaxed text-dh-cream/90 mt-10 mb-6 font-art italic">
                  {t.quote}
                </p>
                <footer className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-dh-gold to-dh-coral flex items-center justify-center text-dh-bg font-bold text-sm">
                    {t.author[0]}
                  </div>
                  <div>
                    <cite className="not-italic font-display font-bold">{t.author}</cite>
                    <p className="text-dh-muted text-sm">{t.role}</p>
                  </div>
                </footer>
              </motion.blockquote>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
