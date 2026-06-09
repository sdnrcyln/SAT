import Link from "next/link";
import { nav, site } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-dh-surface pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12 mb-16">
          <div>
            <h3 className="font-display text-3xl font-bold mb-4">Design House Global</h3>
            <p className="text-dh-muted leading-relaxed max-w-sm">
              Güvenilir, profesyonel ve uluslararası bakış açısına sahip sanat ve tasarım eğitim platformu.
            </p>
          </div>
          <div>
            <h4 className="text-sm uppercase tracking-widest text-dh-gold mb-6">Sayfalar</h4>
            <ul className="space-y-3">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-dh-muted hover:text-dh-cream transition-colors text-sm">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-sm uppercase tracking-widest text-dh-gold mb-6">İletişim</h4>
            <ul className="space-y-3 text-sm text-dh-muted">
              <li>{site.email}</li>
              <li>{site.phone}</li>
              <li>{site.address}</li>
            </ul>
            <div className="flex gap-4 mt-6">
              {["Instagram", "LinkedIn", "YouTube"].map((s) => (
                <a key={s} href="#" className="text-xs uppercase tracking-wider text-dh-muted hover:text-dh-gold transition-colors">
                  {s}
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between gap-4 text-xs text-dh-muted">
          <p>© 2026 Design House Global. Tüm hakları saklıdır.</p>
          <p>Sanat · Tasarım · Yaratıcılık · Global Eğitim</p>
        </div>
      </div>
    </footer>
  );
}
