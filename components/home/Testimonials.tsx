// components/home/Testimonials.tsx
"use client";

import { motion,Variants} from "framer-motion";
import { useState } from "react";
import { Quote, ChevronLeft, ChevronRight, Star } from "lucide-react";

const testimonials = [
  {
    name: "Ananya Sharma",
    role: "",
    quote:
      "Mentorex made the entire process feel effortless. My counsellor understood exactly what I wanted and guided me every step of the way.",
    avatar: "https://i.pravatar.cc/150?img=47",
  },
  {
    name: "Rohan Verma",
    role: "Grade 9",
    quote:
      "I got in-depth knowledge about python",
    avatar: "https://i.pravatar.cc/150?img=12",
  },
  {
    name: "Priya Nair",
    role: "Admitted to University of Melbourne",
    quote:
      "I am extremely happy with the math classes at MentorEx. My tutor is knowledgeable, friendly, and always makes sure I understand each topic before moving ahead. The teaching style is engaging, and every doubt is answered clearly. I actually enjoy learning mathematics now.",
    avatar: "https://i.pravatar.cc/150?img=32",
  },
  {
    name: "Karan Mehta",
    role: "Admitted to Technical University of Munich",
    quote:
      "Professional, supportive, and always available when I needed help. Highly recommend MentorEx to any student looking to improve their skills and achieve better results.",
    avatar: "https://i.pravatar.cc/150?img=68",
  },
];

const fadeUp:Variants= {
  hidden: { opacity: 0, y: 32 },
  show: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () =>
    setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  const active = testimonials[index];

  return (
    <section className="relative w-full overflow-hidden bg-neutral-900 py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-indigo-500/10 blur-3xl" />
      </div>

      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <div className="text-center">
          <motion.span
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm font-medium text-neutral-300"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-indigo-400" />
            Testimonials
          </motion.span>

          <motion.h2
            variants={fadeUp}
            custom={1}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="mt-6 text-4xl font-semibold tracking-tight text-white sm:text-5xl"
          >
            Loved by students
            <span className="bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">
              {" "}worldwide.
            </span>
          </motion.h2>
        </div>

        {/* Testimonial Card */}
        <div className="relative mt-16">
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1]as const }}
            className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-sm sm:p-12"
          >
            <Quote className="h-9 w-9 text-indigo-400" strokeWidth={1.5} />

            <p className="mt-6 text-xl leading-relaxed text-neutral-200 sm:text-2xl">
              "{active.quote}"
            </p>

            <div className="mt-8 flex items-center gap-4">
              <img
                src={active.avatar}
                alt={active.name}
                className="h-12 w-12 rounded-full object-cover"
              />
              <div>
                <p className="font-semibold text-white">{active.name}</p>
                <p className="text-sm text-neutral-400">{active.role}</p>
              </div>
              <div className="ml-auto flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-amber-400 text-amber-400"
                  />
                ))}
              </div>
            </div>
          </motion.div>

          {/* Navigation */}
          <div className="mt-8 flex items-center justify-center gap-4">
            <button
              onClick={prev}
              aria-label="Previous testimonial"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-white transition-colors duration-300 hover:bg-white/10"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            <div className="flex items-center gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIndex(i)}
                  aria-label={`Go to testimonial ${i + 1}`}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    i === index ? "w-6 bg-indigo-400" : "w-1.5 bg-white/20"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={next}
              aria-label="Next testimonial"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-white transition-colors duration-300 hover:bg-white/10"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}