"use client";

import { useEffect, useRef } from "react";

/**
 * HeroBackdrop — atmospheric radial gradient behind the hero portrait.
 * Per design system §5: brand-blue → brand-purple → brand-pink at low opacity.
 * Parallax scroll at 0.5x speed on desktop; disabled on mobile and
 * prefers-reduced-motion (also enforced globally via globals.css).
 */
export function HeroBackdrop() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const isMobile = window.matchMedia("(max-width: 768px)").matches;
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (isMobile || prefersReduced) return;

    let frame = 0;
    const onScroll = () => {
      if (frame) return;
      frame = requestAnimationFrame(() => {
        if (ref.current) {
          const y = window.scrollY * 0.4;
          ref.current.style.transform = `translate3d(0, ${y}px, 0)`;
        }
        frame = 0;
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className="absolute -inset-20 brand-gradient-backdrop pointer-events-none will-change-transform"
    />
  );
}
