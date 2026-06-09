"use client";

import { marqueeWords } from "@/lib/content";

export default function Marquee({ reverse = false }: { reverse?: boolean }) {
  const items = [...marqueeWords, ...marqueeWords];

  return (
    <div className="overflow-hidden border-y border-white/10 py-5 bg-dh-surface">
      <div className={`flex whitespace-nowrap ${reverse ? "marquee-track-reverse" : "marquee-track"}`}>
        {items.map((word, i) => (
          <span
            key={`${word}-${i}`}
            className="mx-8 text-4xl md:text-6xl font-display font-bold uppercase tracking-tight text-dh-cream/20 hover:text-dh-gold/60 transition-colors duration-500"
          >
            {word}
            <span className="mx-8 text-dh-gold">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
