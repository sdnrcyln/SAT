import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import { abroadSchools } from "@/lib/content";

const processes = [
  "Üniversite ve bölüm araştırması",
  "Başvuru takvimi planlaması",
  "Kabul koşulları ve dil gereksinimleri",
  "Öğrenci yerleşim desteği",
];

export default function YurtdisiPage() {
  return (
    <>
      <PageHero
        label="Yurtdışı Okullar"
        title="Global eğitim ağı"
        subtitle="Avrupa, Kuzey Amerika ve Birleşik Krallık'taki önde gelen sanat ve tasarım okulları."
      />
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-6 mb-20">
            {abroadSchools.map((item, i) => (
              <Reveal key={item.country} delay={i * 0.1}>
                <div className="p-10 rounded-2xl border border-white/10 hover:border-dh-sage/50 transition-colors">
                  <h2 className="font-display text-4xl font-bold mb-3">{item.country}</h2>
                  <p className="text-dh-muted text-lg">{item.schools}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal>
            <h2 className="font-display text-3xl font-bold mb-8">Başvuru Süreçleri</h2>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {processes.map((step, i) => (
              <Reveal key={step} delay={i * 0.08}>
                <div className="p-6 rounded-xl bg-dh-surface border border-white/10 text-center">
                  <span className="block font-display text-2xl text-dh-gold mb-2">{i + 1}</span>
                  <p className="text-sm text-dh-muted">{step}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
