// app/about/page.tsx
import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/home/Footer";
import AboutHero from "@/components/about/AboutHero";
import OurStory from "@/components/about/OurStory";
import MissionValues from "@/components/about/MissionValues";
import TeamSection from "@/components/about/TeamSection";
import CEOCard from "@/components/about/CEOCard";
import CTA from "@/components/home/CTA";

export const metadata: Metadata = {
  title: "About Us | Mentorex - Global Career & Education Guidance",
  description:
    "Learn about Mentorex's mission to help students build successful global careers through expert counselling, study abroad support, and personalised mentorship.",
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