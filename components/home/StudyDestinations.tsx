// components/home/StudyDestinations.tsx
"use client";

import { motion,Variants } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight, GraduationCap } from "lucide-react";
import { countries } from "@/data/countries";

const images: Record<string, string> = {
  australia: "https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?q=80&w=1400&auto=format&fit=crop",
  "united-kingdom": "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=1400&auto=format&fit=crop",
  "united-states": "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?q=80&w=1400&auto=format&fit=crop",
  canada: "https://images.unsplash.com/photo-1517935706615-2717063c2225?q=80&w=1400&auto=format&fit=crop",
};

const fadeUp:Variants= {
  hidden: { opacity: 0, y: 32 },
  show: (i: number = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1]as const } }),
};

export default function StudyDestinations() {
  return (
    <section id="destinations" className="relative w-full overflow-hidden bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div className="max-w-xl">
            <motion.span variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-neutral-50 px-4 py-1.5 text-sm font-medium text-neutral-600">
              <span className="h-1.5 w-1.5 rounded-full bg-indigo-500" />
              Where We Teach
            </motion.span>

            <motion.h2 variants={fadeUp} custom={1} initial="hidden" whileInView="show" viewport={{ once: true }} className="mt-6 text-4xl font-semibold tracking-tight text-neutral-900 sm:text-5xl">
              Currently teaching in
              <span className="bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent"> four countries.</span>
            </motion.h2>
          </div>

          <motion.div variants={fadeUp} custom={2} initial="hidden" whileInView="show" viewport={{ once: true }}>
            <Link href="/countries" className="group inline-flex shrink-0 items-center gap-2 rounded-full border border-neutral-300 px-5 py-2.5 text-sm font-medium text-neutral-900 transition-colors duration-300 hover:border-neutral-900">
              View Country Details
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </motion.div>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2">
          {countries.map((dest, i) => (
            <motion.div key={dest.slug} variants={fadeUp} custom={i} initial="hidden" whileInView="show" viewport={{ once: true }} whileHover={{ y: -6 }}>
              <Link href="/countries" className="group relative block h-[360px] overflow-hidden rounded-3xl">
                <img
                  src={images[dest.slug]}
                  alt={dest.name}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/10" />

                <div className="absolute right-6 top-6 flex items-center gap-2 rounded-full bg-white/90 px-4 py-2 backdrop-blur-sm">
                  <GraduationCap className="h-4 w-4 text-neutral-900" />
                  <span className="text-sm font-semibold text-neutral-900">{dest.pricePerSession} / session</span>
                </div>

                <div className="absolute inset-x-0 bottom-0 p-8">
                  <span className="text-3xl leading-none">{dest.flag}</span>
                  <h3 className="mt-3 text-3xl font-semibold text-white">{dest.name}</h3>
                  <p className="mt-2 max-w-sm text-sm leading-relaxed text-white/80">{dest.curriculum}</p>

                  <div className="mt-5 flex items-center gap-1.5 text-sm font-medium text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    Explore details
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}