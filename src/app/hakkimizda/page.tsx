import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import { aboutSections } from "@/lib/content";

export default function HakkimizdaPage() {
  return (
    <>
      <PageHero
        label="Hakkımızda"
        title="Eğitimde güven, yaratıcılıkta özgürlük"
        subtitle="Design House Global — sanat ve tasarım alanında uluslararası eğitim fırsatlarına erişim sağlayan bir rehberlik merkezi."
      />
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 space-y-20">
          {aboutSections.map((section, i) => (
            <Reveal key={section.title} delay={i * 0.1}>
              <div className="grid md:grid-cols-12 gap-8 items-start border-b border-white/10 pb-16">
                <h2 className="md:col-span-4 font-display text-3xl md:text-4xl font-bold text-dh-gold">
                  {section.title}
                </h2>
                <p className="md:col-span-8 text-dh-muted text-lg leading-relaxed">{section.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
