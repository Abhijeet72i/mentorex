// components/home/Services.tsx
"use client";

import { motion, useInView,Variants } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Calculator, Atom, BookOpen, Code2, BrainCircuit, Languages, ArrowUpRight } from "lucide-react";
import BookReveal from "@/components/common/BookReveal";

const services = [
  { icon: BookOpen, title: "English", desc: "Reading, writing, grammar, and comprehension for every skill level." },
  { icon: Calculator, title: "Mathematics", desc: "From foundational arithmetic to advanced calculus, one-to-one." },
  { icon: Atom, title: "Science", desc: "Physics, Chemistry, and Biology explained clearly and simply." },
  { icon: Code2, title: "Programming", desc: "Learn to code from scratch or sharpen your skills, project by project." },
  { icon: BrainCircuit, title: "AI & Machine Learning", desc: "Practical, project-based sessions from fundamentals to applied AI." },
  { icon: Languages, title: "Languages", desc: "One-to-one lessons in Hindi, English, and French with expert tutors." },
];

const fadeUp:Variants= {
  hidden: { opacity: 0, y: 32 },
  show: (i: number = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1]as const } }),
};

export default function Services() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (isInView) setOpen(true);
  }, [isInView]);

  function handleReplay() {
    setOpen(false);
    setTimeout(() => setOpen(true), 300);
  }

  return (
    <section id="services" ref={sectionRef} className="relative w-full overflow-hidden bg-neutral-50 py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/3 top-0 h-[450px] w-[450px] -translate-x-1/2 rounded-full bg-indigo-100/50 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
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

          <motion.h2 variants={fadeUp} custom={1} initial="hidden" whileInView="show" viewport={{ once: true }} className="mt-6 text-4xl font-semibold tracking-tight text-neutral-900 sm:text-5xl">
            One-to-one online classes,
            <span className="bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent"> built around you.</span>
          </motion.h2>

          <motion.p variants={fadeUp} custom={2} initial="hidden" whileInView="show" viewport={{ once: true }} className="mt-5 text-lg leading-relaxed text-neutral-600">
            Personal tutors for the subjects that matter, taught at your pace, on your schedule.
          </motion.p>
        </div>

        <BookReveal open={open}>
          <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, i) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.title}
                  variants={fadeUp}
                  custom={i}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  whileHover={{ y: -8 }}
                  className="group relative overflow-hidden rounded-2xl border border-neutral-200 bg-white p-8 shadow-sm transition-shadow duration-300 hover:shadow-xl hover:shadow-neutral-200/60"
                >
                  <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-indigo-100/0 blur-2xl transition-colors duration-500 group-hover:bg-indigo-100/60" />
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-neutral-900 text-white transition-colors duration-300 group-hover:bg-indigo-600">
                    <Icon className="h-5 w-5" strokeWidth={1.75} />
                  </div>
                  <h3 className="mt-6 text-lg font-semibold text-neutral-900">{service.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-neutral-600">{service.desc}</p>
                  <div className="mt-5 flex items-center gap-1.5 text-sm font-medium text-neutral-900 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    Learn more
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </BookReveal>
      </div>
    </section>
  );
}