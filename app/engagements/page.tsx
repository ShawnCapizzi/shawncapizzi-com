import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { AccordionDetail } from "@/components/AccordionDetail";
import { CTACards } from "@/components/CTACards";

export const metadata: Metadata = {
  title: "Engagements",
  description:
    "Three ways to engage senior product and experience strategy leadership: embedded leadership, strategic advisory, and on-call retainer. Built for regulated and enterprise teams.",
};

const CAL_URL = "https://cal.com/capizzi/30min";

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
      "Up to 10 stakeholder interviews (human + synthetic), document content review, competitive context where relevant, prioritized flexible roadmap, executive presentation, one to two follow-up reviews.",
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
  },
  {
    name: "Pillar 2: Interfaces",
    body: "New technology doesn't create adoption. Clarity does. I help teams design modern interfaces (AI tools, conversational systems, QR activations, mobile wallet integrations, sales funnels, multi-touchpoint experiences) in ways that feel intuitive, trusted, and grounded in real behavior. Users don't care about novelty. They care about getting what they need and moving on with the rest of their life.",
  },
  {
    name: "Pillar 3: Systems",
    body: "Enterprise systems fail quietly. They fragment over time. Each team builds its own version. I help teams design and govern systems that scale across brands, teams, and product lines. The work is half architecture, half organizational design. A system only works if the people maintaining it can actually use it.",
  },
];

