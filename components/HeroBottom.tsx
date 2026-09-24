import Link from "next/link";
import Image from "next/image";

/**
 * HeroBottom: three doors, named by what the visitor came to do.
 *
 * Reading flow on the homepage: Hero (image + headline), LogoStrip, then
 * this block. It replaces the old audience line and CTA pair with three
 * intent-named entry points, because a visitor does not know which audience
 * they are on arrival, but they do know what they came to do.
 *
 *   Door 1  What are you trying to launch, fix, or grow   the strategy call (the page's one ask)
 *   Door 2  See the work                /work
 *   Door 3  Tangible thinking           /thinking, the Process page
 *
 * The D&AD line stays underneath as a credential. It is shown, not claimed.
 *
 * To retune a door, edit DOORS below. Door 1 is styled as the primary and
 * opens in a new tab because it is an external calendar.
 */

const CAL_URL = "https://cal.com/capizzi/30min";

type Door = {
  key: string;
  eyebrow: string;
  title: string;
  body: string;
  cta: string;
  href: string;
  external?: boolean;
  primary?: boolean;
};

const DOORS: Door[] = [
  {
    key: "problem",
    eyebrow: "Start here",
    title: "What are you trying to launch, fix, or grow?",
    body: "An outdated, stalled experience, an idea that needs to go to market, messaging that's not driving action, or customer flows and data that aren't yet put to profitable use. Start with the business problem. I'll help figure out what comes next.",
    cta: "Book a Strategy Call",
    href: CAL_URL,
    external: true,
    primary: true,
  },
  {
    key: "work",
    eyebrow: "Proof",
    title: "See the work.",
    body: "Six case studies, from enterprise pharma governance to a Bloomberg terminal CRM, and the two products I built and shipped myself.",
    cta: "See the case studies",
    href: "/work",
  },
  {
    key: "thinking",
    eyebrow: "Method",
    title: "Tangible thinking.",
    body: "I took my operations and beliefs and put them to paper. What I bring to every discussion, now as a system: digital, printed, and in your pocket.",
    cta: "See the Process",
    href: "/thinking",
  },
];

export function HeroBottom() {
  return (
    <section className="pt-10 md:pt-12 pb-14 md:pb-20">
      <div className="relative max-w-content mx-auto px-6 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
          {DOORS.map((door) => {
            const cardClass = `group relative flex flex-col p-7 md:p-8 rounded-2xl card-surface border transition-colors ${
              door.primary
                ? "border-[#6B5CFF]/60 hover:border-[#8F84FF]"
                : "border-border-default hover:border-border-strong"
            }`;
            const inner = (
              <>
                <p className="font-mono text-xs tracking-widest uppercase text-text-tertiary">
                  {door.eyebrow}
                </p>
                <h2 className="card-title mt-3 text-text-primary">
                  {door.title}
                </h2>
                <p className="mt-3 text-sm md:text-base text-text-secondary leading-relaxed text-pretty flex-1">
                  {door.body}
                </p>
                <p
                  className={`mt-6 inline-flex items-center text-sm font-medium transition-colors ${
                    door.primary
                      ? "text-[#A798FF] group-hover:text-white"
                      : "text-link group-hover:text-link-hover"
                  }`}
                >
                  {door.cta}
                  <span aria-hidden="true" className="ml-2">
                    &rarr;
                  </span>
                </p>
              </>
            );
            return door.external ? (
              <a
                key={door.key}
                href={door.href}
                target="_blank"
                rel="noopener noreferrer"
                className={cardClass}
              >
                {inner}
              </a>
            ) : (
              <Link key={door.key} href={door.href} className={cardClass}>
                {inner}
              </Link>
            );
          })}
        </div>

        <a
          href="https://www.dandad.org/annual/2022/entry/professional/235946"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 md:mt-10 inline-flex items-center gap-2 text-sm italic font-light text-text-tertiary hover:text-text-secondary transition-colors"
        >
          <Image
            src="/images/awards/dandad-pencil-2022.webp"
            alt="D&AD Pencil 2022 award"
            width={300}
            height={300}
            className="h-10 w-10 shrink-0 rotate-90"
          />
          <span>D&amp;AD Pencil 2022, Future Impact, with The Chrysalis Initiative</span>
        </a>
      </div>
    </section>
  );
}
