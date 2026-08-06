// components/contact/ContactForm.tsx
"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Send, CheckCircle2, AlertCircle } from "lucide-react";

const subjects = ["Mathematics", "Science", "English", "Programming", "AI & Machine Learning", "Languages (Hindi/English/French)"];
const countries = ["Australia", "United Kingdom", "United States", "Canada"];

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError(false);

    const formData = new FormData(e.currentTarget);
    const data = {
      fullName: formData.get("name"),
      email: formData.get("email"),
      subject: formData.get("subject"),
      country: formData.get("country"),
      preferredTime: formData.get("preferredTime"),
      message: formData.get("message"),
    };

    try {
      const res = await fetch("/api/contact", {
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
        <p className="mt-2 max-w-sm text-sm text-neutral-600">We'll reach out within 24 hours to schedule your free 30-minute demo session.</p>
      </motion.div>
    );
  }

  return (
    <motion.form onSubmit={handleSubmit} variants={{ hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0 } }} initial="hidden" whileInView="show" viewport={{ once: true }} className="rounded-3xl border border-neutral-200 bg-white p-8 sm:p-10">
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
          <label className="text-sm font-medium text-neutral-900">Subject Interested In</label>
          <select name="subject" required defaultValue="" className="mt-2 w-full rounded-xl border border-neutral-200 px-4 py-3 text-sm text-neutral-900 outline-none transition-colors duration-300 focus:border-neutral-900">
            <option value="" disabled>Select a subject</option>
            {subjects.map((s) => <option key={s} value={s}>{s}</option>)}
          </select>
        </div>
        <div>
          <label className="text-sm font-medium text-neutral-900">Country</label>
          <select name="country" required defaultValue="" className="mt-2 w-full rounded-xl border border-neutral-200 px-4 py-3 text-sm text-neutral-900 outline-none transition-colors duration-300 focus:border-neutral-900">
            <option value="" disabled>Select your country</option>
            {countries.map((c) => <option key={c} value={c}>{c}</option>)}
          </select>
        </div>
      </div>

      <div className="mt-5">
        <label className="text-sm font-medium text-neutral-900">Preferred Time for Demo</label>
        <input name="preferredTime" type="text" placeholder="e.g. Weekday evenings, GMT+5:30" className="mt-2 w-full rounded-xl border border-neutral-200 px-4 py-3 text-sm text-neutral-900 outline-none transition-colors duration-300 focus:border-neutral-900" />
      </div>

      <div className="mt-5">
        <label className="text-sm font-medium text-neutral-900">Message (optional)</label>
        <textarea name="message" rows={4} placeholder="Tell us a bit about what you're looking for..." className="mt-2 w-full resize-none rounded-xl border border-neutral-200 px-4 py-3 text-sm text-neutral-900 outline-none transition-colors duration-300 focus:border-neutral-900" />
      </div>

      {error && (
        <div className="mt-4 flex items-center gap-2 rounded-lg bg-red-50 px-4 py-2.5 text-sm text-red-700">
          <AlertCircle className="h-4 w-4 shrink-0" />
          Something went wrong. Please try again or email us directly.
        </div>
      )}

      <button type="submit" disabled={loading} className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full bg-neutral-900 px-6 py-3.5 text-sm font-semibold text-white transition-colors duration-300 hover:bg-neutral-800 disabled:opacity-60 sm:w-auto">
        {loading ? "Sending..." : "Book Free Demo Session"}
        <Send className="h-4 w-4" />
      </button>
    </motion.form>
  );
}