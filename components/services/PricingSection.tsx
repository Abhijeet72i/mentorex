// components/services/PricingSection.tsx
"use client";

import { motion } from "framer-motion";
import { Gift } from "lucide-react";
import { gradePricing, flatRatePricing } from "@/data/pricing";

const columns = [
  { key: "usd" as const, label: "🇺🇸 US", currency: "USD" },
  { key: "aud" as const, label: "🇦🇺 AU", currency: "AUD" },
  { key: "cad" as const, label: "🇨🇦 CA", currency: "CAD" },
  { key: "gbp" as const, label: "🇬🇧 UK", currency: "GBP" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: (i: number = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] } }),
};

export default function PricingSection() {
  return (
    <section className="w-full bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <motion.span variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-neutral-50 px-4 py-1.5 text-sm font-medium text-neutral-600">
            <span className="h-1.5 w-1.5 rounded-full bg-indigo-500" />
            Pricing
          </motion.span>

          <motion.h2 variants={fadeUp} custom={1} initial="hidden" whileInView="show" viewport={{ once: true }} className="mt-6 text-4xl font-semibold tracking-tight text-neutral-900 sm:text-5xl">
            Transparent, grade-based
            <span className="bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent"> pricing.</span>
          </motion.h2>

          <motion.p variants={fadeUp} custom={2} initial="hidden" whileInView="show" viewport={{ once: true }} className="mt-4 text-base text-neutral-600">
            Per-session pricing for Maths, Science, and English. Available in the US, Australia, Canada, and the UK.
          </motion.p>
        </div>

        <motion.div variants={fadeUp} custom={3} initial="hidden" whileInView="show" viewport={{ once: true }} className="mt-10 flex items-center justify-center gap-3 rounded-2xl border border-indigo-100 bg-indigo-50 px-6 py-4 text-center">
          <Gift className="h-5 w-5 shrink-0 text-indigo-600" />
          <p className="text-sm font-medium text-indigo-900">Every student gets a free 30-minute demo session before their first booking.</p>
        </motion.div>

        <motion.div variants={fadeUp} custom={4} initial="hidden" whileInView="show" viewport={{ once: true }} className="mt-10 overflow-hidden rounded-2xl border border-neutral-200">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-neutral-200 bg-neutral-50">
                  <th className="px-5 py-4 text-left font-semibold text-neutral-900">Level</th>
                  {columns.map((c) => (
                    <th key={c.key} className="px-5 py-4 text-right font-semibold text-neutral-900">{c.label}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {gradePricing.map((tier, i) => (
                  <tr key={tier.label} className={i % 2 === 0 ? "bg-white" : "bg-neutral-50/50"}>
                    <td className="px-5 py-4 font-medium text-neutral-900">{tier.label}</td>
                    {columns.map((c) => (
                      <td key={c.key} className="px-5 py-4 text-right text-neutral-700">
                        {c.key === "gbp" ? "£" : "$"}{tier[c.key]}
                      </td>
                    ))}
                  </tr>
                ))}
                <tr className="border-t border-neutral-200 bg-white">
                  <td className="px-5 py-4 font-medium text-neutral-900">Languages & Coding <span className="text-xs font-normal text-neutral-500">(any level)</span></td>
                  {columns.map((c) => (
                    <td key={c.key} className="px-5 py-4 text-right text-neutral-700">
                      {c.key === "gbp" ? "£" : "$"}{flatRatePricing[c.key]}
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        </motion.div>

        <motion.p variants={fadeUp} custom={5} initial="hidden" whileInView="show" viewport={{ once: true }} className="mt-4 text-center text-xs text-neutral-500">
          All prices per 1-hour session. Competitive exam preparation is priced at the Grade 11-12 rate.
        </motion.p>
      </div>
    </section>
  );
}