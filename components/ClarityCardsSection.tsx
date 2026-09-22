import Link from "next/link";
import { ClarityCardDeck } from "@/components/ClarityCardDeck";

/**
 * ClarityCardsSection: the Clarity Cards intro block plus the interactive
 * deck. Used on the homepage, near the bottom, as the "I wrote it down and
 * made it usable" block. The section carries id="clarity-cards" so /thinking
 * can deep-link to the working deck ("Try the deck").
 *
 * It used to render on /clarity-advantage as well. That route was retired in
 * September 2026 and 308s to /thinking, which shows the real cards as a
 * photograph rather than repeating this interaction. The copy stays a prop
 * so the block can be reframed without touching the deck.
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
    <section id="clarity-cards" className="py-16 md:py-24 border-t border-border-subtle scroll-mt-24 md:scroll-mt-32">
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
