"use client";

import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Logo from "../Logo";
import Button from "../../foundation/Button";
import Container from "../../foundation/Container";
import { navigationLinks } from "@/constants/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 w-full ${
          scrolled
            ? "bg-white/95 dark:bg-zinc-950/95 backdrop-blur-md shadow-md border-b border-zinc-200/50 dark:border-zinc-800/50 py-3"
            : "bg-white dark:bg-zinc-950 border-b border-zinc-100 dark:border-zinc-900 py-4.5"
        }`}
      >
        <Container size="wide" className="flex items-center justify-between">
          <Logo />

          <nav className="hidden lg:flex items-center gap-8" aria-label="Desktop Main Navigation">
            {navigationLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative py-2 text-sm font-semibold tracking-wide transition-colors duration-200 outline-none focus-visible:text-brand-blue ${
                    isActive
                      ? "text-brand-blue dark:text-brand-blue-400"
                      : "text-zinc-600 dark:text-zinc-300 hover:text-brand-blue dark:hover:text-white"
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand-red rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <Button variant="secondary" size="sm" href="/contact">
              Inquire Now
            </Button>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-lg text-zinc-600 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-brand-blue-500 lg:hidden cursor-pointer"
            aria-expanded={isOpen}
            aria-label="Toggle navigation menu"
          >
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </Container>
      </header>

      <div className={`w-full transition-all duration-300 ${scrolled ? "h-[65px]" : "h-[77px]"}`} />

      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-xs z-40 transition-opacity duration-300"
          onClick={() => setIsOpen(false)}
        />
      )}

      <div
        className={`fixed top-0 right-0 bottom-0 w-80 max-w-[85vw] bg-white dark:bg-zinc-900 shadow-2xl z-50 p-6 flex flex-col transition-transform duration-300 ease-in-out transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between border-b border-zinc-100 dark:border-zinc-800 pb-4 mb-6">
          <Logo />
          <button
            onClick={() => setIsOpen(false)}
            className="p-2 rounded-lg text-zinc-500 hover:bg-zinc-100 dark:hover:bg-zinc-800 outline-none cursor-pointer"
            aria-label="Close menu"
          >
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <nav className="flex flex-col gap-4 text-left" aria-label="Mobile Navigation Drawer">
          {navigationLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`py-2 px-3 rounded-lg text-base font-semibold transition-colors duration-200 outline-none ${
                  isActive
                    ? "bg-brand-blue-50 text-brand-blue dark:bg-brand-blue-950/30 dark:text-brand-blue-400"
                    : "text-zinc-700 dark:text-zinc-300 hover:bg-zinc-50 dark:hover:bg-zinc-800 hover:text-brand-blue"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="mt-auto pt-6 border-t border-zinc-100 dark:border-zinc-800 flex flex-col gap-3">
          <Button variant="secondary" className="w-full" href="/contact">
            Inquire Now
          </Button>
        </div>
      </div>
    </>
  );
}
