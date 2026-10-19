
import type { Metadata } from "next";

import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/home/Hero";
import About from "@/components/home/About";
import Services from "@/components/home/Services";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import StudyDestinations from "@/components/home/StudyDestinations";
import Statistics from "@/components/home/Statistics";
import Testimonials from "@/components/home/Testimonials";
import FAQ from "@/components/home/FAQ";
import CTA from "@/components/home/CTA";
import Footer from "@/components/home/Footer";

export const metadata: Metadata = {
  title: "Affordable Online Tutoring UK & Australia",
  description:
    "Looking for affordable online tutoring in the UK or Australia? MentorEx offers personalised one-to-one tuition in Maths, Science, English, GCSE, A-Level, NAPLAN and coding. Book a free 30-minute demo.",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: "Affordable Online Tutoring UK & Australia | MentorEx",
    description:
      "Discover personalised one-to-one online tuition with MentorEx. Explore school subjects, exam preparation and coding lessons for students in the UK and Australia.",
    url: "https://mentorex.in/",
    type: "website",
  },
};

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <WhyChooseUs />
      <StudyDestinations />
      <Statistics />
      <Testimonials />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  );
}
