import Link from "next/link";
import { BookAndCards } from "@/components/BookAndCards";
import { ClarityCardDeck } from "@/components/ClarityCardDeck";

/**
 * ProcessSection: the homepage's Capizzi Process block. It leads with the
 * two real objects (the book and the printed Clarity Cards) so a visitor
 * sees them without going looking, then offers the interactive deck.
 *
 * It sits right after the live products (September 2026): work, products,
 * then the method written down, all before the hiring sections. It used to
 * sit near the bottom, after the testimonials, about 6,400px down.
 *
 * Anchors: #capizzi-process is the section; #clarity-cards is the deck
 * itself, which /thinking's "Try the deck" link lands on.
 *
 * The cards photo carries no link here. The deck sits directly under it, so
 * a "Draw a card below" link only jumped a few pixels and read as a detached
 * second ask. The deck gets its own short label instead, so the photo and
 * the deck read as one thing: the printed cards, then the cards to try.
 */

export function ProcessSection() {
  return (
    <section
      id="capizzi-process"
      className="py-16 md:py-24 border-t border-border-subtle scroll-mt-24 md:scroll-mt-32"
    >
      <div className="max-w-content mx-auto px-6 md:px-8 lg:px-12">
        <div className="max-w-3xl mb-10 md:mb-12">
          <p className="eyebrow mb-4">The Capizzi Process</p>
          <h2 className="section-title text-text-primary">
            The method, in print and in hand.
          </h2>
          <p className="mt-4 md:mt-6 text-base md:text-lg text-text-secondary leading-relaxed">
            The Capizzi Process is how I work: listen first, make it visible,
            prove it worked. I wrote it into a book and built it into a deck of
            cards that puts it to work in a room. Printed editions of both are
            coming.
          </p>
          <div className="mt-6">
            <Link
              href="/thinking"
              className="inline-flex items-center text-base font-medium text-link hover:text-link-hover transition-colors"
            >
              See the whole Process{" "}
              <span aria-hidden="true" className="ml-2">
                &rarr;
              </span>
            </Link>
          </div>
        </div>

        <BookAndCards
          bookLink={{ href: "/book/chapter-1", label: "Read chapter one free" }}
        />

        <div id="clarity-cards" className="mt-12 md:mt-16 scroll-mt-24 md:scroll-mt-32">
          <p className="eyebrow mb-6 text-center">Try the deck</p>
          <ClarityCardDeck />
        </div>
      </div>
    </section>
  );
}
