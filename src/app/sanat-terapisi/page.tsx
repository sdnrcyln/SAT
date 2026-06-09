import Image from "next/image";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import { artTherapy } from "@/lib/content";

export default function SanatTerapisiPage() {
  return (
    <>
      <PageHero
        label="Sanat Terapisi"
        title="Yaratıcılık ve iyileşme"
        subtitle="Güvenli, ilham verici öğrenme ortamlarında dışavurumcu sanat terapisi ve yaratıcılık programları."
      />
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 mb-20">
            <Reveal direction="right">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-white/10">
                <Image
                  src="https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=1000&q=80"
                  alt="Sanat terapisi atölyesi"
                  fill
                  className="object-cover"
                />
              </div>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="text-dh-muted text-lg leading-relaxed mb-6">
                Çocuk, genç ve yetişkin programlarımızda sanat üretim süreçleri aracılığıyla duygusal ifade,
                öz güven ve yaratıcı düşünme becerilerini destekliyoruz.
              </p>
              <p className="text-dh-muted leading-relaxed">
                Grup çalışmaları ve bireysel seanslar, uzman sanat terapistleri eşliğinde yürütülür.
              </p>
            </Reveal>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {artTherapy.map((item, i) => (
              <Reveal key={item} delay={i * 0.1}>
                <div className="flex items-center gap-4 p-8 rounded-2xl border border-white/10 hover:border-dh-sage/50 transition-colors">
                  <span className="w-3 h-3 rounded-full bg-dh-sage shrink-0" />
                  <h2 className="font-display text-xl font-bold">{item}</h2>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
