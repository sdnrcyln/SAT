"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { programs } from "@/lib/content";
import Reveal from "./Reveal";
import { useRef } from "react";

function TiltCard({ children, className }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [8, -8]), { stiffness: 200, damping: 20 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-8, 8]), { stiffness: 200, damping: 20 });

  const handleMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{ rotateX, rotateY, transformPerspective: 1000 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function ProgramGrid() {
  return (
    <section className="py-24 relative" id="programlar">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,#c9a96208,transparent_70%)] pointer-events-none" />
      <div className="max-w-7xl mx-auto px-6 relative">
        <Reveal>
          <p className="text-dh-gold text-sm uppercase tracking-[0.3em] mb-4">Eğitim Programları</p>
          <h2 className="font-display text-4xl md:text-6xl font-bold mb-2">
            Öne Çıkan <span className="italic-art text-dh-coral">Atölyeler</span>
          </h2>
          <p className="text-dh-muted max-w-xl mb-16">
            Mimarlık, grafik tasarım, endüstriyel tasarım ve daha fazlası — her program portfolyo odaklı müfredatla tasarlandı.
          </p>
        </Reveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, i) => (
            <Reveal key={program.title} delay={i * 0.08}>
              <Link href={program.href} className="group block">
                <TiltCard className="relative">
                  <motion.div
                    whileHover={{ y: -12 }}
                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    className="relative aspect-[4/5] rounded-sm overflow-hidden artistic-frame"
                  >
                    <Image
                      src={program.image}
                      alt={program.title}
                      fill
                      className="object-cover transition-all duration-1000 group-hover:scale-110 group-hover:saturate-125"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dh-bg via-dh-bg/30 to-dh-gold/10 opacity-80 group-hover:opacity-60 transition-opacity" />
                    <motion.div
                      className="absolute inset-0 bg-dh-gold/20 mix-blend-color"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 0.3 }}
                      transition={{ duration: 0.4 }}
                    />
                    <div className="absolute top-4 right-4 font-display text-6xl text-dh-cream/10 group-hover:text-dh-gold/30 transition-colors">
                      {String(i + 1).padStart(2, "0")}
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <motion.h3
                        className="font-display text-2xl font-bold mb-2 group-hover:text-dh-gold transition-colors"
                        initial={{ x: 0 }}
                        whileHover={{ x: 8 }}
                      >
                        {program.title}
                      </motion.h3>
                      <p className="text-dh-muted text-sm">{program.desc}</p>
                      <span className="inline-block mt-4 text-sm text-dh-gold opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                        Detayları Gör →
                      </span>
                    </div>
                  </motion.div>
                </TiltCard>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
