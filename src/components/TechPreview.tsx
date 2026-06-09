"use client";

import Image from "next/image";
import Link from "next/link";
import { techItems } from "@/lib/content";
import Reveal from "./Reveal";

export default function TechPreview() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <Reveal>
              <p className="text-dh-coral text-sm uppercase tracking-[0.3em] mb-4">Teknoloji & Üretim</p>
              <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
                3D Modelleme ve Baskı Teknolojileri
              </h2>
              <p className="text-dh-muted leading-relaxed mb-8">
                Dijital tasarım araçları, 3D modelleme ve üretim süreçleriyle fikirlerinizi somut projelere dönüştürün.
              </p>
            </Reveal>
            <div className="grid sm:grid-cols-2 gap-4">
              {techItems.map((item, i) => (
                <Reveal key={item.title} delay={i * 0.08}>
                  <div className="p-5 rounded-xl border border-white/10 hover:border-dh-coral/40 transition-colors">
                    <h3 className="font-display font-bold mb-1">{item.title}</h3>
                    <p className="text-dh-muted text-sm">{item.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>
            <Reveal className="mt-8">
              <Link href="/teknoloji" className="text-dh-coral hover:text-dh-cream transition-colors">
                Teknoloji merkezini keşfet →
              </Link>
            </Reveal>
          </div>
          <Reveal direction="left" className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-white/10">
            <Image
              src="https://images.unsplash.com/photo-1631540577673-4c496e376f66?w=800&q=80"
              alt="3D modelleme"
              fill
              className="object-cover"
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
