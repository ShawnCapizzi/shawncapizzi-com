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
          <div className="max-w-3xl disclosure-list">
            {items.map((item, i) => (
              <details
                key={item.q}
                ref={(el) => {
                  detailsRefs.current[i] = el;
                }}
                className="group disclosure-item"
              >
                <summary className="cursor-pointer list-none py-6 md:py-7 flex items-start justify-between gap-6">
                  <h2 className="card-title text-text-primary text-balance">
                    {item.q}
                  </h2>
                  <span
                    aria-hidden="true"
                    className="mt-1 shrink-0 text-text-tertiary transition-transform duration-300 motion-reduce:transition-none group-open:rotate-180"
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </summary>
                <div className="pb-7 md:pb-8 pr-10 md:pr-12">
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
