"use client";

import Link from "next/link";
import Reveal from "./Reveal";

export default function AboutPreview() {
  return (
    <section className="py-24 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          <Reveal direction="right">
            <p className="text-dh-gold text-sm uppercase tracking-[0.3em] mb-4">Design House Hakkında</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Güvenilir, profesyonel ve uluslararası bakış açısı
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-dh-muted text-lg leading-relaxed mb-6">
              Ziyaretçilerimizin web sitemizi yalnızca bilgi veren bir platform olarak değil; fırsatlara erişim sağlayan,
              gelişimi destekleyen, ileri görüşlü ve uluslararası standartlarda bir rehberlik merkezi olarak algılamasını hedefliyoruz.
            </p>
            <p className="text-dh-muted leading-relaxed mb-8">
              Tasarım dilimiz akademik ciddiyeti korurken yenilikçi ve dinamik bir yaklaşımı yansıtır — eğitim, psikoloji,
              kariyer, araştırma ve teknoloji alanlarında güven oluşturan bir marka algısı sunar.
            </p>
            <Link href="/hakkimizda" className="text-dh-gold hover:text-dh-cream transition-colors inline-flex items-center gap-2">
              Daha fazla bilgi <span>→</span>
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
