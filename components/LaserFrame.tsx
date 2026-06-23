"use client";

import { useEffect, useRef, useState } from "react";
import "./laserframe.css";

/**
 * LaserFrame — a single metallic perimeter trace that fires once when the
 * element scrolls into view, then rests. Brand-restrained: cool silver,
 * one slow pass, no loop. The card's own border is the resting state; this
 * is just the glint.
 *
 * Drop inside any `position: relative` container with a rounded border.
 * Defaults are tuned for rounded-2xl (16px outer radius): the SVG insets
 * itself 1px, so the inner trace radius is 15px to stay concentric with the
 * card corner and ride just inside an `overflow-hidden` clip without clipping.
 * Pass `radius` to match a different corner (outer radius minus 1).
 *
 * Honors prefers-reduced-motion: skips the observer and the CSS shows a
 * static faint silver edge instead of any motion.
 *
 * The gradient id is shared across instances by design. Duplicate ids resolve
 * to the first match in every browser, and every instance uses the identical
 * gradient, so the result is visually uniform with no per-instance wiring.
 */
export function LaserFrame({ radius = 15 }: { radius?: number }) {
  const ref = useRef<SVGSVGElement | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Reduced motion: skip the observer entirely. CSS renders a static edge.
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const obs = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setInView(true);
            obs.disconnect(); // fire once, then stop watching
            break;
          }
        }
      },
      { threshold: 0.35 }
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
      <defs>
        <linearGradient id="sc-metallic" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#8a8f99" />
          <stop offset="38%" stopColor="#d7dbe2" />
          <stop offset="50%" stopColor="#ffffff" />
          <stop offset="62%" stopColor="#d7dbe2" />
          <stop offset="100%" stopColor="#9aa0aa" />
        </linearGradient>
      </defs>
      <rect
        className="laser"
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
