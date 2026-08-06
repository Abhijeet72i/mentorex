"use client";

import Image from "next/image";

const logos = [
  { name: "Harvard", file: "/logos/harvard.png" },
  { name: "MIT", file: "/logos/mit.png" },
  { name: "Oxford", file: "/logos/oxford.png" },
  { name: "Cambridge", file: "/logos/cambridge.png" },
  { name: "IELTS", file: "/logos/ielts.png" },
  { name: "TOEFL", file: "/logos/toefl.png" },
];

export default function TrustedBy() {
  return (
    <section className="border-y bg-white py-16">
      <div className="mx-auto max-w-7xl px-6">

        <p className="mb-10 text-center text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">
          Trusted by Students Applying To
        </p>

        <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-6">
          {logos.map((logo) => (
            <div
              key={logo.name}
              className="flex h-24 items-center justify-center rounded-2xl border border-slate-200 bg-white transition-all duration-300 hover:-translate-y-2 hover:border-blue-500 hover:shadow-xl"
            >
              <Image
                src={logo.file}
                alt={logo.name}
                width={120}
                height={50}
                className="object-contain grayscale transition duration-300 hover:grayscale-0"
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}