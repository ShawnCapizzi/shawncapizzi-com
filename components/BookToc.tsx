"use client";

import { useState } from "react";
import Image from "next/image";

/**
 * BookToc: the interactive table of contents on /book/chapter-1, between the
 * book intro and the reader (October 2026).
 *
 * The free piece is the Foreword, "The Human Condition", so it gets its own
 * row above the parts and jumps to the reader. The four parts are tabs; each
 * part opens with its breaker chapter, then its chapters. Titles are Shawn's,
 * word for word, from his table of contents. The short breaker tags (Intro,
 * Spirit, IRL, AI) come from his A to D labels; "AI" was added for D.
 *
 * To change a title or add a chapter, edit PARTS below.
 */

type Part = {
  label: string;
  name: string;
  breaker: { tag: string; title: string; sub: string };
  chapters: [number, string][];
};

const PARTS: Part[] = [
  {
    label: "Part I",
    name: "Foundational Principles",
    breaker: { tag: "Intro", title: "Strategic Design in Complex Organizations", sub: "From Individual Craft to Integrated Systems" },
    chapters: [
      [1, "Visual Design & Content Strategy Foundation"],
      [2, "Strategic Positioning & Discovery Methodology"],
      [3, "User Personas & Purposeful Segmentation"],
      [4, "Community Design Principles for 2025"],
    ],
  },
  {
    label: "Part II",
    name: "Strategic Application",
    breaker: { tag: "Spirit", title: "The Art of Receiving", sub: "Beyond Process to Presence" },
    chapters: [
      [5, "Marketing Communications & Regulated Markets"],
      [6, "Readability & Multi-Viewport Excellence"],
      [7, "Enterprise Design Systems & Governance"],
      [8, "Navigation & Information Architecture Excellence"],
    ],
  },
  {
    label: "Part III",
    name: "Advanced Strategic Thinking",
    breaker: { tag: "IRL", title: "Design in Context", sub: "Enterprise vs. Startup Realities" },
    chapters: [
      [9, "Cross-Industry Pattern Recognition"],
      [10, "Crisis Design & Rapid Pivoting"],
      [11, "The Economics of Design Strategy"],
    ],
  },
  {
    label: "Part IV",
    name: "Systematic Solution Building",
    breaker: { tag: "AI", title: "The Fourth Dimension of Design", sub: "AI as Strategic Partner in Modern Experience Creation" },
    chapters: [
      [12, "Strategic Presentation & Client Communication"],
      [13, "From Problem to Product: Strategic Design Thinking in Action"],
      [14, "Building Your Own Strategic Framework"],
      [15, "The Designer as Business Translator"],
    ],
  },
];

const CHAPTER_COUNT = PARTS.reduce((n, p) => n + p.chapters.length, 0);

