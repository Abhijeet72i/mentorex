// components/contact/ContactInfo.tsx
"use client";

import { motion,Variants } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";

const info = [
  {
    icon: MapPin,
    label: "Address",
    lines: ["Vivek Niwas, Bhattakufar", "Shimla, 171006", "Himachal Pradesh, India"],
  },
  {
    icon: Mail,
    label: "Email",
    lines: ["contact@mentorex.in"],
  },
  {
    icon: Phone,
    label: "Phone",
    lines: ["+91 70184 24491"],
  },
];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] as const } }),
};

export default function ContactInfo() {
  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
      {info.map((item, i) => {
        const Icon = item.icon;
        return (
          <motion.div key={item.label} variants={fadeUp} custom={i} initial="hidden" whileInView="show" viewport={{ once: true }} className="rounded-2xl border border-neutral-200 bg-white p-6">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-neutral-900 text-white">
              <Icon className="h-4.5 w-4.5" strokeWidth={1.75} />
            </div>
            <p className="mt-4 text-sm font-semibold text-neutral-900">{item.label}</p>
            <div className="mt-1.5 space-y-0.5">
              {item.lines.map((line) => (
                <p key={line} className="text-sm leading-relaxed text-neutral-600">{line}</p>
              ))}
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}