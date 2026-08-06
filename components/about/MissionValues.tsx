// components/about/MissionValues.tsx
"use client";

import { motion } from "framer-motion";
import { Compass, Eye, Heart, Sparkles } from "lucide-react";

const values = [
  {
    icon: Compass,
    title: "Honesty First",
    desc: "We tell students what they need to hear, not just what sounds good — even when it means fewer applications.",
  },
  {
    icon: Eye,
    title: "Radical Transparency",
    desc: "Clear pricing, clear timelines, clear odds. No hidden fees, no vague promises.",
  },
  {
    icon: Heart,
    title: "Student-Centered",
    desc: "Every recommendation starts with your goals, budget, and life — not a university's marketing budget.",
  },
  {
    icon: Sparkles,
    title: "Continuous Care",
    desc: "Our relationship doesn't end at admission. We stay connected through your first year abroad.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function MissionValues() {
  return (
    <section className="relative w-full overflow-hidden bg-neutral-900 py-24 sm:py-32">
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
            Our Values
          </motion.span>

          <motion.h2
            variants={fadeUp}
            custom={1}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="mt-6 text-4xl font-semibold tracking-tight text-white sm:text-5xl"
          >
            What guides every
            <span className="bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">
              {" "}decision we make.
            </span>
          </motion.h2>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((value, i) => {
            const Icon = value.icon;
            return (
              <motion.div
                key={value.title}
                variants={fadeUp}
                custom={i}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                whileHover={{ y: -6 }}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm transition-colors duration-300 hover:border-white/20 hover:bg-white/[0.06]"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 text-white">
                  <Icon className="h-5 w-5" strokeWidth={1.75} />
                </div>
                <h3 className="mt-5 text-base font-semibold text-white">
                  {value.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-neutral-400">
                  {value.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}