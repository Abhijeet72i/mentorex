// components/countries/CountryCards.tsx
"use client";

import { motion,Variants } from "framer-motion";
import Link from "next/link";
import { Clock, BookOpen, GraduationCap, Check } from "lucide-react";
import { countries } from "@/data/countries";

const images: Record<string, string> = {
  australia: "https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?q=80&w=1200&auto=format&fit=crop",
  "united-kingdom": "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=1200&auto=format&fit=crop",
  "united-states": "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?q=80&w=1200&auto=format&fit=crop",
  canada: "https://images.unsplash.com/photo-1517935706615-2717063c2225?q=80&w=1200&auto=format&fit=crop",
};

const fadeUp:Variants= {
  hidden: { opacity: 0, y: 28 },
  show: (i: number = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1]as const } }),
};

export default function CountryCards() {
  return (
    <section className="w-full bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {countries.map((country, i) => (
            <motion.div key={country.slug} variants={fadeUp} custom={i} initial="hidden" whileInView="show" viewport={{ once: true }} className="overflow-hidden rounded-3xl border border-neutral-200 bg-neutral-50">
              {/* Photo banner */}
              <div className="relative h-48 w-full overflow-hidden">
                <img src={images[country.slug]} alt={country.name} className="absolute inset-0 h-full w-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 flex items-center justify-between p-6">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl leading-none">{country.flag}</span>
                    <div>
                      <h3 className="text-xl font-semibold text-white">{country.name}</h3>
                      <p className="text-sm text-white/80">{country.timezone}</p>
                    </div>
                  </div>
                  <div className="rounded-xl bg-white/90 px-4 py-2 text-right backdrop-blur-sm">
                    <p className="text-lg font-semibold text-neutral-900">{country.pricePerSession}</p>
                    <p className="text-xs text-neutral-500">/ session · {country.currency}</p>
                  </div>
                </div>
              </div>

              {/* Details */}
              <div className="p-8 sm:p-10">
                <div className="flex items-start gap-3 rounded-xl bg-white p-4">
                  <BookOpen className="mt-0.5 h-4 w-4 shrink-0 text-indigo-600" />
                  <div>
                    <p className="text-sm font-medium text-neutral-900">Curriculum</p>
                    <p className="mt-0.5 text-sm text-neutral-600">{country.curriculum}</p>
                  </div>
                </div>

                <div className="mt-3 flex items-start gap-3 rounded-xl bg-white p-4">
                  <GraduationCap className="mt-0.5 h-4 w-4 shrink-0 text-indigo-600" />
                  <div>
                    <p className="text-sm font-medium text-neutral-900">Exam Boards Covered</p>
                    <p className="mt-0.5 text-sm text-neutral-600">{country.examBoards.join(" · ")}</p>
                  </div>
                </div>

                <div className="mt-3 flex items-start gap-3 rounded-xl bg-white p-4">
                  <Clock className="mt-0.5 h-4 w-4 shrink-0 text-indigo-600" />
                  <div>
                    <p className="text-sm font-medium text-neutral-900">Popular Subjects</p>
                    <p className="mt-0.5 text-sm text-neutral-600">{country.popularSubjects.join(" · ")}</p>
                  </div>
                </div>

                <ul className="mt-6 space-y-2.5">
                  {country.highlights.map((h) => (
                    <li key={h} className="flex items-start gap-2.5 text-sm text-neutral-700">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-indigo-600" />
                      {h}
                    </li>
                  ))}
                </ul>

                <Link href="/contact" className="mt-8 inline-flex w-full items-center justify-center rounded-full bg-neutral-900 px-6 py-3 text-sm font-semibold text-white transition-colors duration-300 hover:bg-neutral-800">
                  Book a Free Demo in {country.name}
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}