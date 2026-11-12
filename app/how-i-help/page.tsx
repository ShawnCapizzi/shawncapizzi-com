import Image from "next/image";
import Link from "next/link";
import { pageMetadata, LINKEDIN_URL } from "@/lib/seo";
import { WaysGroups, type WaysGroup } from "@/components/WaysGroups";
import { Portrait } from "@/components/Portrait";

/**
 * /how-i-help (October 2026): the page behind the QR code on Shawn's
 * business card. The visitor met him in person and scanned the card, often
 * on a phone, so the page picks up that conversation: who he is, a few
 * ways he can help, and one ask. It is a side door, not a site page: it is
 * noindex, it is not in the sitemap, and nothing in the nav links to it.
 *
 * The QR code points at /card, which next.config.ts redirects here with
 * ?src=card so scans show up on their own in analytics. Reprinting a card
 * never changes this page's URL.
 *
 * Per the site rule since October 2026, the ask goes to /contact (calendar,
 * email, or phone), not straight to the calendar.
 */

export const metadata = {
  ...pageMetadata({
    path: "/how-i-help",
    title: "How I help",
    description:
      "Shawn Capizzi helps teams get clear on direction, sharpen the thinking, and move the work forward. Deep experience in healthcare, pharma, and regulated markets.",
  }),
  robots: { index: false, follow: true },
};

/* No numbers: these are not steps, they are a flexible system. The six ways
   sit under the Capizzi Process's three principles, two each. Each principle
   is set up once, as a header with its own drawing (components/WaysSketch.tsx)
   and its one-line definition, and the cards under it are the work that
   principle guides, each collapsed to a title and a one-line tease until
   tapped (components/WaysGroups.tsx). The names and definitions are copied verbatim from
   components/ProcessLoop.tsx (MOVES and PRINCIPLES) so the two pages cannot
   drift apart. */
const GROUPS: WaysGroup[] = [
  {
    kind: "listen",
    seed: 113,
    name: "Listen first",
    line:
      "Understand the people, problem, context, signals, and constraints before deciding what to make.",
    ways: [
      {
        title: "Figure out what comes next",
        tease: "A new opportunity, an unclear direction, or too many competing ideas.",
        text:
          "I bring together stakeholder input, customer needs, and available evidence to define the challenge and recommend a direction. Your team gets clear priorities and practical next steps.",
      },
      {
        title: "Research it. Pressure-test it.",
        tease: "You need evidence before deciding where to invest.",
        text:
          "Competitive reviews, digital audits, and customer signals help reveal what is working and what needs attention. I turn the findings into prioritized recommendations, with the reasoning behind each one.",
      },
    ],
  },
  {
    kind: "visible",
    seed: 126,
    name: "Make it visible",
    line:
      "Turn the thinking into something people can react to, discuss, test, refine, and align around.",
    ways: [
      {
        title: "Make the experience better",
        tease: "Customers or users are struggling to understand, navigate, or complete something.",
        text:
          "I examine the journey, content, and interactions to identify friction and shape improvements. Depending on the challenge, the work can include revised flows, content recommendations, wireframes, or prototypes.",
      },
      {
        title: "Take it from napkin sketch to working product",
        tease: "An idea needs to become tangible enough to evaluate, test, or support a funding decision.",
        text:
          "I turn early thinking into a pitch deck, product visualization, or working proof of concept. The result helps stakeholders assess the opportunity, test assumptions, and decide what to fund or build next.",
      },
      {
        title: "Untangle the workflow. Then automate what should be.",
        tease: "Work crosses teams, tools, and services, with too many handoffs or repeated tasks.",
        text:
          "I map how the work happens, identify friction, and assess where simpler processes or automation could help. You get prioritized recommendations for what to refine, automate, or leave in human hands.",
      },
      {
        title: "Build the brand, not just the pieces",
        tease: "Your identity and communications need to hold together across digital and physical touchpoints.",
        text:
          "I develop visual identities, design systems, and practical guidelines that keep websites, marketing materials, and printed pieces consistent. Your team gets a foundation it can apply as the business grows.",
      },
    ],
  },
  {
    kind: "prove",
    seed: 152,
    name: "Prove it worked",
    line:
      "Look at what actually happened, what changed, what people did, and what the team learned.",
    ways: [
      {
        title: "Get the message out, and make it land",
        tease: "People aren\u2019t noticing, understanding, or taking the next step.",
        text:
          "I shape campaigns, launch communications, content, and CRM around what the audience needs and the action the business wants to support. The work connects the message, the experience, and how success will be measured.",
      },
      {
        title: "Put AI to work, without losing the plot",
        tease: "You see potential in AI but need a useful place to start.",
        text:
          "I help teams assess use cases, explore tools, and test ideas through practical prototypes. You get a clearer view of where AI can help, what needs validation, and where human judgment remains essential.",
      },
    ],
  },
];

