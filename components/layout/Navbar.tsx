// components/layout/Navbar.tsx
"use client";

import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

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
      className={`fixed top-0 left-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-xl shadow-md"
          : "bg-white"
      }`}
    >
      <div className="mx-auto flex h-28 max-w-[1400px] items-center justify-between px-8">

        {/* Logo */}
        <div className="w-[340px] flex-shrink-0">
          <Link href="/">
            <Image
              src="/logo.png"
              alt="MentorEx"
              width={320}
              height={80}
              priority
              className="w-full h-auto object-contain"
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden flex-1 justify-center lg:flex">
          <ul className="flex items-center gap-10">
            {links.map((link) => (
              <li key={link.title}>
                <Link
                  href={link.href}
                  className="text-[17px] font-medium text-slate-700 transition hover:text-blue-600"
                >
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* CTA */}
        <div className="hidden w-[260px] justify-end lg:flex">
          <Link
            href="/contact"
            className="rounded-full bg-blue-600 px-8 py-4 text-[16px] font-semibold text-white transition-all duration-300 hover:bg-blue-700 hover:scale-105"
          >
            Book Consultation
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden"
          aria-label="Toggle Menu"
        >
          {open ? <X size={32} /> : <Menu size={32} />}
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
                className="text-lg font-medium text-slate-700"
              >
                {link.title}
              </Link>
            ))}

            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-full bg-blue-600 py-3 text-center text-lg font-semibold text-white"
            >
              Book Consultation
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}