"use client";

import BackgroundEffects from "./BackgroundEffects";
import HeroContent from "./HeroContent";
import HeroImage from "./HeroImage";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white">
      {/* Animated Background */}
      <BackgroundEffects />

      {/* Main Content */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-6 py-24">
        <div className="grid w-full items-center gap-16 lg:grid-cols-2">
          <HeroContent />
          <HeroImage />
        </div>
      </div>

      {/* Bottom Fade */}
      <div className="pointer-events-none absolute bottom-0 left-0 h-40 w-full bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}