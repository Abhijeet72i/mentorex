// app/services/page.tsx
import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/home/Footer";
import Services from "@/components/home/Services";
import ServicesHero from "@/components/services/ServicesHero";
import SubjectsGrid from "@/components/services/SubjectsGrid";
import BusinessServices from "@/components/services/BusinessServices";
import HowItWorks from "@/components/services/HowItWorks";
import PricingSection from "@/components/services/PricingSection";
import CTA from "@/components/home/CTA";

export const metadata: Metadata = {
  title: "Services & Pricing | Mentorex - One-to-One Online Tuition",
  description:
    "Explore Mentorex's one-to-one online tuition in Maths, Science, English, Programming, AI & Machine Learning, and languages. Available in Australia and the UK from $10/£10 per session.",
};

export default function ServicesPage() {
  return (
    <main>
      <Navbar />
      <Services />
      <ServicesHero />
      <SubjectsGrid />
      <BusinessServices />

      <HowItWorks />
      <PricingSection />
      <CTA />
      <Footer />
    </main>
  );
}