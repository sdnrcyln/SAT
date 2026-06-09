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
          scrolled ? "bg-dh-bg/80 backdrop-blur-xl border-b border-white/5 py-4" : "py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <Link href="/" className="group flex flex-col">
            <motion.span
              className="font-display text-xl md:text-2xl font-bold tracking-tight group-hover:text-dh-gold transition-colors"
              whileHover={{ letterSpacing: "0.05em" }}
            >
              Design House
            </motion.span>
            <span className="text-[10px] uppercase tracking-[0.3em] text-dh-muted font-art italic">Global</span>
          </Link>

          <nav className="hidden lg:flex items-center gap-6">
            {nav.slice(1, 6).map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm text-dh-muted hover:text-dh-cream transition-colors relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-dh-gold group-hover:w-full transition-all duration-300" />
              </Link>
            ))}
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
              <Link
                href="/iletisim"
                className="ml-4 px-5 py-2.5 bg-dh-gold text-dh-bg text-sm font-medium rounded-full hover:bg-dh-cream transition-colors"
              >
                Başvuru Yap
              </Link>
            </motion.div>
          </nav>

          <motion.button
            onClick={() => setOpen(true)}
            className="lg:hidden flex flex-col gap-1.5 p-2"
            aria-label="Menüyü aç"
            whileTap={{ scale: 0.9 }}
          >
            <motion.span className="w-6 h-px bg-dh-cream" animate={open ? { rotate: 45 } : {}} />
            <motion.span className="w-4 h-px bg-dh-cream ml-auto" />
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
                <span className="font-display text-2xl font-bold">{site.name}</span>
                <motion.button
                  onClick={() => setOpen(false)}
                  className="text-3xl text-dh-muted hover:text-dh-cream transition-colors w-12 h-12 flex items-center justify-center border border-white/10 rounded-full"
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
                      className="block py-3 text-3xl md:text-5xl font-display font-bold hover:text-dh-gold transition-colors group"
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
