// components/common/SplashScreen.tsx
"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GraduationCap } from "lucide-react";

export default function SplashScreen() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    const timer = setTimeout(() => {
      setLoading(false);
      document.body.style.overflow = "";
    }, 2600);
    return () => {
      clearTimeout(timer);
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          key="splash"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as const}}
          className="fixed inset-0 z-[200] flex items-center justify-center bg-neutral-900"
        >
          <div className="relative flex flex-col items-center">
            {/* Cap falls in and lands */}
            <motion.div
              initial={{ y: -140, opacity: 0, rotate: -30 }}
              animate={{ y: 0, opacity: 1, rotate: 0 }}
              transition={{ delay: 0.3, duration: 0.9, ease: [0.34, 1.56, 0.64, 1] }}
              className="mb-2"
            >
              <GraduationCap className="h-12 w-12 text-indigo-400" strokeWidth={1.5} />
            </motion.div>

            {/* Logo text appears after cap lands */}
            <motion.h1
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1, duration: 0.6, ease: [0.22, 1, 0.36, 1]as const }}
              className="text-3xl font-semibold tracking-tight text-white sm:text-4xl"
            >
              Mentor<span className="text-indigo-400">Ex</span>
            </motion.h1>

            {/* Underline sweep */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 1.5, duration: 0.6, ease: [0.22, 1, 0.36, 1] as const }}
              style={{ transformOrigin: "left" }}
              className="mt-3 h-[2px] w-40 bg-gradient-to-r from-indigo-400 to-violet-400"
            />

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.9, duration: 0.5 }}
              className="mt-4 text-xs uppercase tracking-[0.2em] text-neutral-400"
            >
              An Educated Choice
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}