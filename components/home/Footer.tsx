// components/home/Footer.tsx
import Link from "next/link";
import { GraduationCap, Mail, Phone, MapPin } from "lucide-react";

const footerLinks = {
  company: [
    { label: "About Us", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Countries", href: "/countries" },
    { label: "Blog", href: "/blog" },
  ],
  services: [
  { label: "Subjects We Teach", href: "/programs" },
  { label: "Web Design & Development", href: "/quote/web-design" },
  { label: "Customer Care Services", href: "/quote/customer-care" },
  { label: "SEO Optimisation", href: "/quote/seo" },
],
  support: [
    { label: "Contact Us", href: "/contact" },
    { label: "FAQ", href: "/#faq" },
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
  ],
};

const socials = [
  {
    href: "https://www.instagram.com/mentorex.global?igsh=OHJyem5seXBlcWNp",
    svg: (
      <>
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" fill="none" stroke="currentColor" strokeWidth="1.6" />
        <path d="M16 11.37a4 4 0 1 1-7.914 1.174A4 4 0 0 1 16 11.37z" fill="none" stroke="currentColor" strokeWidth="1.6" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </>
    ),
  },
  {
    href: "https://www.linkedin.com/posts/tutorpediaglobal_jobs-shimla-mentorex-ugcPost-7451217071763525632-IwUe",
    svg: <path d="M4.98 3.5C4.98 4.88 3.86 6 2.48 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8.5h4V23h-4V8.5zM8.5 8.5h3.8v2h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.65 4.78 6.1V23h-4v-6.7c0-1.6-.03-3.65-2.22-3.65-2.23 0-2.57 1.74-2.57 3.53V23h-4V8.5z" />,
  },
   {
  href: "https://youtube.com/@mentorexglobal?si=3JFH_g1mGanAv3n7",
  svg: <path d="M23.5 6.2a3.02 3.02 0 0 0-2.12-2.14C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.38.56A3.02 3.02 0 0 0 .5 6.2 31.6 31.6 0 0 0 0 12a31.6 31.6 0 0 0 .5 5.8 3.02 3.02 0 0 0 2.12 2.14C4.5 20.5 12 20.5 12 20.5s7.5 0 9.38-.56a3.02 3.02 0 0 0 2.12-2.14A31.6 31.6 0 0 0 24 12a31.6 31.6 0 0 0-.5-5.8zM9.6 15.6V8.4l6.4 3.6-6.4 3.6z" />,
},
];

export default function Footer() {
  return (
    <footer className="relative w-full overflow-hidden bg-neutral-950 pt-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 pb-16 lg:grid-cols-[1.5fr_1fr_1fr_1fr]">
          <div>
            <Link href="/" className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-500 to-violet-600">
                <GraduationCap className="h-5 w-5 text-white" strokeWidth={2} />
              </div>
              <span className="text-lg font-semibold text-white">Mentorex</span>
            </Link>

            <p className="mt-5 max-w-xs text-sm leading-relaxed text-neutral-400">
Personalised learning support for students — from finding the right tutor to achieving their academic goals.            </p>

            <div className="mt-6 space-y-3">
              <a href="mailto:hello@mentorex.com" className="flex items-center gap-2.5 text-sm text-neutral-400 transition-colors duration-300 hover:text-white">
                <Mail className="h-4 w-4" />
                    contact@mentorex.in

              </a>
              <a href="tel:+911234567890" className="flex items-center gap-2.5 text-sm text-neutral-400 transition-colors duration-300 hover:text-white">
                <Phone className="h-4 w-4" />
                +91 70184 24491
              </a>
              <div className="flex items-start gap-2.5 text-sm text-neutral-400">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
                <span>Vivek Niwas, Bhattakufar

                       Shimla, 171006

                    Himachal Pradesh, India</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white">Company</h3>
            <ul className="mt-5 space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-neutral-400 transition-colors duration-300 hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white">Services</h3>
            <ul className="mt-5 space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-neutral-400 transition-colors duration-300 hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white">Support</h3>
            <ul className="mt-5 space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-neutral-400 transition-colors duration-300 hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-6 border-t border-white/10 py-8 sm:flex-row">
          <p className="text-sm text-neutral-500">
            © {new Date().getFullYear()} Mentorex. All rights reserved.
          </p>

          <div className="flex items-center gap-3">
            {socials.map((social, i) => (
              <a key={i} href={social.href} target="_blank" rel="noopener noreferrer" className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-neutral-400 transition-colors duration-300 hover:border-white/20 hover:text-white">
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                  {social.svg}
                </svg>
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}