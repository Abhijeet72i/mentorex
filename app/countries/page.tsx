// app/countries/page.tsx
import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/home/Footer";
import CountriesHero from "@/components/countries/CountriesHero";
import CountryCards from "@/components/countries/CountryCards";
import CTA from "@/components/home/CTA";

export const metadata: Metadata = {
  title: "Countries We Serve | Mentorex - Australia & UK Tutoring",
  description: "Mentorex offers one-to-one online tuition tailored to the Australian Curriculum and UK National Curriculum, with pricing, exam boards, and subjects for each country.",
};

export default function CountriesPage() {
  return (
    <main>
      <Navbar />
      <CountriesHero />
      <CountryCards />
      <CTA />
      <Footer />
    </main>
  );
}