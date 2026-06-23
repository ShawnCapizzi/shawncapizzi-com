"use client";

import { useEffect, useRef, useState } from "react";
import "./laserframe.css";

/**
 * LaserFrame — a soft indigo comet that orbits the card edge.
 *
 * A glowing head with a trailing halo (the same luminous quality as the
 * cursor cloud) travels the rounded perimeter on a slow, continuous loop,
 * so it's always there to catch mid-scroll rather than a one-shot you miss.
 *
 * Drop inside any `position: relative` container with a rounded border.
 * Defaults are tuned for rounded-2xl (16px outer radius): the SVG insets
 * itself 1px, so the inner trace radius is 15px to stay concentric with the
 * card corner and ride just inside an `overflow-hidden` clip. Pass `radius`
 * to match a different corner (outer radius minus 1).
 *
 * Honors prefers-reduced-motion: no orbit, just a faint static indigo edge.
 * The orbit only runs while the card is in view (perf + intent).
 */
export function LaserFrame({ radius = 15 }: { radius?: number }) {
  const ref = useRef<SVGSVGElement | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Reduced motion: show the static edge, skip the observer.
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setInView(true);
      return;
    }

    const obs = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) setInView(entry.isIntersecting);
      },
      { threshold: 0.2 }
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <svg
      ref={ref}
      className={`sc-frame${inView ? " is-inview" : ""}`}
      aria-hidden="true"
      focusable="false"
    >
      <rect
        className="comet comet-glow"
        x="0"
        y="0"
        width="100%"
        height="100%"
        rx={radius}
        ry={radius}
        pathLength={100}
      />
      <rect
        className="comet comet-mid"
        x="0"
        y="0"
        width="100%"
        height="100%"
        rx={radius}
        ry={radius}
        pathLength={100}
      />
      <rect
        className="comet comet-head"
        x="0"
        y="0"
        width="100%"
        height="100%"
        rx={radius}
        ry={radius}
        pathLength={100}
      />
    </svg>
  );
}
