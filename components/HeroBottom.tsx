import Link from "next/link";

/**
 * HeroBottom: three doors, named by what the visitor came to do.
 *
 * Reading flow on the homepage: Hero (image + headline), LogoStrip, then
 * this block. It replaces the old audience line and CTA pair with three
 * intent-named entry points, because a visitor does not know which audience
 * they are on arrival, but they do know what they came to do.
 *
 *   Door 1  Share your business goals             /contact (the page's one ask)
 *   Door 2  The work behind the experience        /work
 *   Door 3  The thinking I bring, as a system     /thinking, the Process page
 *
 * The D&AD Pencil moved up into ProofStrip in October 2026, with its icon,
 * so the credential shows once, above the doors.
 *
 * To retune a door, edit DOORS below. Door 1 is styled as the primary.
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
    eyebrow: "Start here",
    title: "Share your business goals or roadblocks.",
    body: "A stuck flow, a message that isn't getting the action you want, or customer signals nobody tracks. I find the opportunities, drive product to market, and build feedback loops that turn customer data into actionable business intelligence.",
    cta: "Tell me what you\u2019re working on",
    href: "/contact",
    primary: true,
  },
  {
    key: "work",
    eyebrow: "Proof",
    title: "The work behind the experience.",
    body: "Six case studies across pharma, healthcare, financial services, and enterprise, from design governance and patient navigation to CRM, CX, and independent products.",
    cta: "See the case studies",
    href: "/work",
  },
  {
    key: "thinking",
    eyebrow: "Method",
    title: "The thinking I bring to every discussion, built into a flexible system.",
    body: "I brought the way I think, collaborate, and make decisions into a system teams can use, from seasoned strategy and product teams to those new to the process. Digital, printed, and in your pocket.",
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
                <h2 className="card-title mt-3 text-text-primary text-balance">
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
      </div>
    </section>
  );
}
