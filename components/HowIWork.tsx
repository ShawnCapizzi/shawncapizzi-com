"use client";

import Link from "next/link";
import { AccordionDetail } from "./AccordionDetail";

const CAL_URL = "https://cal.com/capizzi/30min";

const ADVISORY_SHAPES = [
  {
    name: "Strategic Snapshot",
    description: "A focused diagnostic for a single, well-defined problem. Single deliverable.",
  },
  {
    name: "Engagement Sprint",
    description: "A scoped piece of work carried out over a few weeks. Defined problem, clear outcome.",
  },
  {
    name: "AI Opportunity Diagnostic",
    description:
      "I come in, ask the right questions, and help uncover where AI fits in your actual workflows and business model. Vendor-agnostic. Roadmap, not vendor list.",
  },
];

const ONCALL_INCLUDED = [
  "Working sessions on the decisions that matter, on your cadence",
  "Async document and decision review between sessions",
  "Slack or email access for fast calls when timing is tight",
  "Quarterly strategic alignment review tied to current goals",
];

export function HowIWork() {
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
            A flexible relationship that changes as business needs do. Start
            with a single piece of work and grow from there. Move between the
            options as needs change: the intensity flexes, the partnership
            holds. Not sure which? Share your goals or pain points and
            we&apos;ll figure it out together.
          </p>
          <p className="mt-5 text-lg md:text-xl text-text-secondary leading-relaxed">
            However you need to staff it: embedded experience lead, fractional
            product and AI strategy partner, senior advisor for regulated
            launches, migrations, and design systems, or a contract lead inside
            an agency, pharma, fintech, or enterprise team.
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

        {/* Three modes — one relationship, three shapes */}
        <div className="mt-16 md:mt-20 grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {/* Mode 1 — Leadership */}
          <article className="relative flex flex-col p-7 md:p-8 rounded-2xl card-surface border border-border-default hover:border-border-strong transition-colors">
            <p className="font-mono text-xs tracking-widest uppercase text-text-tertiary">
              Leadership
            </p>
            <h3 className="mt-3 text-xl md:text-2xl font-semibold tracking-tight leading-tight">
              Bring me in
            </h3>
            <p className="mt-4 flex-1 text-base text-text-secondary leading-relaxed">
              For agencies and in-house pharma, healthcare, and enterprise teams
              that need senior UX, IA, and content strategy leadership inside
              live work: campaigns, platforms, sites, apps, sales tools, and
              regulated brand programs.
            </p>

            <AccordionDetail id="leadership-detail" label="Embedded UX &amp; Experience Design Lead">
              <p className="text-sm text-text-secondary leading-relaxed">
                I work directly with creative directors, account leads, technologists, dev teams, copywriters, and visual designers on digital brand and product work. Deliverables include engagement strategy, site architecture, user flows, wireframes, content frameworks, RC and pitch decks, and design system governance and refinements.
              </p>
            </AccordionDetail>

            <div className="pt-8">
              <Link
                href="/engagements#leadership"
                className="inline-flex items-center text-sm font-medium text-link hover:text-link-hover transition-colors"
              >
                See leadership engagements <span aria-hidden="true" className="ml-2">→</span>
              </Link>
            </div>
          </article>

          {/* Mode 2 — Advisory */}
          <article className="relative flex flex-col p-7 md:p-8 rounded-2xl card-surface border border-border-default hover:border-border-strong transition-colors">
            <p className="font-mono text-xs tracking-widest uppercase text-text-tertiary">
              Advisory
            </p>
            <h3 className="mt-3 text-xl md:text-2xl font-semibold tracking-tight leading-tight">
              Hire me to advise
            </h3>
            <p className="mt-4 flex-1 text-base text-text-secondary leading-relaxed">
              Senior strategic counsel without a full-time hire: product design,
              AI adoption, engagement strategy, design system governance,
              multi-brand experience strategy, and regulatory program redesign.
            </p>

            <AccordionDetail id="advisory-detail" label="Three project-based options">
              <dl className="space-y-5">
                {ADVISORY_SHAPES.map((shape) => (
                  <div key={shape.name}>
                    <dt className="text-sm font-semibold text-text-primary">
                      {shape.name}
                    </dt>
                    <dd className="mt-1 text-sm text-text-secondary leading-relaxed">
                      {shape.description}
                    </dd>
                  </div>
                ))}
              </dl>
            </AccordionDetail>

            <div className="pt-8">
              <Link
                href="/engagements#advisory"
                className="inline-flex items-center text-sm font-medium text-link hover:text-link-hover transition-colors"
              >
                See advisory engagements <span aria-hidden="true" className="ml-2">→</span>
              </Link>
            </div>
          </article>

          {/* Mode 3 — On Call */}
          <article className="relative flex flex-col p-7 md:p-8 rounded-2xl card-surface border border-border-default hover:border-border-strong transition-colors">
            <p className="font-mono text-xs tracking-widest uppercase text-text-tertiary">
              On Call
            </p>
            <h3 className="mt-3 text-xl md:text-2xl font-semibold tracking-tight leading-tight">
              Keep me on call
            </h3>
            <p className="mt-4 flex-1 text-base text-text-secondary leading-relaxed">
              A monthly retainer for leaders who want a senior thinking partner
              on hand between the big decisions. Reserved for a small number of
              teams so the access stays real.
            </p>

            <AccordionDetail id="oncall-detail" label="Senior counsel on a monthly retainer">
              <ul className="space-y-3">
                {ONCALL_INCLUDED.map((item, i) => (
                  <li
                    key={i}
                    className="text-sm text-text-secondary leading-relaxed pl-5 relative"
                  >
                    <span
                      className="absolute left-0 top-2 w-2 h-px bg-text-tertiary"
                      aria-hidden="true"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </AccordionDetail>

            <div className="pt-8">
              <Link
                href="/engagements#oncall"
                className="inline-flex items-center text-sm font-medium text-link hover:text-link-hover transition-colors"
              >
                See on-call engagements <span aria-hidden="true" className="ml-2">→</span>
              </Link>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
