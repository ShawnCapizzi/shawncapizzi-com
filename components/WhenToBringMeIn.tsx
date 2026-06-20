// Destination: components/WhenToBringMeIn.tsx
import Link from "next/link";

/**
 * WhenToBringMeIn — homepage self-qualification module.
 *
 * A self-recognition mirror: scannable "this is you if..." statements that
 * let a visitor identify themselves without filling out a form. Placed after
 * HeroBottom and before HowIWork so the "why now" lands before the "how we
 * work" (the engagement modes).
 *
 * The industry mix in the intro and the spread of the bullets is deliberate:
 * the regulated/pharma authority stays the spine (bullets 1 and 3), while
 * bullets 2 and 5 broaden the net to AI-stuck teams and founder-led work
 * (fintech, drone/ad ops, AI hedge fund, etc.) without diluting the premium.
 *
 * To retune who this speaks to, edit SITUATIONS below — no other changes.
 * Internal Link is unused for now but kept available if any bullet should
 * deep-link to an engagements anchor later.
 */

const CAL_URL = "https://cal.com/capizzi/30min";

const SITUATIONS = [
  "You work in regulated industries where product and brand experience demands real CX and user-first direction.",
  "You need someone who can turn ambiguity into a scoped plan, and the story that wins the room: the client, the pitch, or the first round of funding.",
  "Your AI initiative is stuck between strategy, workflow, and trust.",
  "Your design system exists, but governance and adoption are breaking down.",
  "You need a senior experience lead embedded inside live agency or product work.",
];

export function WhenToBringMeIn() {
  return (
    <section className="py-24 md:py-32 border-t border-border-subtle">
      <div className="max-w-content mx-auto px-6 md:px-8 lg:px-12">
        <div className="max-w-3xl">
          <p className="eyebrow mb-4">When to bring me in</p>
          <h2 className="text-3xl md:text-3xl lg:text-[30px] font-semibold tracking-tight leading-tight">
            You should talk to me if any of this sounds familiar.
          </h2>
          <p className="mt-6 text-lg md:text-xl text-text-secondary leading-relaxed">
            The industry changes across pharma, fintech, agency, enterprise, and
            founder-led teams. The pattern usually doesn&apos;t.
          </p>
        </div>

        <ul className="mt-12 md:mt-16 max-w-3xl space-y-6 md:space-y-7">
          {SITUATIONS.map((situation, i) => (
            <li
              key={i}
              className="border-l-2 border-border-strong pl-5 md:pl-6 text-lg md:text-xl text-text-primary leading-relaxed"
            >
              {situation}
            </li>
          ))}
        </ul>

        <div className="mt-12 md:mt-16">
          <a
            href={CAL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-7 py-3.5 rounded-full bg-text-primary text-text-inverse text-base font-medium tracking-tight hover:scale-[1.02] transition-transform"
          >
            Book a Strategy Call
          </a>
        </div>
      </div>
    </section>
  );
}
