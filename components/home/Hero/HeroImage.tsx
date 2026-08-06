"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  
  Globe,
  Award,
  Star,
} from "lucide-react";

export default function HeroImage() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 80 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
      className="relative flex items-center justify-center"
    >
      {/* Main Glow */}
      <div className="absolute h-[650px] w-[650px] rounded-full bg-blue-500/20 blur-[140px]" />

      {/* Secondary Glow */}
      <div className="absolute h-[420px] w-[420px] rounded-full bg-cyan-400/30 blur-[110px]" />

      {/* Image Container */}
      <motion.div
        whileHover={{
          y: -8,
          scale: 1.02,
        }}
        transition={{
          duration: 0.3,
        }}
        className="relative z-10 overflow-hidden rounded-[40px] border border-white/40 bg-white/40 shadow-2xl backdrop-blur-xl"
      >
        <div className="relative h-[560px] w-[430px]">
  <Image
    src="/images/hero-tutor.jpg"
    alt="Online tutor teaching a student"
    fill
    priority
    className="object-cover"
  />
</div>
      </motion.div>

      {/* Floating Card 1 */}

      <motion.div
        animate={{
          y: [0, -15, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
        }}
        className="absolute -left-8 top-12 rounded-3xl border border-white/30 bg-white/80 p-5 shadow-xl backdrop-blur-xl"
      >
        <Globe className="mb-2 text-blue-600" />

        <h3 className="font-bold text-slate-900">
  Quality Teaching
</h3>

<p className="text-sm text-slate-500">
  Verified Expert Tutors
</p>
      </motion.div>

      {/* Floating Card 2 */}

      <motion.div
        animate={{
          y: [0, 18, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
        }}
        className="absolute -right-10 top-40 rounded-3xl border border-white/30 bg-white/80 p-5 shadow-xl backdrop-blur-xl"
      >
        <Award className="mb-2 text-yellow-500" />

        <h3 className="font-bold">
  One-to-One
</h3>

<p className="text-sm text-slate-500">
  Online Tuition
</p>
      </motion.div>

      {/* Floating Card 3 */}

      <motion.div
        animate={{
          y: [0, -12, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
        }}
        className="absolute bottom-8 -left-6 rounded-3xl border border-white/30 bg-white/80 p-5 shadow-xl backdrop-blur-xl"
      >
        <Star className="mb-2 text-yellow-500" />

        <h3 className="font-bold">
  Result-Oriented
</h3>

<p className="text-sm text-slate-500">
  Teaching Approach
</p>
      </motion.div>
    </motion.div>
  );
}