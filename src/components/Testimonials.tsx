"use client";

import { testimonials } from "@/lib/content";
import Reveal from "./Reveal";

export default function Testimonials() {
  return (
    <section className="py-24 border-y border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        <Reveal>
          <p className="text-dh-gold text-sm uppercase tracking-[0.3em] mb-16 text-center">Veli & Öğrenci Yorumları</p>
        </Reveal>
        <div className="grid md:grid-cols-2 gap-12">
          {testimonials.map((t, i) => (
            <Reveal key={t.author} delay={i * 0.15}>
              <blockquote className="relative p-8 rounded-2xl border border-white/10 hover:border-dh-gold/30 transition-colors">
                <span className="font-display text-6xl text-dh-gold/20 absolute top-4 left-6">&ldquo;</span>
                <p className="text-lg leading-relaxed text-dh-cream/90 mt-8 mb-6">{t.quote}</p>
                <footer>
                  <cite className="not-italic font-display font-bold">{t.author}</cite>
                  <p className="text-dh-muted text-sm">{t.role}</p>
                </footer>
              </blockquote>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
