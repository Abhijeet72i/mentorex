
import type { Metadata } from "next";

const siteUrl = "https://www.mentorex.in";
const pageUrl = `${siteUrl}/online-tutoring-uk`;

export const metadata: Metadata = {
  title:
    "Affordable Online Tutoring UK | GCSE & A-Level | MentorEx",
  description:
    "Looking for the best tutoring service in the UK? Explore personalised one-to-one online tutoring with MentorEx for GCSE, A-Level, Maths, Science, English and Computer Science. Ask about our free 30-minute demo.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    type: "website",
    url: pageUrl,
    siteName: "MentorEx",
    title: "Online Tutoring UK | GCSE & A-Level | MentorEx",
    description:
      "Discover personalised online tuition for UK students, including GCSE, A-Level, Maths, Science, English and Computer Science.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "MentorEx online tutoring",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Affordable Online Tutoring UK | MentorEx",
    description:
      "One-to-one online tuition for GCSE, A-Level and school subjects.",
    images: ["/og-image.png"],
  },
};

const subjects = [
  {
    title: "GCSE Maths",
    description:
      "Build confidence with algebra, geometry, number skills, problem-solving and exam-style questions.",
  },
  {
    title: "GCSE Science",
    description:
      "Get individual support in Biology, Chemistry and Physics, including explanations and exam practice.",
  },
  {
    title: "A-Level Support",
    description:
      "Strengthen subject knowledge, work through challenging concepts and prepare with structured revision.",
  },
  {
    title: "Computer Science & Coding",
    description:
      "Learn programming fundamentals, algorithms, computational thinking and computer science concepts.",
  },
  {
    title: "English & School Support",
    description:
      "Develop reading, writing, comprehension and subject-specific study skills with personalised guidance.",
  },
  {
    title: "Primary School Tuition",
    description:
      "Build strong foundations in core subjects with lessons adapted to the learner's level and pace.",
  },
];

