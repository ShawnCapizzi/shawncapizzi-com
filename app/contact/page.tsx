import { pageMetadata } from "@/lib/seo";
import { CTACards } from "@/components/CTACards";

export const metadata = pageMetadata({
  path: "/contact",
  title: "Contact",
  description:
    "Three ways in: calendar, email, or phone. From initial conversation to signed SOW in 2 to 3 weeks, or sooner.",
});

const CAL_URL = "https://cal.com/capizzi/30min";
const EMAIL = "capizzi@shawncapizzi.com";
const PHONE_DISPLAY = "212-380-3900";
const PHONE_TEL = "+12123803900";
const LINKEDIN_URL = "https://www.linkedin.com/in/shawncapizzi";

export default function Page() {
  return (
    <article>
      {/* HERO: confident, action-oriented setup */}
      <section className="relative pt-32 md:pt-40 pb-12 md:pb-16">
        <div className="max-w-content mx-auto px-6 md:px-8 lg:px-12">
          <p className="eyebrow mb-3">Contact</p>
          <h1 className="headline-static hero-title max-w-4xl">
            Three ways in.
          </h1>
          <p className="hero-lead max-w-3xl">
            Have something you&apos;re working through? Pick whichever way
            feels easiest: calendar, email, or phone.
          </p>
        </div>
      </section>

      {/* THREE INTENT CARDS: Framing B with hybrid softening on Card 3 */}
      <section className="py-12 md:py-16">
        <div className="max-w-content mx-auto px-6 md:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
            {/* Card 1: calendar. The only button on the site that opens Cal
                directly (October 2026); every other general CTA lands here. */}
            <article className="relative p-8 md:p-10 rounded-2xl card-surface border border-border-default flex flex-col">
              <p className="metadata-label mb-4">Path 01 · Calendar</p>
              <h2 className="card-title text-text-primary mb-4">
                Find a time that works.
              </h2>
              <p className="text-base md:text-lg text-text-secondary leading-relaxed mb-8 flex-1">
                Pick a time and we&apos;ll talk through what&apos;s happening,
                what you&apos;re trying to accomplish, and whether I can help.
                No pitch.
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

            {/* Card 2: prefers to start in writing (email) */}
            <article className="relative p-8 md:p-10 rounded-2xl card-surface border border-border-default flex flex-col">
              <p className="metadata-label mb-4">Path 02 · Email</p>
              <h2 className="card-title text-text-primary mb-4">
                Prefer to start in writing?
              </h2>
              <p className="text-base md:text-lg text-text-secondary leading-relaxed mb-8 flex-1">
                Send a brief, a question, some context, or an introduction.
                All welcome. I reply within a business day.
              </p>
              <a
                href={`mailto:${EMAIL}`}
                className="inline-flex items-center text-base md:text-lg font-medium text-link hover:text-link-hover transition-colors self-start"
              >
                {EMAIL}
                <span aria-hidden="true" className="ml-2">&rarr;</span>
              </a>
            </article>

            {/* Card 3: quick question (lower stakes, warmer framing) */}
            <article className="relative p-8 md:p-10 rounded-2xl card-surface border border-border-default flex flex-col">
              <p className="metadata-label mb-4">Path 03 · Voice</p>
              <h2 className="card-title text-text-primary mb-4">
                Have a quick question?
              </h2>
              <p className="text-base md:text-lg text-text-secondary leading-relaxed mb-8 flex-1">
                Phone is fine. Voicemail is welcome. I return calls within a
                business day. For a working session, the calendar is faster.
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

      {/* TRUST STRIP: three short proof points: how long, will he sell me,
          is he qualified. The reply-window stat was removed in September 2026
          (the cards already say it, and a stat read as salesy). */}
      <section className="py-10 md:py-14 border-t border-b border-border-subtle">
        <div className="max-w-content mx-auto px-6 md:px-8 lg:px-12">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 md:gap-10">
            <div>
              <p className="text-2xl md:text-3xl font-semibold text-text-primary tracking-tight leading-tight">
                2 to 3 weeks
              </p>
              <p className="mt-2 text-sm md:text-base text-text-secondary leading-snug text-pretty">
                From first call to signed SOW, or sooner.
              </p>
            </div>
            <div>
              <p className="text-2xl md:text-3xl font-semibold text-text-primary tracking-tight leading-tight">
                No pitch
              </p>
              <p className="mt-2 text-sm md:text-base text-text-secondary leading-snug text-pretty">
                First call is diagnostic, not a sales call.
              </p>
            </div>
            <div>
              <p className="text-2xl md:text-3xl font-semibold text-text-primary tracking-tight leading-tight">
                15+ years
              </p>
              <p className="mt-2 text-sm md:text-base text-text-secondary leading-snug text-pretty">
                Across pharma, healthcare, financial services, and enterprise.
              </p>
            </div>
          </div>

          {/* Availability (October 2026): one quiet line, here and on /about
              only. Never an "open to work" banner. */}
          <p className="mt-8 md:mt-10 max-w-3xl text-base md:text-lg text-text-secondary leading-relaxed text-pretty">
            Available for remote-first consulting, fractional or embedded
            UX/design leadership, and select senior full-time opportunities.
          </p>
        </div>
      </section>

      {/* SECONDARY: LinkedIn */}
      <section className="py-12 md:py-16">
        <div className="max-w-content mx-auto px-6 md:px-8 lg:px-12">
          <div className="max-w-3xl">
            <p className="metadata-label mb-4">Also</p>
            <p className="text-base md:text-lg text-text-secondary leading-relaxed">
              I&apos;m always active on{" "}
              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-link hover:text-link-hover transition-colors"
              >
                LinkedIn
              </a>
              . That is where I post essays and short pieces on AI adoption,
              current design topics, and experience strategy. Connections
              are always welcome; feel free to send a DM.
            </p>
          </div>
        </div>
      </section>

      {/* BOTTOM CTACards, for visitors who did not take action above.
          'workContact' answers "is he qualified"; 'engagementsContact' answers
          "how would this actually work". Contact-only copy (September 2026),
          so the shared 'work' and 'engagements' cards on other pages stay. */}
      <section className="py-16 md:py-24 mt-8 md:mt-12 border-t border-border-subtle">
        <div className="max-w-content mx-auto px-6 md:px-8 lg:px-12">
          <CTACards cards={["workContact", "engagementsContact"]} />
        </div>
      </section>
    </article>
  );
}
