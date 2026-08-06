// components/about/CEOCard.tsx
"use client";

import { motion,Variants} from "framer-motion";
import { Quote } from "lucide-react";

const fadeUp:Variants = {
  hidden: { opacity: 0, y: 28 },
  show: (i: number = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] as const} }),
};

export default function CEOCard() {
  return (
    <section className="w-full bg-neutral-50 py-24 sm:py-32">
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <motion.span variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-4 py-1.5 text-sm font-medium text-neutral-600">
            <span className="h-1.5 w-1.5 rounded-full bg-indigo-500" />
            Leadership
          </motion.span>

          <motion.h2 variants={fadeUp} custom={1} initial="hidden" whileInView="show" viewport={{ once: true }} className="mt-6 text-4xl font-semibold tracking-tight text-neutral-900 sm:text-5xl">
            A message from
            <span className="bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent"> our CEO.</span>
          </motion.h2>
        </div>

        <motion.div variants={fadeUp} custom={2} initial="hidden" whileInView="show" viewport={{ once: true }} className="mt-14 grid grid-cols-1 gap-10 rounded-3xl border border-neutral-200 bg-white p-8 sm:p-12 lg:grid-cols-[360px_1fr]">
          <div className="mx-auto w-full max-w-[340px] lg:mx-0">
            <div className="relative aspect-[3/4] overflow-hidden rounded-2xl bg-neutral-100">
              <img src="/images/team/kailashnegi.png" alt="Kailash Negi" className="h-full w-full object-cover object-top" />
            </div>
            <div className="mt-4 text-center lg:text-left">
              <p className="text-lg font-semibold text-neutral-900">Kailash Negi</p>
              <p className="text-sm text-neutral-500">Chief Executive Officer</p>
              <a href="#" aria-label="Kailash Negi on LinkedIn" className="mt-2 inline-flex h-8 w-8 items-center justify-center rounded-full bg-neutral-100 text-neutral-600 transition-colors duration-300 hover:bg-neutral-900 hover:text-white">
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                  <path d="M4.98 3.5C4.98 4.88 3.86 6 2.48 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8.5h4V23h-4V8.5zM8.5 8.5h3.8v2h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.65 4.78 6.1V23h-4v-6.7c0-1.6-.03-3.65-2.22-3.65-2.23 0-2.57 1.74-2.57 3.53V23h-4V8.5z" />
                </svg>
              </a>
            </div>
          </div>

          <div>
            <Quote className="h-8 w-8 text-indigo-200" strokeWidth={1.5} />
            <p className="mt-4 text-lg leading-relaxed text-neutral-700">
Welcome to MentorEx.

When I founded MentorEx, I had one clear vision: to make high-quality, personalized education accessible to every learner, regardless of their location or background. I believe that every student learns differently, and true education begins when teaching is tailored to an individual's strengths, goals, and pace.

At MentorEx, we are committed to delivering exceptional one-to-one tutoring that empowers students from elementary school to university. Whether it's building strong academic foundations, preparing for competitive examinations such as SAT, PSAT, ACT, AP, GCSE, A Levels, or NAPLAN, or developing future-ready skills through coding and technology, our mission is to help every learner unlock their full potential.

Our goal extends beyond improving grades. We strive to inspire confidence, curiosity, critical thinking, and a lifelong love for learning. By combining experienced educators, innovative teaching methods, and personalized learning plans, we ensure that every student receives the attention and guidance they deserve.

As we continue to grow globally, our promise remains the same—to provide world-class educational support with integrity, excellence, and a genuine commitment to student success.

Thank you for placing your trust in MentorEx. We look forward to being a part of your learning journey and helping you achieve your dreams.            </p>
            <p className="mt-6 text-sm leading-relaxed text-neutral-600">
              Kailash leads Mentorex's overall strategy and operations, working closely with our tutors and business services team to make sure every student and client gets the same standard of care, honest guidance, real accountability, and a team that's genuinely invested in outcomes.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}