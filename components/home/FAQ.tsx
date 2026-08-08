// components/home/FAQ.tsx
"use client";

import { motion, AnimatePresence, Variants } from "framer-motion";
import { useState } from "react";
import { Plus } from "lucide-react";

const faqs = [
  {
    question: "What subjects and courses does MentorEx offer?",
    answer:
      "MentorEx offers personalised online tutoring across Mathematics, Science, English, Python, Coding, AI & Machine Learning, Hindi, Punjabi, French, GCSE subjects, and NAPLAN preparation. We match students with tutors based on their subject, grade level, learning goals, and preferred schedule.",
  },
  {
    question: "Do you provide GCSE tutoring?",
    answer:
      "Yes. MentorEx provides personalised GCSE tutoring across key subjects including Mathematics, Biology, Chemistry, Physics, English, Computer Science, and other subjects depending on student requirements. Our tutors help students understand concepts, practise exam-style questions, improve weak areas, and prepare confidently for their GCSE exams.",
  },
  {
    question: "Do you provide one-to-one online tutoring?",
    answer:
      "Yes. Our one-to-one online classes give students personalised attention from experienced tutors. Each session is tailored to the student's learning pace, strengths, weaknesses, and academic goals.",
  },
  {
    question: "Can I choose a tutor based on my subject and requirements?",
    answer:
      "Absolutely. You can choose a tutor based on the subject, grade level, experience, teaching approach, and learning requirements. Our team can also recommend a suitable tutor based on your goals.",
  },
  {
    question: "Do you teach Python, Coding, AI and Machine Learning?",
    answer:
      "Yes. We provide coding lessons for beginners and advanced learners, including Python, programming fundamentals, web development, AI, and Machine Learning. Lessons are designed to build practical skills through guided exercises and real-world projects.",
  },
  {
    question: "Do you offer Mathematics and Science tutoring?",
    answer:
      "Yes. Our Mathematics and Science tutors support students across different grade levels, including GCSE learners. Tutors help students understand difficult concepts, solve problems, complete coursework, practise exam questions, and prepare confidently for assessments.",
  },
  {
    question: "Which GCSE subjects can I study with MentorEx?",
    answer:
      "We offer tutoring for a wide range of GCSE subjects, including Mathematics, Biology, Chemistry, Physics, English Language, English Literature, and Computer Science. If you need support with another GCSE subject, you can contact our team and we will help you find a suitable tutor.",
  },
  {
    question: "Which languages can I learn with MentorEx?",
    answer:
      "We currently offer online language tutoring in English, Hindi, Punjabi, and French. Students can learn grammar, vocabulary, speaking, reading, writing, pronunciation, and conversational skills according to their individual goals.",
  },
  {
    question: "Do you provide NAPLAN preparation?",
    answer:
      "Yes. MentorEx provides focused NAPLAN preparation covering key areas such as numeracy, reading, language conventions, and writing. Tutors help students strengthen their fundamentals, practise questions, and build exam confidence.",
  },
  {
    question: "Are classes suitable for beginners?",
    answer:
      "Yes. Our classes are suitable for complete beginners as well as students who want to advance their existing skills. Tutors adjust the pace and teaching approach according to each student's current level.",
  },
  {
    question: "Can I book a trial or introductory session?",
    answer:
      "Yes. You can speak with our team to discuss your learning goals, subject requirements, and preferred schedule before starting regular classes. We'll help you find a tutoring option that fits your needs.",
  },
  {
    question: "Can tutoring sessions be scheduled around my availability?",
    answer:
      "Yes. MentorEx offers flexible online tutoring schedules. We work with students and parents to find suitable class timings based on availability, time zones, and learning requirements.",
  },
];

const fadeUp: Variants = {
  hidden: {
    opacity: 0,
    y: 24,
  },
  show: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: i * 0.06,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  }),
};

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (i: number) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <section className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        {/* Header */}
        <div className="text-center">
          <motion.span
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-neutral-50 px-4 py-1.5 text-sm font-medium text-neutral-600"
          >
            Learning FAQs
          </motion.span>

          <motion.h2
            variants={fadeUp}
            custom={1}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="mt-6 text-4xl font-semibold tracking-tight text-neutral-900 sm:text-5xl"
          >
            Everything you need to know
            <span className="bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">
              {" "}
              about learning.
            </span>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            custom={2}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-neutral-600 sm:text-lg"
          >
            Have questions about our tutors, subjects, GCSE preparation,
            languages, or online classes? Find answers to some of the most
            common questions below.
          </motion.p>
        </div>

        {/* FAQ List */}
        <div className="mt-14 space-y-3">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;

            return (
              <motion.div
                key={faq.question}
                variants={fadeUp}
                custom={i + 3}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="overflow-hidden rounded-2xl border border-neutral-200 bg-white transition-shadow duration-300 hover:shadow-sm"
              >
                {/* Question */}
                <button
                  type="button"
                  onClick={() => toggle(i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <span className="text-base font-medium text-neutral-900 sm:text-lg">
                    {faq.question}
                  </span>

                  <motion.span
                    animate={{
                      rotate: isOpen ? 45 : 0,
                    }}
                    transition={{
                      duration: 0.3,
                      ease: [0.22, 1, 0.36, 1] as const,
                    }}
                    className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-neutral-100"
                  >
                    <Plus className="h-4 w-4 text-neutral-700" />
                  </motion.span>
                </button>

                {/* Answer */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{
                        height: 0,
                        opacity: 0,
                      }}
                      animate={{
                        height: "auto",
                        opacity: 1,
                      }}
                      exit={{
                        height: 0,
                        opacity: 0,
                      }}
                      transition={{
                        duration: 0.35,
                        ease: [0.22, 1, 0.36, 1] as const,
                      }}
                      className="overflow-hidden"
                    >
                      <p className="px-6 pb-6 text-sm leading-relaxed text-neutral-600 sm:text-base">
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