import Link from "next/link";

const CAL_URL = "https://cal.com/capizzi/30min";

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
            <div className="mt-4 flex-1">
              <p className="text-base text-text-secondary leading-relaxed">
                Senior UX, CX, IA, and content strategy leadership, embedded inside
                your live work. For agencies and in-house pharma, healthcare,
                and enterprise teams.
              </p>
              <p className="mt-4 text-sm text-text-tertiary leading-relaxed">
                Campaigns · Platforms · Sites · Apps · Sales tools · Regulated
                brand programs
              </p>
            </div>

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
            <div className="mt-4 flex-1">
              <p className="text-base text-text-secondary leading-relaxed">
                Product design and experience-first user flows that lift
                sign-ups and product adoption. Senior counsel, without a
                full-time hire.
              </p>
              <p className="mt-4 text-sm text-text-tertiary leading-relaxed">
                CRM and onboarding flows · AI adoption · Design system
                governance · Regulatory redesign
              </p>
            </div>

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
            <div className="mt-4 flex-1">
              <p className="text-base text-text-secondary leading-relaxed">
                A monthly retainer for leaders who want a senior thinking partner
                on hand between the big decisions. An honest extension of your
                team, there to talk through the product refinements and
                implementations you&apos;d rather not handle alone.
              </p>
              <p className="mt-4 text-sm text-text-tertiary leading-relaxed">
                Vendor management · Dev team direction (on/offshore) · Time and
                budget tradeoffs · Working sessions
              </p>
            </div>

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
