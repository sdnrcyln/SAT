"use client";

import { motion, useInView, Variants } from "framer-motion";
import { useRef } from "react";

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  duration?: number;
};

const directions = {
  up: { hidden: { y: 60, opacity: 0 }, visible: { y: 0, opacity: 1 } },
  down: { hidden: { y: -60, opacity: 0 }, visible: { y: 0, opacity: 1 } },
  left: { hidden: { x: 60, opacity: 0 }, visible: { x: 0, opacity: 1 } },
  right: { hidden: { x: -60, opacity: 0 }, visible: { x: 0, opacity: 1 } },
  none: { hidden: { opacity: 0 }, visible: { opacity: 1 } },
} as const;

export default function Reveal({
  children,
  className = "",
  delay = 0,
  direction = "up",
  duration = 0.8,
}: RevealProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const variants: Variants = {
    hidden: directions[direction].hidden,
    visible: {
      ...directions[direction].visible,
      transition: { duration, delay, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  );
}
