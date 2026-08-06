// components/common/BookingPopup.tsx
"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X, ArrowRight, Gift, CheckCircle2 } from "lucide-react";
import { subjects } from "@/data/subjects";
import { countries } from "@/data/countries";

export default function BookingPopup() {
  const [open, setOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subjectSlug, setSubjectSlug] = useState(subjects[0].slug);
  const [countrySlug, setCountrySlug] = useState(countries[0].slug);

  useEffect(() => {
    const alreadyShown = sessionStorage.getItem("mentorex_popup_shown");
    if (alreadyShown) return;

    const timer = setTimeout(() => {
      setOpen(true);
      sessionStorage.setItem("mentorex_popup_shown", "true");
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  function handleClose() {
    setOpen(false);
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);

    const selectedSubject = subjects.find((s) => s.slug === subjectSlug);
    const selectedCountryData = countries.find((c) => c.slug === countrySlug);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
  fullName: name,
  email,
  subject: selectedSubject?.title,
  country: selectedCountryData?.name,
  preferredTime: "Not specified (submitted via popup)",
  message: "Submitted via homepage booking popup",
}),
      });
      if (res.ok) setSubmitted(true);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  }

  const selectedCountry = countries.find((c) => c.slug === countrySlug)!;

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm"
          onClick={handleClose}
        >
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.96 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-md overflow-hidden rounded-3xl bg-white shadow-2xl"
          >
            <button
              onClick={handleClose}
              aria-label="Close"
              className="absolute right-4 top-4 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-neutral-100 text-neutral-600 transition-colors duration-300 hover:bg-neutral-200"
            >
              <X className="h-4 w-4" />
            </button>

            <div className="bg-gradient-to-br from-neutral-900 to-neutral-800 px-8 pb-6 pt-8">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1.5 text-xs font-medium text-white">
                <Gift className="h-3.5 w-3.5" />
                Free 30-Minute Demo Session
              </div>
              <h3 className="mt-4 text-2xl font-semibold text-white">
                Book your first session today
              </h3>
              <p className="mt-1.5 text-sm text-neutral-300">
                One-to-one online tuition, matched to your subject and level.
              </p>
            </div>

            <div className="px-8 py-6">
              {submitted ? (
                <div className="flex flex-col items-center py-6 text-center">
                  <CheckCircle2 className="h-10 w-10 text-indigo-600" strokeWidth={1.5} />
                  <p className="mt-4 text-sm font-medium text-neutral-900">Request received!</p>
                  <p className="mt-1 text-sm text-neutral-600">We'll reach out within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <label className="text-sm font-medium text-neutral-900">Your Name</label>
                  <input required value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder="Full name" className="mt-2 w-full rounded-xl border border-neutral-200 px-4 py-3 text-sm text-neutral-900 outline-none transition-colors duration-300 focus:border-neutral-900" />

                  <label className="mt-4 block text-sm font-medium text-neutral-900">Email</label>
                  <input required value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="you@example.com" className="mt-2 w-full rounded-xl border border-neutral-200 px-4 py-3 text-sm text-neutral-900 outline-none transition-colors duration-300 focus:border-neutral-900" />

                  <label className="mt-4 block text-sm font-medium text-neutral-900">Subject</label>
                  <select value={subjectSlug} onChange={(e) => setSubjectSlug(e.target.value)} className="mt-2 w-full rounded-xl border border-neutral-200 px-4 py-3 text-sm text-neutral-900 outline-none transition-colors duration-300 focus:border-neutral-900">
                    {subjects.map((s) => (
                      <option key={s.slug} value={s.slug}>{s.title}</option>
                    ))}
                  </select>

                  <label className="mt-4 block text-sm font-medium text-neutral-900">Country</label>
                  <select value={countrySlug} onChange={(e) => setCountrySlug(e.target.value)} className="mt-2 w-full rounded-xl border border-neutral-200 px-4 py-3 text-sm text-neutral-900 outline-none transition-colors duration-300 focus:border-neutral-900">
                    {countries.map((c) => (
                      <option key={c.slug} value={c.slug}>{c.flag} {c.name}</option>
                    ))}
                  </select>

                  <p className="mt-4 text-xs text-neutral-500">
                    {selectedCountry.pricePerSession} in {selectedCountry.name} · first demo is free
                  </p>

                  <button
                    type="submit"
                    disabled={loading}
                    className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-neutral-900 px-6 py-3.5 text-sm font-semibold text-white transition-colors duration-300 hover:bg-neutral-800 disabled:opacity-60"
                  >
                    {loading ? "Sending..." : "Book Free Demo"}
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}