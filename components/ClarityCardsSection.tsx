import { ClarityCardDeck } from "@/components/ClarityCardDeck";

/**
 * ClarityCardsSection — the Capizzi Clarity Cards intro block plus the
 * interactive deck. Used on:
 *   1. /clarity-advantage — the destination page for the deck + book + newsletter
 *   2. / (homepage) — a signal-of-craft moment inside the main scroll,
 *      placed directly after the Hero + LogoStrip + HeroBottom sequence
 *
 * Extracted so the eyebrow, headline, setup copy, and deck configuration
 * live in one place. Any tweak here lands on both surfaces automatically —
 * the "one shared rule every surface inherits" pattern applied to my own site.
 *
 * Section chrome (border-t, py-16 md:py-24, max-w-content wrapper) matches
 * the standard section rhythm used throughout the site so the block sits at
 * home wherever it's dropped in.
 */
export function ClarityCardsSection() {
  return (
    <section className="py-16 md:py-24 border-t border-border-subtle">
      <div className="max-w-content mx-auto px-6 md:px-8 lg:px-12">
        <div className="max-w-3xl mb-12 md:mb-16">
          <p className="eyebrow mb-4">Printed version coming soon</p>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold tracking-tight leading-tight text-text-primary">
            The Capizzi Clarity Cards
          </h2>
          <p className="mt-4 md:mt-6 text-base md:text-lg text-text-secondary leading-relaxed">
            A 54-card strategic prompt deck based on the Capizzi Process. A
            working tool for teams making complex decisions.
          </p>
        </div>

        <ClarityCardDeck />
      </div>
    </section>
  );
}
