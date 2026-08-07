// components/about/AboutHero.tsx
"use client";

import { motion, Variants } from "framer-motion";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] as const},
  }),
};

export default function AboutHero() {
  return (
    <section className="relative w-full overflow-hidden bg-neutral-50 pb-20 pt-40 sm:pb-28 sm:pt-48">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-indigo-100/50 blur-3xl" />
      </div>

      <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
        <motion.span
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-4 py-1.5 text-sm font-medium text-neutral-600"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-indigo-500" />
          About Mentorex
        </motion.span>

        <motion.h1
          variants={fadeUp}
          custom={1}
          initial="hidden"
          animate="show"
          className="mt-6 text-4xl font-semibold tracking-tight text-neutral-900 sm:text-6xl"
        >
          Empowering students with customized learning plans, expert tutors, and individual attention to
          <span className="bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">
            {" "}achieve outstanding results.
          </span>
        </motion.h1>

        <motion.p
          variants={fadeUp}
          custom={2}
          initial="hidden"
          animate="show"
          className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-neutral-600"
        >
          We're a team of experienced educators and dedicated tutors on a mission to make quality education personalized, accessible, and engaging for every student.
        </motion.p>
      </div>
    </section>
  );
}