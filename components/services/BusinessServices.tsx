// components/services/BusinessServices.tsx
"use client";

import { motion,Variants } from "framer-motion";
import Link from "next/link";
import { LayoutDashboard, Headset, TrendingUp, ArrowRight, Check } from "lucide-react";

const businessServices = [
  {
    icon: LayoutDashboard,
    slug: "web-design",
    title: "Web Design & Development",
    tagline: "Websites that look premium and actually convert.",
    desc: "We design and build modern, fast-loading websites for schools, tutoring centers, and small-to-medium businesses. Every site is custom-built — no drag-and-drop templates — with a focus on clean design, mobile responsiveness, and turning visitors into real enquiries.",
    points: [
      "Custom design tailored to your brand, not a generic template",
      "Fully responsive across mobile, tablet, and desktop",
      "Fast page load speeds and clean, modern UI",
      "Built-in enquiry forms, booking flows, and contact integrations",
      "Ongoing support and updates after launch",
    ],
    idealFor: "Schools, tutoring centers, consultancies, and small businesses needing a professional online presence.",
  },
  {
    icon: Headset,
    slug: "customer-care",
    title: "Customer Care Services",
    tagline: "Outsourced support that feels like an in-house team.",
    desc: "We provide trained customer support agents to handle enquiries, calls, emails, and live chat on behalf of other businesses. Whether you need coverage during business hours or extended support, our team acts as an extension of yours — professional, responsive, and on-brand.",
    points: [
      "Dedicated agents trained on your business and tone of voice",
      "Email, live chat, and phone support handling",
      "Flexible scheduling — part-time, full-time, or after-hours coverage",
      "Regular reporting on ticket volume and response times",
      "Scalable as your business grows",
    ],
    idealFor: "Growing businesses that need reliable customer support without the cost of a full in-house team.",
  },
  {
    icon: TrendingUp,
    slug: "seo",
    title: "SEO Optimisation",
    tagline: "Get found by the people already searching for you.",
    desc: "We help business websites rank higher and attract more organic traffic through structured, data-driven SEO. From technical fixes to content strategy, we focus on sustainable, long-term visibility rather than short-term tricks.",
    points: [
      "Full technical and on-page SEO audit",
      "Keyword research aligned to your industry and location",
      "Content and blog strategy to target search intent",
      "Local SEO setup for businesses serving specific regions",
      "Monthly reporting on rankings, traffic, and progress",
    ],
    idealFor: "Businesses with an existing website that want more visibility on Google without paid ads.",
  },
];

const fadeUp:Variants= {
  hidden: { opacity: 0, y: 28 },
  show: (i: number = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] as const} }),
};

export default function BusinessServices() {
  return (
    <section className="relative w-full overflow-hidden bg-neutral-900 py-20 sm:py-28">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-indigo-500/10 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <motion.span variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm font-medium text-neutral-300">
            <span className="h-1.5 w-1.5 rounded-full bg-indigo-400" />
            Business Services
          </motion.span>

          <motion.h2 variants={fadeUp} custom={1} initial="hidden" whileInView="show" viewport={{ once: true }} className="mt-6 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            Beyond tutoring,
            <span className="bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent"> we support your business too.</span>
          </motion.h2>

          <motion.p variants={fadeUp} custom={2} initial="hidden" whileInView="show" viewport={{ once: true }} className="mt-4 text-base text-neutral-400">
            Web design, customer support, and SEO — for schools, tutoring centers, and businesses of any size.
          </motion.p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {businessServices.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.div key={service.title} variants={fadeUp} custom={i} initial="hidden" whileInView="show" viewport={{ once: true }} whileHover={{ y: -6 }} className="flex flex-col rounded-2xl border border-white/10 bg-white/[0.03] p-7 backdrop-blur-sm transition-colors duration-300 hover:border-white/20 hover:bg-white/[0.06]">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 text-white">
                  <Icon className="h-5 w-5" strokeWidth={1.75} />
                </div>

                <h3 className="mt-5 text-lg font-semibold text-white">{service.title}</h3>
                <p className="mt-1 text-sm font-medium text-indigo-400">{service.tagline}</p>
                <p className="mt-3 text-sm leading-relaxed text-neutral-400">{service.desc}</p>

                <ul className="mt-5 space-y-2.5">
                  {service.points.map((point) => (
                    <li key={point} className="flex items-start gap-2.5 text-xs leading-relaxed text-neutral-300">
                      <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-indigo-400" />
                      {point}
                    </li>
                  ))}
                </ul>

                <div className="mt-5 rounded-xl bg-white/5 p-3.5">
                  <p className="text-xs font-medium text-neutral-400">Ideal for</p>
                  <p className="mt-1 text-xs leading-relaxed text-neutral-300">{service.idealFor}</p>
                </div>

                <Link href={`/quote/${service.slug}`} className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-white transition-colors duration-300 hover:text-indigo-400">
                  Get a Quote
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}