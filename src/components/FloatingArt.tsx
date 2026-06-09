"use client";

import { motion } from "framer-motion";

const shapes = [
  { type: "circle", className: "top-[15%] left-[8%] w-20 h-20 border-2 border-dh-gold/30", delay: 0 },
  { type: "square", className: "top-[60%] right-[10%] w-16 h-16 border border-dh-coral/40 rotate-45", delay: 0.5 },
  { type: "line", className: "top-[40%] left-[5%] w-24 h-px bg-dh-sage/50", delay: 1 },
  { type: "dot", className: "bottom-[30%] right-[15%] w-3 h-3 rounded-full bg-dh-gold", delay: 0.3 },
  { type: "ring", className: "top-[25%] right-[20%] w-32 h-32 rounded-full border border-dh-cream/10", delay: 0.8 },
];

export default function FloatingArt() {
  return (
    <div className="fixed inset-0 pointer-events-none z-[1] overflow-hidden hidden lg:block" aria-hidden="true">
      {shapes.map((shape, i) => (
        <motion.div
          key={i}
          className={`absolute ${shape.className}`}
          animate={{
            y: [0, -20, 0],
            rotate: shape.type === "square" ? [45, 55, 45] : [0, 5, 0],
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 5 + i,
            repeat: Infinity,
            delay: shape.delay,
            ease: "easeInOut",
          }}
        />
      ))}
      <motion.svg
        viewBox="0 0 100 100"
        className="absolute bottom-[20%] left-[12%] w-24 h-24 text-dh-gold/20"
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
      >
        <text
          x="50"
          y="50"
          textAnchor="middle"
          dominantBaseline="middle"
          className="fill-current text-[6px] font-display uppercase tracking-widest"
          style={{ transformOrigin: "50px 50px" }}
        >
          <textPath href="#circlePath" startOffset="0%">
            SANAT · TASARIM · YARATICILIK · GLOBAL ·
          </textPath>
        </text>
        <defs>
          <path id="circlePath" d="M 50,50 m -35,0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0" />
        </defs>
      </motion.svg>
    </div>
  );
}
