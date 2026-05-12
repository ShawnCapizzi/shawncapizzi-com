import Image from "next/image";

/**
 * LogoStrip — "Trusted by leaders across:" with 6 client logos.
 * Monochrome white treatment per design system §6.
 * Horizontal scroll on mobile, evenly spaced grid on desktop.
 */

const LOGOS = [
  { src: "/images/logos/01-pfizer.avif", alt: "Pfizer", width: 120 },
  { src: "/images/logos/02-bloomberg.avif", alt: "Bloomberg", width: 140 },
  { src: "/images/logos/03-samsung.avif", alt: "Samsung", width: 130 },
  { src: "/images/logos/04-columbia-business-school.avif", alt: "Columbia Business School", width: 160 },
  { src: "/images/logos/05-openai.avif", alt: "OpenAI", width: 120 },
  { src: "/images/logos/06-ipg-health.avif", alt: "IPG Health", width: 130 },
];

export function LogoStrip() {
  return (
    <section className="py-12 md:py-16 border-y border-border-subtle">
      <div className="max-w-wide mx-auto px-6 md:px-8 lg:px-12">
        <p className="eyebrow mb-8 md:mb-10">Trusted by leaders across:</p>

        <div className="overflow-x-auto -mx-6 px-6 md:overflow-x-visible md:mx-0 md:px-0">
          <ul className="flex items-center gap-10 md:gap-12 lg:gap-16 md:flex-wrap md:justify-between min-w-max md:min-w-0">
            {LOGOS.map((logo) => (
              <li key={logo.alt} className="flex-shrink-0">
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={logo.width}
                  height={40}
                  className="h-8 md:h-9 w-auto object-contain"
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
