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
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? "bg-dh-bg/90 backdrop-blur-xl border-b border-white/5 py-4" : "py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <Link href="/" className="group flex flex-col">
            <span className="font-display text-xl md:text-2xl font-bold tracking-tight group-hover:text-dh-gold transition-colors">
              Design House
            </span>
            <span className="text-[10px] uppercase tracking-[0.3em] text-dh-muted">Global</span>
          </Link>

          <nav className="hidden lg:flex items-center gap-6">
            {nav.slice(1, 6).map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm text-dh-muted hover:text-dh-cream transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-dh-gold hover:after:w-full after:transition-all"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/iletisim"
              className="ml-4 px-5 py-2.5 bg-dh-gold text-dh-bg text-sm font-medium rounded-full hover:bg-dh-cream transition-colors"
            >
              Başvuru Yap
            </Link>
          </nav>

          <button
            onClick={() => setOpen(true)}
            className="lg:hidden flex flex-col gap-1.5 p-2"
            aria-label="Menüyü aç"
          >
            <span className="w-6 h-px bg-dh-cream" />
            <span className="w-4 h-px bg-dh-cream ml-auto" />
          </button>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-dh-bg"
          >
            <div className="flex flex-col h-full p-6">
              <div className="flex justify-between items-center mb-12">
                <span className="font-display text-2xl font-bold">{site.name}</span>
                <button
                  onClick={() => setOpen(false)}
                  className="text-3xl text-dh-muted hover:text-dh-cream transition-colors"
                  aria-label="Menüyü kapat"
                >
                  ✕
                </button>
              </div>
              <nav className="flex flex-col gap-2 flex-1">
                {nav.map((item, i) => (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, x: -40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className="block py-3 text-3xl md:text-5xl font-display font-bold hover:text-dh-gold transition-colors"
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
              </nav>
              <p className="text-dh-muted text-sm">{site.email}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
