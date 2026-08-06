// app/gallery/page.tsx
import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/home/Footer";
import GalleryHero from "@/components/gallery/GalleryHero";
import GalleryGrid from "@/components/gallery/GalleryGrid";

export const metadata: Metadata = {
  title: "Gallery | Mentorex",
  description: "Photos from Mentorex tutoring sessions, tutors, and student moments.",
};

export default function GalleryPage() {
  return (
    <main>
      <Navbar />
      <GalleryHero />
      <GalleryGrid />
      <Footer />
    </main>
  );
}