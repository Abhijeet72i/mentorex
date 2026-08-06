// components/services/SubjectsGrid.tsx
"use client";

import { motion,Variants} from "framer-motion";
import Link from "next/link";
import { subjects } from "@/data/subjects";

import { ArrowUpRight } from "lucide-react";

const fadeUp:Variants = {
  hidden: { opacity: 0, y: 28 },
  show: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] as const},
  }),
};

export default function SubjectsGrid() {
  return (
    <section className="w-full bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <motion.span
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-neutral-50 px-4 py-1.5 text-sm font-medium text-neutral-600"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-indigo-500" />
            Subjects We Cover
          </motion.span>

          <motion.h2
            variants={fadeUp}
            custom={1}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="mt-6 text-4xl font-semibold tracking-tight text-neutral-900 sm:text-5xl"
          >
            Learn what matters,
            <span className="bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">
              {" "}from someone who gets it.
            </span>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            custom={2}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="mt-4 text-base text-neutral-600"
          >
            Taught from Kindergarten through university level. Tap a subject to see how.
          </motion.p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {subjects.map((subject, i) => {
            const Icon = subject.icon;
            return (
              <motion.div
                key={subject.slug}
                variants={fadeUp}
                custom={i}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                whileHover={{ y: -6 }}
              >
                <Link
                  href={`/programs/${subject.slug}`}
                  className="group block h-full rounded-2xl border border-neutral-200 bg-white p-7 shadow-sm transition-shadow duration-300 hover:shadow-xl hover:shadow-neutral-200/60"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-neutral-900 text-white transition-colors duration-300 group-hover:bg-indigo-600">
                    <Icon className="h-5 w-5" strokeWidth={1.75} />
                  </div>
                  <h3 className="mt-5 text-lg font-semibold text-neutral-900">
                    {subject.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-neutral-600">
                    {subject.tagline}
                  </p>
                  <div className="mt-5 flex items-center gap-1.5 text-sm font-medium text-neutral-900 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    View curriculum
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}