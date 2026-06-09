"use client";

import { marqueeWords } from "@/lib/content";

export default function Marquee({ reverse = false, artistic = false }: { reverse?: boolean; artistic?: boolean }) {
  const items = [...marqueeWords, ...marqueeWords, ...marqueeWords];

  return (
    <div
      className={`overflow-hidden border-y border-white/10 py-6 ${
        artistic ? "bg-transparent" : "bg-dh-surface/80 backdrop-blur-sm"
      }`}
    >
      <div className={`flex whitespace-nowrap ${reverse ? "marquee-track-reverse" : "marquee-track"}`}>
        {items.map((word, i) => (
          <span
            key={`${word}-${i}`}
            className={`mx-6 md:mx-10 font-display font-bold uppercase tracking-tight transition-colors duration-500 ${
              artistic
                ? "text-5xl md:text-8xl text-dh-cream/8 hover:text-dh-gold/30 italic-art"
                : "text-4xl md:text-6xl text-dh-cream/15 hover:text-dh-gold/50"
            }`}
          >
            {word}
            <span className={`mx-6 md:mx-10 ${artistic ? "text-dh-coral/40" : "text-dh-gold"}`}>
              {artistic ? "—" : "✦"}
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}