const faqs = [
  {
    question: "Does MentorEx provide online tutoring in the UK?",
    answer:
      "MentorEx offers online one-to-one tutoring for students. Contact our team to confirm subject availability, tutor matching and lesson arrangements for your child.",
  },
  {
    question: "Can students get help with GCSE and A-Level preparation?",
    answer:
      "Students can enquire about support in Maths, Science, English and Computer Science, including topic revision, practice questions and exam preparation.",
  },
  {
    question: "How much does online tutoring cost in the UK?",
    answer:
      "Tutoring prices depend on the subject, level and lesson arrangement. Contact MentorEx for current UK pricing and available packages before booking.",
  },
  {
    question: "Can I book a demo session?",
    answer:
      "You can contact MentorEx to ask about the free 30-minute demo session and confirm its current availability and booking terms.",
  },
  {
    question: "Are online lessons personalised?",
    answer:
      "One-to-one lessons can be tailored to a student's learning needs, current topics and goals. Specific arrangements are confirmed when booking.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Online Tutoring in the UK | MentorEx",
  url: pageUrl,
  description: metadata.description,
  inLanguage: "en-GB",
  about: {
    "@type": "EducationalOrganization",
    "@id": `${siteUrl}/#organization`,
    name: "MentorEx",
    url: siteUrl,
  },
  audience: {
    "@type": "PeopleAudience",
    geographicArea: {
      "@type": "Country",
      name: "United Kingdom",
    },
  },
};

export default function UKTutoringPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />

      <section className="relative overflow-hidden bg-gradient-to-br from-blue-950 via-indigo-950 to-slate-900 px-5 py-20 text-white sm:py-28">
        <div className="mx-auto max-w-6xl">
          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.2em] text-blue-200">
            MentorEx · Online Tutoring UK
          </p>

          <h1 className="max-w-4xl text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
            Personalised Online Tutoring for Students in the UK
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-blue-100 sm:text-xl">
            Help your child build confidence in Maths, Science, English
            and Computer Science with individual online tuition and
            learning support tailored to their needs.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href="/contact"
              className="inline-flex items-center justify-center rounded-xl bg-white px-7 py-4 font-semibold text-blue-950 transition hover:bg-blue-50"
            >
              Enquire About Tutoring
            </a>
            <a
              href="/services"
              className="inline-flex items-center justify-center rounded-xl border border-white/40 px-7 py-4 font-semibold text-white transition hover:bg-white/10"
            >
              Explore Services
            </a>
          </div>

          <p className="mt-5 text-sm text-blue-200">
            Ask us about our free 30-minute demo and current UK pricing.
          </p>
        </div>
      </section>

      <section className="px-5 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-3xl">
            <p className="font-semibold text-indigo-700">
              One-to-one learning
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Find Online Tutoring That Fits Your Child&apos;s Needs
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              If you are comparing the best tutoring services in the UK,
              look for lessons that match your child&apos;s curriculum,
              learning pace and goals. MentorEx helps families explore
              personalised online tuition across key school subjects.
              Our team can discuss suitable support and available
              arrangements before you book.
            </p>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {subjects.map((subject) => (
              <article
                key={subject.title}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <h3 className="text-xl font-bold">{subject.title}</h3>
                <p className="mt-3 leading-7 text-slate-600">
                  {subject.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 px-5 py-16 sm:py-20">
        <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Affordable Online Tutoring in the UK
            </h2>
            <p className="mt-5 leading-8 text-slate-600">
              Looking for lower-cost tutoring in the UK? Compare the
              lesson format, tutor suitability, subject coverage and
              total package price before choosing a service. MentorEx
              can provide current pricing and explain the options
              available for your student.
            </p>
            <p className="mt-4 leading-8 text-slate-600">
              We aim to make personalised learning accessible while
              helping families understand what is included in each
              arrangement. Contact us for a current quote rather than
              relying on outdated prices.
            </p>
            <a
              href="/contact"
              className="mt-7 inline-flex rounded-xl bg-indigo-700 px-6 py-3 font-semibold text-white hover:bg-indigo-800"
            >
              Ask for UK Pricing
            </a>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm sm:p-9">
            <h2 className="text-2xl font-bold">
              How to Get Started
            </h2>
            <ol className="mt-6 space-y-5">
              {[
                ["1", "Tell us about your student", "Share the year group, subject and learning goals."],
                ["2", "Discuss suitable tuition", "Ask about tutor availability, lesson format and pricing."],
                ["3", "Plan the next steps", "Confirm the schedule and any demo-session arrangements."],
              ].map(([number, title, description]) => (
                <li key={number} className="flex gap-4">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-indigo-100 font-bold text-indigo-800">
                    {number}
                  </span>
                  <div>
                    <h3 className="font-semibold">{title}</h3>
                    <p className="mt-1 leading-7 text-slate-600">
                      {description}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="px-5 py-16 sm:py-20">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Frequently Asked Questions About UK Tutoring
          </h2>

          <div className="mt-8 divide-y divide-slate-200">
            {faqs.map((faq) => (
              <details key={faq.question} className="group py-5">
                <summary className="cursor-pointer list-none pr-6 text-lg font-semibold marker:hidden">
                  {faq.question}
                  <span className="float-right text-indigo-700 group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-3 leading-7 text-slate-600">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-indigo-950 px-5 py-16 text-center text-white sm:py-20">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold sm:text-4xl">
            Ready to Explore Online Tuition?
          </h2>
          <p className="mt-4 leading-7 text-indigo-100">
            Tell MentorEx about your child&apos;s learning goals and
            ask about available subjects, pricing and demo sessions.
          </p>
          <a
            href="/contact"
            className="mt-8 inline-flex rounded-xl bg-white px-7 py-4 font-semibold text-indigo-950 hover:bg-indigo-50"
          >
            Contact MentorEx
          </a>
        </div>
      </section>
    </main>
  );
}
