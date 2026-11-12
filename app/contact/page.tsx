import { pageMetadata } from "@/lib/seo";
import { CTACards } from "@/components/CTACards";

export const metadata = pageMetadata({
  path: "/contact",
  title: "Contact",
  description:
    "You don't need a finished brief to start. Bring a business challenge, an opportunity, or an experience you want to improve. Calendar, email, or phone.",
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
          talk" or "Discuss your goals" button started. No funnel language:
          no strategy call, no "no pitch". The call's length is stated once,
          on the calendar card (Shawn's copy brief, November 11, 2026; the
          Cal.com event is 30 minutes, checked that day).
          November 11, 2026 (Shawn's call): /how-i-help is a hidden side door
          (noindex, business card only), so its final language lives here
          too, where every ask on the site lands. The two questions and the
          lead are its lines word for word; the H1 answers the button that
          brought the visitor here. */}
      <section className="relative pt-32 md:pt-40">
        <div className="max-w-content mx-auto px-6 md:px-8 lg:px-12">
          <p className="eyebrow">Contact</p>
          <h1 className="headline-static hero-title text-balance max-w-4xl">
            Let&rsquo;s talk.
          </h1>
          {/* The questions and the lead sit like every other page's hero
              (Shawn's call, November 11, 2026): .hero-lead paragraphs, 24px
              apart. They follow /how-i-help's wording from Shawn's copy
              brief: the main question, the supporting question on its own,
              and the closing line from /how-i-help as the lead. The napkin
              line borrows the mono tagline style from the /thinking hero
              ("Listen first. Make it visible."). */}
          <p className="hero-lead max-w-3xl text-pretty">
            What business challenge are you tackling, or transformation are
            you leading?
          </p>
          <p className="hero-lead max-w-3xl text-pretty">
            What goal are you working toward, and how will you measure
            success?
          </p>
          <p className="hero-lead max-w-3xl text-pretty">
            You don&rsquo;t need a finished brief to start. Bring a business
            challenge, an opportunity, or an experience you want to improve.
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
            Calendar, email, or phone: whatever&rsquo;s easiest. I work
            remote-first, so it doesn&rsquo;t matter where you are. If
            someone sent you my way, please share&nbsp;who.
          </p>
          {/* The calendar card spans the row (November 11, 2026): with the
              brief's call description it ran far taller than email and
              phone, which then held 106 to 132px of empty space. As the
              page's main ask, it leads; email and phone share the row below. */}
          <div className="card-grid grid-cols-1 lg:grid-cols-2">
            {/* Card 1: calendar. The only button on the site that opens Cal
                directly (October 2026); every other general CTA lands here. */}
            <article className="relative card flex flex-col lg:col-span-2">
              <p className="metadata-label">Path 01 · Calendar</p>
              <h2 className="card-title text-text-primary">
                Let&rsquo;s discuss your goals.
              </h2>
              {/* What the call is (Shawn's copy brief, November 11, 2026):
                  no free audit, strategy, or deliverable implied. */}
              <p className="card-text max-w-3xl text-text-secondary">
                A 30-minute conversation about your goals, what&rsquo;s getting
                in the way, and whether I can help. If there&rsquo;s a fit,
                we&rsquo;ll identify a sensible starting point.
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
                  Choose a time to talk
                  <span aria-hidden="true" className="ml-2">&rarr;</span>
                </a>
              </div>
            </article>

            {/* Card 2: email. Titles since November 11, 2026 (Shawn's call):
                direct statements, not the old questions ("Prefer to write
                first?", "Have a quick question?"), which read too meek. One
                "me", on email, where a referred visitor most needs to know
                they reach Shawn himself; three in a row read self-focused. */}
            <article className="relative card flex flex-col">
              <p className="metadata-label">Path 02 · Email</p>
              <h2 className="card-title text-text-primary">
                Email me directly.
              </h2>
              <p className="card-text text-text-secondary">
                Send a question, a brief, an RFP, or whatever you have so
                far. A few lines is plenty to get started.
              </p>
              <a
                href={`mailto:${EMAIL}`}
                className="card-foot self-start inline-flex items-center font-medium text-link hover:text-link-hover transition-colors"
              >
                {EMAIL}
                <span aria-hidden="true" className="ml-2">&rarr;</span>
              </a>
            </article>

            {/* Card 3: phone */}
            <article className="relative card flex flex-col">
              <p className="metadata-label">Path 03 · Voice</p>
              <h2 className="card-title text-text-primary">
                Pick up the phone.
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

      {/* WHAT TO EXPECT (October 2026): who Shawn has done this with and
          where. Replaced "2 to 3 weeks", "No pitch", and the diagnostic line,
          which read as process and sales. November 11, 2026 (Shawn's call):
          the first item ("Let's discuss what success looks like.") repeated
          the hero and left; the client line and "Much of it regulated..."
          are /how-i-help's words; "Remote-first" became "In-house or agency",
          since the line above the cards already says remote-first. */}
      <section className="section-tight border-t border-b border-border-subtle">
        <div className="max-w-content mx-auto px-6 md:px-8 lg:px-12">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 md:gap-10">
            <div>
              <p className="text-2xl md:text-3xl font-semibold text-text-primary tracking-tight leading-tight">
                15+ years
              </p>
              <p className="body-text mt-2 text-text-secondary text-pretty">
                Across pharma, healthcare, financial services, and enterprise,
                with teams at Pfizer, Bloomberg, Samsung, Biogen, AbbVie, and
                others.
              </p>
            </div>
            <div>
              <p className="text-2xl md:text-3xl font-semibold text-text-primary tracking-tight leading-tight">
                Real-world constraints
              </p>
              <p className="body-text mt-2 text-text-secondary text-pretty">
                Much of it regulated, most of it complex, all of it meant to
                ship.
              </p>
            </div>
            <div>
              <p className="text-2xl md:text-3xl font-semibold text-text-primary tracking-tight leading-tight">
                In-house or agency
              </p>
              <p className="body-text mt-2 text-text-secondary text-pretty">
                Brands, agencies, start-ups, and technology leaders, often
                alongside internal, offshore, and public-sector teams.
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
              Connect there too.
            </h2>
            <p className="body-text text-text-secondary">
              I&apos;m active on LinkedIn, and DMs are always welcome.
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
