"use client";

import { motion, useScroll, useTransform } from "framer-motion";

export default function ArtisticCanvas() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 3000], [0, 400]);
  const y2 = useTransform(scrollY, [0, 3000], [0, -300]);
  const rotate = useTransform(scrollY, [0, 2000], [0, 180]);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0" aria-hidden="true">
      <motion.div
        style={{ y: y1, rotate }}
        className="absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full opacity-20 blur-3xl blob-morph bg-dh-gold"
      />
      <motion.div
        style={{ y: y2 }}
        className="absolute top-1/3 -right-48 w-[600px] h-[600px] rounded-full opacity-15 blur-3xl blob-morph-2 bg-dh-coral"
      />
      <motion.div
        style={{ y: y1 }}
        className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] rounded-full opacity-10 blur-3xl blob-morph bg-dh-sage"
      />
      <svg className="absolute inset-0 w-full h-full opacity-[0.03]" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
            <path d="M 60 0 L 0 0 0 60" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-dh-cream" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>
    </div>
  );
}
