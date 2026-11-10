"use client";

import { useState } from "react";
import { WaysSketch, type WaysKind } from "@/components/WaysSketch";

/**
 * WaysGroups: the "A few ways I can help" groups on /how-i-help (October
 * 2026). Three Capizzi Process principles, each with its drawing, name, and
 * definition, then the ways it guides as a collapsible list.
 *
 * Every way starts closed and shows only its title and a one-line tease
 * written in the visitor's own situation, so a scan of the page reads like
 * a checklist of "is this me?" and they open only what fits. Tap opens the
 * full text. No hover (Shawn does not want hover triggers).
 *
 * November 2026: the ways were cards (filled surface, border, two-up on
 * desktop). Filled, they competed with the page; unfilled, they read as a
 * stack of dark boxes on a phone. They are now a divider list, the pattern
 * the whole site now uses (.disclosure-list in globals.css): one column at
 * the page's reading measure, a hairline above the first item and below
 * each, nothing filled or outlined. The principle
 * header keeps its sketch and hash rule, so each principle still has its
 * mark and the ways under it read as a list rather than a row of tiles.
 *
 * Each item is an accessible toggle
 * button (aria-expanded, aria-controls), a chevron that turns, and a
 * grid-rows height animation that respects reduced motion. The full text is
 * in the HTML whether open or closed, so crawlers still read it.
 *
 * "Open all details" / "Close all details" sits above the first group, the
 * way the FAQ offers Expand all, for the reader who wants everything. It
 * reflects the items' real state: it reads "Close" only when every item is
 * open.
 */

/** `wide` is accepted for older data and ignored: the list is one column. */
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
            {/* Principle header (October 2026): the drawing on top, large,
                then the name and definition beside a vertical hash rule, the
                same mark /about uses for its pull quotes, so a principle
                reads differently from the list under it. The drawing lights
                as it scrolls in. */}
            <div className="mb-8 md:mb-10">
              <div className="w-full max-w-[30rem] mb-6 md:mb-8">
                <WaysSketch kind={g.kind} seed={g.seed} />
              </div>
              <div className="hash-rule pl-5 md:pl-6">
                <h3 className="card-title text-text-primary">{g.name}</h3>
                <p className="body-text mt-2 max-w-2xl text-text-secondary text-pretty">
                  {g.line}
                </p>
              </div>
            </div>

            {/* The divider list. One column at max-w-3xl, the measure the
                rest of the page reads at, so an open paragraph sits at the
                same width as the principle's definition above it. */}
            <div className="max-w-3xl disclosure-list">
              {g.ways.map((way) => {
                const id = slug(way.title);
                const isOpen = !!open[id];
                return (
                  <article key={id} className="disclosure-item">
                    <button
                      type="button"
                      onClick={() => toggle(id)}
                      aria-expanded={isOpen}
                      aria-controls={`${id}-detail`}
                      className="disclosure-trigger flex w-full items-start justify-between gap-6 py-6 md:py-7 text-left"
                    >
                      <span className="min-w-0">
                        <span className="block card-title text-text-primary text-balance">
                          {way.title}
                        </span>
                        <span className="card-text mt-2 block text-text-secondary text-pretty">
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
                        <p className="body-text -mt-3 pb-7 md:pb-8 pr-10 md:pr-12 text-text-secondary text-pretty">
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
