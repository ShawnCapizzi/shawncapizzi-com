"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Wordmark } from "./Wordmark";

const NAV_LINKS = [
  { href: "/work", label: "Work" },
  { href: "/engagements", label: "Engagements" },
  { href: "/thinking", label: "Thinking" },
  { href: "/about", label: "About" },
] as const;

const SECONDARY_LINKS = [
  { href: "/clarity-advantage", label: "Clarity Advantage" },
  { href: "/contact", label: "Contact" },
] as const;

const CAL_URL = "https://cal.com/capizzi/15min";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    handler();
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => {
    const escHandler = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileOpen(false);
    };
    window.addEventListener("keydown", escHandler);
    return () => window.removeEventListener("keydown", escHandler);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const headerClasses = scrolled
    ? "bg-bg-primary/85 backdrop-blur-md border-b border-border-subtle"
    : "bg-transparent";

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${headerClasses}`}>
        <div className="max-w-wide mx-auto px-6 md:px-8 lg:px-12 h-16 md:h-[72px] flex items-center justify-between">
          <Wordmark size="small" />

          <nav className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <Link key={link.href} href={link.href} className="text-sm font-medium tracking-tight text-text-secondary hover:text-text-primary transition-colors">
                {link.label}
              </Link>
            ))}
          </nav>

          <a href={CAL_URL} target="_blank" rel="noopener noreferrer" className="hidden md:inline-flex items-center px-6 py-2.5 rounded-full bg-text-primary text-text-inverse text-sm font-medium tracking-tight hover:scale-[1.02] transition-transform">
            Book a Strategy Call
          </a>

          <button
            type="button"
            onClick={() => setMobileOpen((v) => !v)}
            className="md:hidden inline-flex items-center justify-center w-10 h-10 -mr-2 text-text-primary"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              {mobileOpen ? (
                <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
              ) : (
                <g>
                  <line x1="3" y1="9" x2="21" y2="9" strokeLinecap="round" />
                  <line x1="3" y1="16" x2="21" y2="16" strokeLinecap="round" />
                </g>
              )}
            </svg>
          </button>
        </div>
      </header>

      {mobileOpen ? (
        <div className="fixed inset-0 z-40 bg-bg-elevated md:hidden pt-16 overflow-y-auto">
          <nav className="px-6 py-12 flex flex-col gap-6">
            {NAV_LINKS.map((link) => (
              <Link key={link.href} href={link.href} onClick={() => setMobileOpen(false)} className="text-3xl font-semibold tracking-tight text-text-primary">
                {link.label}
              </Link>
            ))}
            <div className="border-t border-border-subtle pt-6 flex flex-col gap-4">
              {SECONDARY_LINKS.map((link) => (
                <Link key={link.href} href={link.href} onClick={() => setMobileOpen(false)} className="text-lg text-text-secondary">
                  {link.label}
                </Link>
              ))}
            </div>
            <a href={CAL_URL} target="_blank" rel="noopener noreferrer" onClick={() => setMobileOpen(false)} className="mt-4 inline-flex items-center justify-center px-8 py-4 rounded-full bg-text-primary text-text-inverse text-base font-medium tracking-tight w-full">
              Book a Strategy Call
            </a>
          </nav>
        </div>
      ) : null}
    </>
  );
}
