import Image from "next/image";
import Link from "next/link";

/**
 * SelectedWork: three case studies on the homepage, not six.
 *
 * One job each. Enterprise pharma governance is the credibility anchor,
 * Chrysalis is the service design proof, CourtVisual is the solo build.
 * The full grid lives on /work. Each card's outcome line carries the
 * service layer (who else touched it, what changed off screen), not the
 * deliverable list.
 *
 * Copy standard: every number here is also on the case study page it links
 * to, so nothing on the homepage says more than the proof behind it.
 */

// Detects animated formats that must bypass Next.js image optimization.
// Without `unoptimized`, Next.js converts .gif to static WebP and the
// animation freezes on frame 1.
const isAnimated = (src: string) => src.toLowerCase().endsWith(".gif");

const CASE_STUDIES = [
  {
    slug: "pharma-design-systems",
    eyebrow: "Enterprise pharma · Governance · 70+ brands",
    headline: "Building digital governance across 70+ therapeutic brands",
    outcome:
      "Three design systems, one operating model. Governance training for copy, design, and media partners, vendor direction onshore and offshore, and a mobile wallet first for patient medication information. $3.5M+ in documented digital transformation.",
    image: "/images/hero/consumer-care-hub-hero-balanced.gif",
  },
  {
    slug: "cancer-equality-app",
    eyebrow: "Service design · Chrysalis Initiative · D&AD Pencil 2022",
    headline: "A patient navigation platform for women facing bias in cancer care",
    outcome:
      "A coaching program that ran on a spreadsheet and an email thread, rebuilt as one role-segmented system: the coach dashboard, the patient dashboard, and the handoff between them.",
    image:
      "/images/case-studies/04-cancer-equality-app/01-hero-erase-the-line-campaign-poster.jpeg",
  },
  {
    slug: "courtvisual",
    eyebrow: "Solo build · Live product · courtvisual.com",
    headline: "Scoring every game 0 to 10 for what is actually worth watching",
    outcome:
      "Designed, built, and shipped solo. Six leagues, a 151-team catalog, a four-factor excitement engine, and live data feeds, on the same stack I use for client work.",
    image: "/images/case-studies/07-courtvisual/02-game-card-score-ring.png",
  },
];

export function SelectedWork() {
  return (
    <section className="py-24 md:py-32 border-t border-border-subtle">
      <div className="max-w-content mx-auto px-6 md:px-8 lg:px-12">
        <div className="max-w-3xl">
          <p className="eyebrow mb-4">Case studies</p>
          <h2 className="text-3xl md:text-3xl lg:text-[30px] font-semibold tracking-tight leading-tight">
            Selected work
          </h2>
          <p className="mt-6 text-lg md:text-xl text-text-secondary leading-relaxed">
            Engagements where experience structure changed the business
            outcome. Three here, the rest on the work page.
          </p>
        </div>

        <div className="mt-16 md:mt-20 grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {CASE_STUDIES.map((cs) => (
            <Link
              key={cs.slug}
              href={`/work/${cs.slug}`}
              className="group relative flex flex-col rounded-2xl card-surface border border-border-default hover:border-border-strong overflow-hidden transition-colors"
            >
              <div className="relative aspect-[4/3] bg-bg-raised overflow-hidden">
                <Image
                  src={cs.image}
                  alt=""
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  unoptimized={isAnimated(cs.image)}
                  className="object-cover group-hover:scale-[1.02] transition-transform duration-500 ease-out"
                />
              </div>
              <div className="p-6 md:p-7 flex flex-col flex-1">
                <p className="font-mono text-xs tracking-widest uppercase text-text-tertiary">
                  {cs.eyebrow}
                </p>
                <h3 className="mt-3 text-lg md:text-xl font-semibold tracking-tight leading-snug text-text-primary">
                  {cs.headline}
                </h3>
                <p className="mt-3 text-sm md:text-[15px] text-text-secondary leading-relaxed flex-1">
                  {cs.outcome}
                </p>
                <p className="mt-6 inline-flex items-center text-sm font-medium text-link group-hover:text-link-hover transition-colors">
                  Read the case study{" "}
                  <span aria-hidden="true" className="ml-2">
                    &rarr;
                  </span>
                </p>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-12 md:mt-16">
          <Link
            href="/work"
            className="inline-flex items-center text-base font-medium text-link hover:text-link-hover transition-colors"
          >
            View all work{" "}
            <span aria-hidden="true" className="ml-2">
              &rarr;
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
