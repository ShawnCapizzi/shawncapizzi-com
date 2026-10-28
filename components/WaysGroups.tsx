"use client";

import { useState } from "react";
import { WaysSketch, type WaysKind } from "@/components/WaysSketch";

/**
 * WaysGroups: the "A few ways I can help" groups on /how-i-help (October
 * 2026). Three Capizzi Process principles, each with its drawing, name, and
 * definition, then the ways it guides as collapsible cards.
 *
 * Every card starts closed and shows only its title and a one-line tease
 * written in the visitor's own situation, so a scan of the page reads like
 * a checklist of "is this me?" and they open only what fits. Tap opens the
 * full text. No hover (Shawn does not want hover triggers).
 *
 * The card follows components/AccordionDetail.tsx: an accessible toggle
 * button (aria-expanded, aria-controls), a chevron that turns, and a
 * grid-rows height animation that respects reduced motion. The full text is
 * in the HTML whether open or closed, so crawlers still read it.
 *
 * "Open all details" / "Close all details" sits above the first group, the
 * way the FAQ offers Expand all, for the reader who wants everything. It
 * reflects the cards' real state: it reads "Close" only when every card is
 * open.
 */

export type Way = { title: string; tease: string; text: string; wide?: boolean };

export type WaysGroup = {
  kind: WaysKind;
  seed: number;
  name: string;
  line: string;
  ways: Way[];
};

function slug(s: string) {
  return s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

export function WaysGroups({ groups }: { groups: WaysGroup[] }) {
  const ids = groups.flatMap((g) => g.ways.map((w) => slug(w.title)));
  const [open, setOpen] = useState<Record<string, boolean>>({});

  const allOpen = ids.every((id) => open[id]);
  const toggleAll = () => {
    const next = !allOpen;
    setOpen(Object.fromEntries(ids.map((id) => [id, next])));
  };
  const toggle = (id: string) => setOpen((o) => ({ ...o, [id]: !o[id] }));

  return (
    <>
      <div className="flex justify-end mb-8 md:mb-10">
        <button
          type="button"
          onClick={toggleAll}
          className="inline-flex items-center text-sm font-medium text-text-tertiary hover:text-text-primary transition-colors"
        >
          {allOpen ? "Close all details" : "Open all details"}
          <span aria-hidden="true" className="ml-2">
            {allOpen ? "−" : "+"}
          </span>
        </button>
      </div>

      <div className="space-y-14 md:space-y-20">
        {groups.map((g) => (
          <div key={g.kind}>
            {/* Principle header: drawing left, name and definition right.
                Stacks on phones. The drawing lights as it scrolls in. */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-5 sm:gap-8 mb-6 md:mb-8">
              <div className="h-20 md:h-24 shrink-0">
                <WaysSketch kind={g.kind} seed={g.seed} />
              </div>
              <div>
                <h3 className="card-title text-text-primary">{g.name}</h3>
                <p className="mt-2 max-w-2xl text-base md:text-lg text-text-secondary leading-relaxed text-pretty">
                  {g.line}
                </p>
              </div>
            </div>

            {/* items-start: an open card grows on its own; its closed
                neighbor keeps its height instead of stretching to match. */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-start">
              {g.ways.map((way) => {
                const id = slug(way.title);
                const isOpen = !!open[id];
                return (
                  <article
                    key={id}
                    className={`relative rounded-2xl card-surface border border-border-default flex flex-col${
                      way.wide ? " md:col-span-2" : ""
                    }`}
                  >
                    <button
                      type="button"
                      onClick={() => toggle(id)}
                      aria-expanded={isOpen}
                      aria-controls={`${id}-detail`}
                      className="flex w-full items-start justify-between gap-6 p-8 md:p-10 text-left"
                    >
                      <span className="min-w-0">
                        <span className="block card-title text-text-primary text-balance">
                          {way.title}
                        </span>
                        <span className="mt-2 block text-base md:text-lg text-text-secondary leading-relaxed text-pretty">
                          {way.tease}
                        </span>
                      </span>
                      <span
                        aria-hidden="true"
                        className={`mt-1 shrink-0 text-text-tertiary transition-transform duration-300 motion-reduce:transition-none ${
                          isOpen ? "rotate-180" : "rotate-0"
                        }`}
                      >
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </span>
                    </button>

                    <div
                      id={`${id}-detail`}
                      className={`grid transition-[grid-template-rows] duration-300 ease-out motion-reduce:transition-none ${
                        isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <p className="px-8 md:px-10 pb-8 md:pb-10 text-base md:text-lg text-text-secondary leading-relaxed text-pretty">
                          {way.text}
                        </p>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
