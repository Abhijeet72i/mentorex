// app/programs/[slug]/page.tsx
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/home/Footer";
import LevelCountrySelector from "@/components/subjects/LevelCountrySelector";
import { subjects, getSubjectBySlug } from "@/data/subjects";
import { CheckCircle2 } from "lucide-react";

type Params = Promise<{ slug: string }>;

export function generateStaticParams() {
  return subjects.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { slug } = await params;
  const subject = getSubjectBySlug(slug);
  if (!subject) return {};
  return {
    title: `${subject.title} Tuition | Mentorex`,
    description: subject.description,
  };
}

export default async function SubjectPage({ params }: { params: Params }) {
  const { slug } = await params;
  const subject = getSubjectBySlug(slug);
  if (!subject) return notFound();

  const Icon = subject.icon;

  return (
    <main>
      <Navbar />

      <section className="relative w-full overflow-hidden bg-neutral-50 pb-16 pt-40 sm:pb-20 sm:pt-48">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-neutral-900 text-white">
            <Icon className="h-6 w-6" strokeWidth={1.75} />
          </div>
          <h1 className="mt-6 text-4xl font-semibold tracking-tight text-neutral-900 sm:text-5xl">{subject.title}</h1>
          <p className="mt-3 text-lg text-neutral-600">{subject.tagline}</p>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-neutral-600">{subject.description}</p>
        </div>
      </section>

      <section className="w-full bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <h2 className="text-xl font-semibold text-neutral-900">Choose your level and country</h2>
          <p className="mt-1.5 text-sm text-neutral-600">See exactly what's covered and the price per session.</p>
          <div className="mt-6">
           <LevelCountrySelector subjectSlug={subject.slug} />
          </div>
        </div>
      </section>

      <section className="w-full bg-neutral-50 py-16 sm:py-20">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2">
            <div>
              <h3 className="text-lg font-semibold text-neutral-900">What We Cover</h3>
              <ul className="mt-4 space-y-2.5">
                {subject.topics.map((topic) => (
                  <li key={topic} className="flex items-start gap-2.5 text-sm text-neutral-700">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-indigo-600" />
                    {topic}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-neutral-900">What Students Gain</h3>
              <ul className="mt-4 space-y-2.5">
                {subject.outcomes.map((outcome) => (
                  <li key={outcome} className="flex items-start gap-2.5 text-sm text-neutral-700">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-indigo-600" />
                    {outcome}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}