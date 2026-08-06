// app/programs/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/home/Footer";
import { subjects } from "@/data/subjects";
import { ArrowUpRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Programs | Mentorex - Subjects We Teach",
  description: "Explore all Mentorex tutoring programs, from Kindergarten through university level, in Australia and the UK.",
};

export default function ProgramsPage() {
  return (
    <main>
      <Navbar />

      <section className="relative w-full overflow-hidden bg-neutral-50 pb-16 pt-40 sm:pb-20 sm:pt-48">
        <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
          <span className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-4 py-1.5 text-sm font-medium text-neutral-600">
            <span className="h-1.5 w-1.5 rounded-full bg-indigo-500" />
            Our Programs
          </span>
          <h1 className="mt-6 text-4xl font-semibold tracking-tight text-neutral-900 sm:text-6xl">
            Every subject, every
            <span className="bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent"> level.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-neutral-600">
            Select a subject to see the full curriculum breakdown, choose your grade level, and check pricing for your country.
          </p>
        </div>
      </section>

      <section className="w-full bg-white pb-24 sm:pb-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {subjects.map((subject) => {
              const Icon = subject.icon;
              return (
                <Link
                  key={subject.slug}
                  href={`/programs/${subject.slug}`}
                  className="group block rounded-2xl border border-neutral-200 bg-white p-7 shadow-sm transition-shadow duration-300 hover:shadow-xl hover:shadow-neutral-200/60"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-neutral-900 text-white transition-colors duration-300 group-hover:bg-indigo-600">
                    <Icon className="h-5 w-5" strokeWidth={1.75} />
                  </div>
                  <h3 className="mt-5 text-lg font-semibold text-neutral-900">{subject.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-neutral-600">{subject.tagline}</p>
                  <div className="mt-5 flex items-center gap-1.5 text-sm font-medium text-neutral-900 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    View program
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}