"use client";

import { useEffect, useRef, useState } from "react";

/**
 * BookReaderThumb — a living reader panel for the book CTA card.
 *
 * Cross-fades short lines from Chapter 1 inside a dark reader-style panel,
 * so the thumbnail reads as "a real book with a real reader" but breathes.
 * Auto-rotates, pauses on hover (desktop), and respects reduced motion
 * (shows the first line, static). Marked aria-hidden so screen readers get
 * the card's real title and description rather than a rotating quote stream.
 *
 * Drops into the card's existing image box (absolute inset-0), so it inherits
 * whatever aspect ratio the card sets. The card itself stays the link target.
 */

const DEFAULT_QUOTES = [
  "When someone is already overwhelmed, the last thing they need is novelty.",
  "A pattern they've seen a hundred times asks nothing of them.",
  "It's the closest a screen gets to a steady hand on the shoulder.",
  "Design for the temporary crisis, the temporary confusion, the temporary pain.",
];

export function BookReaderThumb({
  quotes = DEFAULT_QUOTES,
  interval = 6250,
}: {
  quotes?: string[];
  interval?: number;
}) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const reduce = useRef(false);

  useEffect(() => {
    reduce.current = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (reduce.current || paused || quotes.length <= 1) return;

    const id = setInterval(
      () => setIndex((p) => (p + 1) % quotes.length),
      interval
    );
    return () => clearInterval(id);
  }, [paused, quotes.length, interval]);

  return (
    <div
      aria-hidden="true"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      className="absolute inset-0 overflow-hidden bg-[#0b1020]"
    >
      {/* reader-page gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#141d33] to-[#0a0f1e]" />

      {/* quote stack */}
      <div className="relative flex h-full w-full items-center">
        <div className="w-full px-7 md:px-9">
          <span className="mb-3 block font-mono text-[10px] uppercase tracking-[0.2em] text-[#9aa6ff]">
            From Chapter 1
          </span>

          <div className="relative min-h-[170px] md:min-h-[220px]">
            {quotes.map((q, idx) => (
              <p
                key={idx}
                className={`absolute inset-0 border-l-2 border-[#6b5cff]/55 pl-4 font-serif text-[29px] italic leading-snug text-[#d6dceb] transition-opacity duration-1000 ease-in-out md:text-[37px] ${
                  idx === index ? "opacity-100" : "opacity-0"
                }`}
              >
                {q}
              </p>
            ))}
          </div>
        </div>
      </div>

      {/* progress dots */}
      <div className="absolute bottom-3 left-7 flex gap-1.5 md:left-9">
        {quotes.map((_, idx) => (
          <span
            key={idx}
            className={`h-1.5 w-1.5 rounded-full transition-colors ${
              idx === index ? "bg-[#9aa6ff]" : "bg-[#37415a]"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