export default function Page() {
  return (
    <article>
      {/* HERO: the greeting, the portrait, and the short version. The
          portrait is the same card as the /about hero so the visitor
          confirms "right person" in a glance. */}
      <section className="relative section-hero">
        <div className="max-w-content mx-auto px-6 md:px-8 lg:px-12">
          <div className="split-grid grid-cols-1 lg:grid-cols-12 items-start">
            <div className="lg:col-span-7 order-2 lg:order-1">
              <p className="eyebrow">How I help</p>
              <h1 className="headline-static hero-title text-balance max-w-4xl">
                Nice to meet you.
              </h1>
              {/* The scan questions (Shawn's copy brief, November 11, 2026):
                  the main question, then the supporting one as its own
                  paragraph, set like every other page's hero (.hero-lead,
                  24px apart). The NFL standings easter egg on "tackling" was
                  removed in the same brief. */}
              <p className="hero-lead max-w-3xl text-pretty">
                What business challenge are you tackling, or transformation
                are you leading?
              </p>
              <p className="hero-lead max-w-3xl text-pretty">
                What goal are you working toward, and how will you measure
                success?
              </p>
              {/* November 11, 2026 (Shawn's call): this lead replaced the
                  footer pair at the top of /how-i-help. */}
              <p className="max-w-3xl hero-lead text-pretty">
                I help teams define and build digital experiences that
                customers and users understand, trust, and act on.
              </p>
              <div className="mt-6 md:mt-8 max-w-3xl text-text-secondary prose-block text-pretty">
                <p>
                  My deepest experience is in healthcare, pharma, and regulated
                  markets. I bring clear direction and hands-on design
                  leadership, from defining the opportunity through delivery.
                </p>
              </div>
              {/* The page's first ask (November 11, 2026). */}
              <div className="mt-8 max-w-3xl">
                <Link href="/contact" className="btn-next">
                  Let&rsquo;s discuss your goals
                  <span aria-hidden="true" className="ml-2">&rarr;</span>
                </Link>
                <p className="mt-4 body-text text-text-secondary text-pretty">
                  Bring a question, a rough idea, or an existing project.
                  We&rsquo;ll talk through your goals, what&rsquo;s getting in
                  the way, and whether I&rsquo;m the right person to help.
                </p>
              </div>
            </div>

            {/* The headshot in its own extended glow, no frame (November 11,
                2026; components/Portrait.tsx). */}
            <div className="lg:col-span-5 order-1 lg:order-2 flex justify-center lg:justify-start lg:pt-12">
              <Portrait
                className="w-[220px] lg:w-[300px]"
                priority
                sizes="(max-width: 1024px) 220px, 300px"
              />
            </div>
          </div>
        </div>
      </section>

      {/* A FEW WAYS I CAN HELP (October 2026): three groups, one per
          Capizzi Process principle. Each group opens with the principle's
          drawing, name, and definition, then the two ways it guides. The
          drawing lights once as its header scrolls into view; no hover. */}
      <section className="section border-t border-border-subtle">
        <div className="max-w-content mx-auto px-6 md:px-8 lg:px-12">
          <h2 className="section-title text-balance max-w-3xl">
            A few ways I can help
          </h2>
          {/* System framing (Shawn's copy brief, November 11, 2026): the
              work flexes; the Process is the constant. "Capizzi Process"
              keeps its link to the full method on /thinking. */}
          <p className="lead-text mt-5 mb-10 md:mb-12 max-w-3xl text-text-secondary text-pretty">
            The work flexes around your goals. The{" "}
            <Link href="/thinking" className="text-link hover:text-link-hover transition-colors">
              Capizzi Process
            </Link>{" "}
            provides a consistent foundation: listen first, make it visible,
            prove it worked.
          </p>
          <WaysGroups groups={GROUPS} />
        </div>
      </section>

      {/* THE KIND OF WORK I KNOW WELL: the client line, in the same style as
          the figures strip on /contact. Its bottom edge is the ask rule on
          the section below, so it carries only a top border. */}
      <section className="section-tight border-t border-border-subtle">
        <div className="max-w-content mx-auto px-6 md:px-8 lg:px-12">
          <h2 className="section-title text-balance max-w-3xl">
            Where this has worked
          </h2>
          <p className="body-text mt-6 max-w-3xl text-text-secondary text-pretty">
            15+ years across pharma, healthcare, financial services, and
            enterprise, with teams at Pfizer, Bloomberg, Samsung, Biogen,
            AbbVie, and others, including CRM programs built around the
            high-value actions patients and doctors take. Much of it
            regulated, most of it complex, all of it meant to ship.
          </p>
        </div>
      </section>

      {/* THE ASK: one button, to /contact, in the purple send-off block the
          homepage closes with. */}
      <section className="cta-purple-block section-close ask-rule">
        <div className="max-w-content mx-auto px-6 md:px-8 lg:px-12">
          <div className="max-w-3xl">
            <h2 className="section-title">Start wherever you are.</h2>
            <p className="lead-text mt-6 text-text-secondary text-pretty">
              You don&rsquo;t need a finished brief to start. Bring a business
              challenge, an opportunity, or an experience you want to improve.
            </p>
            {/* The napkin line from /contact, same mono style and pencil. It
                pays off the napkin-to-product card above. */}
            <p className="mt-8 font-mono text-base md:text-lg text-text-primary tracking-tight">
              <span aria-hidden="true">&#9999;&#65039;</span>{" "}
              Napkin sketches welcome.
            </p>
            <div className="mt-8">
              <Link
                href="/contact"
                className="btn-next"
              >
                Let&rsquo;s discuss your goals
                <span aria-hidden="true" className="ml-2">&rarr;</span>
              </Link>
              {/* What the call is (Shawn's copy brief, November 11, 2026). The
                  booking is 30 minutes, checked on the Cal.com event page. */}
              <p className="mt-4 body-text text-text-secondary text-pretty">
                A 30-minute conversation about your goals, what&rsquo;s getting
                in the way, and whether I can help. If there&rsquo;s a fit,
                we&rsquo;ll identify a sensible starting point.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* LOOK AROUND FIRST: four links, each with its own job (proof, method,
          the ideas, the lowest-commitment option), beside the book. */}
      <section className="section border-t border-border-subtle">
        <div className="max-w-content mx-auto px-6 md:px-8 lg:px-12">
          <div className="split-grid grid-cols-1 md:grid-cols-12 items-center">
            <div className="md:col-span-6">
              <p className="metadata-label">Prefer to look around first?</p>
              <ul className="space-y-4">
                {[
                  { href: "/work", label: "See my work", external: false },
                  { href: "/thinking", label: "The Capizzi Process", external: false },
                  { href: "/book/chapter-1", label: "Read the first chapter", external: false },
                  { href: LINKEDIN_URL, label: "Connect on LinkedIn", external: true },
                ].map((item) =>
                  item.external ? (
                    <li key={item.label}>
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-lg md:text-xl font-medium text-link hover:text-link-hover transition-colors"
                      >
                        {item.label}
                        <span aria-hidden="true" className="ml-2">&rarr;</span>
                      </a>
                    </li>
                  ) : (
                    <li key={item.label}>
                      <Link
                        href={item.href}
                        className="inline-flex items-center text-lg md:text-xl font-medium text-link hover:text-link-hover transition-colors"
                      >
                        {item.label}
                        <span aria-hidden="true" className="ml-2">&rarr;</span>
                      </Link>
                    </li>
                  )
                )}
              </ul>
            </div>
            {/* The book and the Clarity Cards, the IP Shawn mails to senior
                contacts with the card. For someone who received both, seeing
                them here closes the loop the identity card opens. */}
            <div className="md:col-span-6 card-grid grid-cols-2">
              <figure>
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-border-default bg-bg-raised">
                  <Image
                    src="/images/process/seeing-past-the-cage-book.jpg"
                    alt="Seeing Past the Cage, Shawn Capizzi's book on communication design in the age of AI"
                    fill
                    sizes="(max-width: 768px) 50vw, 25vw"
                    className="object-cover"
                  />
                </div>
                <figcaption className="mt-3 font-mono text-xs md:text-sm text-text-secondary tracking-tight">
                  Seeing Past the Cage
                </figcaption>
              </figure>
              <figure>
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-border-default bg-bg-raised">
                  <Image
                    src="/images/process/clarity-cards-desk.jpg"
                    alt="Seven printed Clarity Cards dealt across a wooden desk beside a keyboard and mouse"
                    fill
                    sizes="(max-width: 768px) 50vw, 25vw"
                    className="object-cover"
                  />
                </div>
                <figcaption className="mt-3 font-mono text-xs md:text-sm text-text-secondary tracking-tight">
                  Clarity Cards
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
      </section>
    </article>
  );
}
