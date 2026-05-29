"use client";

import { useEffect, useRef, useState } from "react";

/**
 * CursorGlow — a soft, low-opacity radial glow in the brand purple that
 * eases toward the cursor position, lightening the dark background around
 * the pointer. Adds ambient depth without pulling focus.
 *
 * Design constraints (deliberate):
 *   - Brand purple, very low opacity — reads as "lighting," not "an effect."
 *   - Eased follow (lerp) so it trails the cursor smoothly rather than
 *     snapping, which feels more considered.
 *   - Pointer-events: none — never intercepts clicks.
 *   - Sits ABOVE page content (z-index 5) with mix-blend-mode: screen, so it
 *     washes over cards and sections as the cursor passes — only ever
 *     lightening, never darkening or covering text.
 *   - Disabled on touch devices (no cursor) and when the user prefers
 *     reduced motion.
 *   - Fades in on first mouse move so there's no glow parked in a corner
 *     on load.
 *
 * Tuning: adjust GLOW_SIZE (radius) and GLOW_OPACITY (intensity) below.
 */

const GLOW_SIZE = 600; // diameter of the glow in px
const GLOW_OPACITY = 0.1069; // 0–1; higher = brighter. ~41% dimmer than the original 0.18, for additional subtlety.
const EASE = 0.12; // 0–1; lower = more lag/trail, higher = snappier.

export function CursorGlow() {
  const glowRef = useRef<HTMLDivElement | null>(null);
  const [enabled, setEnabled] = useState(false);

  // target = where the cursor is; current = where the glow currently is.
  const target = useRef({ x: -9999, y: -9999 });
  const current = useRef({ x: -9999, y: -9999 });
  const visible = useRef(false);
  const raf = useRef<number | null>(null);

  useEffect(() => {
    // Respect reduced-motion and skip on touch / no-hover devices.
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    const canHover = window.matchMedia("(hover: hover)").matches;
    if (prefersReducedMotion || !canHover) {
      setEnabled(false);
      return;
    }
    setEnabled(true);

    const onMove = (e: MouseEvent) => {
      target.current.x = e.clientX;
      target.current.y = e.clientY;
      if (!visible.current) {
        visible.current = true;
        if (glowRef.current) glowRef.current.style.opacity = "1";
      }
    };

    const tick = () => {
      current.current.x += (target.current.x - current.current.x) * EASE;
      current.current.y += (target.current.y - current.current.y) * EASE;
      if (glowRef.current) {
        glowRef.current.style.transform = `translate3d(${
          current.current.x - GLOW_SIZE / 2
        }px, ${current.current.y - GLOW_SIZE / 2}px, 0)`;
      }
      raf.current = requestAnimationFrame(tick);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    raf.current = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("mousemove", onMove);
      if (raf.current) cancelAnimationFrame(raf.current);
    };
  }, []);

  if (!enabled) return null;

  return (
    <div
      ref={glowRef}
      aria-hidden="true"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: GLOW_SIZE,
        height: GLOW_SIZE,
        borderRadius: "50%",
        pointerEvents: "none",
        opacity: 0,
        transition: "opacity 600ms ease",
        background: `radial-gradient(circle, rgba(107,92,255,${GLOW_OPACITY}) 0%, rgba(107,92,255,${
          GLOW_OPACITY * 0.5
        }) 30%, rgba(107,92,255,0) 70%)`,
        willChange: "transform",
        zIndex: 5,
        mixBlendMode: "screen",
      }}
    />
  );
}
