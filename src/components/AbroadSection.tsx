"use client";

import Link from "next/link";
import { abroadSchools } from "@/lib/content";
import Reveal from "./Reveal";

export default function AbroadSection() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <Reveal>
          <p className="text-dh-gold text-sm uppercase tracking-[0.3em] mb-4">Yurtdışı Sanat ve Tasarım Okulları</p>
          <h2 className="font-display text-4xl md:text-6xl font-bold mb-16">Global eğitim ağımız</h2>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-6">
          {abroadSchools.map((item, i) => (
            <Reveal key={item.country} delay={i * 0.1}>
              <div className="group p-8 rounded-2xl border border-white/10 hover:border-dh-sage/50 transition-all hover:bg-dh-surface">
                <h3 className="font-display text-3xl font-bold mb-2 group-hover:text-dh-sage transition-colors">
                  {item.country}
                </h3>
                <p className="text-dh-muted">{item.schools}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-12 text-center">
          <Link href="/yurtdisi" className="text-dh-gold hover:text-dh-cream transition-colors">
            Tüm okullar ve başvuru süreçleri →
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
