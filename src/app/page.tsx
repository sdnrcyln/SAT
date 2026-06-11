import Image from "next/image";
import Link from "next/link";
import {
  allPrograms,
  audienceGroups,
  blogCategories,
  blogPosts,
  capabilitySections,
  homeFlow,
  homeProjectCards,
  homeStats,
  portfolioServices,
  site,
  studentWorks,
  testimonials,
} from "@/lib/content";

export default function Home() {
  return (
    <div className="bg-dh-bg text-dh-cream">
      <section className="relative min-h-screen overflow-hidden border-b border-white/10 pt-28">
        <div className="absolute inset-0 opacity-60">
          <Image
            src="https://images.unsplash.com/photo-1547891654-e66ed7ebb968?w=1800&q=80"
            alt="Design House sanat ve tasarım stüdyosu"
            fill
            priority
            className="object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(224,122,95,0.28),transparent_28%),linear-gradient(180deg,rgba(8,8,8,0.45),#080808_78%)]" />
        </div>

        <div className="relative mx-auto flex min-h-[calc(100vh-7rem)] max-w-[1600px] flex-col justify-between px-5 pb-8 md:px-8">
          <div className="grid gap-8 lg:grid-cols-[1fr_420px] lg:items-start">
            <div>
              <p className="mb-6 max-w-xl text-sm uppercase tracking-[0.35em] text-dh-gold">
                Design House İçerik Akışı
              </p>
              <h1 className="max-w-6xl font-display text-[16vw] font-black uppercase leading-[0.78] tracking-[-0.09em] md:text-[11vw] lg:text-[7.4rem] xl:text-[8.2rem]">
                Sanat ve tasarımda global rehberlik.
              </h1>
            </div>

            <aside className="rounded-[2rem] border border-white/10 bg-dh-bg/70 p-5 shadow-2xl backdrop-blur-xl">
              <div className="grid grid-cols-2 gap-3">
                {homeStats.map((stat) => (
                  <div key={stat.label} className="rounded-3xl border border-white/10 bg-white/[0.03] p-4">
                    <p className="font-display text-3xl font-black uppercase leading-none text-dh-cream">
                      {stat.value}
                    </p>
                    <p className="mt-2 text-xs uppercase tracking-[0.18em] text-dh-muted">{stat.label}</p>
                  </div>
                ))}
              </div>
              <p className="mt-6 text-lg leading-relaxed text-dh-cream/85">
                Güvenilir, profesyonel, akademik, yenilikçi ve uluslararası bakış açısına sahip bir sanat ve tasarım platformu.
              </p>
              <Link
                href="/iletisim"
                className="mt-6 inline-flex w-full items-center justify-between rounded-full bg-dh-cream px-6 py-4 font-bold uppercase tracking-tight text-dh-bg transition hover:bg-dh-gold"
              >
                Başvuru yap
                <span aria-hidden="true">→</span>
              </Link>
            </aside>
          </div>

          <div className="mt-12 grid gap-5 border-t border-white/10 pt-6 lg:grid-cols-[1fr_2fr] lg:items-end">
            <p className="max-w-xl text-lg leading-relaxed text-dh-muted">
              Kullanıcı dostu, erişilebilir ve bilgi odaklı bir deneyim; eğitim, psikoloji, kariyer, teknoloji ve kişisel gelişimi aynı çatı altında toplar.
            </p>
            <div className="flex flex-wrap justify-start gap-2 lg:justify-end">
              {["Akademik", "Modern", "Uluslararası", "Yenilikçi", "Erişilebilir"].map((item) => (
                <span key={item} className="rounded-full border border-white/15 px-4 py-2 text-sm uppercase tracking-[0.16em] text-dh-cream">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="overflow-hidden border-b border-white/10 py-10">
        <div className="marquee-track flex w-max gap-10 whitespace-nowrap">
          {[...homeFlow, ...homeFlow].map((item, index) => (
            <span key={`${item}-${index}`} className="font-display text-4xl font-black uppercase tracking-[-0.05em] text-dh-cream/85 md:text-6xl">
              {item}
            </span>
          ))}
        </div>
      </section>

      <section className="mx-auto grid max-w-[1600px] gap-10 px-5 py-20 md:px-8 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <p className="mb-4 text-sm uppercase tracking-[0.35em] text-dh-gold">Design House Hakkında</p>
          <h2 className="font-display text-5xl font-black uppercase leading-[0.85] tracking-[-0.07em] md:text-7xl">
            Fırsatlara erişim sağlayan rehberlik merkezi.
          </h2>
        </div>
        <div className="grid gap-6 text-dh-muted md:grid-cols-2">
          <p className="text-xl leading-relaxed text-dh-cream/90">
            Ziyaretçilerin ihtiyaç duydukları içeriklere kolayca ulaşmalarını sağlayan modern, profesyonel ve bilgi odaklı bir yapı kuruyoruz.
          </p>
          <p className="leading-relaxed">
            Tasarım dili akademik ciddiyeti korurken dinamik bir yaklaşımı yansıtır; araştırmayı, öğrenmeyi ve kişisel gelişimi teşvik eden uluslararası standartlarda bir dijital deneyim sunar.
          </p>
        </div>
      </section>

      <section className="border-y border-white/10 bg-dh-cream text-dh-bg">
        <div className="mx-auto max-w-[1600px] px-5 py-16 md:px-8">
          <p className="mb-8 text-sm font-bold uppercase tracking-[0.35em] text-dh-bg/60">Birincil hedef kitle</p>
          <div className="grid gap-x-8 gap-y-4 md:grid-cols-2 lg:grid-cols-3">
            {audienceGroups.map((group) => (
              <div key={group} className="border-t border-dh-bg/20 pt-4 font-display text-xl font-black uppercase leading-[1.02] tracking-[-0.04em] md:text-2xl">
                {group}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1600px] px-5 py-24 md:px-8">
        <div className="mb-12 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="mb-4 text-sm uppercase tracking-[0.35em] text-dh-coral">Selected Design House Programs</p>
            <h2 className="font-display text-5xl font-black uppercase leading-[0.85] tracking-[-0.07em] md:text-7xl">
              Öne çıkan eğitim ve atölyeler
            </h2>
          </div>
          <Link href="/egitim-programlari" className="rounded-full border border-white/20 px-6 py-3 text-sm font-bold uppercase tracking-[0.18em] transition hover:border-dh-gold hover:text-dh-gold">
            Tüm programlar
          </Link>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {homeProjectCards.map((card, index) => (
            <Link key={card.title} href={card.href} className="group relative min-h-[460px] overflow-hidden rounded-[2rem] border border-white/10 bg-dh-surface">
              <Image src={card.image} alt={card.kicker} fill className="object-cover transition duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-dh-bg via-dh-bg/30 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
                <div className="mb-5 flex items-center justify-between text-sm uppercase tracking-[0.25em] text-dh-gold">
                  <span>{card.kicker}</span>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                </div>
                <h3 className="max-w-3xl font-display text-4xl font-black uppercase leading-[0.9] tracking-[-0.06em] md:text-6xl">
                  {card.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="border-y border-white/10">
        <div className="mx-auto max-w-[1600px] px-5 py-20 md:px-8">
          <p className="mb-14 text-sm uppercase tracking-[0.35em] text-dh-gold">So what do we do, exactly?</p>
          <div className="divide-y divide-white/10">
            {capabilitySections.map((item, index) => (
              <article key={item.eyebrow} className="grid gap-8 py-12 lg:grid-cols-[120px_1fr_260px] lg:items-start">
                <div className="font-display text-6xl font-black text-dh-cream/20">{index + 1}</div>
                <div>
                  <h3 className="mb-5 max-w-4xl font-display text-4xl font-black uppercase leading-[0.9] tracking-[-0.06em] md:text-6xl">
                    {item.title}
                  </h3>
                  <p className="max-w-3xl text-lg leading-relaxed text-dh-muted">{item.body}</p>
                </div>
                <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-6">
                  <p className="text-sm uppercase tracking-[0.35em] text-dh-gold">{item.eyebrow}</p>
                  <p className="mt-5 font-display text-7xl font-black uppercase tracking-[-0.08em] text-dh-cream">
                    {item.metric}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-[1600px] gap-6 px-5 py-24 md:px-8 lg:grid-cols-[1fr_1fr]">
        <div className="rounded-[2rem] border border-white/10 bg-dh-surface p-6 md:p-8">
          <p className="mb-6 text-sm uppercase tracking-[0.35em] text-dh-coral">Portfolyo hazırlık programları</p>
          <div className="space-y-3">
            {portfolioServices.map((service, index) => (
              <Link key={service} href="/portfolyo" className="flex items-center justify-between rounded-2xl border border-white/10 p-5 transition hover:border-dh-coral hover:bg-white/[0.03]">
                <span className="font-display text-2xl font-black uppercase tracking-[-0.04em]">{service}</span>
                <span className="text-dh-muted">{String(index + 1).padStart(2, "0")}</span>
              </Link>
            ))}
          </div>
        </div>

        <div className="rounded-[2rem] border border-white/10 bg-dh-surface p-6 md:p-8">
          <p className="mb-6 text-sm uppercase tracking-[0.35em] text-dh-sage">Sanat ve tasarım bölümleri</p>
          <div className="flex flex-wrap gap-3">
            {allPrograms.map((program) => (
              <Link key={program.id} href={`/egitim-programlari#${program.id}`} className="rounded-full border border-white/15 px-5 py-3 font-bold uppercase tracking-tight transition hover:border-dh-sage hover:text-dh-sage">
                {program.title}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-dh-surface py-24">
        <div className="mx-auto max-w-[1600px] px-5 md:px-8">
          <div className="mb-12 grid gap-6 lg:grid-cols-[1fr_1fr] lg:items-end">
            <h2 className="font-display text-5xl font-black uppercase leading-[0.85] tracking-[-0.07em] md:text-7xl">
              Öğrenci çalışmaları ve başarı hikayeleri
            </h2>
            <p className="text-lg leading-relaxed text-dh-muted">
              Mimarlık ve tasarım stüdyoları, öğrenci portfolyoları, grafik tasarım çalışmaları, 3D üretim süreçleri, sergi ve proje sunumları aynı akışta görünür olur.
            </p>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {studentWorks.map((work) => (
              <div key={work.student} className="group">
                <div className="relative mb-4 aspect-[4/5] overflow-hidden rounded-[2rem] border border-white/10">
                  <Image src={work.image} alt={work.program} fill className="object-cover transition duration-700 group-hover:scale-105" />
                </div>
                <h3 className="font-display text-3xl font-black uppercase tracking-[-0.05em]">{work.student}</h3>
                <p className="text-dh-muted">{work.program}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1600px] px-5 py-24 md:px-8">
        <div className="mb-12 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="mb-4 text-sm uppercase tracking-[0.35em] text-dh-gold">Latest resources</p>
            <h2 className="font-display text-5xl font-black uppercase leading-[0.85] tracking-[-0.07em] md:text-7xl">
              Blog ve kaynak merkezi
            </h2>
          </div>
          <div className="flex max-w-2xl flex-wrap gap-2">
            {blogCategories.map((category) => (
              <span key={category} className="rounded-full bg-white/[0.06] px-4 py-2 text-sm text-dh-muted">
                {category}
              </span>
            ))}
          </div>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {blogPosts.map((post) => (
            <Link key={post.title} href="/blog" className="rounded-[2rem] border border-white/10 p-5 transition hover:border-dh-gold hover:bg-white/[0.03]">
              <p className="mb-8 text-sm uppercase tracking-[0.25em] text-dh-gold">{post.category}</p>
              <h3 className="font-display text-3xl font-black uppercase leading-none tracking-[-0.05em]">{post.title}</h3>
              <p className="mt-6 text-sm text-dh-muted">{post.date}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="border-y border-white/10 bg-dh-cream text-dh-bg">
        <div className="mx-auto max-w-[1600px] px-5 py-16 md:px-8">
          <p className="mb-8 text-sm font-bold uppercase tracking-[0.35em] text-dh-bg/60">Boring stats</p>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {homeStats.map((stat) => (
              <div key={stat.label} className="rounded-[2rem] border border-dh-bg/15 p-6">
                <p className="font-display text-5xl font-black uppercase tracking-[-0.08em]">{stat.value}</p>
                <p className="mt-2 text-sm uppercase tracking-[0.16em] text-dh-bg/60">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1600px] px-5 py-24 md:px-8">
        <div className="grid gap-5 md:grid-cols-2">
          {testimonials.map((testimonial) => (
            <blockquote key={testimonial.author} className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-8">
              <p className="text-2xl leading-relaxed text-dh-cream/90">“{testimonial.quote}”</p>
              <footer className="mt-8 text-sm uppercase tracking-[0.18em] text-dh-muted">
                <strong className="block text-dh-cream">{testimonial.author}</strong>
                {testimonial.role}
              </footer>
            </blockquote>
          ))}
        </div>
      </section>

      <section className="relative overflow-hidden px-5 py-28 text-center md:px-8">
        <p className="mb-5 text-sm uppercase tracking-[0.35em] text-dh-gold">İletişim ve başvuru</p>
        <h2 className="mx-auto max-w-6xl font-display text-[15vw] font-black uppercase leading-[0.78] tracking-[-0.1em] md:text-[8rem]">
          Geleceğini birlikte tasarlayalım.
        </h2>
        <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-dh-muted">
          Başvuru formu, randevu talebi, ofis bilgileri ve sosyal medya kanallarına tek noktadan ulaşın.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Link href="/iletisim" className="rounded-full bg-dh-gold px-8 py-4 font-bold uppercase text-dh-bg transition hover:bg-dh-cream">
            Başvuru Formu
          </Link>
          <a href={`mailto:${site.email}`} className="rounded-full border border-white/20 px-8 py-4 font-bold uppercase transition hover:border-dh-gold hover:text-dh-gold">
            Randevu Talebi
          </a>
        </div>
      </section>
    </div>
  );
}
