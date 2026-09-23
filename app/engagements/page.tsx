import Link from "next/link";
import Image from "next/image";
import { pageMetadata } from "@/lib/seo";
import { AccordionDetail } from "@/components/AccordionDetail";

export const metadata = pageMetadata({
  path: "/engagements",
  title: "Engagements: Embedded Leadership, Advisory, and On-Call",
  description:
    "Three ways to engage senior product and experience strategy leadership: embedded leadership, strategic advisory, and on-call retainer. Built for regulated and enterprise teams.",
});

const CAL_URL = "https://cal.com/capizzi/30min";

/**
 * /engagements, restructured September 2026. The page leads with Ways of
 * working: a brief intro, then the three options side by side, each saying
 * who it serves, what Shawn contributes, and how to start, so a buyer can
 * scan and choose before reading anything else. Supporting detail follows:
 * the three option sections (#leadership, #advisory, #oncall, linked from
 * the FAQ, About, and case studies), then who he works with, the working
 * principles, and the kickoff (#process). One call to action sits under the
 * options and one closes the page; the repeated banners and "let's talk"
 * lines were consolidated.
 *
 * Wherever interviews and AI-assisted simulations both appear, the copy
 * keeps them distinct: interviews are with real stakeholders, simulations
 * are labeled as simulations and reported separately.
 */

const WAYS = [
  {
    id: "leadership",
    name: "Leadership",
    tagline: "Embedded senior design and experience leadership.",
    serves:
      "Agencies and in-house pharma, healthcare, start-up, and enterprise teams that need senior UX, CX, and content leadership inside an active program.",
    contribute:
      "Experience strategy, information architecture, content frameworks, and regulatory-ready flows, worked hands-on with PMs, creative, copy, and engineering.",
    start:
      "A strategy call, then scoping by program, duration, and how I join the team.",
  },
  {
    id: "advisory",
    name: "Advisory",
    tagline: "Focused guidance on a defined opportunity, challenge, or decision.",
    serves:
      "VPs, directors, and senior leaders who need senior counsel on one defined question, without a full-time hire.",
    contribute:
      "A diagnostic, clear options, and a decision-ready deliverable: a Strategic Snapshot, an Engagement Sprint, or an AI Opportunity Diagnostic.",
    start: "A strategy call to define the question, then a scoped engagement.",
  },
  {
    id: "oncall",
    name: "On Call",
    tagline: "Ongoing access to a senior thinking partner.",
    serves:
      "Leaders running multi-quarter initiatives who want senior judgment available when decisions land.",
    contribute:
      "Working sessions on your cadence, async review between them, and direction for vendor and dev teams, onshore and offshore.",
    start:
      "A strategy call, then a monthly retainer scoped to the access you need.",
  },
];

const EMBEDDED_INCLUDED = [
  "Site architecture, wireframes, prototypes, and high-fidelity mockups",
  "Content frameworks, taxonomy, and IA documentation",
  "Regulatory-ready flows designed to survive RC, MLR, and FDA review",
  "Design system contributions and brand-template work",
  "Cross-functional partnership with copy, creative, account, regulatory, dev, and offshore teams",
  "Workshop facilitation and stakeholder alignment when the room needs it",
];

const EMBEDDED_WORKS = [
  "An agency needs senior UX leadership inside a brand program or pitch",
  "An in-house team needs senior contractor depth without making a full-time hire",
  "A multi-brand portfolio needs someone who can navigate regulatory complexity",
  "A project is mid-flight and needs experience leadership to land the work",
  "You want a senior partner who can work alongside your offshore or vendor teams",
];