export function BookToc() {
  const [sel, setSel] = useState(0);
  const part = PARTS[sel];

  return (
    <section aria-labelledby="book-toc-title" className="mt-14 md:mt-20">
      <p className="eyebrow mb-3">Inside the book</p>
      <h2 id="book-toc-title" className="section-title text-balance">
        What&apos;s in Seeing Past the Cage.
      </h2>
      <p className="mt-4 max-w-2xl text-base md:text-lg text-text-secondary leading-relaxed text-pretty">
        Four parts, each opened by a short breaker chapter. The foreword is
        free below. Select a part to see what&apos;s in it.
      </p>
      <p className="mt-5 flex flex-wrap gap-x-7 gap-y-2 font-mono text-xs md:text-sm tracking-widest uppercase text-text-tertiary">
        <span><span className="text-text-primary">{PARTS.length}</span> parts</span>
        <span><span className="text-text-primary">{CHAPTER_COUNT}</span> chapters</span>
        <span><span className="text-text-primary">{PARTS.length}</span> breakers</span>
      </p>

      <div className="mt-8 md:mt-10 grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-8 lg:gap-10 items-start">
        <div>
          <div className="relative aspect-[16/9] lg:aspect-[4/3] rounded-2xl overflow-hidden border border-border-default">
            <Image
              src="/images/process/seeing-past-the-cage-book.jpg"
              alt="Seeing Past the Cage by Shawn Capizzi, hardcover"
              fill
              sizes="(max-width: 1024px) 100vw, 300px"
              className="object-cover"
            />
          </div>
          <dl className="mt-5 space-y-3 text-sm text-text-secondary leading-snug">
            <div>
              <dt className="font-mono text-[11px] tracking-widest uppercase text-text-tertiary">Opens with</dt>
              <dd className="mt-1">Foreword: The Human Condition</dd>
              <dd className="mt-1">Introduction: From Crayons to Code</dd>
            </div>
            <div>
              <dt className="font-mono text-[11px] tracking-widest uppercase text-text-tertiary">Closes with</dt>
              <dd className="mt-1 text-pretty">
                Conclusion: Principles for Professional Excellence in the Democratic Design Era
              </dd>
            </div>
          </dl>
        </div>

        <div>
          <a
            href="#foreword"
            className="group flex items-center gap-4 rounded-2xl border border-[#6B5CFF]/60 hover:border-[#8F84FF] card-surface px-5 md:px-6 py-4 transition-colors"
          >
            <span className="font-mono text-xs tracking-widest uppercase text-link">Foreword</span>
            <span className="flex-1 font-[family-name:var(--font-instrument-sans)] text-base md:text-lg font-medium text-text-primary">
              The Human Condition
            </span>
            <span className="shrink-0 rounded-full bg-[#A798FF] px-3 py-1 font-mono text-[11px] tracking-wider uppercase text-[#0B0B12]">
              Free below <span aria-hidden="true">&darr;</span>
            </span>
          </a>

          <div role="tablist" aria-label="Parts of the book" className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-2">
            {PARTS.map((p, i) => {
              const on = i === sel;
              return (
                <button
                  key={p.label}
                  type="button"
                  role="tab"
                  id={`toc-tab-${i}`}
                  aria-selected={on}
                  aria-controls="toc-panel"
                  onClick={() => setSel(i)}
                  className={`text-left rounded-xl border px-3.5 py-3 transition-colors ${
                    on
                      ? "border-[#6B5CFF] bg-[#6B5CFF]/10"
                      : "border-border-default hover:border-border-strong bg-white/[0.02]"
                  }`}
                >
                  <span className={`block font-mono text-[11px] tracking-widest uppercase ${on ? "text-link" : "text-text-tertiary"}`}>
                    {p.label}
                  </span>
                  <span className={`mt-1 block font-[family-name:var(--font-instrument-sans)] text-[15px] md:text-base font-semibold leading-tight ${on ? "text-text-primary" : "text-text-secondary"}`}>
                    {p.name}
                  </span>
                </button>
              );
            })}
          </div>

          <div
            id="toc-panel"
            role="tabpanel"
            aria-labelledby={`toc-tab-${sel}`}
            className="mt-3 rounded-2xl card-surface border border-border-default px-5 md:px-7 py-5 md:py-6"
          >
            <div className="flex items-baseline gap-4 pb-4 border-b border-dashed border-[#A798FF]/35">
              <span className="font-mono text-xs tracking-widest uppercase text-link whitespace-nowrap">
                {part.breaker.tag} ))
              </span>
              <div>
                <p className="font-[family-name:var(--font-instrument-sans)] text-base md:text-lg font-semibold text-text-primary text-pretty">
                  {part.breaker.title}
                </p>
                <p className="mt-0.5 text-sm text-text-tertiary text-pretty">
                  {part.breaker.sub} · Breaker chapter
                </p>
              </div>
            </div>
            <ol>
              {part.chapters.map(([n, title]) => (
                <li
                  key={n}
                  className="grid grid-cols-[36px_1fr] md:grid-cols-[44px_1fr_auto] gap-x-3 items-center py-3.5 border-b border-white/[0.07] last:border-b-0"
                >
                  <span className="font-mono text-sm text-text-tertiary">{String(n).padStart(2, "0")}</span>
                  <span className="font-[family-name:var(--font-instrument-sans)] text-base md:text-lg text-text-primary/90 text-pretty">{title}</span>
                  <span className="col-start-2 md:col-start-auto mt-1 md:mt-0 font-mono text-[11px] tracking-widest uppercase text-text-tertiary">
                    In the book
                  </span>
                </li>
              ))}
            </ol>
          </div>

          <p className="mt-4 flex flex-wrap items-center justify-between gap-2 text-sm text-text-secondary">
            <span>The book is written. Get the next chapter when it&apos;s ready.</span>
            <a href="#read" className="font-medium text-link hover:text-link-hover transition-colors">
              Get on the list <span aria-hidden="true">&rarr;</span>
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
