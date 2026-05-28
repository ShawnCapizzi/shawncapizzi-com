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
 * expand control (with a rotating chevron affordance).
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
    <div className="rounded-2xl card-surface border border-border-default hover:border-border-strong transition-colors p-6 md:p-8">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls={id}
        className="group flex w-full items-center justify-between gap-4 text-left"
      >
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
          {heading}
        </h2>
        <span
          aria-hidden="true"
          className={`shrink-0 text-text-tertiary transition-transform duration-300 group-hover:text-text-secondary ${
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
          open ? "grid-rows-[1fr] mt-8 md:mt-10" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">{children}</div>
      </div>
    </div>
  );
}
