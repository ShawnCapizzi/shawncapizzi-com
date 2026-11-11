import Link from "next/link";

/**
 * HowIWork: the engagement model, named once and handed off.
 *
 * This used to be a single-open accordion carrying the full Leadership,
 * Advisory, and On Call copy, which made it the tallest block on the page
 * at roughly 1,400px and duplicated /engagements, a 1,600-word page that
 * already covers all three tiers under #leadership, #advisory, and #oncall.
 *
 * It is now three statements, one line each, and a single link. No client
 * state, no accordion, no duplicated body copy, and no third ask to talk:
 * the homepage asks at the top and at the bottom only.
 *
 * November 11, 2026: card copy and the link label are Shawn's words, in
 * the order Advisory, Leadership, On Call. The titles are longer and wrap
 * at the card-title size; nothing shrinks to fit.
 *
 * To retune copy or add a tier, edit MODES below.
 */

type Mode = {
  key: string;
  eyebrow: string;
  title: string;
  line: string;
};

const MODES: Mode[] = [
  {
    key: "advisory",
    eyebrow: "Advisory",
    title: "Get clear on the opportunity. Together, we map a plan.",
    line: "Focused advisory to understand what’s getting in the way, assess the evidence and data, and establish clear priorities and direction.",
  },
  {
    key: "leadership",
    eyebrow: "Leadership",
    title: "Add deep marketing experience and design leadership to your team.",
    line: "Hands-on UX, creative, and customer experience leadership to align your team and carry the work through strategy, execution, and refinement.",
  },
  {
    key: "oncall",
    eyebrow: "On Call",
    title: "Knowledge and an experienced POV, in your pocket, when you need it.",
    line: "Ongoing support to work through decisions, review what’s working, and prioritize improvements as business goals, customer and user needs, and AI technologies evolve.",
  },
];

export function HowIWork() {
  return (
    <section className="section border-t border-border-subtle">
      <div className="max-w-content mx-auto px-6 md:px-8 lg:px-12">
        <div className="max-w-3xl">
          <p className="eyebrow">Engagement model</p>
          <h2 className="section-title">
            Three ways to bring me into the work.
          </h2>
          <p className="lead-text text-text-secondary">
            Start with a defined problem or an opportunity that still needs
            definition. I can embed with the team, advise on a focused
            challenge, or stay close when important decisions need another
            experienced point of view.
          </p>
          <p className="lead-text text-text-secondary">
            AI runs through most of this work now. The way I solve problems
            hasn&apos;t changed in fifteen years: on the ground with users and
            stakeholders, turning what they say and what the data shows into
            flows that make life easier for customers and the people inside
            the company. What has changed is what that work can be enriched
            with: data arrives faster, and prototypes that took weeks take
            days. I build systems, and I see workflows as they are and as
            they could be.
          </p>
          <p className="lead-text text-text-secondary text-pretty">
            Remote-first. Direct with brands, embedded with agencies, or
            alongside internal product and technology teams. Onsite when being
            in the room adds value.
          </p>
        </div>

        <div className="mt-12 md:mt-14 card-grid grid-cols-1 md:grid-cols-3">
          {MODES.map((mode) => (
            <div
              key={mode.key}
              className="flex flex-col card card-value"
            >
              <p className="metadata-label">
                {mode.eyebrow}
              </p>
              <h3 className="card-title text-text-primary">
                {mode.title}
              </h3>
              <p className="card-text text-text-secondary">
                {mode.line}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-10">
          <Link
            href="/engagements"
            className="inline-flex items-center text-base font-medium text-link hover:text-link-hover transition-colors"
          >
            Explore ways to work together{" "}
            <span aria-hidden="true" className="ml-2">
              &rarr;
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
