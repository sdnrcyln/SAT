"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { portfolioServices } from "@/lib/content";
import Reveal from "./Reveal";

export default function PortfolioSection() {
  return (
    <section className="py-24 bg-dh-surface relative overflow-hidden">
      <motion.div
        className="absolute -right-40 top-1/2 -translate-y-1/2 font-display text-[20rem] font-bold text-dh-cream/[0.02] leading-none pointer-events-none select-none"
        animate={{ x: [0, -30, 0] }}
        transition={{ duration: 15, repeat: Infinity }}
      >
        PORTFOLYO
      </motion.div>
      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <Reveal direction="right">
            <p className="text-dh-gold text-sm uppercase tracking-[0.3em] mb-4">Portfolyo Hazırlık Merkezi</p>
            <h2 className="font-display text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Dünyanın en iyi okullarına{" "}
              <span className="italic-art text-dh-gold">hazırlanın</span>
            </h2>
            <p className="text-dh-muted leading-relaxed mb-8 font-art text-lg">
              Lisans ve yüksek lisans başvurularından mülakat hazırlığına, burs başvurularından portfolyo danışmanlığına kadar uçtan uca destek.
            </p>
            <Link
              href="/portfolyo"
              className="group inline-flex items-center gap-3 text-dh-gold"
            >
              <motion.span
                className="w-12 h-12 rounded-full border border-dh-gold flex items-center justify-center"
                whileHover={{ scale: 1.1, rotate: 90 }}
              >
                →
              </motion.span>
              Merkezi Keşfet
            </Link>
          </Reveal>

          <div className="space-y-3">
            {portfolioServices.map((service, i) => (
              <Reveal key={service} delay={i * 0.1}>
                <motion.div
                  whileHover={{ x: 16, borderColor: "rgba(201, 169, 98, 0.4)" }}
                  className="group flex items-center gap-6 p-6 rounded-sm border border-white/10 bg-dh-bg/30 cursor-default overflow-hidden relative"
                >
                  <motion.div
                    className="absolute left-0 top-0 bottom-0 w-1 bg-dh-gold scale-y-0 group-hover:scale-y-100 transition-transform origin-top"
                  />
                  <span className="font-display text-4xl font-bold text-dh-gold/20 group-hover:text-dh-gold transition-colors">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-lg font-medium font-art">{service}</span>
                </motion.div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
