"use client";

import { motion } from "framer-motion";

type SplitCharsProps = {
  text: string;
  className?: string;
  delay?: number;
  stagger?: number;
};

export default function SplitChars({ text, className = "", delay = 0, stagger = 0.03 }: SplitCharsProps) {
  return (
    <span className={`inline-flex flex-wrap ${className}`} aria-label={text}>
      {text.split("").map((char, i) => (
        <motion.span
          key={`${char}-${i}`}
          initial={{ opacity: 0, y: 80, rotateX: -90 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{
            delay: delay + i * stagger,
            duration: 0.6,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="inline-block origin-bottom"
          style={{ display: char === " " ? "inline" : "inline-block" }}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </span>
  );
}
