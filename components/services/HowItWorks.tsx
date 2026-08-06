// components/services/HowItWorks.tsx
"use client";

import { motion,Variants } from "framer-motion";
import { CalendarCheck, UserCheck, Video } from "lucide-react";

const steps = [
  {
    icon: CalendarCheck,
    title: "Book a Free Demo",
    desc: "Pick a time that works for you and book a free 30-minute demo session — no card required.",
  },
  {
    icon: UserCheck,
    title: "Get Matched with a Tutor",
    desc: "We pair you with a tutor suited to your subject, level, and learning style.",
  },
  {
    icon: Video,
    title: "Start Your Sessions",
    desc: "Join your 1-hour one-to-one sessions online, at a schedule that fits your week.",
  },
];

const fadeUp:Variants= {
  hidden: { opacity: 0, y: 28 },
  show: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

export default function HowItWorks() {
  return (
    <section className="relative w-full overflow-hidden bg-neutral-900 py-20 sm:py-28">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-indigo-500/10 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <motion.span
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm font-medium text-neutral-300"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-indigo-400" />
            How It Works
          </motion.span>

          <motion.h2
            variants={fadeUp}
            custom={1}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="mt-6 text-4xl font-semibold tracking-tight text-white sm:text-5xl"
          >
            Getting started takes
            <span className="bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">
              {" "}three simple steps.
            </span>
          </motion.h2>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.title}
                variants={fadeUp}
                custom={i}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="relative rounded-2xl border border-white/10 bg-white/[0.03] p-7 backdrop-blur-sm"
              >
                <span className="text-sm font-semibold text-indigo-400">
                  0{i + 1}
                </span>
                <div className="mt-4 flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 text-white">
                  <Icon className="h-5 w-5" strokeWidth={1.75} />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-white">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-neutral-400">
                  {step.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}