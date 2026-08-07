// components/home/Hero/HeroContent.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Play, Sparkles } from "lucide-react";
import VideoModal from "@/components/common/VideoModal";

export default function HeroContent() {
  const [videoOpen, setVideoOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, x: -60 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      className="max-w-2xl"
    >
      {/* Badge */}
      <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700 shadow-sm">
        <Sparkles size={16} />
        India's Trusted Career Mentorship Platform
      </div>

      {/* Heading */}
      <h1 className="mt-8 text-5xl font-extrabold leading-tight tracking-tight text-slate-900 md:text-7xl">
        Helping Students
        <br />
        Achieve Their
        <span className="block bg-gradient-to-r from-blue-600 via-cyan-500 to-indigo-600 bg-clip-text text-transparent">
        Academic goal.
        </span>
      </h1>

      {/* Description */}
      <p className="mt-8 max-w-xl text-lg leading-8 text-slate-600">
        Empowering students with customized learning plans, expert tutors, and individual attention to achieve outstanding results.
      </p>

      {/* Buttons */}
      <div className="mt-10 flex flex-wrap gap-4">
        <Link href="/contact" className="group rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 px-8 py-4 font-semibold text-white shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
          <span className="flex items-center gap-2">
            Book Free Demo Session
            <ArrowRight size={18} className="transition group-hover:translate-x-1" />
          </span>
        </Link>

        <button
          onClick={() => setVideoOpen(true)}
          className="group rounded-full border border-slate-300 bg-white px-8 py-4 font-semibold text-slate-700 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-500 hover:text-blue-600"
        >
          <span className="flex items-center gap-2">
            <Play size={18} />
            Watch MentorEx Stories
          </span>
        </button>
      </div>

      {/* Stats */}
      <div className="mt-16 grid grid-cols-3 gap-8">
        <div>
          <h3 className="text-4xl font-extrabold text-blue-600">5000+</h3>
          <p className="mt-2 text-slate-500">Students Guided</p>
        </div>
        <div>
          <h3 className="text-4xl font-extrabold text-blue-600">95%</h3>
          <p className="mt-2 text-slate-500">Success Rate</p>
        </div>
        <div>
          <h3 className="text-4xl font-extrabold text-blue-600">4+</h3>
          <p className="mt-2 text-slate-500">Countries</p>
        </div>
      </div>

      <VideoModal open={videoOpen} onClose={() => setVideoOpen(false)} src="/videos/success-stories.mp4" />
    </motion.div>
  );
}