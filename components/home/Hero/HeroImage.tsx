// components/home/Hero/HeroImage.tsx
"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Globe, Award, Star } from "lucide-react";

export default function HeroImage() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 80 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
      className="relative mx-auto flex w-full max-w-[430px] items-center justify-center px-4 sm:px-0"
    >
      {/* Main Glow */}
      <div className="absolute h-[400px] w-[400px] rounded-full bg-blue-500/20 blur-[100px] sm:h-[650px] sm:w-[650px] sm:blur-[140px]" />

      {/* Secondary Glow */}
      <div className="absolute h-[260px] w-[260px] rounded-full bg-cyan-400/30 blur-[80px] sm:h-[420px] sm:w-[420px] sm:blur-[110px]" />

      {/* Image Container */}
      <motion.div
        whileHover={{ y: -8, scale: 1.02 }}
        transition={{ duration: 0.3 }}
        className="relative z-10 mx-auto w-full max-w-[340px] overflow-hidden rounded-[28px] border border-white/40 bg-white/40 shadow-2xl backdrop-blur-xl sm:max-w-[430px] sm:rounded-[40px]"
      >
        <div className="relative aspect-[3/4] w-full">
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
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
        className="absolute left-0 top-4 hidden rounded-2xl border border-white/30 bg-white/80 p-3 text-xs shadow-xl backdrop-blur-xl sm:-left-8 sm:top-12 sm:block sm:rounded-3xl sm:p-5 sm:text-base"
      >
        <Globe className="mb-1 h-4 w-4 text-blue-600 sm:mb-2 sm:h-5 sm:w-5" />
        <h3 className="font-bold text-slate-900">Quality Teaching</h3>
        <p className="text-slate-500">Verified Expert Tutors</p>
      </motion.div>

      {/* Floating Card 2 */}
      <motion.div
        animate={{ y: [0, 18, 0] }}
        transition={{ duration: 5, repeat: Infinity }}
        className="absolute right-0 top-1/3 hidden rounded-2xl border border-white/30 bg-white/80 p-3 text-xs shadow-xl backdrop-blur-xl sm:-right-10 sm:top-40 sm:block sm:rounded-3xl sm:p-5 sm:text-base"
      >
        <Award className="mb-1 h-4 w-4 text-yellow-500 sm:mb-2 sm:h-5 sm:w-5" />
        <h3 className="font-bold">One-to-One</h3>
        <p className="text-slate-500">Online Tuition</p>
      </motion.div>

      {/* Floating Card 3 */}
      <motion.div
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
        className="absolute bottom-4 left-0 hidden rounded-2xl border border-white/30 bg-white/80 p-3 text-xs shadow-xl backdrop-blur-xl sm:bottom-8 sm:-left-6 sm:block sm:rounded-3xl sm:p-5 sm:text-base"
      >
        <Star className="mb-1 h-4 w-4 text-yellow-500 sm:mb-2 sm:h-5 sm:w-5" />
        <h3 className="font-bold">Result-Oriented</h3>
        <p className="text-slate-500">Teaching Approach</p>
      </motion.div>
    </motion.div>
  );
}