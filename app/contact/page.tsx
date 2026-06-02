import type { Metadata } from "next";
import { CTACards } from "@/components/CTACards";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Three ways in: a 30-minute strategy call, email, or phone. No pitch. Most engagements move from first call to signed SOW in 2–3 weeks.",
};

const CAL_URL = "https://cal.com/capizzi/30min";
const EMAIL = "capizzi@shawncapizzi.com";
const PHONE_DISPLAY = "212-380-3900";
const PHONE_TEL = "+12123803900";
const LINKEDIN_URL = "https://www.linkedin.com/in/shawncapizzi";

export default function Page() {
  return (
    <article>
      {/* HERO — anxiety-resolving in the first sentence ("No pitch") */}
      <section className="relative pt-32 md:pt-40 pb-12 md:pb-16">
        <div className="max-w-content mx-auto px-6 md:px-8 lg:px-12">
          <p className="eyebrow mb-6">Contact</p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.05] max-w-4xl">
            Three ways in. No pitch.
          </h1>
          <p className="mt-6 md:mt-8 text-xl md:text-2xl text-text-secondary leading-relaxed max-w-3xl">
            Most engagements start with the 30-minute call. Email works when
            you&apos;d rather think on the page. Phone is fine if you just want
            to talk.
          </p>
        </div>
      </section>

      {/* THREE INTENT CARDS — Framing B with hybrid softening on Card 3 */}
      <section className="py-12 md:py-16">
        <div className="max-w-content mx-auto px-6 md:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
            {/* Card 1 — Project scope (highest commercial value) */}
            <article className="relative p-8 md:p-10 rounded-2xl card-surface border border-border-default flex flex-col">
              <p className="metadata-label mb-4">Path 01 · Recommended</p>
              <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-text-primary leading-tight mb-4">
                You have a project to scope.
              </h2>
              <p className="text-base md:text-lg text-text-secondary leading-relaxed mb-8 flex-1">
                30-minute strategy call. Virtual. No pitch. We talk through
                what&apos;s stuck, what success looks like, and whether
                there&apos;s a fit. If there isn&apos;t, I&apos;ll say so and
                point you somewhere better.
              </p>
              <a
                href={CAL_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-7 py-3.5 rounded-full bg-text-primary text-text-inverse text-base font-medium tracking-tight hover:scale-[1.02] transition-transform self-start"
              >
                Open the calendar
                <span aria-hidden="true" className="ml-2">&rarr;</span>
              </a>
            </article>

            {/* Card 2 — Evaluating fit (Stewart buyer, pre-decision) */}
            <article className="relative p-8 md:p-10 rounded-2xl card-surface border border-border-default flex flex-col">
              <p className="metadata-label mb-4">Path 02 · Async</p>
              <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-text-primary leading-tight mb-4">
                You&apos;re evaluating fit.
              </h2>
              <p className="text-base md:text-lg text-text-secondary leading-relaxed mb-8 flex-1">
                Email me what you&apos;re considering. A brief, a question, a
                context note &mdash; whatever&apos;s useful. I reply within a
                business day.
              </p>
              <a
                href={`mailto:${EMAIL}`}
                className="inline-flex items-center text-base md:text-lg font-medium text-link hover:text-link-hover transition-colors self-start"
              >
                {EMAIL}
                <span aria-hidden="true" className="ml-2">&rarr;</span>
              </a>
            </article>

            {/* Card 3 — Quick question (lower stakes, warmer framing) */}
            <article className="relative p-8 md:p-10 rounded-2xl card-surface border border-border-default flex flex-col">
              <p className="metadata-label mb-4">Path 03 · Voice</p>
              <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-text-primary leading-tight mb-4">
                Have a quick question?
              </h2>
              <p className="text-base md:text-lg text-text-secondary leading-relaxed mb-8 flex-1">
                Phone is fine. Voicemail is welcome. I return calls within a
                business day. For working sessions, the calendar link is
                faster.
              </p>
              <a
                href={`tel:${PHONE_TEL}`}
                className="inline-flex items-center text-base md:text-lg font-medium text-link hover:text-link-hover transition-colors self-start"
              >
                {PHONE_DISPLAY}
                <span aria-hidden="true" className="ml-2">&rarr;</span>
              </a>
            </article>
          </div>
        </div>
      </section>

      {/* TRUST STRIP — four short proof points addressing the four anxieties:
          how long, will I get a response, will he sell me, is he qualified */}
      <section className="py-10 md:py-14 border-t border-b border-border-subtle">
        <div className="max-w-content mx-auto px-6 md:px-8 lg:px-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
            <div>
              <p className="text-2xl md:text-3xl font-semibold text-text-primary tracking-tight leading-tight">
                2&ndash;3 weeks
              </p>
              <p className="mt-2 text-sm md:text-base text-text-secondary leading-snug">
                From first call to signed SOW for most engagements.
              </p>
            </div>
            <div>
              <p className="text-2xl md:text-3xl font-semibold text-text-primary tracking-tight leading-tight">
                1 business day
              </p>
              <p className="mt-2 text-sm md:text-base text-text-secondary leading-snug">
                Reply window for email and voicemail.
              </p>
            </div>
            <div>
              <p className="text-2xl md:text-3xl font-semibold text-text-primary tracking-tight leading-tight">
                No pitch
              </p>
              <p className="mt-2 text-sm md:text-base text-text-secondary leading-snug">
                First call is diagnostic, not a sales call.
              </p>
            </div>
            <div>
              <p className="text-2xl md:text-3xl font-semibold text-text-primary tracking-tight leading-tight">
                15+ years
              </p>
              <p className="mt-2 text-sm md:text-base text-text-secondary leading-snug">
                Across pharma, fintech, and enterprise teams.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECONDARY — LinkedIn */}
      <section className="py-12 md:py-16">
        <div className="max-w-content mx-auto px-6 md:px-8 lg:px-12">
          <div className="max-w-3xl">
            <p className="metadata-label mb-4">Also</p>
            <p className="text-base md:text-lg text-text-secondary leading-relaxed">
              Active on{" "}
              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-link hover:text-link-hover transition-colors"
              >
                LinkedIn
              </a>{" "}
              &mdash; essays and short posts on AI adoption, regulated design,
              and experience strategy. Connections from this site welcome; a
              note about why is appreciated.
            </p>
          </div>
        </div>
      </section>

      {/* BOTTOM CTACards — for visitors who didn't take action above.
          'work' answers "is he qualified"; 'engagements' answers "how would
          this actually work" */}
      <section className="py-16 md:py-24 mt-8 md:mt-12 border-t border-border-subtle">
        <div className="max-w-wide mx-auto px-6 md:px-8 lg:px-12">
          <CTACards cards={["work", "engagements"]} />
        </div>
      </section>
    </article>
  );
}
