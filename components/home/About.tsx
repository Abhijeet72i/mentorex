"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  GraduationCap,
  Video,
  Award,
  Users,
} from "lucide-react";

const features = [
  {
    icon: GraduationCap,
    title: "Expert Career Guidance",
    description:
      "Personalized counselling to help students choose the right academic and career path.",
  },
  {
  icon: Video,
  title: "One-to-One Doubt Clearing",
  description:
    "Live, one-on-one online classes built around your questions — so no doubt goes unanswered and no concept gets left behind.",
},
  {
    icon: Award,
    title: "Trusted Mentorship",
    description:
      "Experienced mentors dedicated to helping students achieve global success.",
  },
  {
    icon: Users,
    title: "Student-First Approach",
    description:
      "Every recommendation is tailored to the student's goals and aspirations.",
  },
];

export default function About() {
  return (
    <section className="bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-600">
              About Mentorex
            </span>

            <h2 className="mt-6 text-4xl font-bold text-slate-900 md:text-5xl">
              Empowering Students to Build Successful Global Careers
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              At Mentorex, we help students achieve their academic and
              professional dreams through expert counselling, study abroad
              guidance, admissions support, and career mentorship.
            </p>

            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              {features.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="rounded-3xl bg-white p-6 shadow-lg transition hover:-translate-y-2"
                  >
                    <Icon className="mb-4 text-blue-600" size={32} />

                    <h3 className="font-semibold text-slate-900">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-sm text-slate-600">
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* Right */}
<motion.div
  initial={{ opacity: 0, x: 40 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: true }}
  className="flex items-center justify-center"
>
  <div className="relative h-[400px] w-full min-w-md overflow-hidden rounded-[40px] shadow-2xl">
    <Image
      src="/images/about-photo.jpg"
      alt="Student learning with Mentorex"
      fill
      className="object-cover"
    />
  </div>
</motion.div>
        </div>
      </div>
    </section>
  );
}