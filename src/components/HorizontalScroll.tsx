"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { studentWorks } from "@/lib/content";

export default function HorizontalScroll() {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: targetRef });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-65%"]);

  const items = [...studentWorks, ...studentWorks];

  return (
    <section ref={targetRef} className="relative h-[300vh]">
      <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 mb-10">
          <p className="text-dh-gold text-sm uppercase tracking-[0.3em] mb-2">Galeri</p>
          <h2 className="font-display text-4xl md:text-6xl font-bold italic-art">
            Öğrenci portfolyoları
          </h2>
        </div>
        <motion.div style={{ x }} className="flex gap-8 px-6">
          {items.map((work, i) => (
            <motion.div
              key={`${work.student}-${i}`}
              className="relative shrink-0 w-[70vw] md:w-[45vw] lg:w-[35vw]"
              whileHover={{ scale: 1.02, rotate: i % 2 === 0 ? 1 : -1 }}
              transition={{ duration: 0.4 }}
            >
              <div className="relative aspect-[4/5] rounded-sm overflow-hidden artistic-frame">
                <Image src={work.image} alt={work.student} fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-dh-bg via-transparent to-transparent" />
              </div>
              <div className="mt-4 flex justify-between items-end border-b border-dh-gold/30 pb-3">
                <div>
                  <h3 className="font-display text-2xl font-bold">{work.student}</h3>
                  <p className="text-dh-muted text-sm">{work.program}</p>
                </div>
                <span className="font-display text-5xl text-dh-gold/20">{String((i % 3) + 1).padStart(2, "0")}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
