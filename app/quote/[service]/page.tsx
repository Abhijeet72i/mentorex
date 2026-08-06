// app/quote/[service]/page.tsx
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/home/Footer";
import QuoteForm from "@/components/quote/QuoteForm";
import { businessServices, getBusinessServiceBySlug } from "@/data/businessServices";

type Params = Promise<{ service: string }>;

export function generateStaticParams() {
  return businessServices.map((s) => ({ service: s.slug }));
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { service } = await params;
  const svc = getBusinessServiceBySlug(service);
  if (!svc) return {};
  return { title: `${svc.title} Quote | Mentorex` };
}

export default async function QuotePage({ params }: { params: Params }) {
  const { service } = await params;
  const svc = getBusinessServiceBySlug(service);
  if (!svc) return notFound();

  const Icon = svc.icon;

  return (
    <main>
      <Navbar />

      <section className="relative w-full overflow-hidden bg-neutral-50 pb-16 pt-40 sm:pb-20 sm:pt-48">
        <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-neutral-900 text-white">
            <Icon className="h-6 w-6" strokeWidth={1.75} />
          </div>
          <h1 className="mt-6 text-4xl font-semibold tracking-tight text-neutral-900 sm:text-5xl">{svc.headline}</h1>
          <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-neutral-600">{svc.subheadline}</p>
        </div>
      </section>

      <section className="w-full bg-white pb-24 sm:pb-32">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <QuoteForm defaultSlug={svc.slug} />
        </div>
      </section>

      <Footer />
    </main>
  );
}