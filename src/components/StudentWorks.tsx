"use client";

import Image from "next/image";
import Link from "next/link";
import { studentWorks } from "@/lib/content";
import Reveal from "./Reveal";

export default function StudentWorks() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <Reveal>
          <p className="text-dh-gold text-sm uppercase tracking-[0.3em] mb-4">Öğrenci Çalışmaları</p>
          <h2 className="font-display text-4xl md:text-6xl font-bold mb-16">Başarı hikayeleri</h2>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-6">
          {studentWorks.map((work, i) => (
            <Reveal key={work.student} delay={i * 0.1}>
              <div className="group">
                <div className="relative aspect-[3/4] rounded-2xl overflow-hidden mb-4 border border-white/10">
                  <Image
                    src={work.image}
                    alt={work.student}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-dh-gold/0 group-hover:bg-dh-gold/20 transition-colors duration-500" />
                </div>
                <h3 className="font-display text-xl font-bold">{work.student}</h3>
                <p className="text-dh-muted text-sm">{work.program}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-12 text-center">
          <Link href="/ogrenci-calismalari" className="text-dh-gold hover:text-dh-cream transition-colors">
            Tüm çalışmaları gör →
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
