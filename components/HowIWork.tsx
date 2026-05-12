import Link from "next/link";

const CAL_URL = "https://cal.com/capizzi/15min";

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
    name: "Strategic Advisory Retainer",
    description: "Monthly partnership for ongoing decision-side counsel.",
  },
  {
    name: "AI Opportunity Diagnostic",
    description:
      "I come in, ask the right questions, and help uncover where AI fits in your actual workflows and business model. Vendor-agnostic. Roadmap, not vendor list.",
  },
];

export function HowIWork() {
  return (
    <section className="py-24 md:py-32">
      <div className="max-w-wide mx-auto px-6 md:px-8 lg:px-12">
        {/* Header */}
        <div className="max-w-3xl">
          <p className="eyebrow mb-4">Engagement model</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight leading-tight">
            How I work with teams
          </h2>
          <p className="mt-6 text-lg md:text-xl text-text-secondary leading-relaxed">
            Two ways in, depending on what your team needs. Not sure which fits? Tell me what&apos;s going on — we&apos;ll figure it out together.
          </p>
          <div className="mt-8">
            <a
              href={CAL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-base font-medium text-link hover:text-link-hover transition-colors"
            >
              Tell me what&apos;s stuck <span aria-hidden="true" className="ml-2">→</span>
            </a>
          </div>
        </div>

        {/* Two paths */}
        <div className="mt-16 md:mt-20 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          {/* Path 1 — Embedded */}
          <article className="relative p-8 md:p-10 rounded-2xl card-surface border border-border-default hover:border-border-strong transition-colors">
            <p className="font-mono text-xs tracking-widest uppercase text-text-tertiary">
              Path 01
            </p>
            <h3 className="mt-3 text-2xl md:text-3xl font-semibold tracking-tight leading-tight">
              Bring me onto the organization
            </h3>
            <p className="mt-4 text-base text-text-secondary leading-relaxed">
              For agencies and in-house pharma, healthcare, and enterprise teams that need senior UX, IA, and content strategy leadership inside live work — campaigns, platforms, sites, apps, sales tools, and regulated brand programs.
            </p>

            <div className="mt-8 pt-8 border-t border-border-subtle">
              <p className="text-base font-medium text-text-primary">
                Embedded UX &amp; Experience Design Lead
              </p>
              <p className="mt-3 text-sm text-text-secondary leading-relaxed">
                I work directly with creative directors, account leads, technologists, dev teams, copywriters, and visual designers on digital brand and product work. Deliverables include engagement strategy, site architecture, user flows, wireframes, content frameworks, RC and pitch decks, and design system governance and refinements.
              </p>
            </div>

            <div className="mt-8">
              <Link
                href="/engagements#embedded"
                className="inline-flex items-center text-sm font-medium text-link hover:text-link-hover transition-colors"
              >
                See embedded engagements <span aria-hidden="true" className="ml-2">→</span>
              </Link>
            </div>
          </article>

          {/* Path 2 — Advisory */}
          <article className="relative p-8 md:p-10 rounded-2xl card-surface border border-border-default hover:border-border-strong transition-colors">
            <p className="font-mono text-xs tracking-widest uppercase text-text-tertiary">
              Path 02
            </p>
            <h3 className="mt-3 text-2xl md:text-3xl font-semibold tracking-tight leading-tight">
              Hire me to advise
            </h3>
            <p className="mt-4 text-base text-text-secondary leading-relaxed">
              Senior strategic counsel without a full-time hire — product design, AI adoption, engagement strategy, design system governance, multi-brand experience strategy, and regulatory program redesign.
            </p>

            <div className="mt-8 pt-8 border-t border-border-subtle">
              <p className="text-base font-medium text-text-primary mb-5">
                Four advisory shapes:
              </p>
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
            </div>

            <div className="mt-8">
              <Link
                href="/engagements#advisory"
                className="inline-flex items-center text-sm font-medium text-link hover:text-link-hover transition-colors"
              >
                See advisory engagements <span aria-hidden="true" className="ml-2">→</span>
              </Link>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
