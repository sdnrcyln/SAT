import Image from "next/image";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import { studentWorks } from "@/lib/content";

const sections = ["Portfolyo Örnekleri", "Projeler", "Sergiler", "Başarı Hikayeleri"];

export default function OgrenciCalismalariPage() {
  return (
    <>
      <PageHero
        label="Öğrenci Çalışmaları"
        title="Yaratıcılığın kanıtı"
        subtitle="Portfolyo örnekleri, projeler, sergiler ve uluslararası kabul başarı hikayeleri."
      />
      <section className="py-16 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 flex flex-wrap gap-6">
          {sections.map((s, i) => (
            <Reveal key={s} delay={i * 0.05}>
              <span className="font-display text-2xl md:text-3xl font-bold text-dh-cream/30 hover:text-dh-gold transition-colors cursor-default">
                {s}
              </span>
            </Reveal>
          ))}
        </div>
      </section>
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {studentWorks.map((work, i) => (
            <Reveal key={work.student} delay={i * 0.1}>
              <div className="group">
                <div className="relative aspect-[3/4] rounded-2xl overflow-hidden mb-4 border border-white/10">
                  <Image
                    src={work.image}
                    alt={work.student}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <h2 className="font-display text-xl font-bold">{work.student}</h2>
                <p className="text-dh-muted text-sm">{work.program}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
