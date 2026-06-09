"use client";

import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import { site } from "@/lib/content";
import { useState } from "react";

export default function IletisimPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <>
      <PageHero
        label="İletişim"
        title="Bizimle iletişime geçin"
        subtitle="Başvuru formu, randevu talebi veya bilgi almak için formu doldurun."
      />
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16">
          <Reveal direction="right">
            <h2 className="font-display text-2xl font-bold mb-8">Ofis Bilgileri</h2>
            <ul className="space-y-6 text-dh-muted">
              <li>
                <span className="block text-xs uppercase tracking-widest text-dh-gold mb-1">E-posta</span>
                {site.email}
              </li>
              <li>
                <span className="block text-xs uppercase tracking-widest text-dh-gold mb-1">Telefon</span>
                {site.phone}
              </li>
              <li>
                <span className="block text-xs uppercase tracking-widest text-dh-gold mb-1">Adres</span>
                {site.address}
              </li>
            </ul>
            <div className="mt-10 flex gap-4">
              {["Instagram", "LinkedIn", "YouTube"].map((s) => (
                <a key={s} href="#" className="text-sm text-dh-muted hover:text-dh-gold transition-colors">
                  {s}
                </a>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            {submitted ? (
              <div className="p-10 rounded-2xl border border-dh-gold/50 bg-dh-gold/10 text-center">
                <p className="font-display text-2xl font-bold text-dh-gold mb-2">Teşekkürler!</p>
                <p className="text-dh-muted">Başvurunuz alındı. En kısa sürede sizinle iletişime geçeceğiz.</p>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSubmitted(true);
                }}
                className="space-y-6"
              >
                <div>
                  <label className="block text-sm text-dh-muted mb-2">Ad Soyad</label>
                  <input
                    required
                    className="w-full px-4 py-3 rounded-xl bg-dh-surface border border-white/10 focus:border-dh-gold outline-none transition-colors"
                    placeholder="Adınız Soyadınız"
                  />
                </div>
                <div>
                  <label className="block text-sm text-dh-muted mb-2">E-posta</label>
                  <input
                    type="email"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-dh-surface border border-white/10 focus:border-dh-gold outline-none transition-colors"
                    placeholder="ornek@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm text-dh-muted mb-2">İlgi Alanı</label>
                  <select className="w-full px-4 py-3 rounded-xl bg-dh-surface border border-white/10 focus:border-dh-gold outline-none transition-colors">
                    <option>Eğitim Programları</option>
                    <option>Portfolyo Hazırlık</option>
                    <option>Sanat Terapisi</option>
                    <option>Yurtdışı Başvuru</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm text-dh-muted mb-2">Mesajınız</label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl bg-dh-surface border border-white/10 focus:border-dh-gold outline-none transition-colors resize-none"
                    placeholder="Mesajınızı yazın..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-4 bg-dh-gold text-dh-bg font-medium rounded-full hover:bg-dh-cream transition-colors"
                >
                  Gönder
                </button>
              </form>
            )}
          </Reveal>
        </div>
      </section>
    </>
  );
}
