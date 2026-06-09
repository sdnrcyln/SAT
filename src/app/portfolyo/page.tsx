import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import Link from "next/link";
const details = [
  {
    title: "Lisans Başvuruları",
    body: "RCA, UAL, RISD ve dünyanın önde gelen lisans programlarına portfolyo ve başvuru desteği.",
  },
  {
    title: "Yüksek Lisans Başvuruları",
    body: "Akademik portfolyo, araştırma önerisi ve referans mektubu hazırlığı.",
  },
  {
    title: "Portfolyo Danışmanlığı",
    body: "Proje seçimi, düzen, sunum ve hikâye anlatımı üzerine birebir mentorluk.",
  },
  {
    title: "Mülakat Hazırlıkları",
    body: "Mock interview, sunum pratiği ve okul-spesifik mülakat stratejileri.",
  },
  {
    title: "Burs Başvuruları",
    body: "Finansman seçenekleri, burs yazıları ve ekonomik destek başvuruları.",
  },
];

export default function PortfolyoPage() {
  return (
    <>
      <PageHero
        label="Portfolyo Hazırlık Merkezi"
        title="Hayalinizdeki okula giden yol"
        subtitle="Uçtan uca portfolyo hazırlığı ve başvuru danışmanlığı."
      />
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          {details.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.08}>
              <div className="grid md:grid-cols-12 gap-8 py-12 border-b border-white/10 items-center">
                <h2 className="md:col-span-4 font-display text-2xl md:text-3xl font-bold">{item.title}</h2>
                <p className="md:col-span-6 text-dh-muted leading-relaxed">{item.body}</p>
                <div className="md:col-span-2">
                  <Link href="/iletisim" className="text-dh-gold text-sm hover:text-dh-cream transition-colors">
                    Başvur →
                  </Link>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
