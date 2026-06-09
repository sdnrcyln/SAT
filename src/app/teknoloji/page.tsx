import Image from "next/image";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import { techItems } from "@/lib/content";

export default function TeknolojiPage() {
  return (
    <>
      <PageHero
        label="Teknoloji & Üretim"
        title="Dijital üretim atölyesi"
        subtitle="3D modelleme, baskı teknolojileri ve dijital tasarım araçlarıyla fikirlerinizi hayata geçirin."
      />
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-24">
            <Reveal direction="right">
              <div className="relative aspect-video rounded-2xl overflow-hidden border border-white/10">
                <Image
                  src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=1200&q=80"
                  alt="3D baskı teknolojisi"
                  fill
                  className="object-cover"
                />
              </div>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="text-dh-muted text-lg leading-relaxed">
                Stüdyolarımızda endüstriyel 3D yazıcılar, lazer kesim ve CAD/CAM altyapısı ile öğrencilerimiz
                prototiplerini üretir, sergi ve sunumlara hazırlar.
              </p>
            </Reveal>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {techItems.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.1}>
                <div className="p-10 rounded-2xl bg-dh-surface border border-white/10 hover:border-dh-coral/40 transition-colors">
                  <h2 className="font-display text-3xl font-bold mb-4 text-dh-coral">{item.title}</h2>
                  <p className="text-dh-muted leading-relaxed">{item.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
