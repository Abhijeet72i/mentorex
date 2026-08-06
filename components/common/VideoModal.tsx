// components/common/VideoModal.tsx
"use client";

import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";

interface VideoModalProps {
  open: boolean;
  onClose: () => void;
  src: string;
}

export default function VideoModal({ open, onClose, src }: VideoModalProps) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4"
          onClick={onClose}
        >
          <button
            onClick={onClose}
            aria-label="Close video"
            className="absolute right-6 top-6 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors duration-300 hover:bg-white/20"
          >
            <X className="h-5 w-5" />
          </button>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-4xl overflow-hidden rounded-2xl bg-black shadow-2xl"
          >
            <video
              src={src}
              controls
              autoPlay
              className="h-auto w-full max-h-[80vh]"
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}