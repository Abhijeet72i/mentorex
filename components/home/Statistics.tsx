// components/home/Statistics.tsx
"use client";

import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef } from "react";
import { Users, Globe2, TrendingUp, GraduationCap, Book } from "lucide-react";

const stats = [
  { icon: Users, value: 5000, suffix: "+", label: "Students Guided" },
  { icon: TrendingUp, value: 95, suffix: "%", label: "Success Rate" },
  { icon: Globe2, value: 4, suffix: "+", label: "Countries" },
  { icon: Book, value: 20, suffix: "+", label: "Courses" },
];

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const motionValue = useMotionValue(0);
  const rounded = useTransform(motionValue, (latest) => Math.round(latest));

  useEffect(() => {
    if (isInView) {
      const controls = animate(motionValue, value, {
        duration: 1.8,
        ease: [0.22, 1, 0.36, 1],
      });
      return controls.stop;
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    return rounded.on("change", (latest) => {
      if (ref.current) ref.current.textContent = `${latest}${suffix}`;
    });
  }, [rounded, suffix]);

  return <span ref={ref}>0{suffix}</span>;
}

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function Statistics() {
  return (
    <section className="relative w-full overflow-hidden bg-white py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-50 blur-3xl" />
      </div>

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
            Our Impact
          </motion.span>

          <motion.h2
            variants={fadeUp}
            custom={1}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="mt-6 text-4xl font-semibold tracking-tight text-neutral-900 sm:text-5xl"
          >
            Numbers that speak
            <span className="bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">
              {" "}for themselves.
            </span>
          </motion.h2>
        </div>

        <div className="mt-16 grid grid-cols-2 gap-6 lg:grid-cols-4">
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                variants={fadeUp}
                custom={i}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                whileHover={{ y: -6 }}
                className="group relative overflow-hidden rounded-2xl border border-neutral-200 bg-white p-6 text-center shadow-sm transition-shadow duration-300 hover:shadow-xl hover:shadow-neutral-200/60 sm:p-8"
              >
                <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-xl bg-neutral-900 text-white transition-colors duration-300 group-hover:bg-indigo-600">
                  <Icon className="h-5 w-5" strokeWidth={1.75} />
                </div>

                <p className="mt-5 text-3xl font-semibold tracking-tight text-neutral-900 sm:text-4xl">
                  <Counter value={stat.value} suffix={stat.suffix} />
                </p>
                <p className="mt-2 text-sm text-neutral-500">{stat.label}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}