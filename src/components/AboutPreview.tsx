"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Reveal from "./Reveal";
import ParallaxImage from "./ParallaxImage";

export default function AboutPreview() {
  return (
    <section className="py-24 border-b border-white/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <Reveal direction="right" className="lg:col-span-5 relative">
            <div className="relative">
              <ParallaxImage
                src="https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=800&q=80"
                alt="Sanat atölyesi"
                className="aspect-[3/4] rounded-sm artistic-frame"
              />
              <motion.div
                animate={{ rotate: [0, 5, 0] }}
                transition={{ duration: 6, repeat: Infinity }}
                className="absolute -bottom-8 -right-8 w-40 h-40 hidden md:block"
              >
                <ParallaxImage
                  src="https://images.unsplash.com/photo-1547891654-e66ed7ebb968?w=400&q=80"
                  alt="Tasarım detayı"
                  className="aspect-square rounded-sm artistic-frame float"
                />
              </motion.div>
            </div>
          </Reveal>

          <div className="lg:col-span-7">
            <Reveal>
              <p className="text-dh-gold text-sm uppercase tracking-[0.3em] mb-4">Design House Hakkında</p>
              <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Güvenilir, profesyonel ve{" "}
                <span className="italic-art text-dh-sage">uluslararası</span> bakış açısı
              </h2>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="text-dh-muted text-lg leading-relaxed mb-6 font-art">
                Ziyaretçilerimizin web sitemizi yalnızca bilgi veren bir platform olarak değil; fırsatlara erişim sağlayan,
                gelişimi destekleyen, ileri görüşlü ve uluslararası standartlarda bir rehberlik merkezi olarak algılamasını hedefliyoruz.
              </p>
            </Reveal>
            <Reveal delay={0.25}>
              <p className="text-dh-muted leading-relaxed mb-8">
                Tasarım dilimiz akademik ciddiyeti korurken yenilikçi ve dinamik bir yaklaşımı yansıtır — eğitim, psikoloji,
                kariyer, araştırma ve teknoloji alanlarında güven oluşturan bir marka algısı sunar.
              </p>
              <Link
                href="/hakkimizda"
                className="group inline-flex items-center gap-3 text-dh-gold hover:text-dh-cream transition-colors"
              >
                <span className="w-12 h-px bg-dh-gold group-hover:w-20 transition-all" />
                Daha fazla bilgi
              </Link>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
