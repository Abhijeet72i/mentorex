// components/quote/QuoteForm.tsx
"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle2, AlertCircle } from "lucide-react";
import { businessServices } from "@/data/businessServices";

const budgetRanges = ["Under $500", "$500 - $1,500", "$1,500 - $5,000", "$5,000+", "Not sure yet"];

export default function QuoteForm({ defaultSlug }: { defaultSlug: string }) {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [service, setService] = useState(defaultSlug);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError(false);

    const formData = new FormData(e.currentTarget);
    const selectedService = businessServices.find((s) => s.slug === formData.get("service"));

    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      company: formData.get("company"),
      phone: formData.get("phone"),
      service: selectedService?.title || formData.get("service"),
      budget: formData.get("budget"),
      message: formData.get("message"),
    };

    try {
      const res = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Failed to send");
      setSubmitted(true);
    } catch (err) {
      setError(true);
    } finally {
      setLoading(false);
    }
  }

  if (submitted) {
    return (
      <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="flex flex-col items-center justify-center rounded-3xl border border-neutral-200 bg-neutral-50 px-8 py-16 text-center">
        <CheckCircle2 className="h-12 w-12 text-indigo-600" strokeWidth={1.5} />
        <h3 className="mt-5 text-xl font-semibold text-neutral-900">Request received!</h3>
        <p className="mt-2 max-w-sm text-sm text-neutral-600">We'll review your project and get back to you within 24 hours with next steps.</p>
      </motion.div>
    );
  }

  return (
    <motion.form onSubmit={handleSubmit} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="rounded-3xl border border-neutral-200 bg-white p-8 sm:p-10">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label className="text-sm font-medium text-neutral-900">Full Name</label>
          <input name="name" required type="text" placeholder="Your name" className="mt-2 w-full rounded-xl border border-neutral-200 px-4 py-3 text-sm text-neutral-900 outline-none transition-colors duration-300 focus:border-neutral-900" />
        </div>
        <div>
          <label className="text-sm font-medium text-neutral-900">Email</label>
          <input name="email" required type="email" placeholder="you@example.com" className="mt-2 w-full rounded-xl border border-neutral-200 px-4 py-3 text-sm text-neutral-900 outline-none transition-colors duration-300 focus:border-neutral-900" />
        </div>
        <div>
          <label className="text-sm font-medium text-neutral-900">Company / Organisation</label>
          <input name="company" type="text" placeholder="Your company name" className="mt-2 w-full rounded-xl border border-neutral-200 px-4 py-3 text-sm text-neutral-900 outline-none transition-colors duration-300 focus:border-neutral-900" />
        </div>
        <div>
          <label className="text-sm font-medium text-neutral-900">Phone (optional)</label>
          <input name="phone" type="tel" placeholder="Your phone number" className="mt-2 w-full rounded-xl border border-neutral-200 px-4 py-3 text-sm text-neutral-900 outline-none transition-colors duration-300 focus:border-neutral-900" />
        </div>
        <div>
          <label className="text-sm font-medium text-neutral-900">Service Needed</label>
          <select name="service" value={service} onChange={(e) => setService(e.target.value)} className="mt-2 w-full rounded-xl border border-neutral-200 px-4 py-3 text-sm text-neutral-900 outline-none transition-colors duration-300 focus:border-neutral-900">
            {businessServices.map((s) => (
              <option key={s.slug} value={s.slug}>{s.title}</option>
            ))}
          </select>
        </div>
        <div>
          <label className="text-sm font-medium text-neutral-900">Estimated Budget</label>
          <select name="budget" defaultValue="" required className="mt-2 w-full rounded-xl border border-neutral-200 px-4 py-3 text-sm text-neutral-900 outline-none transition-colors duration-300 focus:border-neutral-900">
            <option value="" disabled>Select a range</option>
            {budgetRanges.map((b) => <option key={b} value={b}>{b}</option>)}
          </select>
        </div>
      </div>

      <div className="mt-5">
        <label className="text-sm font-medium text-neutral-900">Tell us about your project</label>
        <textarea name="message" rows={4} placeholder="What are you looking to achieve?" className="mt-2 w-full resize-none rounded-xl border border-neutral-200 px-4 py-3 text-sm text-neutral-900 outline-none transition-colors duration-300 focus:border-neutral-900" />
      </div>

      {error && (
        <div className="mt-4 flex items-center gap-2 rounded-lg bg-red-50 px-4 py-2.5 text-sm text-red-700">
          <AlertCircle className="h-4 w-4 shrink-0" />
          Something went wrong. Please try again or email us directly.
        </div>
      )}

      <button type="submit" disabled={loading} className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full bg-neutral-900 px-6 py-3.5 text-sm font-semibold text-white transition-colors duration-300 hover:bg-neutral-800 disabled:opacity-60 sm:w-auto">
        {loading ? "Sending..." : "Request a Quote"}
        <Send className="h-4 w-4" />
      </button>
    </motion.form>
  );
}