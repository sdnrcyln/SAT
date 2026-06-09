"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Reveal from "./Reveal";
import Magnetic from "./Magnetic";
import SplitChars from "./SplitChars";

export default function CTA() {
  return (
    <section className="py-32 relative overflow-hidden">
      <motion.div
        className="absolute inset-0"
        animate={{
          background: [
            "radial-gradient(ellipse at 20% 50%, rgba(201,169,98,0.12), transparent 50%)",
            "radial-gradient(ellipse at 80% 50%, rgba(224,122,95,0.12), transparent 50%)",
            "radial-gradient(ellipse at 20% 50%, rgba(201,169,98,0.12), transparent 50%)",
          ],
        }}
        transition={{ duration: 10, repeat: Infinity }}
      />
      <svg className="absolute top-1/2 left-0 w-full -translate-y-1/2 opacity-10" viewBox="0 0 1440 200" aria-hidden="true">
        <motion.path
          d="M0 100 C300 50, 600 150, 900 100 S1200 50, 1440 100"
          stroke="#c9a962"
          strokeWidth="2"
          fill="none"
          animate={{ pathLength: [0, 1, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
      </svg>
      <div className="max-w-4xl mx-auto px-6 text-center relative">
        <Reveal>
          <h2 className="font-display text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <SplitChars text="Geleceğinizi" className="block" stagger={0.03} />
            <span className="italic-art text-dh-gold block mt-2">birlikte tasarlayalım</span>
          </h2>
          <p className="text-dh-muted text-lg mb-10 max-w-xl mx-auto font-art">
            Başvuru formu, randevu talebi veya bilgi almak için bizimle iletişime geçin.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Magnetic>
              <Link
                href="/iletisim"
                className="relative px-10 py-4 bg-dh-gold text-dh-bg font-medium rounded-full overflow-hidden block group"
              >
                <motion.span
                  className="absolute inset-0 bg-dh-coral"
                  initial={{ scale: 0, borderRadius: "100%" }}
                  whileHover={{ scale: 1.5, borderRadius: "0%" }}
                  transition={{ duration: 0.5 }}
                  style={{ originX: 0.5, originY: 0.5 }}
                />
                <span className="relative z-10">Başvuru Yap</span>
              </Link>
            </Magnetic>
            <Magnetic strength={0.25}>
              <Link
                href="/iletisim"
                className="px-10 py-4 border border-white/20 rounded-full hover:border-dh-gold hover:text-dh-gold transition-all"
              >
                Randevu Talep Et
              </Link>
            </Magnetic>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
