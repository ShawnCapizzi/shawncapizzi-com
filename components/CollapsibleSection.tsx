"use client";

import { useState } from "react";

/**
 * CollapsibleSection — a labeled, collapsed-by-default region for long prose
 * sections in a case study (e.g. The Approach, What this means).
 *
 * Lets scanners skim the page (titles, visuals, outcomes) without a wall of
 * copy, while deep-readers can expand the full text. Matches the homepage
 * accordion behavior:
 *   - Collapsed by default.
 *   - Accessible toggle button (aria-expanded / aria-controls), keyboard-operable.
 *   - Smooth grid-rows height animation; respects prefers-reduced-motion.
 *
 * The heading is rendered as the toggle, so the section title doubles as the
 * expand control (with a rotating chevron affordance). Since November 2026
 * it is no longer a card: the heading sits in the section-title role like
 * every other H2 on a case study, with the chevron at the right and the
 * prose opening beneath. It carries no hairlines of its own, because the
 * section that holds it already has one; the hairlines belong to the
 * multi-item disclosure lists (the ways on /how-i-help, the FAQ), where
 * they separate items.
 */
export function CollapsibleSection({
  id,
  heading,
  children,
  defaultOpen = false,
}: {
  id: string;
  heading: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className="max-w-3xl">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls={id}
        className="flex w-full items-center justify-between gap-6 text-left"
      >
        <h2 className="section-title text-text-primary text-balance">
          {heading}
        </h2>
        <span
          aria-hidden="true"
          className={`shrink-0 text-text-tertiary transition-transform duration-300 motion-reduce:transition-none ${
            open ? "rotate-180" : "rotate-0"
          }`}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6 9l6 6 6-6"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </button>

      <div
        id={id}
        className={`grid transition-[grid-template-rows] duration-300 ease-out motion-reduce:transition-none ${
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        {/* inert while collapsed: the text stays in the HTML for readers
            and crawlers, but hidden links are not keyboard tab stops. */}
        <div className="overflow-hidden" inert={!open}>
          <div className="pr-10 md:pr-12">{children}</div>
        </div>
      </div>
    </div>
  );
}
