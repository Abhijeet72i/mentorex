// app/contact/page.tsx
import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/home/Footer";
import ContactHero from "@/components/contact/ContactHero";
import ContactInfo from "@/components/contact/ContactInfo";
import ContactForm from "@/components/contact/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us | Mentorex - Book Your Free Demo Session",
  description: "Get in touch with Mentorex to book a free 30-minute demo session for one-to-one online tuition in Australia and the UK.",
};

export default function ContactPage() {
  return (
    <main>
      <Navbar />
      <ContactHero />
      <section className="w-full bg-white pb-24 sm:pb-32">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <ContactInfo />
          <div className="mt-10">
            <ContactForm />
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}