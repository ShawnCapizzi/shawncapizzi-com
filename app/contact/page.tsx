import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Three ways to reach Shawn Capizzi: a 30-minute Strategy Call, email, or phone. Most engagements start with the call.",
};

const CAL_URL = "https://cal.com/capizzi/15min";
const EMAIL = "capizzi@gmail.com";
const PHONE_DISPLAY = "212-380-3900";
const PHONE_DIAL = "2123803900";
const LINKEDIN_URL = "https://www.linkedin.com/in/shawncapizzi";

export default function Page() {
  return (
    <article>
      {/* HERO */}
      <section className="relative pt-32 md:pt-40 pb-12 md:pb-16">
        <div className="max-w-content mx-auto px-6 md:px-8 lg:px-12">
          <p className="eyebrow mb-6">Contact</p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.05] max-w-4xl">
            Three ways in.
          </h1>
          <p className="mt-6 md:mt-8 text-xl md:text-2xl text-text-secondary leading-relaxed max-w-3xl">
            Most engagements start with the 30-minute call. Email works for
            anything async. Phone is fine if you&apos;d rather just talk.
          </p>
        </div>
      </section>

      {/* THREE PATHS */}
      <section className="py-12 md:py-16">
        <div className="max-w-content mx-auto px-6 md:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
            {/* Path 1 — Strategy Call (primary) */}
            <article className="relative p-8 md:p-10 rounded-2xl card-surface border border-border-default flex flex-col">
              <p className="metadata-label mb-4">Path 01 · Recommended</p>
              <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-text-primary leading-tight mb-4">
                Book a Strategy Call
              </h2>
              <p className="text-base md:text-lg text-text-secondary leading-relaxed mb-8 flex-1">
                30 minutes. Virtual. No pitch. We talk through what&apos;s
                stuck and what success looks like. If there&apos;s not a fit,
                I&apos;ll say so and try to point you to a better partner.
              </p>
              <a
                href={CAL_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-7 py-3.5 rounded-full bg-text-primary text-text-inverse text-base font-medium tracking-tight hover:scale-[1.02] transition-transform self-start"
              >
                Open the calendar
                <span aria-hidden="true" className="ml-2">→</span>
              </a>
            </article>

            {/* Path 2 — Email */}
            <article className="relative p-8 md:p-10 rounded-2xl card-surface border border-border-default flex flex-col">
              <p className="metadata-label mb-4">Path 02 · Async</p>
              <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-text-primary leading-tight mb-4">
                Email
              </h2>
              <p className="text-base md:text-lg text-text-secondary leading-relaxed mb-8 flex-1">
                For questions that don&apos;t need a call yet, sharing a brief
                or document, or following up after a session. I reply within a
                business day.
              </p>
              <a
                href={`mailto:${EMAIL}`}
                className="inline-flex items-center text-base md:text-lg font-medium text-link hover:text-link-hover transition-colors self-start"
              >
                {EMAIL}
                <span aria-hidden="true" className="ml-2">→</span>
              </a>
            </article>

            {/* Path 3 — Phone */}
            <article className="relative p-8 md:p-10 rounded-2xl card-surface border border-border-default flex flex-col">
              <p className="metadata-label mb-4">Path 03 · Voice</p>
              <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-text-primary leading-tight mb-4">
                Phone
              </h2>
              <p className="text-base md:text-lg text-text-secondary leading-relaxed mb-8 flex-1">
                Voicemail is welcome. Return calls happen within a business
                day. For working sessions, the calendar link is faster.
              </p>
              <a
                href={`tel:+1${PHONE_DIAL}`}
                className="inline-flex items-center text-base md:text-lg font-medium text-link hover:text-link-hover transition-colors self-start"
              >
                {PHONE_DISPLAY}
                <span aria-hidden="true" className="ml-2">→</span>
              </a>
            </article>
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
              — essays and short posts on AI adoption, regulated design, and
              experience strategy. Connections from this site welcome; a note
              about why is appreciated.
            </p>
          </div>
        </div>
      </section>

      {/* BOTTOM NOTE */}
      <section className="py-20 md:py-28 mt-12 md:mt-16 border-t border-border-subtle">
        <div className="max-w-content mx-auto px-6 md:px-8 lg:px-12">
          <div className="max-w-3xl">
            <p className="text-base md:text-lg text-text-secondary leading-relaxed italic">
              Many engagements move from first call to signed SOW in 2–3 weeks.
            </p>
          </div>
        </div>
      </section>
    </article>
  );
}
