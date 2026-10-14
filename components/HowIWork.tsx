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
 * state, no accordion, no duplicated body copy, and no third ask for the
 * strategy call: the homepage asks at the top and at the bottom only.
 *
 * The titles stay first person and parallel, matching the doors in the
 * hero. "Embed me in the work" replaced "Bring me in", which collided with
 * the first door's old title, "Bring me into a problem."
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
    key: "leadership",
    eyebrow: "Leadership",
    title: "Embed me in the work.",
    line: "Fractional or embedded senior UX and design leadership inside active work, from opportunity definition through delivery.",
  },
  {
    key: "advisory",
    eyebrow: "Advisory",
    title: "Hire me to advise.",
    line: "Focused guidance around product, UX/CX, experience strategy, AI adoption, design systems, or a decision that needs another experienced point of view.",
  },
  {
    key: "oncall",
    eyebrow: "On Call",
    title: "Keep me on call.",
    line: "Ongoing access for leaders who want an experienced UX/design thinking partner available between the big decisions.",
  },
];

export function HowIWork() {
  return (
    <section className="py-20 md:py-28 border-t border-border-subtle">
      <div className="max-w-content mx-auto px-6 md:px-8 lg:px-12">
        <div className="max-w-3xl">
          <p className="eyebrow mb-4">Engagement model</p>
          <h2 className="section-title">
            Three ways to bring me into the work.
          </h2>
          <p className="mt-6 text-lg md:text-xl text-text-secondary leading-relaxed">
            Start with a defined problem or an opportunity that still needs
            definition. I can embed with the team, advise on a focused
            challenge, or stay close when important decisions need another
            experienced point of view.
          </p>
          <p className="mt-4 text-lg md:text-xl text-text-secondary leading-relaxed">
            AI runs through most of this work now, as a speed-and-rigor
            partner: more options explored, more drafts pressure-tested,
            faster paths from idea to a working prototype you can test.
          </p>
          <p className="mt-4 text-lg md:text-xl text-text-secondary leading-relaxed text-pretty">
            Remote-first. Direct with brands, embedded with agencies, or
            alongside internal product and technology teams. Onsite when being
            in the room adds value.
          </p>
        </div>

        <div className="mt-12 md:mt-14 grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
          {MODES.map((mode) => (
            <div
              key={mode.key}
              className="flex flex-col p-6 md:p-7 rounded-2xl card-surface border border-border-default"
            >
              <p className="font-mono text-xs tracking-widest uppercase text-text-tertiary">
                {mode.eyebrow}
              </p>
              <h3 className="card-title mt-2 text-text-primary">
                {mode.title}
              </h3>
              <p className="mt-3 text-sm text-text-secondary leading-relaxed">
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
            See what each one looks like{" "}
            <span aria-hidden="true" className="ml-2">
              &rarr;
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
