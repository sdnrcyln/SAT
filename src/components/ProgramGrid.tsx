"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { programs } from "@/lib/content";
import Reveal from "./Reveal";

export default function ProgramGrid() {
  return (
    <section className="py-24" id="programlar">
      <div className="max-w-7xl mx-auto px-6">
        <Reveal>
          <p className="text-dh-gold text-sm uppercase tracking-[0.3em] mb-4">Eğitim Programları</p>
          <h2 className="font-display text-4xl md:text-6xl font-bold mb-4">Öne Çıkan Atölyeler</h2>
          <p className="text-dh-muted max-w-xl mb-16">
            Mimarlık, grafik tasarım, endüstriyel tasarım ve daha fazlası — her program portfolyo odaklı müfredatla tasarlandı.
          </p>
        </Reveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {programs.map((program, i) => (
            <Reveal key={program.title} delay={i * 0.08}>
              <Link href={program.href} className="group block">
                <motion.div
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.4 }}
                  className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-white/10"
                >
                  <Image
                    src={program.image}
                    alt={program.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dh-bg via-dh-bg/40 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="font-display text-2xl font-bold mb-2 group-hover:text-dh-gold transition-colors">
                      {program.title}
                    </h3>
                    <p className="text-dh-muted text-sm">{program.desc}</p>
                    <span className="inline-block mt-4 text-sm text-dh-gold opacity-0 group-hover:opacity-100 transition-opacity">
                      Detayları Gör →
                    </span>
                  </div>
                </motion.div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
