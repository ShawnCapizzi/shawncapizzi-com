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
      <section className="relative pt-32 md:pt-40">
        <div className="max-w-content mx-auto px-6 md:px-8 lg:px-12">
          <p className="eyebrow">Contact</p>
          <h1 className="headline-static hero-title text-balance max-w-4xl">
            What are you working on?
          </h1>

          {/* The intro uses the same body style as the Engagements sections
              (lead-text), and the napkin line borrows the mono tagline style
              from the /thinking hero ("Listen first. Make it visible."). The
              practical line sits lower, with the cards. */}
          <p className="lead-text mt-4 md:mt-6 max-w-3xl text-pretty text-text-secondary">
            We don&apos;t need a finished brief, scope, or RFP to start. Bring
            me a problem you&apos;re trying to solve, something you&apos;re
            trying to overcome, or an opportunity that still needs defining.
          </p>
          <p className="mt-6 font-mono text-base md:text-lg text-text-primary tracking-tight">
            <span aria-hidden="true">&#9999;&#65039;</span>{" "}
            Napkin sketches welcome.
          </p>
        </div>
      </section>

      {/* THREE WAYS TO REACH SHAWN: calendar, email, phone. It answers the
          hero's question, so it joins the hero: no bottom padding above,
          and a tight top (48 desktop, 32 phone) under the napkin line. */}
      <section className="section section-joined">
        <div className="max-w-content mx-auto px-6 md:px-8 lg:px-12">
          {/* The practical line sits with the three cards it introduces, in
              the site's body text style (Geist, secondary gray), like the
              notes on /engagements. */}
          <p className="body-text mb-6 md:mb-8 max-w-3xl lg:max-w-none text-text-secondary text-pretty">
            Calendar, email, or phone: whatever&apos;s easiest. I work
            remote-first, so it doesn&apos;t matter where&nbsp;you&nbsp;are.
          </p>
          <div className="card-grid grid-cols-1 lg:grid-cols-3">
            {/* Card 1: calendar. The only button on the site that opens Cal
                directly (October 2026); every other general CTA lands here. */}
            <article className="relative card flex flex-col">
              <p className="metadata-label">Path 01 · Calendar</p>
              <h2 className="card-title text-text-primary">
                Find a time that works.
              </h2>
              <p className="card-text text-text-secondary">
                We&apos;ll talk through what&apos;s happening, what you&apos;re
                trying to accomplish, and whether I can help.
              </p>
              {/* The page's primary ask, so it takes the purple pill. The
                  .card-foot spacing sits on a wrapper: on the pill itself
                  its 24px top padding lands inside the button and pushes
                  the label off center. */}
              <div className="card-foot">
                <a
                  href={CAL_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-next"
                >
                  Open the calendar
                  <span aria-hidden="true" className="ml-2">&rarr;</span>
                </a>
              </div>
            </article>

            {/* Card 2: prefers to start in writing (email) */}
            <article className="relative card flex flex-col">
              <p className="metadata-label">Path 02 · Email</p>
              <h2 className="card-title text-text-primary">
                Prefer to write first?
              </h2>
              <p className="card-text text-text-secondary">
                Send a question, some context, an introduction, or whatever
                you have so far. A few lines is plenty to get started.
              </p>
              <a
                href={`mailto:${EMAIL}`}
                className="card-foot self-start inline-flex items-center font-medium text-link hover:text-link-hover transition-colors"
              >
                {EMAIL}
                <span aria-hidden="true" className="ml-2">&rarr;</span>
              </a>
            </article>

            {/* Card 3: quick question (lower stakes, warmer framing) */}
            <article className="relative card flex flex-col">
              <p className="metadata-label">Path 03 · Voice</p>
              <h2 className="card-title text-text-primary">
                Have a quick question?
              </h2>
              <p className="card-text text-text-secondary">
                Call or leave a voicemail with what you&apos;re working on. I&apos;ll
                get back to you within a business day, sooner if it&apos;s urgent.
              </p>
              <a
                href={`tel:${PHONE_TEL}`}
                className="card-foot self-start inline-flex items-center font-medium text-link hover:text-link-hover transition-colors"
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
      <section className="section-tight border-t border-b border-border-subtle">
        <div className="max-w-content mx-auto px-6 md:px-8 lg:px-12">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 md:gap-10">
            <div>
              <p className="text-2xl md:text-3xl font-semibold text-text-primary tracking-tight leading-tight text-balance">
                Let&apos;s discuss what success looks like.
              </p>
              <p className="body-text mt-2 text-text-secondary text-pretty">
                Tell me what you&apos;re working on, what&apos;s getting in the
                way, and what a better outcome would look like.
              </p>
            </div>
            <div>
              <p className="text-2xl md:text-3xl font-semibold text-text-primary tracking-tight leading-tight">
                15+ years
              </p>
              <p className="body-text mt-2 text-text-secondary text-pretty">
                Across pharma, healthcare, financial services, and enterprise.
              </p>
            </div>
            <div>
              <p className="text-2xl md:text-3xl font-semibold text-text-primary tracking-tight leading-tight">
                Remote-first
              </p>
              <p className="body-text mt-2 text-text-secondary text-pretty">
                I work with brands, agencies, start-ups, and technology leaders,
                often alongside internal, offshore, and public-sector teams.
              </p>
            </div>
          </div>

          {/* Availability (October 2026): one quiet line, here and on /about
              only. Never an "open to work" banner. */}
          <p className="body-text mt-8 md:mt-10 max-w-3xl text-text-secondary text-pretty">
            Available for remote-first consulting, fractional or embedded
            UX/design leadership, and select senior full-time opportunities.
          </p>
        </div>
      </section>

      {/* SECONDARY: LinkedIn, kept short. The Contact page does not need to
          sell the writing; /thinking does that. */}
      <section className="section">
        <div className="max-w-content mx-auto px-6 md:px-8 lg:px-12">
          <div className="max-w-3xl">
            <p className="metadata-label">Prefer LinkedIn?</p>
            <h2 className="card-title text-text-primary">
              We can connect there too.
            </h2>
            <p className="body-text text-text-secondary">
              I&apos;m active on LinkedIn and DMs are always welcome.
            </p>
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="card-foot inline-flex items-center font-medium text-link hover:text-link-hover transition-colors"
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
      <section className="section border-t border-border-subtle">
        <div className="max-w-content mx-auto px-6 md:px-8 lg:px-12">
          <CTACards cards={["workContact", "engagementsContact"]} />
        </div>
      </section>
    </article>
  );
}
