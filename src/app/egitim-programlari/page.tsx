import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import { allPrograms } from "@/lib/content";

export default function EgitimProgramlariPage() {
  return (
    <>
      <PageHero
        label="Eğitim Programları"
        title="Sanat ve tasarım atölyeleri"
        subtitle="Portfolyo odaklı müfredat, atölye temelli öğrenme ve bireysel mentorluk ile her disiplinde uzmanlaşın."
      />
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {allPrograms.map((program, i) => (
            <Reveal key={program.id} delay={i * 0.06}>
              <article
                id={program.id}
                className="group p-8 rounded-2xl border border-white/10 hover:border-dh-gold/50 hover:bg-dh-surface transition-all h-full scroll-mt-32"
              >
                <span className="text-dh-gold/40 font-display text-4xl font-bold group-hover:text-dh-gold transition-colors">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h2 className="font-display text-2xl font-bold mt-4 mb-3">{program.title}</h2>
                <p className="text-dh-muted leading-relaxed">{program.desc}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
