// components/gallery/GalleryGrid.tsx
"use client";

import { useState } from "react";
import { motion, AnimatePresence,Variants } from "framer-motion";
import { X, ChevronLeft, ChevronRight, Play } from "lucide-react";
import { galleryItems } from "@/data/gallery";

const fadeUp:Variants= {
  hidden: { opacity: 0, y: 24 },
  show: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: i * 0.05,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  }),
};

export default function GalleryGrid() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  function close() {
    setActiveIndex(null);
  }

  function next() {
    setActiveIndex((prev) =>
      prev === null ? null : (prev + 1) % galleryItems.length
    );
  }

  function prev() {
    setActiveIndex((prev) =>
      prev === null
        ? null
        : (prev - 1 + galleryItems.length) % galleryItems.length
    );
  }

  return (
    <section className="w-full bg-white pb-24 sm:pb-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-3">
          {galleryItems.map((item, i) => (
            <motion.button
              key={item.src}
              variants={fadeUp}
              custom={i}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              onClick={() => setActiveIndex(i)}
              className="group relative aspect-square overflow-hidden rounded-2xl"
            >
              {item.type === "image" ? (
                <img
                  src={item.src}
                  alt={item.alt}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              ) : (
                <>
                  <video
                    src={item.src}
                    poster={item.poster}
                    muted
                    loop
                    autoPlay
                    playsInline
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/90 shadow-lg">
                      <Play
                        className="ml-1 h-6 w-6 text-black"
                        fill="currentColor"
                      />
                    </div>
                  </div>
                </>
              )}

              <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/20" />
            </motion.button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {activeIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4"
            onClick={close}
          >
            {/* Close */}
            <button
              onClick={close}
              className="absolute right-6 top-6 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20"
            >
              <X className="h-5 w-5" />
            </button>

            {/* Previous */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                prev();
              }}
              className="absolute left-4 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 sm:left-8"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            {/* Content */}
            {galleryItems[activeIndex].type === "image" ? (
              <motion.img
                key={galleryItems[activeIndex].src}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                onClick={(e) => e.stopPropagation()}
                src={galleryItems[activeIndex].src}
                alt={galleryItems[activeIndex].alt}
                className="max-h-[85vh] max-w-[90vw] rounded-2xl object-contain"
              />
            ) : (
              <motion.video
                key={galleryItems[activeIndex].src}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                onClick={(e) => e.stopPropagation()}
                src={galleryItems[activeIndex].src}
                poster={galleryItems[activeIndex].poster}
                controls
                autoPlay
                playsInline
                className="max-h-[85vh] max-w-[90vw] rounded-2xl"
              />
            )}

            {/* Next */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                next();
              }}
              className="absolute right-4 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 sm:right-8"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}