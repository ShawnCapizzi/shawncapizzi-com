"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import type { FaqItem } from "@/lib/faq";

/**
 * The FAQ list with an Expand all / Close all control. Content comes from
 * lib/faq.ts and renders on the server inside native <details>, so every
 * answer is in the HTML crawlers read, open or closed. Only the toggle
 * behavior runs in the browser.
 */
export function FaqAccordion({ items }: { items: FaqItem[] }) {
  const [allOpen, setAllOpen] = useState(false);
  const detailsRefs = useRef<(HTMLDetailsElement | null)[]>([]);

  const toggleAll = () => {
    const next = !allOpen;
    setAllOpen(next);
    detailsRefs.current.forEach((el) => {
      if (el) el.open = next;
    });
  };

  // Sync state if user toggles individual items so the global button stays accurate
  useEffect(() => {
    const checkAllOpen = () => {
      const allAreOpen = detailsRefs.current.every((el) => el?.open);
      const noneAreOpen = detailsRefs.current.every((el) => !el?.open);
      if (allAreOpen) setAllOpen(true);
      else if (noneAreOpen) setAllOpen(false);
    };
    const handlers: Array<() => void> = [];
    detailsRefs.current.forEach((el) => {
      if (el) {
        const h = () => checkAllOpen();
        el.addEventListener("toggle", h);
        handlers.push(() => el.removeEventListener("toggle", h));
      }
    });
    return () => handlers.forEach((cleanup) => cleanup());
  }, []);

  return (
    <>
      {/* CONTROLLER */}
      <section className="pb-6 md:pb-8">
        <div className="max-w-content mx-auto px-6 md:px-8 lg:px-12">
          <div className="max-w-3xl flex items-center justify-end">
            <button
              type="button"
              onClick={toggleAll}
              className="inline-flex items-center text-sm font-medium text-text-tertiary hover:text-text-primary transition-colors"
            >
              {allOpen ? "Close all" : "Expand all"}
              <span aria-hidden="true" className="ml-2">
                {allOpen ? "−" : "+"}
              </span>
            </button>
          </div>
        </div>
      </section>

      {/* ACCORDIONS */}
      <section className="pb-12 md:pb-16">
        <div className="max-w-content mx-auto px-6 md:px-8 lg:px-12">
          <div className="max-w-3xl space-y-3 md:space-y-4">
            {items.map((item, i) => (
              <details
                key={item.q}
                ref={(el) => {
                  detailsRefs.current[i] = el;
                }}
                className="group rounded-xl card-surface border border-border-default overflow-hidden"
              >
                <summary className="cursor-pointer list-none p-5 md:p-6 flex items-start justify-between gap-6 hover:bg-white/[0.02] transition-colors">
                  <h2 className="text-base md:text-lg font-semibold text-text-primary leading-tight">
                    {item.q}
                  </h2>
                  <span
                    aria-hidden="true"
                    className="flex-shrink-0 text-text-tertiary text-xl leading-none mt-0.5 transition-transform duration-200 group-open:rotate-45"
                  >
                    +
                  </span>
                </summary>
                <div className="px-5 md:px-6 pb-5 md:pb-6 -mt-1">
                  <p className="text-base md:text-lg text-text-secondary leading-relaxed">
                    {item.a.map((seg, j) =>
                      typeof seg === "string" ? (
                        seg
                      ) : (
                        <Link
                          key={j}
                          href={seg.href}
                          className="text-link hover:text-link-hover transition-colors"
                        >
                          {seg.text}
                        </Link>
                      )
                    )}
                  </p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
