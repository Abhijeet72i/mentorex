// components/about/TeamSection.tsx
"use client";

import { useState } from "react";
import { motion, AnimatePresence,Variants } from "framer-motion";
import { X, Star, GraduationCap, Clock } from "lucide-react";

interface Review {
  student: string;
  rating: number;
  comment: string;
}

interface TeamMember {
  name: string;
  role: string;
  image: string;
  subjects: string[];
  experience: string;
  bio: string;
  reviews: Review[];
}

const team: TeamMember[] = [
  {
    name: "Sahil Bhardwaj",
    role: "Mathematics & Science Tutor",
    image: "images/team/sahil.jpg",
    subjects: ["Mathematics", "Science"],
    experience: "4 years teaching experience",
    bio: "Sahil is a passionate Mathematics tutor at MentorEx who simplifies complex concepts through interactive and personalized learning. He helps students build strong problem-solving skills, confidence, and academic excellence in mathematics.",
    reviews: [
      { student: "Riya S.", rating: 5, comment: "Sahil explains concepts so clearly. My daughter's grades improved within a month." },
      { student: "Marcus T.", rating: 5, comment: "Patient, structured, and genuinely invested in my progress." },
    ],
  },
  {
    name: "Abhijeet Pathak",
    role: "Programming & AI Tutor",
    image: "images/team/Abhijeet.jpeg",
    subjects: ["Programming", "AI & Machine Learning"],
    experience: "3 years teaching experience",
    bio: "Abhijeet has a background in software engineering and now focuses full-time on teaching Programming and AI & Machine Learning. He believes in project-based learning — every student walks away with something real they built.",
    reviews: [
      { student: "Aarav P.", rating: 5, comment: "Learned more building projects with Abhijeet than a full semester at school." },
      { student: "Sofia L.", rating: 4, comment: "Really good at breaking down complex ML topics into simple steps." },
    ],
  },
  {
    name: "Seema Rawol",
    role: "Mathematics || English || IELTS",
    image: "/images/team/Seemarawol.jpeg",
    subjects: ["English,Mathematics & IELTS"],
    experience: "3 years teaching experience",
    bio: "A dedicated MentorEx tutor specializing in Mathematics, Science, English, and IELTS preparation. Committed to delivering engaging, personalized lessons that build strong concepts, improve confidence, and help students achieve their academic and language goals.",
    reviews: [
      { student: "Ethan W.", rating: 5, comment:"An outstanding tutor who makes learning simple, engaging, and enjoyable while helping students achieve excellent academic results." },
      { student: "Zara K.", rating: 5, comment:"Her personalized teaching approach and patient guidance have greatly improved confidence, understanding, and overall performance." },
    ],
  },
  {
    name: "Arjun Malhotra",
    role: "Languages Tutor",
    image: "https://i.pravatar.cc/300?img=51",
    subjects: ["Languages (Hindi, English, French)"],
    experience: "5 years teaching experience",
    bio: "Arjun teaches Hindi, English, and French one-to-one, adapting his approach for students of any age — from foundational conversation skills to exam-focused fluency preparation.",
    reviews: [
      { student: "Chloe D.", rating: 5, comment: "My French went from beginner to conversational in a few months." },
      { student: "Ishaan R.", rating: 5, comment: "Great teacher, very patient with beginners." },
    ],
  },
];

const fadeUp:Variants= {
  hidden: { opacity: 0, y: 28 },
  show: (i: number = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] as const } }),
};

export default function TeamSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const active = activeIndex !== null ? team[activeIndex] : null;

  return (
    <section className="w-full bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <motion.span variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-neutral-50 px-4 py-1.5 text-sm font-medium text-neutral-600">
            <span className="h-1.5 w-1.5 rounded-full bg-indigo-500" />
            Meet the Team
          </motion.span>

          <motion.h2 variants={fadeUp} custom={1} initial="hidden" whileInView="show" viewport={{ once: true }} className="mt-6 text-4xl font-semibold tracking-tight text-neutral-900 sm:text-5xl">
            The people behind
            <span className="bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent"> your journey.</span>
          </motion.h2>
        </div>

        <div className="mt-16 grid grid-cols-2 gap-6 sm:grid-cols-4">
          {team.map((member, i) => (
            <motion.button
              key={member.name}
              variants={fadeUp}
              custom={i}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              onClick={() => setActiveIndex(i)}
              className="group text-center"
            >
              <div className="relative mx-auto aspect-square w-full max-w-[600px] overflow-hidden rounded-2xl">
                <img src={member.image} alt={member.name} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/10" />
              </div>
              <h3 className="mt-4 text-sm font-semibold text-neutral-900 sm:text-base">{member.name}</h3>
              <p className="mt-1 text-xs text-neutral-500 sm:text-sm">{member.role}</p>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm"
            onClick={() => setActiveIndex(null)}
          >
            <motion.div
              initial={{ opacity: 0, y: 24, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 24, scale: 0.96 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] as const }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-3xl bg-white shadow-2xl"
            >
              <button
                onClick={() => setActiveIndex(null)}
                aria-label="Close"
                className="absolute right-4 top-4 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-neutral-600 shadow-sm transition-colors duration-300 hover:bg-neutral-100"
              >
                <X className="h-4 w-4" />
              </button>

              <div className="flex items-center gap-4 border-b border-neutral-100 p-6">
                <img src={active.image} alt={active.name} className="h-16 w-16 rounded-2xl object-cover" />
                <div>
                  <h3 className="text-lg font-semibold text-neutral-900">{active.name}</h3>
                  <p className="text-sm text-neutral-500">{active.role}</p>
                </div>
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-3 text-xs text-neutral-600">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-neutral-100 px-3 py-1.5">
                    <GraduationCap className="h-3.5 w-3.5" />
                    {active.subjects.join(" · ")}
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-neutral-100 px-3 py-1.5">
                    <Clock className="h-3.5 w-3.5" />
                    {active.experience}
                  </span>
                </div>

                <p className="mt-5 text-sm leading-relaxed text-neutral-700">{active.bio}</p>

                <h4 className="mt-6 text-sm font-semibold text-neutral-900">Student Reviews</h4>
                <div className="mt-3 space-y-3">
                  {active.reviews.map((review, i) => (
                    <div key={i} className="rounded-xl bg-neutral-50 p-4">
                      <div className="flex items-center justify-between">
                        <p className="text-sm font-medium text-neutral-900">{review.student}</p>
                        <div className="flex gap-0.5">
                          {Array.from({ length: review.rating }).map((_, s) => (
                            <Star key={s} className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
                          ))}
                        </div>
                      </div>
                      <p className="mt-1.5 text-sm leading-relaxed text-neutral-600">"{review.comment}"</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}