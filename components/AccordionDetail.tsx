"use client";

import { useState } from "react";

/**
 * AccordionDetail — collapsible region inside a card-shaped container.
 *
 * Single source of truth for nested accordion strips used in:
 *   - components/HowIWork.tsx — homepage engagement-mode cards
 *   - app/engagements/page.tsx — engagement type sections (What's included,
 *     When this works) and Advisory sub-cards (Snapshot, Sprint, Diagnostic)
 *
 * Visual model: sits as a softer, nested card (rounded-xl, border-subtle)
 * inside a parent card-surface; one tier quieter than its container so the
 * containment reads naturally rather than as a card-in-card duplicate.
 *
 * Behavior:
 *   - Collapsed by default.
 *   - Accessible toggle button (aria-expanded / aria-controls), keyboard-operable.
 *   - Smooth grid-rows height animation that respects content of any length,
 *     no fixed max-height guesswork.
 *   - prefers-reduced-motion users get instant show/hide (no transition).
 */
export function AccordionDetail({
  id,
  label,
  children,
}: {
  id: string;
  label: string;
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="mt-6 rounded-xl card-surface border border-border-subtle p-5 md:p-6">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls={id}
        className="flex w-full items-center justify-between gap-4 text-left group"
      >
        <span className="text-base font-medium text-text-primary">{label}</span>
        <span
          aria-hidden="true"
          className={`shrink-0 text-text-tertiary transition-transform duration-300 group-hover:text-text-secondary ${
            open ? "rotate-180" : "rotate-0"
          }`}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
      </button>

      <div
        id={id}
        className={`grid transition-[grid-template-rows] duration-300 ease-out motion-reduce:transition-none ${
          open ? "grid-rows-[1fr] mt-4" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">{children}</div>
      </div>
    </div>
  );
}
