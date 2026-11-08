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
 * it is a one-item disclosure list (.disclosure-list in globals.css), the
 * same pattern as the FAQ and the ways on /how-i-help: hairlines, no card.
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
    <div className="max-w-3xl disclosure-list">
      <div className="disclosure-item">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls={id}
        className="flex w-full items-start justify-between gap-6 py-6 md:py-7 text-left"
      >
        <h2 className="card-title text-text-primary text-balance">
          {heading}
        </h2>
        <span
          aria-hidden="true"
          className={`mt-1 shrink-0 text-text-tertiary transition-transform duration-300 motion-reduce:transition-none ${
            open ? "rotate-180" : "rotate-0"
          }`}
        >
          <svg
            width="20"
            height="20"
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
          <div className="pb-7 md:pb-8 pr-10 md:pr-12">{children}</div>
        </div>
      </div>
      </div>
    </div>
  );
}
