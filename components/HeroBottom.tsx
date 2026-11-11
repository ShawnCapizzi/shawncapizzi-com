import Image from "next/image";
import Link from "next/link";

/**
 * HeroBottom: three doors, named by what the visitor came to do.
 *
 * Reading flow on the homepage: Hero (image + headline), LogoStrip, then
 * this block. It replaces the old audience line and CTA pair with three
 * intent-named entry points, because a visitor does not know which audience
 * they are on arrival, but they do know what they came to do.
 *
 *   Door 1  We start here: the challenge         /contact (the page's one ask)
 *   Door 2  The proof: see the work              /work
 *   Door 3  The how: the Capizzi Process         /thinking, the Process page
 *
 * Copy rewritten November 11, 2026 in Shawn's words. Two of his choices
 * balance the row: the Proof body keeps "Each shows the business need,
 * how I solved it, and the results.", and The how reads "Supported by
 * practical tools" without "Grounded in common sense and".
 *
 * The D&AD line sits underneath the doors as a credential, shown, not
 * claimed, and links to the D&AD entry. It moved into a proof strip for a
 * while in October 2026 and came back here when the strip was removed.
 *
 * To retune a door, edit DOORS below. Door 1 keeps `primary` for its copy
 * and link order only; the three borders match.
 * Since October 2026 it goes to /contact, where the visitor picks the
 * calendar, email, or phone, instead of straight to the calendar.
 */

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
    eyebrow: "We start here",
    title: "What challenge are you trying to solve, or transformation do you want to lead?",
    body: "A new market opportunity, a better experience, a brand message that reaches further, or a team that needs direction. Tell me where you want to go and what\u2019s getting in the way.",
    cta: "Discuss your goals",
    href: "/contact",
    primary: true,
  },
  {
    key: "work",
    eyebrow: "The proof",
    title: "See the work. Understand the impact.",
    body: "Explore work across healthcare, financial services, AI-powered products, and enterprise systems: the challenges, the decisions that shaped the work, and what changed. Each shows the business need, how I solved it, and the results.",
    cta: "Explore the case studies",
    href: "/work",
  },
  {
    key: "thinking",
    eyebrow: "The how",
    title: "A clear, flexible approach to complex challenges.",
    body: "The Capizzi Process helps teams define what matters, stay focused, make ideas tangible and testable, and measure what changes. Supported by practical tools, including my book and Clarity Cards.",
    cta: "Explore the Process",
    href: "/thinking",
  },
];

export function HeroBottom() {
  return (
    <section className="section section-joined">
      <div className="relative max-w-content mx-auto px-6 md:px-8 lg:px-12">
        <div className="card-grid grid-cols-1 md:grid-cols-3">
          {DOORS.map((door) => {
            /* All three doors share one border (November 2026). The first
               door used to carry a purple edge as the primary ask; it read
               as a mismatch, and its button already says "start here". */
            const cardClass =
              "group relative flex flex-col card transition-colors";
            const inner = (
              <>
                <p className="metadata-label">
                  {door.eyebrow}
                </p>
                <h2 className="card-title text-text-primary text-balance group-hover:text-link transition-colors">
                  {door.title}
                </h2>
                <p className="card-text text-text-secondary text-pretty">
                  {door.body}
                </p>
                <p
                  className="card-foot inline-flex items-center font-medium transition-colors text-link group-hover:text-link-hover"
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
