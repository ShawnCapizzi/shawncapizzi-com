"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Wordmark } from "./Wordmark";

type NavLink = { href: string; label: string };

const NAV_LINKS: NavLink[] = [
  { href: "/work", label: "Work" },
  { href: "/engagements", label: "Engagements" },
  { href: "/thinking", label: "Thinking" },
  { href: "/book/chapter-1", label: "Read" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

const SECONDARY_LINKS = [
  { href: "/clarity-advantage", label: "Clarity Advantage" },
  { href: "/faq", label: "FAQ" },
] as const;

const CAL_URL = "https://cal.com/capizzi/30min";

// Phone shown in the header on lg+ desktop and at the top of the mobile drawer.
// Single source of truth: edit PHONE_DISPLAY for the visible label and PHONE_TEL
// for the dial URI (E.164 with country code).
const PHONE_DISPLAY = "212-380-3900";
const PHONE_TEL = "+12123803900";

function PhoneIcon({ size = 14 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className="flex-shrink-0"
    >
      <path d="M20 15.5c-1.25 0-2.45-.2-3.57-.57a1 1 0 0 0-1.02.24l-2.2 2.2a15.07 15.07 0 0 1-6.59-6.58l2.2-2.21a1 1 0 0 0 .25-1.02A11.36 11.36 0 0 1 8.5 4a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1c0 9.39 7.61 17 17 17a1 1 0 0 0 1-1v-3.5a1 1 0 0 0-1-1z" />
    </svg>
  );
}

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

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
        <div className="max-w-wide mx-auto px-6 md:px-8 lg:px-12 h-20 md:h-[88px] flex items-center justify-between">
          <div className="origin-left scale-[0.8]">
            <Wordmark size="small" />
          </div>

          <nav className="hidden md:flex items-center gap-6 lg:gap-8">
            {NAV_LINKS.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname === link.href || pathname.startsWith(`${link.href}/`);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={isActive ? "page" : undefined}
                  className={`inline-flex items-center text-sm tracking-tight transition-colors ${
                    isActive
                      ? "text-text-primary font-medium"
                      : "text-text-secondary hover:text-text-primary font-normal"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <div className="hidden md:flex items-center gap-5">
            <a
              href={`tel:${PHONE_TEL}`}
              className="hidden lg:inline-flex items-center gap-2 text-sm font-medium text-link hover:text-link-hover transition-colors"
              aria-label={`Call ${PHONE_DISPLAY}`}
            >
              <PhoneIcon size={14} />
              {PHONE_DISPLAY}
            </a>
            <a
              href={CAL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-2.5 rounded-full bg-text-primary text-text-inverse text-sm font-medium tracking-tight hover:scale-[1.02] transition-transform"
            >
              Book a Strategy Call
            </a>
          </div>

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
        <div className="fixed inset-0 z-40 bg-bg-elevated md:hidden pt-20 overflow-y-auto">
          <nav className="px-6 py-12 flex flex-col gap-6">
            <a
              href={`tel:${PHONE_TEL}`}
              onClick={() => setMobileOpen(false)}
              className="inline-flex items-center gap-3 text-2xl font-semibold text-link"
              aria-label={`Call ${PHONE_DISPLAY}`}
            >
              <PhoneIcon size={20} />
              {PHONE_DISPLAY}
            </a>
            <div className="border-b border-border-subtle -mt-1" />
            {NAV_LINKS.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname === link.href || pathname.startsWith(`${link.href}/`);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  aria-current={isActive ? "page" : undefined}
                  className={`inline-flex items-center text-3xl tracking-tight ${
                    isActive
                      ? "text-text-primary font-semibold"
                      : "text-text-secondary font-medium"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
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
