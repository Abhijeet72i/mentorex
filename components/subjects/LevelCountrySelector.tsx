// components/subjects/LevelCountrySelector.tsx
"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { gradeOptions, getSubjectBySlug } from "@/data/subjects";
import { countries } from "@/data/countries";
import { getPrice, getCurrencySymbol } from "@/data/pricing";

export default function LevelCountrySelector({ subjectSlug }: { subjectSlug: string }) {
  const [grade, setGrade] = useState(6);
  const [countrySlug, setCountrySlug] = useState("australia");

  const subject = getSubjectBySlug(subjectSlug)!;

  const matchedLevel = useMemo(() => {
    return (
      subject.levels.find((l) => grade >= l.minGrade && grade <= l.maxGrade) ||
      subject.levels[0]
    );
  }, [grade, subject]);

  const isBelowRange = grade < subject.levels[0].minGrade;
  const selectedCountry = countries.find((c) => c.slug === countrySlug)!;

  const price = getPrice(subject.slug, grade, selectedCountry.currencyKey);
  const symbol = getCurrencySymbol(selectedCountry.currencyKey);

  return (
    <div className="rounded-3xl border border-neutral-200 bg-neutral-50 p-8 sm:p-10">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label className="text-sm font-medium text-neutral-900">Select Grade / Level</label>
          <select
            value={grade}
            onChange={(e) => setGrade(Number(e.target.value))}
            className="mt-2 w-full rounded-xl border border-neutral-200 bg-white px-4 py-3 text-sm text-neutral-900 outline-none transition-colors duration-300 focus:border-neutral-900"
          >
            {gradeOptions.map((g) => (
              <option key={g.value} value={g.value}>{g.label}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="text-sm font-medium text-neutral-900">Select Country</label>
          <select
            value={countrySlug}
            onChange={(e) => setCountrySlug(e.target.value)}
            className="mt-2 w-full rounded-xl border border-neutral-200 bg-white px-4 py-3 text-sm text-neutral-900 outline-none transition-colors duration-300 focus:border-neutral-900"
          >
            {countries.map((c) => (
              <option key={c.slug} value={c.slug}>{c.flag} {c.name}</option>
            ))}
          </select>
        </div>
      </div>

      <motion.div
        key={`${grade}-${countrySlug}`}
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="mt-7 rounded-2xl border border-indigo-100 bg-white p-6"
      >
        {isBelowRange && (
          <p className="mb-4 rounded-lg bg-amber-50 px-4 py-2.5 text-xs text-amber-800">
            {subject.title} is typically recommended from {subject.levels[0].stage} onwards, but foundational sessions can be arranged on request.
          </p>
        )}

        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="text-xs font-medium uppercase tracking-wide text-neutral-500">{matchedLevel.stage} · {matchedLevel.ageRange}</p>
            <p className="mt-1.5 text-sm leading-relaxed text-neutral-700">{matchedLevel.focus}</p>
          </div>
          <div className="text-right">
            <p className="text-3xl font-semibold text-neutral-900">{symbol}{price}</p>
            <p className="text-xs text-neutral-500">per session · {selectedCountry.currency}</p>
          </div>
        </div>

        <Link
          href="/contact"
          className="mt-6 inline-flex items-center gap-2 rounded-full bg-neutral-900 px-6 py-3 text-sm font-semibold text-white transition-colors duration-300 hover:bg-neutral-800"
        >
          Book Free Demo for {subject.title}
          <ArrowRight className="h-4 w-4" />
        </Link>
      </motion.div>
    </div>
  );
}