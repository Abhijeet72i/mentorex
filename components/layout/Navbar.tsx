"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import AnimatedLogo from "@/components/common/AnimatedLogo";

const links = [
  { title: "Home", href: "/" },
  { title: "About", href: "/about" },
  { title: "Programs", href: "/programs" },
  { title: "Services", href: "/services" },
  { title: "Gallery", href: "/gallery" },
  { title: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed left-0 top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-white/95 shadow-md backdrop-blur-xl"
          : "bg-white"
      }`}
    >
      <div className="mx-auto flex h-24 max-w-[1400px] items-center justify-between px-6 sm:px-8">

        {/* =========================
            MENTOREX LOGO
        ========================== */}
        <div className="w-[220px] flex-shrink-0 sm:w-[230px] lg:w-[245px]">
          <Link
            href="/"
            aria-label="MentorEx Home"
            className="block"
          >
            <AnimatedLogo />
          </Link>
        </div>

        {/* =========================
            DESKTOP NAVIGATION
        ========================== */}
        <nav className="hidden flex-1 justify-center lg:flex">
          <ul className="flex items-center gap-8 xl:gap-10">
            {links.map((link) => (
              <li key={link.title}>
                <Link
                  href={link.href}
                  className="text-[16px] font-medium text-slate-700 transition-colors duration-200 hover:text-blue-600"
                >
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* =========================
            DESKTOP CTA
        ========================== */}
        <div className="hidden w-[245px] justify-end lg:flex">
          <Link
            href="/contact"
            className="rounded-full bg-blue-600 px-7 py-3.5 text-[15px] font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-blue-700 hover:shadow-lg"
          >
            Book Free Demo Session
          </Link>
        </div>

        {/* =========================
            MOBILE MENU BUTTON
        ========================== */}
        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="rounded-lg p-2 text-slate-700 transition-colors hover:bg-slate-100 lg:hidden"
          aria-label="Toggle navigation menu"
          aria-expanded={open}
        >
          {open ? <X size={30} /> : <Menu size={30} />}
        </button>
      </div>

      {/* =========================
          MOBILE NAVIGATION
      ========================== */}
      {open && (
        <div className="border-t border-slate-100 bg-white shadow-lg lg:hidden">
          <nav className="flex flex-col gap-2 px-6 py-6">
            {links.map((link) => (
              <Link
                key={link.title}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 text-base font-medium text-slate-700 transition-colors hover:bg-slate-50 hover:text-blue-600"
              >
                {link.title}
              </Link>
            ))}

            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="mt-3 rounded-full bg-blue-600 px-6 py-3.5 text-center text-base font-semibold text-white transition hover:bg-blue-700"
            >
              Book Free Demo Session
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}