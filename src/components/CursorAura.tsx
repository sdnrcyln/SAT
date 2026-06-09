"use client";

import { motion, useSpring } from "framer-motion";
import { useEffect, useState } from "react";
import { useMousePosition } from "@/hooks/useMousePosition";

export default function CursorAura() {
  const { x, y } = useMousePosition();
  const [visible, setVisible] = useState(false);

  const spring = { stiffness: 150, damping: 20, mass: 0.5 };
  const cursorX = useSpring(x, spring);
  const cursorY = useSpring(y, spring);
  const ringX = useSpring(x, { stiffness: 80, damping: 25 });
  const ringY = useSpring(y, { stiffness: 80, damping: 25 });

  useEffect(() => {
    const isTouch = window.matchMedia("(pointer: coarse)").matches;
    setVisible(!isTouch);
  }, []);

  if (!visible) return null;

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-3 h-3 rounded-full bg-dh-gold mix-blend-difference pointer-events-none z-[10000]"
        style={{ x: cursorX, y: cursorY, translateX: "-50%", translateY: "-50%" }}
      />
      <motion.div
        className="fixed top-0 left-0 w-12 h-12 rounded-full border border-dh-gold/40 pointer-events-none z-[9999]"
        style={{ x: ringX, y: ringY, translateX: "-50%", translateY: "-50%" }}
      />
      <motion.div
        className="fixed top-0 left-0 w-32 h-32 rounded-full bg-dh-coral/5 blur-xl pointer-events-none z-[9998]"
        style={{ x: ringX, y: ringY, translateX: "-50%", translateY: "-50%" }}
      />
    </>
  );
}
