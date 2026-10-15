import { pageMetadata } from "@/lib/seo";
import { CTACards } from "@/components/CTACards";

export const metadata = pageMetadata({
  path: "/contact",
  title: "Contact",
  description:
    "What are you working on? We don't need a finished brief, scope, or RFP to start. Napkin sketches welcome. Calendar, email, or phone.",
});

const CAL_URL = "https://cal.com/capizzi/30min";
const EMAIL = "capizzi@shawncapizzi.com";
const PHONE_DISPLAY = "212-380-3900";
const PHONE_TEL = "+12123803900";
const LINKEDIN_URL = "https://www.linkedin.com/in/shawncapizzi";

export default function Page() {
  return (
    <article>
      {/* HERO (October 2026): the page picks up the conversation a "Let's
          talk" or "Start a conversation" button started. No funnel language:
          no strategy call, no call length, no "no pitch". */}
      <section className="relative pt-32 md:pt-40 pb-4 md:pb-6">
        <div className="max-w-content mx-auto px-6 md:px-8 lg:px-12">
          <p className="eyebrow mb-3">Contact</p>
          <h1 className="headline-static hero-title max-w-4xl">
            What are you working on?
          </h1>

          {/* Hierarchy, top to bottom: headline; reassurance (hero-lead size,
              semibold, in the headline's own cream so it does not outshine
              it); the napkin line as a small lilac aside; the framing
              paragraph with its hash rule. The practical line moved down to
              sit with the cards.
              Weight and color sit on spans or on elements without .hero-lead,
              because .hero-lead is unlayered and overrides utilities. */}
          <p className="hero-lead max-w-3xl text-pretty">
            <span className="headline-static font-semibold">
              We don&apos;t need a finished brief, scope, or RFP to start.
            </span>
          </p>
          <p className="mt-3 font-[family-name:var(--font-instrument-sans)] text-base md:text-lg font-medium tracking-tight text-link">
            <span aria-hidden="true">&#9999;&#65039;</span>{" "}
            Napkin sketches welcome.
          </p>

          <div className="mt-5 md:mt-6 max-w-3xl">
            <p className="hero-lead hash-rule hash-rule-inset pl-6 md:pl-7 text-pretty">
              Bring me a problem you&apos;re trying to solve, something
              you&apos;re trying to overcome, or an opportunity that still
              needs defining.
            </p>
          </div>

        </div>
      </section>

      {/* THREE WAYS TO REACH SHAWN: calendar, email, phone */}
      <section className="py-12 md:py-16">
        <div className="max-w-content mx-auto px-6 md:px-8 lg:px-12">
          {/* The practical line sits with the three cards it introduces, in
              the site's body text style (Geist, secondary gray), like the
              notes on /engagements. */}
          <p className="mb-6 md:mb-8 max-w-3xl lg:max-w-none text-base md:text-lg text-text-secondary leading-relaxed text-pretty">
            Calendar, email, or phone: whatever&apos;s easiest. I work
            remote-first, so it doesn&apos;t matter where&nbsp;you&nbsp;are.
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
            {/* Card 1: calendar. The only button on the site that opens Cal
                directly (October 2026); every other general CTA lands here. */}
            <article className="relative p-8 md:p-10 rounded-2xl card-surface border border-border-default flex flex-col">
              <p className="metadata-label mb-4">Path 01 · Calendar</p>
              <h2 className="card-title text-text-primary mb-4">
                Find a time that works.
              </h2>
              <p className="text-base md:text-lg text-text-secondary leading-relaxed mb-8 flex-1">
                We&apos;ll talk through what&apos;s happening, what you&apos;re
                trying to accomplish, and whether I can help.
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
                Send a question, some context, an introduction, or whatever
                you have so far. You don&apos;t need a finished brief.
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
                Call or leave a voicemail. I&apos;ll get back to you within a
                business day.
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

      {/* WHAT TO EXPECT (October 2026): what the conversation is about, who
          it is with, and how the work happens. Replaced "2 to 3 weeks", "No
          pitch", and the diagnostic line, which read as process and sales. */}
      <section className="py-10 md:py-14 border-t border-b border-border-subtle">
        <div className="max-w-content mx-auto px-6 md:px-8 lg:px-12">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 md:gap-10">
            <div>
              <p className="text-2xl md:text-3xl font-semibold text-text-primary tracking-tight leading-tight text-balance">
                Let&apos;s discuss what success looks like.
              </p>
              <p className="mt-2 text-sm md:text-base text-text-secondary leading-snug text-pretty">
                Tell me what you&apos;re working on, what&apos;s getting in the
                way, and what a better outcome would look like.
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
            <div>
              <p className="text-2xl md:text-3xl font-semibold text-text-primary tracking-tight leading-tight">
                Remote-first
              </p>
              <p className="mt-2 text-sm md:text-base text-text-secondary leading-snug text-pretty">
                I work with brands, agencies, start-ups, and technology leaders,
                often alongside internal, offshore, and public-sector teams.
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

      {/* SECONDARY: LinkedIn, kept short. The Contact page does not need to
          sell the writing; /thinking does that. */}
      <section className="py-12 md:py-16">
        <div className="max-w-content mx-auto px-6 md:px-8 lg:px-12">
          <div className="max-w-3xl">
            <p className="metadata-label mb-4">Prefer LinkedIn?</p>
            <h2 className="card-title text-text-primary mb-3">
              We can connect there too.
            </h2>
            <p className="text-base md:text-lg text-text-secondary leading-relaxed">
              I&apos;m active on LinkedIn and DMs are always welcome.
            </p>
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center text-base md:text-lg font-medium text-link hover:text-link-hover transition-colors"
            >
              Connect on LinkedIn
              <span aria-hidden="true" className="ml-2">&rarr;</span>
            </a>
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
