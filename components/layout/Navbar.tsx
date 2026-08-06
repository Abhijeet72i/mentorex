// components/layout/Navbar.tsx
"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

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
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 z-80 w-full transition-all duration-300 ${
        scrolled ? "bg-white/90 backdrop-blur-xl shadow-md" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <div className="relative h-90 w-135">
            <Image
              src="/logos/logo.png"
              alt="Mentorex - An Educated Choice"
              fill
              sizes="(max-width: 768px) 200px, 300px"
              className="object-contain object-left"
              priority
            />
          </div>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden items-center gap-8 lg:flex">
          {links.map((link) => (
            <Link
              key={link.title}
              href={link.href}
              className="font-medium text-slate-700 transition hover:text-blue-600"
            >
              {link.title}
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden lg:block ml-6">
          <Link
            href="/contact"
            className="rounded-full bg-blue-600 px-6 py-3 font-semibold text-white transition hover:scale-105 hover:bg-blue-700"
          >
            Book Consultation
          </Link>
        </div>

        {/* Mobile Button */}
        <button
          className="lg:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={30} /> : <Menu size={30} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="border-t bg-white lg:hidden">
          <nav className="flex flex-col gap-5 p-6">
            {links.map((link) => (
              <Link
                key={link.title}
                href={link.href}
                onClick={() => setOpen(false)}
                className="font-medium text-slate-700"
              >
                {link.title}
              </Link>
            ))}

            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-full bg-blue-600 py-3 px-6 text-center font-semibold text-white transition hover:bg-blue-700"
            >
              Book Consultation
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}