import Image from "next/image";

/**
 * LogoStrip: "Trusted by leaders across:" with five logos in a continuous
 * horizontal marquee. OpenAI was removed in October 2026: it is a tool Shawn
 * uses, not a client, and the label reads as a client list.
 *
 * IPG Health was replaced by Omnicom in September 2026. The IPG Health name
 * was retired when Omnicom completed the Interpublic acquisition, and a
 * live logo for a retired network read as a stale credential to exactly
 * the buyers it was meant to impress. The Omnicom asset is white on
 * transparent, supplied by Shawn.
 *
 * Per design system §5 + manuscript line 45: "horizontal scroll banner",
 * monochrome white treatment.
 *
 * Animation is CSS-only (defined in globals.css). The logo list is rendered
 * four times as four .marquee-set units, each carrying its own gap and the
 * same gap as trailing padding, and the track slides by one unit (25%), so
 * the loop lands exactly on itself and the strip never runs out of logos
 * on a wide screen (November 2026; the old two-copy track slid by 50% of a
 * row with nine shared gaps, which stuttered half a gap on every loop and
 * left the right side empty on wide screens). Sets after the first are
 * aria-hidden so screen readers hear the list once.
 *
 * The .marquee-track and .marquee-set classes own ALL layout (display,
 * gap, width) so there's no conflict with Tailwind utility classes.
 * Hardware-accelerated via will-change: transform for smooth 60fps motion.
 *
 * Marquee pauses on hover and respects prefers-reduced-motion.
 *
 * The strip's top and bottom rules show from 768px up only (November
 * 2026). On a phone they stacked with the hero's edge and the first
 * door's border into three strokes in a short stretch, so below 768px the
 * logos sit as a quiet band between hero and doors with no rules.
 *
 * Omnicom renders smaller than the rest (November 12, 2026, Shawn's call:
 * it read huge beside the others). Its file is heavy capitals filling 86%
 * of the image's height, against 52% for Samsung's wordmark of the same
 * shape, so at the shared 28 / 32px it drew 1.7 times Samsung's size. At
 * 18 / 20px its letters match Samsung's and Bloomberg's.
 */

const LOGO_HEIGHT = "h-7 md:h-8";

const LOGOS = [
  { src: "/images/logos/01-pfizer.avif", alt: "Pfizer", width: 120 },
  { src: "/images/logos/02-bloomberg.avif", alt: "Bloomberg", width: 140 },
  { src: "/images/logos/03-samsung.avif", alt: "Samsung", width: 130 },
  {
    src: "/images/logos/04-columbia-business-school.avif",
    alt: "Columbia Business School",
    width: 200,
  },
  {
    src: "/images/logos/06-omnicom.png",
    alt: "Omnicom",
    width: 150,
    height: "h-[18px] md:h-5",
  },
];

export function LogoStrip() {
  return (
    <section className="section-tight md:border-y border-border-subtle">
      <div className="max-w-wide mx-auto px-6 md:px-8 lg:px-12">
        <p className="eyebrow">Trusted by leaders across:</p>
      </div>

      <div className="marquee-mask overflow-hidden">
        <div className="marquee-track">
          {[0, 1, 2, 3].map((set) => (
            <ul
              key={set}
              className="marquee-set"
              aria-hidden={set > 0 ? "true" : undefined}
            >
              {LOGOS.map((logo) => (
                <li key={`${set}-${logo.alt}`}>
                  <Image
                    src={logo.src}
                    alt={set === 0 ? logo.alt : ""}
                    width={logo.width}
                    height={40}
                    className={`${logo.height ?? LOGO_HEIGHT} w-auto object-contain`}
                  />
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </section>
  );
}