const ADVISORY_SHAPES = [
  {
    name: "Strategic Snapshot",
    description:
      "Focused problem solving and options for a single, well-scoped problem. Single deliverable.",
    included:
      "Stakeholder interviews, document and artifact review, focused diagnostic, single actionable deliverable.",
    works:
      "A multi-quarter program has stalled and leadership needs an honest read. A new leader has inherited a team and needs a current-state assessment. A decision, deadline, or review is approaching and you need senior input to guide the team to ship on time and within budget.",
  },
  {
    name: "Engagement Sprint",
    description:
      "Positive forward movement. Defined problem, clear outcome, decision-ready deliverables.",
    included:
      "Up to 10 interviews with real stakeholders, plus AI-assisted simulations where they help pressure-test ideas, reported separately from the interviews. Document and content review, competitive context where relevant, a prioritized flexible roadmap, an executive presentation, and one to two follow-up reviews.",
    works:
      "An AI initiative needs to be defined and gotten into production. A redesign or platform consolidation is hard to use and over budget. A multi-brand program needs a governance reset. An organization needs a vendor-agnostic view of AI opportunities and design actions that can actually move revenue.",
  },
  {
    name: "AI Opportunity Diagnostic",
    description:
      "A short, multi-week engagement that assesses where AI could fit in your team's workflows and the efficacy of operations. Vendor-agnostic. Output is a prioritized roadmap, not a vendor list.",
    included:
      "Stakeholder interviews, process mapping, data and workflow review, identification of high-leverage AI opportunities, identification of places AI shouldn't go yet, prioritized roadmap with clear next actions.",
    works:
      "You're being pitched on AI tools and don't know which to trust. You have an AI initiative stuck in pilot. You want to understand where your team is actually ready for AI integration, and where the foundation needs work first.",
  },
];

const ONCALL_INCLUDED = [
  "Working sessions on the decisions that matter, on your cadence",
  "Async document and decision review between sessions",
  "Slack or email access for fast calls when timing is tight",
  "Vendor and dev-team direction, onshore and offshore, kept on task and on budget",
  "Quarterly strategic alignment review tied to current goals and metrics",
];

const ONCALL_WORKS = [
  "A multi-quarter initiative needs ongoing senior input, not a one-time deliverable",
  "A leadership team wants a thinking partner who has seen this kind of work succeed and fail at scale",
  "You want senior judgment available the moment a decision lands, without a full-time hire",
];

const PILLARS = [
  {
    name: "Pillar 1: Regulatory",
    body: "Healthcare and financial product teams operate under real constraints: fixed regulatory deadlines, multiple rounds of legal and medical review, complex scientific content, and development windows that cannot be missed. Speed matters. Trust matters more. I help teams design UX and CX systems that meet business goals while respecting FDA, RC, MLR, and financial compliance, without losing clarity, accessibility, or time to market.",
    crossLink: {
      href: "/work/pharma-design-systems",
      label: "See this across 70+ therapeutic brands",
    },
  },
  {
    name: "Pillar 2: Interfaces",
    body: "New technology doesn't create adoption. Clarity does. I help teams design modern interfaces (AI tools, conversational systems, QR activations, mobile wallet integrations, sales funnels, multi-touchpoint experiences) in ways that feel intuitive, trusted, and grounded in real behavior. Users don't care about novelty. They care about getting what they need and moving on with the rest of their life.",
    crossLink: {
      href: "/work/ai-native-product-design-lab",
      label: "See the AI-native product design lab",
    },
  },
  {
    name: "Pillar 3: Systems",
    body: "Enterprise systems fail quietly. They fragment over time. Each team builds its own version. I help teams design and govern systems that scale across brands, teams, and product lines. The work is half architecture, half organizational design. A system only works if the people maintaining it can actually use it.",
    crossLink: {
      href: "/work/multi-brand-pharma-sales-tools",
      label: "See a multi-brand design system in practice",
    },
  },
];

