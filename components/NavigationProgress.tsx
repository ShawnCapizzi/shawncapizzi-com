"use client";

import { usePathname } from "next/navigation";

/**
 * NavigationProgress — short gradient line that sweeps under the nav
 * three times on every page load, each pass dimmer than the last.
 *
 *   Pass 1: ~95% bright, 0ms delay
 *   Pass 2: ~55% bright, 1000ms delay
 *   Pass 3: ~25% bright, 2000ms delay
 *
 * Total duration ~3 seconds. The animation restarts on every route
 * change because the inner element is keyed on pathname — React
 * remounts it on path change, which restarts the CSS animations
 * from delay=0 cleanly.
 *
 * Respects prefers-reduced-motion: animations disabled via globals.css.
 *
 * Position: under the nav (top: 64px mobile, 72px desktop) — controlled
 * by the .nav-shimmer class in globals.css.
 */
export function NavigationProgress() {
  const pathname = usePathname();

  return (
    <div className="nav-shimmer" aria-hidden="true">
      <div key={pathname} className="nav-shimmer-inner">
        <div className="nav-shimmer-pass nav-shimmer-pass-1" />
        <div className="nav-shimmer-pass nav-shimmer-pass-2" />
        <div className="nav-shimmer-pass nav-shimmer-pass-3" />
      </div>
    </div>
  );
}
