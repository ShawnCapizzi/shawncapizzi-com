// Destination: components/WhenToBringMeIn.tsx
"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

/**
 * WhenToBringMeIn: homepage self-qualification module.
 *
 * A self-recognition mirror: scannable "this is you if..." statements that
 * let a visitor identify themselves without filling out a form. Placed after
 * HeroBottom and before HowIWork so the "why now" lands before the "how we
 * work" (the engagement modes).
 *
 * The spread of the bullets is deliberate. Regulated and pharma authority
 * is the spine (1 and 4). Bullets 2 and 3 speak to leaders whose plan or AI
 * initiative has stalled. Bullet 5 is written for merged agency networks
 * working one client with several inherited vocabularies. Bullet 6 is the
 * embedded internal-tools work, in the buyer's own words.
 *
 * This section does not repeat the strategy call. The homepage asks once at
 * the top and once at the bottom; here the link goes deeper, to engagements.
 *
 * To retune who this speaks to, edit SITUATIONS below. No other changes.
 */

const SITUATIONS = [
  "You work in a regulated category where the product and brand experience has to survive medical, legal, and regulatory review and still work for a human.",
  "You need someone who can turn ambiguity into a scoped plan, and the story that wins the room.",
  "Your AI initiative is stuck between strategy, workflow, and trust.",
  "Your design system exists, but governance and adoption are breaking down.",
  "Merged teams are working one client with three different vocabularies for the same deliverable.",
  "The tool your department has waited years for is still a spreadsheet.",
];

export function WhenToBringMeIn() {
  // Reveal-on-scroll for the list. Each item fades and slides up in sequence
  // when the list enters the viewport. Fires once, then disconnects, so there
  // is no re-triggering on scroll back. Reduced motion is handled in CSS on
  // each item (motion-reduce: forces the resting state), which keeps this
  // effect free of synchronous setState calls.
  const listRef = useRef<HTMLUListElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = listRef.current;
    if (!node) return;

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setVisible(true);
            io.disconnect();
            break;
          }
        }
      },
      { rootMargin: "0px 0px -15% 0px", threshold: 0.1 }
    );
    io.observe(node);
    return () => io.disconnect();
  }, []);

  return (
    <section className="py-24 md:py-32 border-t border-border-subtle">
      <div className="max-w-content mx-auto px-6 md:px-8 lg:px-12">
        <div className="max-w-3xl">
          <p className="eyebrow mb-4">When to bring me in</p>
          <h2 className="text-3xl md:text-3xl lg:text-[30px] font-semibold tracking-tight leading-tight">
            You should talk to me if any of this sounds familiar.
          </h2>
          <p className="mt-6 text-lg md:text-xl text-text-secondary leading-relaxed">
            The industry changes across pharma, fintech, agency, enterprise, and
            founder-led teams. The pattern usually does not.
          </p>
        </div>

        <ul
          ref={listRef}
          className="mt-12 md:mt-16 max-w-3xl space-y-6 md:space-y-7"
        >
          {SITUATIONS.map((situation, i) => (
            <li
              key={i}
              className={`border-l-2 border-border-strong pl-5 md:pl-6 text-lg md:text-xl text-text-primary leading-relaxed transition-all duration-700 ease-out motion-reduce:transition-none motion-reduce:opacity-100 motion-reduce:translate-y-0 ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
              }`}
              style={{ transitionDelay: visible ? `${i * 120}ms` : "0ms" }}
            >
              {situation}
            </li>
          ))}
        </ul>

        <div className="mt-12 md:mt-16">
          <Link
            href="/engagements"
            className="inline-flex items-center text-base font-medium text-link hover:text-link-hover transition-colors"
          >
            See how engagements work{" "}
            <span aria-hidden="true" className="ml-2">
              &rarr;
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
