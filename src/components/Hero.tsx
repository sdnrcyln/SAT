"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import SplitChars from "./SplitChars";
import Magnetic from "./Magnetic";
import { useRef } from "react";

export default function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 50, damping: 20 });
  const imageX = useTransform(springX, [-0.5, 0.5], [-30, 30]);
  const imageY = useTransform(springY, [-0.5, 0.5], [-20, 20]);

  const handleMouse = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
    mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouse}
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      <motion.div className="absolute inset-0" style={{ x: imageX, y: imageY }}>
        <Image
          src="https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=1920&q=80"
          alt="Sanat atölyesi"
          fill
          className="object-cover opacity-25 scale-110"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-br from-dh-bg/70 via-dh-bg/85 to-dh-bg" />
        <div className="absolute inset-0 mix-blend-overlay opacity-30 bg-[radial-gradient(circle_at_30%_40%,#c9a96233,transparent_50%)]" />
      </motion.div>

      {/* Floating paint blobs */}
      <motion.div
        animate={{ y: [0, -30, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 right-[15%] w-64 h-64 rounded-full bg-dh-coral/10 blur-3xl pointer-events-none"
      />
      <motion.div
        animate={{ y: [0, 20, 0], x: [0, 15, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-1/3 left-[10%] w-48 h-48 rounded-full bg-dh-gold/15 blur-2xl pointer-events-none blob-morph"
      />

      {/* Brush stroke SVG */}
      <svg className="absolute top-1/2 left-0 w-full h-32 opacity-20 pointer-events-none" viewBox="0 0 1440 120" fill="none" aria-hidden="true">
        <motion.path
          d="M0 60 C200 20, 400 100, 600 60 S1000 20, 1440 60"
          stroke="#c9a962"
          strokeWidth="1.5"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2.5, delay: 1, ease: [0.22, 1, 0.36, 1] }}
        />
      </svg>

      <div className="relative max-w-7xl mx-auto px-6 pt-32 pb-20 w-full">
        <motion.p
          initial={{ opacity: 0, letterSpacing: "0.1em" }}
          animate={{ opacity: 1, letterSpacing: "0.4em" }}
          transition={{ delay: 0.2, duration: 1.2 }}
          className="text-dh-gold text-sm uppercase mb-8 font-art italic text-lg"
        >
          Design House Global
        </motion.p>

        <div className="overflow-hidden mb-2">
          {["Sanat", "ve", "Tasarım"].map((word, i) => (
            <div key={word} className="overflow-hidden">
              <motion.h1
                initial={{ y: "120%", rotateZ: i === 1 ? -3 : 0 }}
                animate={{ y: 0, rotateZ: 0 }}
                transition={{ delay: 0.3 + i * 0.15, duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
                className={`font-display font-bold leading-[0.85] tracking-tight ${
                  i === 1
                    ? "text-5xl md:text-7xl lg:text-8xl text-outline italic-art ml-8 md:ml-16"
                    : "text-6xl md:text-8xl lg:text-[9rem]"
                }`}
              >
                {word}
              </motion.h1>
            </div>
          ))}
        </div>

        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.5 }}
          className="text-4xl md:text-6xl lg:text-8xl font-display font-bold mb-10"
        >
          <SplitChars text="Buluşuyor." className="gradient-text-animated" delay={0.9} stagger={0.04} />
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, clipPath: "inset(0 100% 0 0)" }}
          animate={{ opacity: 1, clipPath: "inset(0 0% 0 0)" }}
          transition={{ delay: 1.4, duration: 1 }}
          className="text-dh-muted text-lg md:text-xl max-w-xl leading-relaxed mb-12 font-art text-xl"
        >
          Uluslararası standartlarda sanat ve tasarım eğitimi, portfolyo hazırlığı ve yaratıcı gelişim merkezi.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6, duration: 0.6 }}
          className="flex flex-wrap gap-4"
        >
          <Magnetic>
            <Link
              href="/iletisim"
              className="group relative px-8 py-4 bg-dh-gold text-dh-bg font-medium rounded-full overflow-hidden block"
            >
              <motion.span
                className="absolute inset-0 bg-dh-coral"
                initial={{ x: "-100%" }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.4 }}
              />
              <span className="relative z-10">
                Başvuru Yap
                <span className="inline-block ml-2 group-hover:translate-x-2 transition-transform">→</span>
              </span>
            </Link>
          </Magnetic>
          <Magnetic strength={0.25}>
            <Link
              href="/egitim-programlari"
              className="px-8 py-4 border border-white/20 rounded-full hover:border-dh-gold hover:text-dh-gold transition-all backdrop-blur-sm"
            >
              Programları Keşfet
            </Link>
          </Magnetic>
        </motion.div>

        {/* Rotating badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 2, type: "spring", stiffness: 100 }}
          className="absolute right-6 top-1/2 hidden xl:block"
        >
          <div className="relative w-28 h-28">
            <svg viewBox="0 0 100 100" className="w-full h-full spin-slow">
              <defs>
                <path id="heroCircle" d="M 50,50 m -38,0 a 38,38 0 1,1 76,0 a 38,38 0 1,1 -76,0" />
              </defs>
              <text className="fill-dh-gold text-[7px] uppercase tracking-[0.2em]">
                <textPath href="#heroCircle">Yarat · Üret · Sergile · Keşfet ·</textPath>
              </text>
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-2xl">✦</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-dh-muted text-xs uppercase tracking-widest"
        >
          <span>Keşfet</span>
          <motion.span
            animate={{ y: [0, 12, 0], opacity: [1, 0.3, 1] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="w-px h-10 bg-gradient-to-b from-dh-gold to-transparent"
          />
        </motion.div>
      </div>
    </section>
  );
}
