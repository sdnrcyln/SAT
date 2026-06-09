"use client";

import { useInView, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { stats } from "@/lib/content";
import Reveal from "./Reveal";

function AnimatedNumber({ value }: { value: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const numeric = parseInt(value.replace(/\D/g, ""), 10);
  const suffix = value.replace(/[\d.]/g, "");
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    const duration = 2500;
    const startTime = performance.now();
    const tick = (now: number) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 4);
      setDisplay(Math.floor(eased * numeric));
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [isInView, numeric]);

  return (
    <motion.span
      ref={ref}
      className="font-display text-5xl md:text-7xl font-bold gradient-text-animated"
      initial={{ scale: 0.5, opacity: 0 }}
      animate={isInView ? { scale: 1, opacity: 1 } : {}}
      transition={{ duration: 0.6, type: "spring" }}
    >
      {display}
      {suffix}
    </motion.span>
  );
}

export default function Stats() {
  return (
    <section className="py-24 bg-dh-surface/50 relative overflow-hidden">
      <motion.div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: "repeating-linear-gradient(90deg, transparent, transparent 80px, rgba(201,169,98,0.03) 80px, rgba(201,169,98,0.03) 81px)",
        }}
        aria-hidden="true"
      />
      <div className="max-w-7xl mx-auto px-6 relative">
        <Reveal>
          <p className="text-dh-gold text-sm uppercase tracking-[0.3em] mb-4">Rakamlarla</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-16 max-w-2xl">
            Güven oluşturan bir <span className="italic-art text-dh-coral">eğitim</span> deneyimi
          </h2>
        </Reveal>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 0.12}>
              <motion.div
                whileHover={{ y: -8, borderColor: "rgba(201, 169, 98, 0.5)" }}
                className="border border-white/10 rounded-sm p-8 bg-dh-bg/50 backdrop-blur-sm group relative overflow-hidden"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-dh-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"
                />
                <AnimatedNumber value={stat.value} />
                <p className="text-dh-muted mt-3 text-sm group-hover:text-dh-cream transition-colors relative">
                  {stat.label}
                </p>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
