import React from "react";
import Link from "next/link";
import Logo from "../Logo";
import Container from "../../foundation/Container";
import Section from "../../foundation/Section";
import Typography from "../../foundation/Typography";

export default function Footer() {
  const quickLinks = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Courses Offered", href: "/courses" },
    { label: "Success Results", href: "/results" },
    { label: "Get In Touch", href: "/contact" }
  ];

  const courseLinks = [
    { label: "CMA Foundation", href: "/courses#foundation" },
    { label: "CMA Intermediate", href: "/courses#intermediate" },
    { label: "CMA Final", href: "/courses#final" }
  ];

  return (
    <Section background="dark" spacing="small" className="border-t border-zinc-800 pt-16 pb-8">
      <Container size="wide" className="space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="space-y-4 text-left">
            <Logo variant="white" />
            <Typography variant="body" className="text-zinc-400 text-sm leading-relaxed mt-4">
              Premium coaching classes exclusively for CMA Foundation, Intermediate & Final. Empowering student careers in professional management accounting.
            </Typography>
            <div className="flex gap-4 pt-2">
              <a href="#" className="p-2 rounded-full bg-zinc-800 text-zinc-300 hover:bg-brand-red hover:text-white transition-colors duration-200" aria-label="Facebook">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 8H7v3h2v9h4v-9h3.6l.4-3H13V6c0-.5.5-1 1-1h3V1H13c-3 0-5 2-5 5v2z"/>
                </svg>
              </a>
              <a href="#" className="p-2 rounded-full bg-zinc-800 text-zinc-300 hover:bg-brand-red hover:text-white transition-colors duration-200" aria-label="Instagram">
                <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
              <a href="#" className="p-2 rounded-full bg-zinc-800 text-zinc-300 hover:bg-brand-red hover:text-white transition-colors duration-200" aria-label="LinkedIn">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764.784-1.764 1.75-1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
            </div>
          </div>

          <div className="space-y-4 text-left">
            <Typography variant="h3" as="h3" className="text-white text-base font-bold uppercase tracking-wider">
              Quick Links
            </Typography>
            <ul className="space-y-2.5 text-sm">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-zinc-400 hover:text-white transition-colors duration-150">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4 text-left">
            <Typography variant="h3" as="h3" className="text-white text-base font-bold uppercase tracking-wider">
              CMA Courses
            </Typography>
            <ul className="space-y-2.5 text-sm">
              {courseLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-zinc-400 hover:text-white transition-colors duration-150">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4 text-left">
            <Typography variant="h3" as="h3" className="text-white text-base font-bold uppercase tracking-wider">
              Contact Us
            </Typography>
            <div className="space-y-3 text-sm text-zinc-400">
              <p className="flex items-start gap-2.5">
                <svg className="h-5 w-5 text-brand-red shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>Vedant Academy, 2nd Floor, ABC Complex, opposite XYZ Mall, Ahmedabad, Gujarat 380009</span>
              </p>
              
              <div className="pt-2 space-y-1.5 border-t border-zinc-800">
                <p className="flex items-center gap-2.5">
                  <svg className="h-4 w-4 text-brand-blue-400 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <a href="tel:+919825604515" className="hover:text-white transition-colors">Sunil Sir: +91 98256 04515</a>
                </p>
                <p className="flex items-center gap-2.5">
                  <svg className="h-4 w-4 text-brand-blue-400 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <a href="tel:+919898112345" className="hover:text-white transition-colors">Bharat Sir: +91 98981 12345</a>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-zinc-800 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <Typography variant="caption" className="text-zinc-500 text-xs">
            &copy; {new Date().getFullYear()} Vedant Academy. All Rights Reserved. Exclusively CMA Coaching in Ahmedabad.
          </Typography>
          <div className="flex gap-6 text-xs text-zinc-500">
            <a href="#" className="hover:text-zinc-300">Privacy Policy</a>
            <a href="#" className="hover:text-zinc-300">Terms of Service</a>
          </div>
        </div>
      </Container>
    </Section>
  );
}
