"use client";

import { useEffect, useState } from "react";

/**
 * BackToTop — mobile floating action button.
 *
 * Appears on mobile only (hidden on md+) after the user scrolls past
 * ~400px. Smooth-scrolls back to the top of the page when tapped.
 *
 * Visibility: white pill with dark icon on the dark page, matched to
 * the primary CTA button styling. Drop shadow adds depth so the button
 * reads as floating rather than glued to the edge.
 *
 * Positioned bottom-right with safe-area inset for notched phones.
 */
export function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 400);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      aria-label="Back to top"
      className={`md:hidden fixed z-50 w-12 h-12 rounded-full bg-text-primary text-text-inverse flex items-center justify-center transition-all duration-300 hover:scale-105 active:scale-95 ${
        visible
          ? "opacity-100 translate-y-0 pointer-events-auto"
          : "opacity-0 translate-y-2 pointer-events-none"
      }`}
      style={{
        bottom: "max(1.5rem, env(safe-area-inset-bottom, 1.5rem))",
        right: "max(1.5rem, env(safe-area-inset-right, 1.5rem))",
        boxShadow:
          "0 4px 14px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(255, 255, 255, 0.08)",
      }}
    >
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.25"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <line x1="12" y1="19" x2="12" y2="5" />
        <polyline points="5 12 12 5 19 12" />
      </svg>
    </button>
  );
}
