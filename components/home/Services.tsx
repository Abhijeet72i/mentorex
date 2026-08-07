"use client";

import Link from "next/link";
import { motion, useInView, Variants } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import BookReveal from "@/components/common/BookReveal";
import { subjects } from "@/data/subjects";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  show: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: i * 0.08,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

export default function Services() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, {
    once: true,
    margin: "-100px",
  });

  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (isInView) setOpen(true);
  }, [isInView]);

  function handleReplay() {
    setOpen(false);
    setTimeout(() => setOpen(true), 300);
  }

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-white py-24 sm:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Heading */}
        <div className="mx-auto max-w-2xl text-center">
          <motion.span
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            onMouseEnter={handleReplay}
            className="inline-flex cursor-pointer items-center gap-2 rounded-full border border-neutral-200 bg-white px-4 py-1.5 text-sm font-medium text-neutral-600"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-indigo-500" />
            What We Offer
          </motion.span>

          <motion.h2
            variants={fadeUp}
            custom={1}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="mt-6 text-4xl font-semibold tracking-tight text-neutral-900 sm:text-5xl"
          >
            One-to-one online classes,
            <span className="bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">
              {" "}
              built around you.
            </span>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            custom={2}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="mt-5 text-lg leading-relaxed text-neutral-600"
          >
            Personal tutors for the subjects that matter, taught at your pace,
            on your schedule.
          </motion.p>
        </div>

        <BookReveal open={open}>
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
                  whileHover={{ y: -8 }}
                >
                  <Link
                    href={`/programs/${subject.slug}`}
                    className="group relative block h-full overflow-hidden rounded-2xl border border-neutral-200 bg-white p-8 shadow-sm transition-all duration-300 hover:shadow-xl hover:shadow-neutral-200/60"
                  >
                    <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-indigo-100/0 blur-2xl transition-colors duration-500 group-hover:bg-indigo-100/60" />

                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-neutral-900 text-white transition-colors duration-300 group-hover:bg-indigo-600">
                      <Icon className="h-5 w-5" strokeWidth={1.75} />
                    </div>

                    <h3 className="mt-6 text-lg font-semibold text-neutral-900">
                      {subject.title}
                    </h3>

                    <p className="mt-2 text-sm leading-relaxed text-neutral-600">
                      {subject.tagline}
                    </p>

                    <div className="mt-5 flex items-center gap-1.5 text-sm font-medium text-neutral-900 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      View Program
                      <ArrowUpRight className="h-3.5 w-3.5" />
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </BookReveal>
      </div>
    </section>
  );
}