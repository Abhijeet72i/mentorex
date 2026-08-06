"use client";

import { motion,Variants} from "framer-motion";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";

const points = [
  "Free initial consultation",
  "Personalised university shortlist",
  "End-to-end application support",
];

const fadeUp:Variants = {
  hidden: { opacity: 0, y: 28 },
  show: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function CTA() {
  return (
    <section className="relative w-full overflow-hidden bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-3xl bg-neutral-900 px-8 py-16 sm:px-16 sm:py-20"
        >
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -left-20 -top-20 h-72 w-72 rounded-full bg-indigo-500/20 blur-3xl" />
            <div className="absolute -bottom-20 -right-20 h-72 w-72 rounded-full bg-violet-500/20 blur-3xl" />
          </div>

          <div className="relative grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <motion.h2
                variants={fadeUp}
                custom={1}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl"
              >
                Ready to start your{" "}
                <span className="bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">
                  global journey?
                </span>
              </motion.h2>

              <motion.p
                variants={fadeUp}
                custom={2}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="mt-5 max-w-md text-lg leading-relaxed text-neutral-400"
              >
                Book a free consultation with a Mentorex counsellor and take the first step toward studying abroad.
              </motion.p>

              <motion.ul
                variants={fadeUp}
                custom={3}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="mt-8 space-y-3"
              >
                {points.map((point) => (
                  <li key={point} className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-indigo-400" />
                    <span className="text-sm text-neutral-300">{point}</span>
                  </li>
                ))}
              </motion.ul>
            </div>

            <motion.div
              variants={fadeUp}
              custom={4}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="rounded-2xl border border-white/10 bg-white/[0.04] p-8 backdrop-blur-sm"
            >
              <p className="text-sm font-medium text-neutral-400">Get started today</p>
              <p className="mt-2 text-2xl font-semibold text-white">Free 30-Minute Consultation</p>
              <p className="mt-3 text-sm leading-relaxed text-neutral-400">
                No commitment required. Talk to an expert about your study abroad options.
              </p>

              <a href="/contact" className="group mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-neutral-900 transition-transform duration-300 hover:scale-[1.02]">
                Book Consultation
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}