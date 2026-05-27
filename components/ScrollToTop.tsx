"use client";

import { useEffect } from "react";

/**
 * ScrollToTop — a tiny client helper that forces window.scrollTo(0, 0)
 * once on mount. Use this on routes where the browser's default scroll
 * restoration doesn't land users at the top (typically pages with tall
 * fixed-height inner regions, like the book reader).
 *
 * Mount it inside any server-component page; it adds no visible markup.
 */
export function ScrollToTop() {
  useEffect(() => {
    // Tell the browser not to restore prior scroll on this view.
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
    // Use rAF so we run after Next paints, beating any late layout shifts.
    requestAnimationFrame(() => {
      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    });
  }, []);

  return null;
}
