// app/terms/page.tsx
import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/home/Footer";

export const metadata: Metadata = {
  title: "Terms of Service | Mentorex",
};

export default function TermsPage() {
  return (
    <main>
      <Navbar />
      <section className="w-full bg-white pb-24 pt-40 sm:pb-32 sm:pt-48">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <h1 className="text-4xl font-semibold tracking-tight text-neutral-900">Terms of Service</h1>
          <p className="mt-3 text-sm text-neutral-500">Last updated: {new Date().toLocaleDateString("en-GB", { year: "numeric", month: "long" })}</p>

          <div className="mt-10 space-y-8 text-sm leading-relaxed text-neutral-700">
            <section>
              <h2 className="text-lg font-semibold text-neutral-900">1. Our Services</h2>
              <p className="mt-2">Mentorex provides one-to-one online tutoring in Mathematics, Science, English, Programming, AI & Machine Learning, and Languages, as well as web design, customer care, and SEO services for businesses. All bookings and quote requests are subject to availability.</p>
            </section>
            <section>
              <h2 className="text-lg font-semibold text-neutral-900">2. Pricing & Payment</h2>
              <p className="mt-2">Session pricing varies by country and is displayed on our Services and Countries pages. A free 30-minute demo session is offered prior to any paid booking. Business service pricing is quoted individually based on project scope.</p>
            </section>
            <section>
              <h2 className="text-lg font-semibold text-neutral-900">3. Cancellations</h2>
              <p className="mt-2">Sessions may be rescheduled or cancelled with reasonable notice. Repeated late cancellations may affect future scheduling availability.</p>
            </section>
            <section>
              <h2 className="text-lg font-semibold text-neutral-900">4. Conduct</h2>
              <p className="mt-2">Students, parents, and clients are expected to engage respectfully with tutors and staff. Mentorex reserves the right to discontinue services in cases of abusive or inappropriate conduct.</p>
            </section>
            <section>
              <h2 className="text-lg font-semibold text-neutral-900">5. Limitation of Liability</h2>
              <p className="mt-2">While we strive to provide high-quality tutoring and business services, Mentorex does not guarantee specific academic or business outcomes.</p>
            </section>
            <section>
              <h2 className="text-lg font-semibold text-neutral-900">6. Contact Us</h2>
              <p className="mt-2">For questions about these Terms, contact us at mentorexglobal@gmail.com or +91 70184 24491.</p>
            </section>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}