"use client";

import { motion } from "framer-motion";

export function Reveal({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 28, clipPath: "inset(8% 0 0 0)" }}
      whileInView={{ opacity: 1, y: 0, clipPath: "inset(0 0 0 0)" }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}
