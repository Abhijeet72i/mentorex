"use client";

import { motion } from "framer-motion";

export default function BackgroundEffects() {
  return (
    <div className="absolute inset-0 overflow-hidden -z-10">

      {/* Top Left Glow */}
      <motion.div
        animate={{
          x: [0, 40, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-blue-400/20 blur-3xl"
      />

      {/* Bottom Right Glow */}
      <motion.div
        animate={{
          x: [0, -40, 0],
          y: [0, -20, 0],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -bottom-32 -right-32 h-[420px] w-[420px] rounded-full bg-cyan-300/20 blur-3xl"
      />

      {/* Center Purple Glow */}
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute left-1/2 top-1/3 h-80 w-80 -translate-x-1/2 rounded-full bg-violet-400/10 blur-3xl"
      />

      {/* Decorative Grid */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `
            linear-gradient(to right,#0f172a 1px,transparent 1px),
            linear-gradient(to bottom,#0f172a 1px,transparent 1px)
          `,
          backgroundSize: "48px 48px",
        }}
      />
    </div>
  );
}