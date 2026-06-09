"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=1920&q=80"
          alt="Sanat atölyesi"
          fill
          className="object-cover opacity-30 scale-105"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-dh-bg/60 via-dh-bg/80 to-dh-bg" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 pt-32 pb-20 w-full">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-dh-gold text-sm uppercase tracking-[0.4em] mb-8"
        >
          Design House Global
        </motion.p>

        <div className="overflow-hidden mb-6">
          {["Sanat", "ve", "Tasarım"].map((word, i) => (
            <div key={word} className="overflow-hidden">
              <motion.h1
                initial={{ y: "110%" }}
                animate={{ y: 0 }}
                transition={{ delay: 0.3 + i * 0.12, duration: 1, ease: [0.22, 1, 0.36, 1] }}
                className={`font-display font-bold leading-[0.9] tracking-tight ${
                  i === 1
                    ? "text-5xl md:text-7xl lg:text-8xl text-outline italic"
                    : "text-6xl md:text-8xl lg:text-[9rem]"
                }`}
              >
                {word}
              </motion.h1>
            </div>
          ))}
        </div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="text-4xl md:text-6xl lg:text-7xl font-display font-bold gradient-text mb-10"
        >
          Buluşuyor.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1, duration: 0.8 }}
          className="text-dh-muted text-lg md:text-xl max-w-xl leading-relaxed mb-12"
        >
          Uluslararası standartlarda sanat ve tasarım eğitimi, portfolyo hazırlığı ve yaratıcı gelişim merkezi.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3, duration: 0.6 }}
          className="flex flex-wrap gap-4"
        >
          <Link
            href="/iletisim"
            className="group px-8 py-4 bg-dh-gold text-dh-bg font-medium rounded-full hover:bg-dh-cream transition-all hover:scale-105"
          >
            Başvuru Yap
            <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">→</span>
          </Link>
          <Link
            href="/egitim-programlari"
            className="px-8 py-4 border border-white/20 rounded-full hover:border-dh-gold hover:text-dh-gold transition-all"
          >
            Programları Keşfet
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-dh-muted text-xs uppercase tracking-widest"
        >
          <span>Keşfet</span>
          <motion.span
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-px h-8 bg-dh-gold"
          />
        </motion.div>
      </div>
    </section>
  );
}