export default function Page() {
  return (
    <article>
      {/* HERO: a brief introduction, then straight into Ways of working */}
      <section className="relative pt-32 md:pt-40 pb-12 md:pb-16">
        <div className="max-w-content mx-auto px-6 md:px-8 lg:px-12">
          <p className="eyebrow mb-3">Engagements</p>
          <h1 className="headline-static hero-title max-w-4xl">
            Three flexible ways to bring in senior depth, scaled to your needs, timing, and roadmap.
          </h1>
          <p className="hero-lead max-w-3xl">
            I take on a small number of teams navigating complex content and
            experience decisions inside regulated and enterprise
            organizations. Choose the way of working that fits now, and move
            between them as your needs change.
          </p>
        </div>
      </section>

      {/* JUMP LINKS: sticky under the fixed site header (80px, 88px from md)
          for the whole page, so every section is one tap away. It sits
          outside the hero, as a direct child of the article, so it stays
          stuck all the way down. z-30 keeps it under the header (z-50) and
          under the mobile menu overlay (z-40). On phones the row scrolls
          sideways instead of wrapping, so the bar stays one line tall.
          Section anchors use scroll-mt equal to header plus bar, measured:
          80 + 46 = 126px on phones, 88 + 46 = 134px from md, 88 + 58 =
          146px from lg. Change those if the header or this bar changes. */}
      <div
        id="engagements-nav"
        className="sticky top-20 md:top-[88px] z-30 border-y border-border-subtle bg-bg-primary/85 backdrop-blur-md"
      >
        <div className="max-w-content mx-auto px-6 md:px-8 lg:px-12">
          <nav
            aria-label="On this page"
            className="flex items-center gap-x-3 overflow-x-auto whitespace-nowrap py-3 lg:py-4 text-sm lg:text-base text-text-tertiary [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            <span className="metadata-label shrink-0 mr-1">Jump to</span>
            <a href="#ways" className="shrink-0 text-link hover:text-link-hover transition-colors">Ways of working</a>
            <span aria-hidden="true">·</span>
            <a href="#leadership" className="shrink-0 text-link hover:text-link-hover transition-colors">Leadership</a>
            <span aria-hidden="true">·</span>
            <a href="#advisory" className="shrink-0 text-link hover:text-link-hover transition-colors">Advisory</a>
            <span aria-hidden="true">·</span>
            <a href="#oncall" className="shrink-0 text-link hover:text-link-hover transition-colors">On Call</a>
            <span aria-hidden="true">·</span>
            <a href="#who" className="shrink-0 text-link hover:text-link-hover transition-colors">Who</a>
            <span aria-hidden="true">·</span>
            <a href="#focus" className="shrink-0 text-link hover:text-link-hover transition-colors">Principles</a>
            <span aria-hidden="true">·</span>
            <a href="#process" className="shrink-0 text-link hover:text-link-hover transition-colors">Kickoff</a>
          </nav>
        </div>
      </div>

      {/* WAYS OF WORKING: the three options, scannable, before any detail */}
      <section id="ways" className="py-16 md:py-24 scroll-mt-[126px] md:scroll-mt-[134px] lg:scroll-mt-[146px]">
        <div className="max-w-content mx-auto px-6 md:px-8 lg:px-12">
          <p className="eyebrow mb-4">Ways of working</p>
          <h2 className="section-title mb-10 md:mb-12 max-w-3xl">
            Leadership, Advisory, or On Call
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
            {WAYS.map((way) => (
              <article
                key={way.id}
                className="flex flex-col p-7 md:p-8 rounded-2xl card-surface border border-border-default"
              >
                <p className="eyebrow mb-3">{way.name}</p>
                <h3 className="card-title text-text-primary">{way.tagline}</h3>
                <dl className="mt-6 space-y-5 flex-1">
                  <div>
                    <dt className="metadata-label mb-1.5">Who it serves</dt>
                    <dd className="text-base text-text-secondary leading-relaxed">{way.serves}</dd>
                  </div>
                  <div>
                    <dt className="metadata-label mb-1.5">What I contribute</dt>
                    <dd className="text-base text-text-secondary leading-relaxed">{way.contribute}</dd>
                  </div>
                  <div>
                    <dt className="metadata-label mb-1.5">How to start</dt>
                    <dd className="text-base text-text-secondary leading-relaxed">{way.start}</dd>
                  </div>
                </dl>
                <a
                  href={`#${way.id}`}
                  className="mt-7 inline-flex items-center text-sm font-medium text-link hover:text-link-hover transition-colors"
                >
                  {way.name} in detail{" "}
                  <span aria-hidden="true" className="ml-2">
                    &darr;
                  </span>
                </a>
              </article>
            ))}
          </div>

          <p className="mt-10 md:mt-12 text-lg md:text-xl text-text-primary leading-relaxed max-w-3xl">
            When the scope calls for it, I can also assemble and lead the right
            team across copy, creative, and development.
          </p>

          <div className="mt-10 md:mt-12 rounded-2xl card-surface border border-border-subtle px-6 md:px-10 py-7 md:py-8 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-lg md:text-xl font-medium text-text-primary">
                Not sure which fits?
              </p>
              <p className="mt-1 text-text-secondary">
                Start with a free 30-minute call, no pitch.
              </p>
            </div>
            <a
              href={CAL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 inline-flex items-center justify-center px-7 py-3.5 rounded-full bg-text-primary text-text-inverse text-base font-medium tracking-tight hover:scale-[1.02] transition-transform"
            >
              Book a Strategy Call
            </a>
          </div>
        </div>
      </section>

      {/* PATH 1 - EMBEDDED */}
      <section id="leadership" className="py-16 md:py-24 border-t border-border-subtle scroll-mt-[126px] md:scroll-mt-[134px] lg:scroll-mt-[146px]">
        <div className="relative max-w-content mx-auto px-6 md:px-8 lg:px-12">
          <p className="eyebrow mb-4">Engagement type 01</p>
          <h2 className="section-title mb-8 md:mb-10 max-w-3xl">
            Leadership: Embedded Product Vision, UX &amp; Experience Design Lead
          </h2>
          <p className="lead-text text-lg md:text-xl leading-relaxed max-w-3xl mb-12 md:mb-14">
            Senior UX, CX, IA, content strategy, and engagement strategy
            inside active business goals. I work directly with PMs, creative
            directors, account leads, copywriters, visual designers, and
            engineering partners on campaigns (US and Global), platforms (app
            and enterprise systems), websites, apps, VR, and sales tools.
          </p>

          <div className="max-w-3xl">
            <AccordionDetail id="leadership-included" label="What's included" defaultOpen>
              <ul className="space-y-3">
                {EMBEDDED_INCLUDED.map((item, i) => (
                  <li
                    key={i}
                    className="text-base md:text-lg text-text-secondary leading-relaxed pl-5 relative"
                  >
                    <span
                      className="absolute left-0 top-3 w-2 h-px bg-text-tertiary"
                      aria-hidden="true"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </AccordionDetail>

            <AccordionDetail id="leadership-works" label="When this works">
              <ul className="space-y-3">
                {EMBEDDED_WORKS.map((item, i) => (
                  <li
                    key={i}
                    className="text-base md:text-lg text-text-secondary leading-relaxed pl-5 relative"
                  >
                    <span
                      className="absolute left-0 top-3 w-2 h-px bg-text-tertiary"
                      aria-hidden="true"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </AccordionDetail>
          </div>

          <div className="mt-14 md:mt-16 max-w-3xl">
            <p className="text-base text-text-secondary italic">
              Engagements scope by program, duration, and team integration.
              Day, weekly, and project rates available.
            </p>
          </div>
        </div>
      </section>

      {/* PATH 2 - ADVISORY */}
      <section id="advisory" className="py-16 md:py-24 border-t border-border-subtle scroll-mt-[126px] md:scroll-mt-[134px] lg:scroll-mt-[146px]">
        <div className="relative max-w-content mx-auto px-6 md:px-8 lg:px-12">
          <p className="eyebrow mb-4">Engagement type 02</p>
          <h2 className="section-title mb-8 md:mb-10 max-w-3xl">
            Advisory: Strategic, Project-Based Counsel
          </h2>
          <p className="lead-text text-lg md:text-xl leading-relaxed max-w-3xl mb-14 md:mb-16">
            Often that means product design and experience-first user flows
            that lift sign-ups and adoption. Sometimes it&apos;s strategy, a
            pitch deck, blue-sky options, or a voice in the room. Three common
            shapes:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {ADVISORY_SHAPES.map((shape) => (
              <article
                key={shape.name}
                className="relative p-7 md:p-8 rounded-2xl card-surface border border-border-default"
              >
                <h3 className="card-title mb-3 text-text-primary">
                  {shape.name}
                </h3>
                <p className="text-base md:text-lg text-text-secondary leading-relaxed mb-6">
                  {shape.description}
                </p>
                <div className="border-t border-border-subtle pt-2">
                  <AccordionDetail
                    id={`advisory-${shape.name.toLowerCase().replace(/\s+/g, "-")}-included`}
                    label="What's included"
                    defaultOpen
                  >
                    <p className="text-sm md:text-base text-text-secondary leading-relaxed">
                      {shape.included}
                    </p>
                  </AccordionDetail>
                  <AccordionDetail
                    id={`advisory-${shape.name.toLowerCase().replace(/\s+/g, "-")}-works`}
                    label="When this works"
                  >
                    <p className="text-sm md:text-base text-text-secondary leading-relaxed">
                      {shape.works}
                    </p>
                  </AccordionDetail>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-14 md:mt-16 max-w-3xl">
            <p className="text-base text-text-secondary italic">
              Advisory engagements scale to scope and duration.
            </p>
          </div>
        </div>
      </section>

      {/* PATH 3 - ON CALL */}
      <section id="oncall" className="py-16 md:py-24 border-t border-border-subtle scroll-mt-[126px] md:scroll-mt-[134px] lg:scroll-mt-[146px]">
        <div className="relative max-w-content mx-auto px-6 md:px-8 lg:px-12">
          <p className="eyebrow mb-4">Engagement type 03</p>
          <h2 className="section-title mb-8 md:mb-10 max-w-3xl">
            On Call: Senior counsel on standing call, on a monthly retainer
          </h2>
          <p className="lead-text text-lg md:text-xl leading-relaxed max-w-3xl mb-12 md:mb-14">
            An honest extension of your team over time, not a single
            deliverable: we talk through the product refinements and
            implementations you&apos;d rather not handle alone, with an outside
            point of view that brings clarity.
          </p>

          <div className="max-w-3xl">
            <AccordionDetail id="oncall-included" label="What's included" defaultOpen>
              <ul className="space-y-3">
                {ONCALL_INCLUDED.map((item, i) => (
                  <li
                    key={i}
                    className="text-base md:text-lg text-text-secondary leading-relaxed pl-5 relative"
                  >
                    <span
                      className="absolute left-0 top-3 w-2 h-px bg-text-tertiary"
                      aria-hidden="true"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </AccordionDetail>

            <AccordionDetail id="oncall-works" label="When this works">
              <ul className="space-y-3">
                {ONCALL_WORKS.map((item, i) => (
                  <li
                    key={i}
                    className="text-base md:text-lg text-text-secondary leading-relaxed pl-5 relative"
                  >
                    <span
                      className="absolute left-0 top-3 w-2 h-px bg-text-tertiary"
                      aria-hidden="true"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </AccordionDetail>
          </div>

          <div className="mt-14 md:mt-16 max-w-3xl">
            <p className="text-base text-text-secondary italic">
              Retainers are monthly and scope to the cadence of access you need.
            </p>
          </div>
        </div>
      </section>

      {/* WHO I WORK WITH */}
      <section id="who" className="py-16 md:py-24 border-t border-border-subtle scroll-mt-[126px] md:scroll-mt-[134px] lg:scroll-mt-[146px]">
        <div className="relative max-w-content mx-auto px-6 md:px-8 lg:px-12">
          <h2 className="section-title mb-8 md:mb-10 max-w-3xl">
            Who I work with
          </h2>
          <p className="lead-text text-lg md:text-xl leading-relaxed max-w-3xl mb-12 md:mb-14">
            The most useful seat I take in any engagement is the one between
            the leaders who set direction and the practitioners building toward
            it. I do my best work when I&apos;m trusted by both.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {/* Leadership tier */}
            <article className="relative p-7 md:p-8 rounded-2xl card-surface border border-border-default">
              <p className="eyebrow mb-3">Leadership tier</p>
              <p className="text-base md:text-lg text-text-primary font-medium mb-4">
                SVPs, VPs, Directors, PMs, brand managers, account leads.
              </p>
              <p className="text-base text-text-secondary leading-relaxed">
                The people who hire me, set the direction, and need senior
                judgment on the decisions that matter most. We work in 1:1s,
                working sessions, and the moments before a critical room.
              </p>
            </article>

            {/* Creative tier */}
            <article className="relative p-7 md:p-8 rounded-2xl card-surface border border-border-default">
              <p className="eyebrow mb-3">Creative tier</p>
              <p className="text-base md:text-lg text-text-primary font-medium mb-4">
                Copywriters, visual designers, design directors.
              </p>
              <p className="text-base text-text-secondary leading-relaxed">
                My closest daily collaborators. I work shoulder-to-shoulder on
                the actual artifacts (wireframes, content frameworks,
                decks, prototypes) and earn trust through the craft, not
                the title above it.
              </p>
            </article>

            {/* Build tier */}
            <article className="relative p-7 md:p-8 rounded-2xl card-surface border border-border-default">
              <p className="eyebrow mb-3">Build tier</p>
              <p className="text-base md:text-lg text-text-primary font-medium mb-4">
                Dev partners, engineering teams, design system practitioners.
              </p>
              <p className="text-base text-text-secondary leading-relaxed">
                The people who turn the work into a product. I write to be
                built. Onshore primarily, with global partners as needed.
              </p>
            </article>

            {/* Adjacent tier */}
            <article className="relative p-7 md:p-8 rounded-2xl card-surface border border-border-default">
              <p className="eyebrow mb-3">Adjacent tier</p>
              <p className="text-base md:text-lg text-text-primary font-medium mb-4">
                Regulatory reviewers, strategy partners, project managers.
              </p>
              <p className="text-base text-text-secondary leading-relaxed">
                The functions that wrap around the work. I treat regulatory
                partners (RC, MLR, FDA, SEC) as collaborators,
                not gatekeepers. The work moves faster when they&apos;re
                brought in early.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* THREE PILLARS */}
      <section id="focus" className="py-16 md:py-24 border-t border-border-subtle scroll-mt-[126px] md:scroll-mt-[134px] lg:scroll-mt-[146px]">
        <div className="relative max-w-content mx-auto px-6 md:px-8 lg:px-12">
          <h2 className="section-title mb-8 md:mb-10 max-w-3xl">
            How I work across engagements
          </h2>
          <p className="text-lg md:text-xl text-text-secondary leading-relaxed max-w-3xl mb-14 md:mb-16">
            Every engagement runs through three lenses. They&apos;re not
            separate practices. They&apos;re how I look at any complex
            experience problem.
          </p>

          <div className="mb-14 md:mb-16">
            <figure>
              <div className="relative aspect-video rounded-2xl overflow-hidden border border-border-default">
                <Image
                  src="/images/engagements/needs-framework-sketch.jpg"
                  alt="Hand-drawn framework: user need and want flowing down through company to users, business, and resources"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 90vw, 1100px"
                />
              </div>
              <figcaption className="mt-5 text-sm md:text-base text-text-tertiary text-center italic">
                Where every engagement begins.
              </figcaption>
            </figure>
          </div>

          <div className="space-y-12 md:space-y-16">
            {PILLARS.map((pillar) => (
              <div key={pillar.name} className="max-w-3xl">
                <h3 className="card-title mb-4 text-text-primary">
                  {pillar.name}
                </h3>
                <p className="text-base md:text-lg text-text-secondary leading-relaxed">
                  {pillar.body}
                </p>
                {pillar.crossLink && (
                  <p className="mt-4">
                    <Link
                      href={pillar.crossLink.href}
                      className="text-base text-link hover:text-link-hover transition-colors italic"
                    >
                      {pillar.crossLink.label} &rarr;
                    </Link>
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT STARTS */}
      <section id="process" className="py-16 md:py-24 border-t border-border-subtle scroll-mt-[126px] md:scroll-mt-[134px] lg:scroll-mt-[146px]">
        <div className="relative max-w-content mx-auto px-6 md:px-8 lg:px-12">
          <h2 className="section-title mb-14 md:mb-16 max-w-3xl">
            Engagement kickoff
          </h2>

          <div className="space-y-10 md:space-y-12 max-w-3xl">
            {[
              {
                step: "Step 1",
                title: "Strategy Call (free, 30 minutes)",
                body: "Virtual. We talk through what's stuck and what success looks like. No pitch. If there's not a fit, I'll tell you and try to point you to possible solutions or partners.",
              },
              {
                step: "Step 2",
                title: "Scoping conversation",
                body: "If the strategy call goes well, a longer conversation with the relevant stakeholders to understand scope, timing, and constraints. This is where I'll ask the questions that make the engagement actually work.",
              },
              {
                step: "Step 3",
                title: "Statement of Work",
                body: "The brief or SOW with scope, deliverables, timing, and pricing. Can also be written for your marketing team if I'm serving as an adviser to procurement.",
              },
              {
                step: "Step 4",
                title: "Quarterly data and actions check-in",
                body: "Most engagements evolve. Every 90 days we step back, review what's working, and adjust based on current goals and metrics. Some stay the same shape for years. Others shift as the business shifts. The relationship matters more than the SOW.",
              },
            ].map((step) => (
              <div
                key={step.step}
                className="border-l-2 border-border-default pl-6 md:pl-8"
              >
                <p className="metadata-label mb-2">{step.step}</p>
                <h3 className="card-title text-text-primary mb-3">
                  {step.title}
                </h3>
                <p className="text-base md:text-lg text-text-secondary leading-relaxed">
                  {step.body}
                </p>
              </div>
            ))}
          </div>

          <p className="mt-14 md:mt-16 text-lg text-text-secondary max-w-3xl">
            Many engagements move from first call to signed SOW in 2–3 weeks.
          </p>
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section className="py-16 md:py-24 border-t border-border-subtle">
        <div className="max-w-content mx-auto px-6 md:px-8 lg:px-12">
          <figure className="max-w-3xl p-7 md:p-8 rounded-2xl card-surface border border-border-default">
            <blockquote>
              <p className="text-base md:text-lg text-text-primary leading-relaxed">
                As a UX leader and subject matter expert, he provided essential
                governance and content strategy for our brand&apos;s new design
                system and platform migration across indications for both HCP
                and DTC.
              </p>
            </blockquote>
            <figcaption className="mt-6 flex items-center gap-4">
              <Image
                src="/images/testimonials/courtney-mcknight.avif"
                alt="Courtney McKnight"
                width={56}
                height={56}
                className="rounded-full object-cover h-12 w-12 md:h-14 md:w-14 border border-border-subtle"
              />
              <div>
                <p className="text-sm font-semibold text-text-primary">
                  Courtney McKnight
                </p>
                <p className="text-xs text-text-tertiary mt-0.5">
                  Brand Account Manager
                </p>
              </div>
            </figcaption>
          </figure>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-24 md:py-32 border-t border-border-subtle">
        <div className="max-w-content mx-auto px-6 md:px-8 lg:px-12 text-center">
          <h2 className="section-title mb-6 md:mb-8 max-w-3xl mx-auto">
            Tell me what&apos;s stuck.
          </h2>
          <p className="text-lg md:text-xl text-text-secondary mb-10 md:mb-12 max-w-2xl mx-auto">
            30 minutes. No pitch. Let&apos;s discuss current goals and pain points and see the best options for you.
          </p>
          <a
            href={CAL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-7 py-3.5 rounded-full bg-text-primary text-text-inverse text-base font-medium tracking-tight hover:scale-[1.02] transition-transform"
          >
            Book a Strategy Call
          </a>
        </div>
      </section>
    </article>
  );
}
