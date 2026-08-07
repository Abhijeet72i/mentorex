"use client";

import { motion } from "framer-motion";
import { BookOpen } from "lucide-react";

export default function BookReveal({
  children,
  open,
}: {
  children: React.ReactNode;
  open: boolean;
}) {
  return (
    <div className="relative" style={{ perspective: "2000px" }}>
      {children}

      {!open && (
        <div className="absolute inset-0 z-20 overflow-hidden rounded-3xl">
          <motion.div
            animate={{ rotateY: -110 }}
            transition={{
              duration: 2.2,
              ease: [0.65, 0, 0.35, 1],
            }}
            style={{
              transformOrigin: "left center",
              transformStyle: "preserve-3d",
              backfaceVisibility: "hidden",
            }}
            className="absolute inset-y-0 left-0 flex w-1/2 items-center justify-end bg-gradient-to-br from-neutral-900 via-indigo-950 to-neutral-900 pr-2 shadow-2xl"
          >
            <div className="flex flex-col items-end pr-6 text-right">
              <BookOpen className="h-9 w-9 text-indigo-400" />
              <p className="mt-3 text-lg font-semibold text-white">
                Our
              </p>
            </div>
          </motion.div>

          <motion.div
            animate={{ rotateY: 110 }}
            transition={{
              duration: 2.2,
              ease: [0.65, 0, 0.35, 1],
            }}
            style={{
              transformOrigin: "right center",
              transformStyle: "preserve-3d",
              backfaceVisibility: "hidden",
            }}
            className="absolute inset-y-0 right-0 flex w-1/2 items-center justify-start bg-gradient-to-bl from-neutral-900 via-indigo-950 to-neutral-900 pl-2 shadow-2xl"
          >
            <div className="flex flex-col items-start pl-6">
              <BookOpen className="h-9 w-9 text-indigo-400" />
              <p className="mt-3 text-lg font-semibold text-white">
                Programs
              </p>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
}