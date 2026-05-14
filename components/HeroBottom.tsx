import Link from "next/link";

/**
 * HeroBottom — sub-headline + CTAs that live below the LogoStrip on the
 * homepage, continuing the Hero's text column.
 *
 * Reading flow: Hero (image + headline) → LogoStrip → HeroBottom (sub + CTAs)
 *
 * Aligned to the same left column as the Hero text (max-w-2xl, no centering)
 * so visually it reads as a continuation of the Hero text column even
 * though the LogoStrip splits them physically.
 */

const CAL_URL = "https://cal.com/capizzi/15min";

export function HeroBottom() {
  return (
    <section className="pt-10 md:pt-12 pb-14 md:pb-20">
      <div className="relative max-w-wide mx-auto px-6 md:px-8 lg:px-12">
        <div className="max-w-2xl">
          <p className="text-lg md:text-xl text-text-secondary leading-relaxed">
            Deep experience delivering results in regulated industries. Available embedded, fractional, or as senior counsel.
          </p>

          <a
            href="https://www.dandad.org/annual/2022/entry/professional/235946"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-block text-sm italic font-light text-text-tertiary hover:text-text-secondary transition-colors"
          >
            D&amp;AD Pencil 2022
          </a>

          <div className="mt-8 md:mt-10 flex flex-col sm:flex-row gap-4 sm:items-center">
            <a
              href={CAL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-7 py-3.5 rounded-full bg-[#6B5CFF] hover:bg-[#7B6CFF] text-white text-base font-medium tracking-tight hover:scale-[1.02] transition-all"
            >
              Book a Strategy Call
            </a>
            <Link
              href="/engagements"
              className="inline-flex items-center text-base font-medium text-link hover:text-link-hover transition-colors"
            >
              See how I work <span aria-hidden="true" className="ml-2">→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
