// app/about/page.tsx
import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/home/Footer";
import AboutHero from "@/components/about/AboutHero";
import OurStory from "@/components/about/OurStory";
import MissionValues from "@/components/about/MissionValues";
import CEOCard from "@/components/about/CEOCard";
import TeamSection from "@/components/about/TeamSection";
import CTA from "@/components/home/CTA";

export const metadata: Metadata = {
  title: "About Us | Mentorex - One-to-One Online Tuition",
  description:
    "Learn about Mentorex's mission to provide personalised one-to-one online tuition, our team of expert tutors, and our leadership.",
};

export default function AboutPage() {
  return (
    <main>
      <Navbar />
      <AboutHero />
      <OurStory />
      <MissionValues />
      <CEOCard />
      <TeamSection />
      <CTA />
      <Footer />
    </main>
  );
}