export default function Page() {
  return (
    <article>
      {/* HERO */}
      <section className="relative pt-32 md:pt-40 pb-16 md:pb-20">
        <div className="max-w-content mx-auto px-6 md:px-8 lg:px-12">
          <p className="eyebrow mb-3">Engagements</p>
          <h1 className="headline-static text-[1.8rem] md:text-4xl lg:text-[39px] font-bold tracking-tight leading-[1.15] md:leading-[1.1] lg:leading-[1.05] max-w-4xl">
            Three flexible ways to bring in senior depth, scaled to your needs, timing, and roadmap.
          </h1>
          <p className="mt-6 md:mt-8 text-lg md:text-xl text-text-secondary leading-relaxed max-w-3xl">
            I take on a small number of teams inside regulated and enterprise
            organizations navigating complexity, in their content and experience
            design decisions.
          </p>
          <p className="mt-5 text-lg md:text-xl text-text-secondary leading-relaxed max-w-3xl">
            The three ways of working below are shapes a flexible, collaborative
            relationship can take, not off-the-shelf products you pick from.
          </p>

          <div id="engagements-nav" className="mt-8 md:mt-10 scroll-mt-32 md:scroll-mt-40">
            <p className="metadata-label mb-3">Jump to</p>
            <nav className="flex flex-wrap items-center gap-x-3 gap-y-2 text-sm md:text-base text-text-tertiary">
              <a href="#leadership" className="text-[#7B7FE0] hover:text-[#9DA0EE] transition-colors">Leadership</a>
              <span aria-hidden="true">·</span>
              <a href="#advisory" className="text-[#7B7FE0] hover:text-[#9DA0EE] transition-colors">Advisory</a>
              <span aria-hidden="true">·</span>
              <a href="#oncall" className="text-[#7B7FE0] hover:text-[#9DA0EE] transition-colors">On Call</a>
              <span aria-hidden="true">·</span>
              <a href="#who" className="text-[#7B7FE0] hover:text-[#9DA0EE] transition-colors">Who</a>
              <span aria-hidden="true">·</span>
              <a href="#focus" className="text-[#7B7FE0] hover:text-[#9DA0EE] transition-colors">Focus</a>
              <span aria-hidden="true">·</span>
              <a href="#process" className="text-[#7B7FE0] hover:text-[#9DA0EE] transition-colors">Process</a>
            </nav>
          </div>

          <p className="mt-8 md:mt-10 text-lg md:text-xl text-text-secondary leading-relaxed max-w-3xl">
            Move between the options as needs change. Wins accrue over time and
            collaboration compounds. The partnership strengthens.
          </p>

          <figure className="mt-10 md:mt-12 max-w-3xl p-7 md:p-8 rounded-2xl card-surface border border-border-default">
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

          <div className="mt-10 md:mt-12">
            <a
              href={CAL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-7 py-3.5 rounded-full bg-[#6B5CFF] hover:bg-[#7B6CFF] text-white text-base font-medium tracking-tight hover:scale-[1.02] transition-all"
            >
              Book a Strategy Call
            </a>
          </div>
        </div>
      </section>

      {/* FRAMEWORK SKETCH — how I think before any pixel gets pushed */}
      <section className="pb-8 md:pb-12">
        <div className="max-w-content mx-auto px-6 md:px-8 lg:px-12">
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
      </section>

      {/* PATH 1 - EMBEDDED */}
      <section id="leadership" className="py-16 md:py-24 border-t border-border-subtle scroll-mt-32 md:scroll-mt-40">
        <div className="relative max-w-content mx-auto px-6 md:px-8 lg:px-12">
          <a
            href="#engagements-nav"
            className="absolute top-0 right-6 md:right-8 lg:right-12 inline-flex items-center text-xs md:text-sm text-[#7B7FE0] hover:text-[#9DA0EE] transition-colors"
            aria-label="Jump back to navigation"
          >
            <span aria-hidden="true" className="mr-1.5">↑</span> Menu
          </a>
          <p className="eyebrow mb-4">Engagement type 01</p>
          <h2 className="subhead-editorial text-2xl md:text-2xl lg:text-[30px] mb-8 md:mb-10 max-w-3xl">
            Leadership: Embedded Product Vision, UX &amp; Experience Design Lead
          </h2>
          <p className="lead-text text-lg md:text-xl leading-relaxed max-w-3xl mb-12 md:mb-14">
            For agencies and in-house pharma, healthcare, start-up, and
            enterprise teams that need senior design, actionable engagement
            strategy, IA, and content strategy inside active business goals. I
            work directly with PMs, creative directors, account leads,
            copywriters, visual designers, and engineering partners on real
            tactics, campaigns (US and Global), platforms (app and enterprise
            systems), websites, apps, VR, and sales tools.
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

          <div className="mt-14 md:mt-16 p-6 md:p-8 rounded-2xl card-surface border border-border-default max-w-3xl">
            <p className="text-base text-text-secondary italic">
              Engagements scope by program, duration, and team integration. Day,
              weekly, and project rates available. Let&apos;s talk through what
              your team actually needs.
            </p>
            <a
              href={CAL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center text-link hover:text-link-hover transition-colors text-base font-medium"
            >
              Book a Strategy Call{" "}
              <span aria-hidden="true" className="ml-2">
                →
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* PATH 2 - ADVISORY */}
      <section id="advisory" className="py-16 md:py-24 border-t border-border-subtle scroll-mt-32 md:scroll-mt-40">
        <div className="relative max-w-content mx-auto px-6 md:px-8 lg:px-12">
          <a
            href="#engagements-nav"
            className="absolute top-0 right-6 md:right-8 lg:right-12 inline-flex items-center text-xs md:text-sm text-[#7B7FE0] hover:text-[#9DA0EE] transition-colors"
            aria-label="Jump back to navigation"
          >
            <span aria-hidden="true" className="mr-1.5">↑</span> Menu
          </a>
          <p className="eyebrow mb-4">Engagement type 02</p>
          <h2 className="subhead-editorial text-2xl md:text-2xl lg:text-[30px] mb-8 md:mb-10 max-w-3xl">
            Advisory: Strategic, Project-Based Counsel
          </h2>
          <p className="lead-text text-lg md:text-xl leading-relaxed max-w-3xl mb-14 md:mb-16">
            For VPs, Directors, and senior leaders inside pharma, healthcare,
            financial services, and enterprise teams who need senior strategy,
            pitch deck, blue sky options, design, a voice in the room, and
            systems counsel without a full-time hire.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {ADVISORY_SHAPES.map((shape) => (
              <article
                key={shape.name}
                className="relative p-7 md:p-8 rounded-2xl card-surface border border-border-default"
              >
                <h3 className="text-xl md:text-2xl font-semibold mb-3 text-text-primary leading-tight">
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
              Advisory engagements scale to scope and duration. Let&apos;s talk
              through what your team actually needs.
            </p>
          </div>
        </div>
      </section>

      {/* PATH 3 - ON CALL */}
      <section id="oncall" className="py-16 md:py-24 border-t border-border-subtle scroll-mt-32 md:scroll-mt-40">
        <div className="relative max-w-content mx-auto px-6 md:px-8 lg:px-12">
          <a
            href="#engagements-nav"
            className="absolute top-0 right-6 md:right-8 lg:right-12 inline-flex items-center text-xs md:text-sm text-[#7B7FE0] hover:text-[#9DA0EE] transition-colors"
            aria-label="Jump back to navigation"
          >
            <span aria-hidden="true" className="mr-1.5">↑</span> Menu
          </a>
          <p className="eyebrow mb-4">Engagement type 03</p>
          <h2 className="subhead-editorial text-2xl md:text-2xl lg:text-[30px] mb-8 md:mb-10 max-w-3xl">
            On Call: Senior counsel on standing call, on a monthly retainer
          </h2>
          <p className="lead-text text-lg md:text-xl leading-relaxed max-w-3xl mb-12 md:mb-14">
            A monthly retainer for leaders who want a senior thinking partner
            available over time, not just for a single deliverable. We meet on
            your cadence, review what matters, and move the decision forward.
            For when you and your team want an outside POV that brings clarity.
            Reserved for a small number of teams so the access stays real.
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
              Let&apos;s talk through what your team actually needs.
            </p>
          </div>
        </div>
      </section>

      {/* WHO I WORK WITH */}
      <section id="who" className="py-16 md:py-24 border-t border-border-subtle scroll-mt-32 md:scroll-mt-40">
        <div className="relative max-w-content mx-auto px-6 md:px-8 lg:px-12">
          <a
            href="#engagements-nav"
            className="absolute top-0 right-6 md:right-8 lg:right-12 inline-flex items-center text-xs md:text-sm text-[#7B7FE0] hover:text-[#9DA0EE] transition-colors"
            aria-label="Jump back to navigation"
          >
            <span aria-hidden="true" className="mr-1.5">↑</span> Menu
          </a>
          <h2 className="text-3xl md:text-3xl lg:text-[30px] font-semibold tracking-tight mb-8 md:mb-10 max-w-3xl">
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
                the actual artifacts &mdash; wireframes, content frameworks,
                decks, prototypes &mdash; and earn trust through the craft, not
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
                partners &mdash; RC, MLR, FDA, SEC &mdash; as collaborators,
                not gatekeepers. The work moves faster when they&apos;re
                brought in early.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* THREE PILLARS */}
      <section id="focus" className="py-16 md:py-24 border-t border-border-subtle scroll-mt-32 md:scroll-mt-40">
        <div className="relative max-w-content mx-auto px-6 md:px-8 lg:px-12">
          <a
            href="#engagements-nav"
            className="absolute top-0 right-6 md:right-8 lg:right-12 inline-flex items-center text-xs md:text-sm text-[#7B7FE0] hover:text-[#9DA0EE] transition-colors"
            aria-label="Jump back to navigation"
          >
            <span aria-hidden="true" className="mr-1.5">↑</span> Menu
          </a>
          <h2 className="text-3xl md:text-3xl lg:text-[30px] font-semibold tracking-tight mb-8 md:mb-10 max-w-3xl">
            How I work across engagements
          </h2>
          <p className="text-lg md:text-xl text-text-secondary leading-relaxed max-w-3xl mb-14 md:mb-16">
            Every engagement runs through three lenses. They&apos;re not
            separate practices. They&apos;re how I look at any complex
            experience problem.
          </p>

          <div className="space-y-12 md:space-y-16">
            {PILLARS.map((pillar) => (
              <div key={pillar.name} className="max-w-3xl">
                <h3 className="text-xl md:text-2xl font-semibold mb-4 text-text-primary">
                  {pillar.name}
                </h3>
                <p className="text-base md:text-lg text-text-secondary leading-relaxed">
                  {pillar.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT STARTS */}
      <section id="process" className="py-16 md:py-24 border-t border-border-subtle scroll-mt-32 md:scroll-mt-40">
        <div className="relative max-w-content mx-auto px-6 md:px-8 lg:px-12">
          <a
            href="#engagements-nav"
            className="absolute top-0 right-6 md:right-8 lg:right-12 inline-flex items-center text-xs md:text-sm text-[#7B7FE0] hover:text-[#9DA0EE] transition-colors"
            aria-label="Jump back to navigation"
          >
            <span aria-hidden="true" className="mr-1.5">↑</span> Menu
          </a>
          <h2 className="text-3xl md:text-3xl lg:text-[30px] font-semibold tracking-tight mb-14 md:mb-16 max-w-3xl">
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
                <h3 className="text-xl md:text-2xl font-semibold text-text-primary mb-3">
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

      {/* CTA CARDS — work (proof) + book (deeper read) */}
      <section className="py-16 md:py-24 border-t border-border-subtle">
        <div className="max-w-content mx-auto px-6 md:px-8 lg:px-12">
          <CTACards cards={["work", "book"]} />
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-24 md:py-32 border-t border-border-subtle">
        <div className="max-w-content mx-auto px-6 md:px-8 lg:px-12 text-center">
          <h2 className="text-3xl md:text-[30px] font-semibold tracking-tight mb-6 md:mb-8 max-w-3xl mx-auto leading-tight">
            Tell me what&apos;s stuck.
          </h2>
          <p className="text-lg md:text-xl text-text-secondary mb-10 md:mb-12 max-w-2xl mx-auto">
            30 minutes. No pitch. Let&apos;s discuss current goals and pain points and see the best options for you.
          </p>
          <a
            href={CAL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-7 py-3.5 rounded-full bg-[#6B5CFF] hover:bg-[#7B6CFF] text-white text-base font-medium tracking-tight hover:scale-[1.02] transition-all"
          >
            Book a Strategy Call
          </a>
        </div>
      </section>
    </article>
  );
}
