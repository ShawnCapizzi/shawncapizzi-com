import Image from "next/image";

/**
 * LogoStrip — "Trusted by leaders across:" with 6 client logos in a
 * continuous horizontal marquee.
 *
 * Per design system §5 + manuscript line 45: "horizontal scroll banner",
 * monochrome white treatment.
 *
 * Animation is CSS-only (defined in globals.css). The logo list is rendered
 * twice for seamless looping; the duplicate set is aria-hidden so screen
 * readers don't announce twice.
 *
 * The .marquee-track class owns ALL layout (display, gap, width) so there's
 * no conflict with Tailwind utility classes. Hardware-accelerated via
 * will-change: transform for smooth 60fps motion.
 *
 * Marquee pauses on hover and respects prefers-reduced-motion.
 */

const LOGOS = [
  { src: "/images/logos/01-pfizer.avif", alt: "Pfizer", width: 120 },
  { src: "/images/logos/02-bloomberg.avif", alt: "Bloomberg", width: 140 },
  { src: "/images/logos/03-samsung.avif", alt: "Samsung", width: 130 },
  {
    src: "/images/logos/04-columbia-business-school.avif",
    alt: "Columbia Business School",
    width: 200,
  },
  { src: "/images/logos/05-openai.avif", alt: "OpenAI", width: 120 },
  { src: "/images/logos/06-ipg-health.avif", alt: "IPG Health", width: 130 },
];

export function LogoStrip() {
  return (
    <section className="py-14 md:py-16 border-y border-border-subtle">
      <div className="max-w-wide mx-auto px-6 md:px-8 lg:px-12">
        <p className="eyebrow mb-8 md:mb-10">Trusted by leaders across:</p>
      </div>

      <div className="marquee-mask overflow-hidden">
        <ul className="marquee-track">
          {LOGOS.map((logo) => (
            <li key={`a-${logo.alt}`}>
              <Image
                src={logo.src}
                alt={logo.alt}
                width={logo.width}
                height={40}
                className="h-8 md:h-9 w-auto object-contain logo-mono"
              />
            </li>
          ))}
          {LOGOS.map((logo) => (
            <li key={`b-${logo.alt}`} aria-hidden="true">
              <Image
                src={logo.src}
                alt=""
                width={logo.width}
                height={40}
                className="h-8 md:h-9 w-auto object-contain logo-mono"
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
