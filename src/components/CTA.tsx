"use client";

import Link from "next/link";
import Reveal from "./Reveal";

export default function CTA() {
  return (
    <section className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-dh-gold/10 via-transparent to-dh-sage/10" />
      <div className="max-w-4xl mx-auto px-6 text-center relative">
        <Reveal>
          <h2 className="font-display text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Geleceğinizi birlikte tasarlayalım
          </h2>
          <p className="text-dh-muted text-lg mb-10 max-w-xl mx-auto">
            Başvuru formu, randevu talebi veya bilgi almak için bizimle iletişime geçin.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/iletisim"
              className="px-10 py-4 bg-dh-gold text-dh-bg font-medium rounded-full hover:bg-dh-cream transition-all hover:scale-105"
            >
              Başvuru Yap
            </Link>
            <Link
              href="/iletisim"
              className="px-10 py-4 border border-white/20 rounded-full hover:border-dh-gold transition-all"
            >
              Randevu Talep Et
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
