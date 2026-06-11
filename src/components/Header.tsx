"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { nav, site } from "@/lib/content";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      <header
        className={`fixed left-0 right-0 top-0 z-50 transition-all duration-500 ${
          scrolled ? "py-3" : "py-5"
        }`}
      >
        <div className="mx-auto flex max-w-[1600px] items-center justify-between px-5 md:px-8">
          <Link href="/" className="group flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center rounded-full bg-dh-cream text-sm font-black text-dh-bg transition group-hover:bg-dh-gold">
              DH
            </span>
            <span className="flex flex-col leading-none">
            <motion.span
              className="font-display text-lg font-black uppercase tracking-[-0.04em] transition-colors group-hover:text-dh-gold md:text-xl"
              whileHover={{ letterSpacing: "0.05em" }}
            >
              Design House
            </motion.span>
              <span className="text-[10px] uppercase tracking-[0.35em] text-dh-muted">Global</span>
            </span>
          </Link>

          <nav className="hidden items-center gap-2 rounded-full border border-white/10 bg-dh-bg/70 p-1.5 backdrop-blur-xl lg:flex">
            {nav.slice(1, 7).map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-full px-4 py-2 text-xs font-bold uppercase tracking-[0.12em] text-dh-muted transition hover:bg-white/10 hover:text-dh-cream"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <nav className="hidden items-center gap-3 lg:flex">
            <Link
              href="/blog"
              className="rounded-full border border-white/10 bg-dh-bg/70 px-5 py-3 text-xs font-bold uppercase tracking-[0.14em] text-dh-muted backdrop-blur-xl transition hover:border-dh-gold hover:text-dh-gold"
            >
              Kaynaklar
            </Link>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
              <Link
                href="/iletisim"
                className="rounded-full bg-dh-cream px-5 py-3 text-xs font-black uppercase tracking-[0.14em] text-dh-bg transition-colors hover:bg-dh-gold"
              >
                Başvuru
              </Link>
            </motion.div>
          </nav>

          <motion.button
            onClick={() => setOpen(true)}
            className="flex rounded-full border border-white/10 bg-dh-bg/70 px-5 py-3 text-xs font-black uppercase tracking-[0.18em] backdrop-blur-xl lg:hidden"
            aria-label="Menüyü aç"
            whileTap={{ scale: 0.9 }}
          >
            Menü
          </motion.button>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ clipPath: "circle(0% at 100% 0%)" }}
            animate={{ clipPath: "circle(150% at 100% 0%)" }}
            exit={{ clipPath: "circle(0% at 100% 0%)" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-[100] bg-dh-bg"
          >
            <div className="absolute inset-0 opacity-20">
              <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-dh-gold/20 blur-3xl blob-morph" />
              <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-dh-coral/15 blur-3xl blob-morph-2" />
            </div>
            <div className="flex flex-col h-full p-6 relative">
              <div className="flex justify-between items-center mb-12">
                <span className="font-display text-2xl font-black uppercase tracking-[-0.05em]">{site.name}</span>
                <motion.button
                  onClick={() => setOpen(false)}
                  className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 text-3xl text-dh-muted transition-colors hover:text-dh-cream"
                  aria-label="Menüyü kapat"
                  whileHover={{ rotate: 90 }}
                >
                  ✕
                </motion.button>
              </div>
              <nav className="flex flex-col gap-1 flex-1">
                {nav.map((item, i) => (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, x: -60 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -30 }}
                    transition={{ delay: i * 0.04, duration: 0.5 }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setOpen(false)}
                    className="group block py-3 font-display text-3xl font-black uppercase tracking-[-0.06em] transition-colors hover:text-dh-gold md:text-5xl"
                    >
                      <span className="inline-block group-hover:translate-x-4 transition-transform duration-300">
                        {item.label}
                      </span>
                    </Link>
                  </motion.div>
                ))}
              </nav>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="text-dh-muted text-sm font-art italic"
              >
                {site.email}
              </motion.p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
