"use client";

import { useEffect } from "react";

/**
 * ScrollFadeController — updates the --chrono-fade CSS variable
 * based on scroll position. Used by the chronograph tick marks
 * in globals.css to fade as the user scrolls deeper into the page.
 *
 * Fade curve:
 *   - scrollY 0–200px: opacity 1.0 (full visibility at top)
 *   - scrollY 200–1500px: linear fade 1.0 → 0.3
 *   - scrollY > 1500px: opacity holds at 0.3
 *
 * Uses requestAnimationFrame to batch updates and avoid
 * thrashing the style setter. Respects prefers-reduced-motion
 * by holding opacity at 1.0 throughout.
 *
 * Renders nothing — pure side effect on document root.
 */
export function ScrollFadeController() {
  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReduced) {
      // Hold at full visibility for reduced-motion users
      document.documentElement.style.setProperty("--chrono-fade", "1");
      return;
    }

    const FADE_START = 200;
    const FADE_END = 1500;
    const MIN_OPACITY = 0.3;

    let rafId = 0;
    let pending = false;

    const apply = () => {
      const scrollY = window.scrollY;
      const fadeProgress = Math.max(
        0,
        Math.min(1, (scrollY - FADE_START) / (FADE_END - FADE_START))
      );
      const opacity = 1 - fadeProgress * (1 - MIN_OPACITY);
      document.documentElement.style.setProperty(
        "--chrono-fade",
        opacity.toString()
      );
      pending = false;
    };

    const onScroll = () => {
      if (pending) return;
      pending = true;
      rafId = requestAnimationFrame(apply);
    };

    apply(); // initial state
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return null;
}
