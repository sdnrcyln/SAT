"use client";

import Image from "next/image";
import Link from "next/link";
import { artTherapy } from "@/lib/content";
import Reveal from "./Reveal";

export default function ArtTherapySection() {
  return (
    <section className="py-24 bg-dh-surface overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <Reveal direction="right" className="relative">
            <div className="relative aspect-square rounded-2xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=800&q=80"
                alt="Sanat terapisi atölyesi"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-48 h-48 rounded-2xl overflow-hidden border-4 border-dh-bg float hidden md:block">
              <Image
                src="https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=400&q=80"
                alt="Yaratıcı atölye"
                fill
                className="object-cover"
              />
            </div>
          </Reveal>

          <div>
            <Reveal>
              <p className="text-dh-sage text-sm uppercase tracking-[0.3em] mb-4">Sanat Terapisi & Yaratıcılık</p>
              <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
                İlham veren, güvenli öğrenme ortamları
              </h2>
              <p className="text-dh-muted leading-relaxed mb-8">
                Dışavurumcu sanat terapisi, çocuk ve genç programları ile yaratıcılık geliştirme çalışmaları.
              </p>
            </Reveal>
            <ul className="space-y-4 mb-8">
              {artTherapy.map((item, i) => (
                <Reveal key={item} delay={i * 0.08}>
                  <li className="flex items-center gap-3 text-dh-cream">
                    <span className="w-2 h-2 rounded-full bg-dh-sage" />
                    {item}
                  </li>
                </Reveal>
              ))}
            </ul>
            <Reveal>
              <Link
                href="/sanat-terapisi"
                className="inline-block px-6 py-3 bg-dh-sage/20 text-dh-sage border border-dh-sage/30 rounded-full hover:bg-dh-sage hover:text-dh-bg transition-all"
              >
                Programları İncele
              </Link>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
