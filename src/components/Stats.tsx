"use client";

import { useInView } from "framer-motion";
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
    const duration = 2000;
    const startTime = performance.now();
    const tick = (now: number) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.floor(eased * numeric));
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [isInView, numeric]);

  return (
    <span ref={ref} className="font-display text-5xl md:text-7xl font-bold text-dh-gold">
      {display}
      {suffix}
    </span>
  );
}

export default function Stats() {
  return (
    <section className="py-24 bg-dh-surface">
      <div className="max-w-7xl mx-auto px-6">
        <Reveal>
          <p className="text-dh-gold text-sm uppercase tracking-[0.3em] mb-4">Rakamlarla</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-16 max-w-2xl">
            Güven oluşturan bir eğitim deneyimi
          </h2>
        </Reveal>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 0.1}>
              <div className="border border-white/10 rounded-2xl p-8 hover:border-dh-gold/40 transition-colors group">
                <AnimatedNumber value={stat.value} />
                <p className="text-dh-muted mt-3 text-sm group-hover:text-dh-cream transition-colors">
                  {stat.label}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
