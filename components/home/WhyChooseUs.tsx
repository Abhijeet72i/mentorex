// components/home/WhyChooseUs.tsx
"use client";

import { motion, Variants } from "framer-motion";
import { Target, Clock, TrendingUp, Earth } from "lucide-react";

const reasons = [
  {
    icon: Target,
    title: "Personalized 1-to-1 Learning",
    desc: "Every lesson is tailored to your child's learning style, pace, and academic goals for maximum progress.",
  },
  {
    icon: Clock,
    title: "7+ Years of Experience",
    desc: "Learn from experienced tutors in Mathematics, Science, English, Coding, and more with dedicated one-to-one support.",
  },
  {
    icon: TrendingUp,
    title: "Regular Progress Tracking",
    desc: "Receive detailed performance reports, homework feedback, and continuous assessments to ensure steady improvement.",
  },
  {
    icon: Earth,
    title: "Flexible Online Classes",
    desc: "Attend live interactive sessions from anywhere with flexible scheduling that fits your family's routine.",
  },
];

const fadeUp: Variants = {
  hidden: {
    opacity: 0,
    y: 32,
  },
  show: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: i * 0.1,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

export default function WhyChooseUs() {
  return (
    <section className="relative overflow-hidden bg-neutral-950 py-24 sm:py-32">
      {/* Background accents */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12 lg:items-start">
          {/* Left */}
          <div className="lg:col-span-5">
            <motion.span
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm font-medium text-neutral-300"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-indigo-400" />
              Why Choose Us
            </motion.span>

            <motion.h2
              variants={fadeUp}
              custom={1}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="mt-6 text-4xl font-semibold tracking-tight text-white sm:text-5xl"
            >
              The difference is in
              <span className="bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">
                {" "}
                how we guide.
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
              We created MentorEx to make quality education personal. Our
              experienced tutors deliver one-to-one online classes that focus on
              each student's unique learning needs and academic goals.
            </motion.p>
          </div>

          {/* Right */}
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:col-span-7">
            {reasons.map((reason, i) => {
              const Icon = reason.icon;

              return (
                <motion.div
                  key={reason.title}
                  variants={fadeUp}
                  custom={i}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  whileHover={{ y: -6 }}
                  className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm transition-colors duration-300 hover:border-white/20 hover:bg-white/[0.06]"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 text-white transition-colors duration-300 group-hover:bg-gradient-to-br group-hover:from-indigo-500 group-hover:to-violet-500">
                    <Icon className="h-5 w-5" strokeWidth={1.75} />
                  </div>

                  <h3 className="mt-5 text-base font-semibold text-white">
                    {reason.title}
                  </h3>

                  <p className="mt-2 text-sm leading-relaxed text-neutral-400">
                    {reason.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}