import Link from "next/link";
import { CTACards } from "./CTACards";

/**
 * Building — "In the studio" section on the homepage.
 *
 * Section header + intro copy + sign-up link, followed by the two Studio
 * cards (the book and the Clarity Cards). Card rendering itself lives in
 * components/CTACards.tsx with data in components/cta-cards-data.ts so the
 * same cards can be used at the bottom of other pages.
 *
 * If you ever want to swap which cards appear in the homepage Studio
 * section, change the `cards` array below — no other edits needed.
 */

export function Building() {
  return (
    <section className="py-24 md:py-32 mt-24 md:mt-32 border-t border-border-subtle">
      <div className="max-w-wide mx-auto px-6 md:px-8 lg:px-12">
        <div className="max-w-3xl">
          <p className="eyebrow mb-4">In the studio</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.05]">
            My systems in your pocket or on your bookshelf
          </h2>
          <p className="mt-6 text-lg md:text-xl text-text-secondary leading-relaxed">
            Tools (physical and digital) that come out of 15+ years of practice in marketing and experience design. Built for helping your teams or family think through solutions with greater efficacy and focus. Full printed versions available soon.
          </p>
          <div className="mt-4">
            <Link
              href="/book/chapter-1#read"
              className="inline-flex items-center text-base font-medium text-link hover:text-link-hover transition-colors underline underline-offset-4"
            >
              Sign up for updates
            </Link>
          </div>
        </div>

        <div className="mt-16 md:mt-20">
          <CTACards cards={["book", "cards"]} />
        </div>
      </div>
    </section>
  );
}
