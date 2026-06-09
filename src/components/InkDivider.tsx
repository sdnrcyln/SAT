"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function InkDivider({ variant = "gold" }: { variant?: "gold" | "sage" | "coral" }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const colors = { gold: "#c9a962", sage: "#7b9e87", coral: "#e07a5f" };

  return (
    <div ref={ref} className="py-8 px-6 overflow-hidden">
      <svg viewBox="0 0 1200 80" className="w-full max-w-4xl mx-auto h-16" fill="none" aria-hidden="true">
        <motion.path
          d="M0 40 Q150 10, 300 40 T600 40 T900 40 T1200 40"
          stroke={colors[variant]}
          strokeWidth="2"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={inView ? { pathLength: 1, opacity: 0.6 } : {}}
          transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1] }}
        />
        <motion.circle
          cx="600"
          cy="40"
          r="6"
          fill={colors[variant]}
          initial={{ scale: 0, opacity: 0 }}
          animate={inView ? { scale: 1, opacity: 1 } : {}}
          transition={{ delay: 1.2, duration: 0.5 }}
        />
        <motion.path
          d="M580 40 Q600 20, 620 40"
          stroke={colors[variant]}
          strokeWidth="1.5"
          initial={{ pathLength: 0 }}
          animate={inView ? { pathLength: 1 } : {}}
          transition={{ delay: 1.4, duration: 0.6 }}
        />
      </svg>
    </div>
  );
}
