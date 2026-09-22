import Link from "next/link";
import { ClarityCardDeck } from "@/components/ClarityCardDeck";

/**
 * ClarityCardsSection: the Clarity Cards intro block plus the interactive
 * deck. Used on:
 *   1. /clarity-advantage, the destination page for the deck, book, and
 *      newsletter. Renders with the defaults below.
 *   2. / (homepage), near the bottom, as the "Process in print and in hand"
 *      block. The homepage passes its own eyebrow, title, intro, and link.
 *
 * One component, two framings. The deck configuration stays in one place so
 * any change to the cards themselves lands on both surfaces. The copy is a
 * prop because the two pages have different jobs: the destination page sells
 * the deck, the homepage places the deck inside the Process.
 *
 * Section chrome (border-t, py-16 md:py-24, max-w-content wrapper) matches
 * the standard section rhythm used throughout the site.
 */

type ClarityCardsSectionProps = {
  eyebrow?: string;
  title?: string;
  intro?: string;
  link?: { href: string; label: string };
};

export function ClarityCardsSection({
  eyebrow = "Printed version coming soon",
  title = "The Capizzi Clarity Cards",
  intro = "A 54-card strategic prompt deck based on the Capizzi Process. A working tool for teams making complex decisions.",
  link,
}: ClarityCardsSectionProps) {
  return (
    <section className="py-16 md:py-24 border-t border-border-subtle">
      <div className="max-w-content mx-auto px-6 md:px-8 lg:px-12">
        <div className="max-w-3xl mb-12 md:mb-16">
          <p className="eyebrow mb-4">{eyebrow}</p>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold tracking-tight leading-tight text-text-primary">
            {title}
          </h2>
          <p className="mt-4 md:mt-6 text-base md:text-lg text-text-secondary leading-relaxed">
            {intro}
          </p>
          {link ? (
            <div className="mt-6">
              <Link
                href={link.href}
                className="inline-flex items-center text-base font-medium text-link hover:text-link-hover transition-colors"
              >
                {link.label}{" "}
                <span aria-hidden="true" className="ml-2">
                  &rarr;
                </span>
              </Link>
            </div>
          ) : null}
        </div>

        <ClarityCardDeck />
      </div>
    </section>
  );
}
