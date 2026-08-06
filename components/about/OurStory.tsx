// components/about/OurStory.tsx
"use client";

import { motion,Variants } from "framer-motion";

const fadeUp:Variants = {
  hidden: { opacity: 0, y: 28 },
  show: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

export default function OurStory() {
  return (
    <section className="w-full bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:items-center">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="relative aspect-[4/5] overflow-hidden rounded-3xl"
          >
            <img
              src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1200&auto=format&fit=crop"
              alt="Mentorex counselling session"
              className="h-full w-full object-cover"
            />
          </motion.div>

          <div>
            <motion.span
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-neutral-50 px-4 py-1.5 text-sm font-medium text-neutral-600"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-indigo-500" />
              Our Story
            </motion.span>

            <motion.h2
              variants={fadeUp}
              custom={1}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="mt-6 text-3xl font-semibold tracking-tight text-neutral-900 sm:text-4xl"
            >
              Built by people who lived the journey themselves.
            </motion.h2>

            <motion.div
              variants={fadeUp}
              custom={2}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="mt-6 space-y-4 text-base leading-relaxed text-neutral-600"
            >
              <p>
                Mentorex started in 2010 when our founders — themselves
                first-generation international students — saw how confusing
                and opaque the study-abroad process could be. Good advice was
                either too expensive or too generic.
              </p>
              <p>
                Today, we've grown into a team of 40+ counsellors and
                admissions specialists, working with students across 25+
                countries. But our approach hasn't changed: honest guidance,
                real data, and a mentor who actually knows your name.
              </p>
              <p>
                We measure our success not in applications submitted, but in
                students who tell us, years later, that we helped them make
                the right decision.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}