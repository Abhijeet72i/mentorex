
import type { Metadata } from "next";

const siteUrl = "https://www.mentorex.in";
const pageUrl = `${siteUrl}/online-tutoring-australia`;

export const metadata: Metadata = {
  title:
    "Affordable Online Tutoring Australia | NAPLAN & Maths | MentorEx",
  description:
    "Looking for the best tutoring in Australia? Explore personalised online tutoring with MentorEx for Maths, Science, English, NAPLAN preparation and coding. Ask about our free 30-minute demo and current prices.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    type: "website",
    url: pageUrl,
    siteName: "MentorEx",
    title:
      "Online Tutoring Australia | NAPLAN & School Subjects | MentorEx",
    description:
      "Explore personalised one-to-one online tuition for Australian students, including Maths, Science, English and NAPLAN preparation.",
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
    title: "Affordable Online Tutoring Australia | MentorEx",
    description:
      "Personalised online tuition for Australian students and families.",
    images: ["/og-image.png"],
  },
};

const subjects = [
  {
    title: "NAPLAN Preparation",
    description:
      "Practise literacy and numeracy skills, develop confidence and work on areas that need further support.",
  },
  {
    title: "Mathematics Tutoring",
    description:
      "Strengthen number skills, algebra, problem-solving and mathematical reasoning at your current level.",
  },
  {
    title: "Science Tutoring",
    description:
      "Understand scientific concepts, develop subject knowledge and practise applying what you learn.",
  },
  {
    title: "English & Literacy",
    description:
      "Improve reading comprehension, writing, grammar, vocabulary and communication skills.",
  },
  {
    title: "Coding & Computer Science",
    description:
      "Explore programming, logical thinking, algorithms and age-appropriate computer science concepts.",
  },
  {
    title: "Primary & Secondary Support",
    description:
      "Receive individual learning support suited to your school year, subject needs and learning goals.",
  },
];

const faqs = [
  {
    question: "Does MentorEx provide online tutoring in Australia?",
    answer:
      "Students and parents in Australia can contact MentorEx to enquire about online tutoring, subject availability, tutor matching and lesson arrangements.",
  },
  {
    question: "Can MentorEx help with NAPLAN preparation?",
    answer:
      "You can enquire about literacy and numeracy support relevant to NAPLAN. Available lessons and the specific skills covered should be confirmed with our team.",
  },
  {
    question: "How much does online tutoring cost in Australia?",
    answer:
      "Pricing can depend on the subject, school year and lesson arrangement. Contact MentorEx for current Australian pricing and available packages.",
  },
  {
    question: "Is one-to-one online tutoring suitable for my child?",
    answer:
      "One-to-one tuition can give students individual attention and allow lessons to focus on their learning needs. Contact us to discuss whether the available arrangements suit your child.",
  },
  {
    question: "Can I ask for a free demo session?",
    answer:
      "Contact MentorEx to confirm whether the free 30-minute demo is available for your location, subject and preferred schedule.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Online Tutoring in Australia | MentorEx",
  url: pageUrl,
  description: metadata.description,
  inLanguage: "en-AU",
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
      name: "Australia",
    },
  },
};

export default function AustraliaTutoringPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />

      <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-blue-950 to-indigo-900 px-5 py-20 text-white sm:py-28">
        <div className="mx-auto max-w-6xl">
          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.2em] text-sky-200">
            MentorEx · Online Tutoring Australia
          </p>

          <h1 className="max-w-4xl text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
            Personalised Online Tutoring for Students in Australia
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-blue-100 sm:text-xl">
            Support your child&apos;s learning with individual online
            tuition in Maths, Science, English, coding and literacy
            and numeracy skills.
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
            Ask us about our free 30-minute demo and current Australian pricing.
          </p>
        </div>
      </section>

      <section className="px-5 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-3xl">
            <p className="font-semibold text-indigo-700">
              Individual learning support
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Find Online Tutoring That Fits Your Student
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              When comparing the best tutoring services in Australia,
              consider the student&apos;s school year, curriculum,
              learning needs and your family&apos;s budget. MentorEx
              helps families enquire about personalised online lessons
              and available subject support.
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
              Affordable Online Tutoring in Australia
            </h2>
            <p className="mt-5 leading-8 text-slate-600">
              Looking for lower-cost tutoring in Australia? Compare
              lesson duration, tutor suitability, subject coverage and
              the total package price. MentorEx can explain its current
              pricing and the options available for your student.
            </p>
            <p className="mt-4 leading-8 text-slate-600">
              Our aim is to help families explore personalised learning
              options with clear information about lesson arrangements.
              Ask our team for a current quote before making a booking.
            </p>
            <a
              href="/contact"
              className="mt-7 inline-flex rounded-xl bg-indigo-700 px-6 py-3 font-semibold text-white hover:bg-indigo-800"
            >
              Ask for Australian Pricing
            </a>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm sm:p-9">
            <h2 className="text-2xl font-bold">
              How to Get Started
            </h2>
            <ol className="mt-6 space-y-5">
              {[
                ["1", "Share your learning needs", "Tell us the school year, subjects and learning goals."],
                ["2", "Discuss available options", "Ask about tutor availability, pricing and online lesson arrangements."],
                ["3", "Plan your lessons", "Confirm the schedule and any demo-session arrangements with our team."],
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

      <section className="bg-slate-50 px-5 py-12 sm:py-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">Explore More MentorEx Learning Options</h2>
          <p className="mt-3 max-w-3xl leading-7 text-slate-600">Explore other tutoring destinations and subjects to find the support that best fits your student.</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="/online-tutoring-uk" className="rounded-xl border border-slate-300 bg-white px-4 py-3 font-semibold text-indigo-800 transition hover:border-indigo-500 hover:bg-indigo-50">Online Tutoring in the UK</a>
            <a href="/programs" className="rounded-xl border border-slate-300 bg-white px-4 py-3 font-semibold text-indigo-800 transition hover:border-indigo-500 hover:bg-indigo-50">Explore Tutoring Subjects</a>
            <a href="/contact" className="rounded-xl border border-slate-300 bg-white px-4 py-3 font-semibold text-indigo-800 transition hover:border-indigo-500 hover:bg-indigo-50">Ask About Australian Tuition</a>
          </div>
        </div>
      </section>

      <section className="px-5 py-16 sm:py-20">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Frequently Asked Questions About Australian Tutoring
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
            Contact MentorEx to discuss your child&apos;s learning
            goals, available subjects, current prices and demo options.
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
