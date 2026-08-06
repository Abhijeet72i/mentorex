// components/home/FAQ.tsx
"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Plus } from "lucide-react";

const faqs = [
  {
    question: "How does Mentorex help with university selection?",
    answer:
      "We analyse your academic profile, budget, and career goals to shortlist universities that genuinely fit you — not just the popular names. Every recommendation is backed by admissions data.",
  },
  {
    question: "Is there a fee for the initial consultation?",
    answer:
      "No, your first consultation with a Mentorex counsellor is completely free. We only discuss paid services once you're clear on how we can help.",
  },
  {
    question: "Do you help with scholarships and financial aid?",
    answer:
      "Yes. Our team actively researches and applies you to scholarships you qualify for, and guides you through financial aid documentation for your target universities.",
  },
  {
    question: "What countries do you provide guidance for?",
    answer:
      "We cover 25+ countries including the US, UK, Canada, Australia, Germany, and Ireland, with dedicated counsellors experienced in each region's admissions process.",
  },
  {
    question: "How long does the entire process usually take?",
    answer:
      "Timelines vary by country and intake, but most students begin working with us 8–12 months before their intended start date to allow time for applications, tests, and visas.",
  },
  {
    question: "Do you assist with visa applications?",
    answer:
      "Absolutely. We handle documentation review, mock visa interviews, and compliance checks to make sure your application is complete and accurate.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section className="relative w-full overflow-hidden bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <div className="text-center">
          <motion.span
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-neutral-50 px-4 py-1.5 text-sm font-medium text-neutral-600"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-indigo-500" />
            FAQ
          </motion.span>

          <motion.h2
            variants={fadeUp}
            custom={1}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="mt-6 text-4xl font-semibold tracking-tight text-neutral-900 sm:text-5xl"
          >
            Questions? We've got
            <span className="bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">
              {" "}answers.
            </span>
          </motion.h2>
        </div>

        <div className="mt-14 space-y-3">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <motion.div
                key={faq.question}
                variants={fadeUp}
                custom={i}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="overflow-hidden rounded-2xl border border-neutral-200 bg-white"
              >
                <button
                  onClick={() => toggle(i)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <span className="text-base font-medium text-neutral-900 sm:text-lg">
                    {faq.question}
                  </span>
                  <motion.span
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-neutral-100"
                  >
                    <Plus className="h-4 w-4 text-neutral-700" />
                  </motion.span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="px-6 pb-5 text-sm leading-relaxed text-neutral-600 sm:text-base">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}