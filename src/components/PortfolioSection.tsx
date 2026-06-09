"use client";

import Link from "next/link";
import { portfolioServices } from "@/lib/content";
import Reveal from "./Reveal";

export default function PortfolioSection() {
  return (
    <section className="py-24 bg-dh-surface relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-dh-gold/5 to-transparent pointer-events-none" />
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <Reveal direction="right">
            <p className="text-dh-gold text-sm uppercase tracking-[0.3em] mb-4">Portfolyo Hazırlık Merkezi</p>
            <h2 className="font-display text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Dünyanın en iyi okullarına hazırlanın
            </h2>
            <p className="text-dh-muted leading-relaxed mb-8">
              Lisans ve yüksek lisans başvurularından mülakat hazırlığına, burs başvurularından portfolyo danışmanlığına kadar uçtan uca destek.
            </p>
            <Link
              href="/portfolyo"
              className="inline-flex items-center gap-2 px-6 py-3 border border-dh-gold text-dh-gold rounded-full hover:bg-dh-gold hover:text-dh-bg transition-all"
            >
              Merkezi Keşfet →
            </Link>
          </Reveal>

          <div className="space-y-4">
            {portfolioServices.map((service, i) => (
              <Reveal key={service} delay={i * 0.1}>
                <div className="group flex items-center gap-6 p-6 rounded-xl border border-white/10 hover:border-dh-gold/50 hover:bg-white/5 transition-all cursor-default">
                  <span className="font-display text-3xl font-bold text-dh-gold/30 group-hover:text-dh-gold transition-colors">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-lg font-medium group-hover:translate-x-2 transition-transform">
                    {service}
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
