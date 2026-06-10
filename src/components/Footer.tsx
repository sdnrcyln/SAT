import Link from "next/link";
import { nav, site } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-dh-surface pt-20 pb-10">
      <div className="mx-auto max-w-[1600px] px-5 md:px-8">
        <div className="mb-16 grid gap-12 lg:grid-cols-[1.3fr_0.8fr_0.9fr]">
          <div>
            <h3 className="mb-6 font-display text-6xl font-black uppercase leading-[0.8] tracking-[-0.08em] md:text-8xl">
              Design House Global
            </h3>
            <p className="max-w-xl text-lg leading-relaxed text-dh-muted">
              Güvenilir, profesyonel ve uluslararası bakış açısına sahip sanat ve tasarım eğitim platformu.
            </p>
          </div>
          <div>
            <h4 className="mb-6 text-sm uppercase tracking-[0.35em] text-dh-gold">Sayfalar</h4>
            <ul className="space-y-2">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="font-display text-xl font-black uppercase tracking-[-0.04em] text-dh-muted transition-colors hover:text-dh-cream">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="mb-6 text-sm uppercase tracking-[0.35em] text-dh-gold">İletişim</h4>
            <ul className="space-y-3 text-sm uppercase tracking-[0.14em] text-dh-muted">
              <li>{site.email}</li>
              <li>{site.phone}</li>
              <li>{site.address}</li>
            </ul>
            <div className="flex gap-4 mt-6">
              {["Instagram", "LinkedIn", "YouTube"].map((s) => (
                <a key={s} href="#" className="rounded-full border border-white/10 px-4 py-2 text-xs uppercase tracking-wider text-dh-muted transition-colors hover:border-dh-gold hover:text-dh-gold">
                  {s}
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-between gap-4 border-t border-white/10 pt-8 text-xs uppercase tracking-[0.18em] text-dh-muted md:flex-row">
          <p>© 2026 Design House Global. Tüm hakları saklıdır.</p>
          <p>Sanat · Tasarım · Yaratıcılık · Global Eğitim</p>
        </div>
      </div>
    </footer>
  );
}
