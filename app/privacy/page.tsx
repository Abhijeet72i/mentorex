// app/privacy/page.tsx
import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/home/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy | Mentorex",
};

export default function PrivacyPage() {
  return (
    <main>
      <Navbar />
      <section className="w-full bg-white pb-24 pt-40 sm:pb-32 sm:pt-48">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <h1 className="text-4xl font-semibold tracking-tight text-neutral-900">Privacy Policy</h1>
          <p className="mt-3 text-sm text-neutral-500">Last updated: {new Date().toLocaleDateString("en-GB", { year: "numeric", month: "long" })}</p>

          <div className="mt-10 space-y-8 text-sm leading-relaxed text-neutral-700">
            <section>
              <h2 className="text-lg font-semibold text-neutral-900">1. Information We Collect</h2>
              <p className="mt-2">When you book a demo session, request a quote, or contact us, we collect information you provide directly, such as your name, email address, phone number, and details about your enquiry (subject, country, or project requirements).</p>
            </section>
            <section>
              <h2 className="text-lg font-semibold text-neutral-900">2. How We Use Your Information</h2>
              <p className="mt-2">We use the information you provide to respond to enquiries, schedule tutoring sessions or consultations, match you with a suitable tutor or service, and improve our offerings. We do not sell your personal information to third parties.</p>
            </section>
            <section>
              <h2 className="text-lg font-semibold text-neutral-900">3. Data Sharing</h2>
              <p className="mt-2">We may share your information with tutors or team members directly involved in delivering the service you've requested. We do not share your data with unrelated third parties for marketing purposes.</p>
            </section>
            <section>
              <h2 className="text-lg font-semibold text-neutral-900">4. Data Security</h2>
              <p className="mt-2">We take reasonable steps to protect your personal information from unauthorised access, alteration, or disclosure. However, no method of transmission over the internet is completely secure.</p>
            </section>
            <section>
              <h2 className="text-lg font-semibold text-neutral-900">5. Your Rights</h2>
              <p className="mt-2">You may request access to, correction of, or deletion of your personal data at any time by contacting us at mentorexglobal@gmail.com.</p>
            </section>
            <section>
              <h2 className="text-lg font-semibold text-neutral-900">6. Contact Us</h2>
              <p className="mt-2">If you have questions about this Privacy Policy, please reach out at mentorexglobal@gmail.com or +91 70184 24491.</p>
            </section>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}