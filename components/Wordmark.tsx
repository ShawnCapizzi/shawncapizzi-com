"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";

type Size = "small" | "medium" | "large";

const dimensions: Record<Size, { width: number; height: number }> = {
  small: { width: 96, height: 33 },
  medium: { width: 220, height: 76 },
  large: { width: 520, height: 180 },
};

interface WordmarkProps {
  size?: Size;
  href?: string | null;
  className?: string;
  priority?: boolean;
  /**
   * When true, the wordmark plays a 36° diagonal clip-path reveal
   * with a synchronized fade-in on first mount (once per session).
   * Respects prefers-reduced-motion. Default: false.
   */
  animate?: boolean;
}

export function Wordmark({
  size = "small",
  href = "/",
  className = "",
  priority = false,
  animate = false,
}: WordmarkProps) {
  const { width, height } = dimensions[size];
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!animate) return;
    const el = wrapperRef.current;
    if (!el) return;

    // 36° from vertical → ~25% horizontal offset given wordmark's 2.875:1 aspect ratio
    const offset = 25; // percent of width
    const startClip = `polygon(0% 0%, ${-offset / 2}% 0%, ${-offset}% 100%, 0% 100%)`;
    const endClip = `polygon(0% 0%, ${100 + offset / 2}% 0%, 100% 100%, 0% 100%)`;
    const duration = 900; // ms

    // Respect reduced-motion preference
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      el.style.clipPath = endClip;
      el.style.opacity = "1";
      return;
    }

    // Play once per session — don't replay on every navigation
    if (sessionStorage.getItem("sigPlayed")) {
      el.style.clipPath = endClip;
      el.style.opacity = "1";
      return;
    }

    el.style.clipPath = startClip;
    el.style.opacity = "0";

    requestAnimationFrame(() => {
      el.style.transition =
        `clip-path ${duration}ms cubic-bezier(0, 0, 0.2, 1), ` +
        `opacity ${Math.round(duration * 0.75)}ms ease-out`;
      el.style.clipPath = endClip;
      el.style.opacity = "1";
    });

    sessionStorage.setItem("sigPlayed", "true");
  }, [animate]);

  // Non-animate path: className goes on the Image (exactly as before).
  // Animate path: className goes on the wrapper div; Image fills it.
  const image = (
    <Image
      src="/images/brand/wordmark.svg"
      alt="Capizzi"
      width={width}
      height={height}
      priority={priority || size === "large"}
      className={animate ? "block h-auto w-full" : `h-auto w-auto ${className}`}
    />
  );

  const content = animate ? (
    <div ref={wrapperRef} className={className} style={{ opacity: 0 }}>
      {image}
    </div>
  ) : (
    image
  );

  if (href === null) {
    return content;
  }

  return (
    <Link
      href={href}
      aria-label="Shawn Capizzi — home"
      className="inline-block focus-visible:outline-2 focus-visible:outline-offset-4"
    >
      {content}
    </Link>
  );
}
