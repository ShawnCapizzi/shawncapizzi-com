"use client";

import { useState } from "react";
import Link from "next/link";
import { LaserFrame } from "./LaserFrame";

const CAL_URL = "https://cal.com/capizzi/30min";

/**
 * HowIWork — homepage engagement modes as a single-open accordion.
 *
 * Three modes (Leadership / Advisory / On Call) collapse to compact rows so
 * the section reads short before the case studies land, especially on mobile.
 * Clicking a closed row opens it and collapses the others; clicking the
 * already-open row is a no-op so there's always exactly one panel expanded.
 *
 * Accessibility: proper accordion pattern with aria-expanded, aria-controls,
 * inert on collapsed panels, and h3 wrapping each header button for correct
 * landmark structure. Smooth height animation uses the grid-rows [0fr]/[1fr]
 * technique, disabled under prefers-reduced-motion.
 *
 * To retune copy or add a mode: edit MODES below. No other changes needed.
 */

type Mode = {
  key: string;
  eyebrow: string;
  title: string;
  body: string;
  deliverables: string;
  href: string;
  linkLabel: string;
  laserDelay: number;
};

const MODES: Mode[] = [
  {
    key: "leadership",
    eyebrow: "Leadership",
    title: "Bring me in",
    body: "Senior UX, CX, IA, and content strategy leadership, embedded inside your live work. For agencies and in-house pharma, healthcare, and enterprise teams.",
    deliverables:
      "Campaigns · Platforms · Sites · Apps · Sales tools · Regulated brand programs",
    href: "/engagements#leadership",
    linkLabel: "See leadership engagements",
    laserDelay: 0,
  },
  {
    key: "advisory",
    eyebrow: "Advisory",
    title: "Hire me to advise",
    body: "Product design and experience-first user flows that lift sign-ups and product adoption. Senior counsel, without a full-time hire.",
    deliverables:
      "CRM and onboarding flows · AI adoption · Design system governance · Regulatory redesign",
    href: "/engagements#advisory",
    linkLabel: "See advisory engagements",
    laserDelay: -3.3,
  },
  {
    key: "oncall",
    eyebrow: "On Call",
    title: "Keep me on call",
    body: "A monthly retainer for leaders who want a senior thinking partner on hand between the big decisions. An honest extension of your team, there to talk through the product refinements and implementations you'd rather not handle alone.",
    deliverables:
      "Vendor management · Dev team direction (on/offshore) · Time and budget tradeoffs · Working sessions",
    href: "/engagements#oncall",
    linkLabel: "See on-call engagements",
    laserDelay: -6.6,
  },
];

export function HowIWork() {
  // First row open by default so the section reads substantive on landing.
  const [openKey, setOpenKey] = useState<string>(MODES[0].key);

  return (
    <section className="py-24 md:py-32">
      <div className="max-w-content mx-auto px-6 md:px-8 lg:px-12">
        {/* Header */}
        <div className="max-w-3xl">
          <p className="eyebrow mb-4">Engagement model</p>
          <h2 className="text-3xl md:text-3xl lg:text-[30px] font-semibold tracking-tight leading-tight">
            How I work with teams
          </h2>
          <p className="mt-6 text-lg md:text-xl text-text-secondary leading-relaxed">
            Start by solving or defining a single business opportunity, then
            grow from there. The intensity flexes as your needs change; the
            partnership holds. Not sure where you fit? Share your goals or pain
            points and we&apos;ll figure it out together.
          </p>
          {/* AI as a working partner */}
          <p className="mt-6 text-lg md:text-xl text-text-secondary leading-relaxed">
            AI runs through most of this work now, as a speed-and-rigor
            partner: more options explored, more drafts pressure-tested,
            faster paths from idea to a working prototype you can test.
          </p>
          <p className="mt-3 text-lg md:text-xl text-text-secondary leading-relaxed">
            When organizations can&apos;t find where AI adds value or make
            adoption stick, I see an experience problem, not a tooling one,
            and I&apos;ve built the systems myself.
          </p>
          <div className="mt-8">
            <a
              href={CAL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-base font-medium text-link hover:text-link-hover transition-colors"
            >
              Talk through the role or project <span aria-hidden="true" className="ml-2">→</span>
            </a>
          </div>
        </div>

        {/* Three modes — single-open accordion */}
        <div className="mt-16 md:mt-20 space-y-4">
          {MODES.map((mode) => {
            const isOpen = mode.key === openKey;
            const panelId = `mode-panel-${mode.key}`;
            const buttonId = `mode-button-${mode.key}`;
            return (
              <article
                key={mode.key}
                className="relative rounded-2xl card-surface border border-border-default hover:border-border-strong transition-colors"
              >
                <h3 className="m-0">
                  <button
                    type="button"
                    id={buttonId}
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => setOpenKey(mode.key)}
                    className="w-full text-left p-7 md:p-8 flex items-start justify-between gap-6 cursor-pointer"
                  >
                    <span className="flex flex-col">
                      <span className="font-mono text-xs tracking-widest uppercase text-text-tertiary">
                        {mode.eyebrow}
                      </span>
                      <span className="mt-3 text-xl md:text-2xl font-semibold tracking-tight leading-tight text-text-primary">
                        {mode.title}
                      </span>
                    </span>
                    <svg
                      aria-hidden="true"
                      className={`shrink-0 h-5 w-5 mt-1 text-text-tertiary transition-transform duration-300 motion-reduce:transition-none ${
                        isOpen ? "rotate-180" : ""
                      }`}
                      viewBox="0 0 20 20"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 8l5 5 5-5" />
                    </svg>
                  </button>
                </h3>

                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  inert={!isOpen}
                  className={`grid transition-[grid-template-rows,opacity] duration-300 ease-out motion-reduce:transition-none ${
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="px-7 md:px-8 pb-7 md:pb-8">
                      <p className="text-base text-text-secondary leading-relaxed">
                        {mode.body}
                      </p>
                      <p className="mt-4 text-sm text-text-tertiary leading-relaxed">
                        {mode.deliverables}
                      </p>
                      <div className="mt-6">
                        <Link
                          href={mode.href}
                          className="inline-flex items-center text-sm font-medium text-link hover:text-link-hover transition-colors"
                        >
                          {mode.linkLabel}{" "}
                          <span aria-hidden="true" className="ml-2">
                            →
                          </span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>

                <LaserFrame radius={15} delay={mode.laserDelay} />
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
