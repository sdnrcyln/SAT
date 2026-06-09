"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { artTherapy } from "@/lib/content";
import Reveal from "./Reveal";

export default function ArtTherapySection() {
  return (
    <section className="py-24 bg-dh-surface overflow-hidden relative">
      <motion.div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-dh-sage/5 blur-3xl rounded-full"
        animate={{ scale: [1, 1.15, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <Reveal direction="right" className="relative">
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.6 }}
              className="relative aspect-square rounded-sm overflow-hidden artistic-frame"
            >
              <Image
                src="https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=800&q=80"
                alt="Sanat terapisi atölyesi"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 mix-blend-soft-light bg-dh-sage/20" />
            </motion.div>
            <motion.div
              animate={{ y: [0, -15, 0], rotate: [0, 3, 0] }}
              transition={{ duration: 7, repeat: Infinity }}
              className="absolute -bottom-8 -right-8 w-48 h-48 rounded-sm overflow-hidden border-4 border-dh-bg artistic-frame hidden md:block"
            >
              <Image
                src="https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=400&q=80"
                alt="Yaratıcı atölye"
                fill
                className="object-cover"
              />
            </motion.div>
          </Reveal>

          <div>
            <Reveal>
              <p className="text-dh-sage text-sm uppercase tracking-[0.3em] mb-4">Sanat Terapisi & Yaratıcılık</p>
              <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
                İlham veren, <span className="italic-art text-dh-sage">güvenli</span> öğrenme ortamları
              </h2>
              <p className="text-dh-muted leading-relaxed mb-8 font-art text-lg">
                Dışavurumcu sanat terapisi, çocuk ve genç programları ile yaratıcılık geliştirme çalışmaları.
              </p>
            </Reveal>
            <ul className="space-y-4 mb-8">
              {artTherapy.map((item, i) => (
                <Reveal key={item} delay={i * 0.08}>
                  <motion.li
                    whileHover={{ x: 12 }}
                    className="flex items-center gap-4 text-dh-cream group cursor-default"
                  >
                    <motion.span
                      className="w-8 h-8 rounded-full border border-dh-sage/40 flex items-center justify-center text-dh-sage text-xs group-hover:bg-dh-sage group-hover:text-dh-bg transition-colors"
                      whileHover={{ scale: 1.1 }}
                    >
                      {i + 1}
                    </motion.span>
                    <span className="font-art text-lg">{item}</span>
                  </motion.li>
                </Reveal>
              ))}
            </ul>
            <Reveal>
              <Link
                href="/sanat-terapisi"
                className="inline-block px-6 py-3 bg-dh-sage/20 text-dh-sage border border-dh-sage/30 rounded-full hover:bg-dh-sage hover:text-dh-bg transition-all hover:scale-105"
              >
                Programları İncele
              </Link>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
