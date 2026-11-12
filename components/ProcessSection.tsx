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
      className="section border-t border-border-subtle scroll-mt-24 md:scroll-mt-32"
    >
      <div className="max-w-content mx-auto px-6 md:px-8 lg:px-12">
        <div className="max-w-3xl mb-10 md:mb-12">
          <p className="eyebrow">The Capizzi Process</p>
          <h2 className="section-title text-text-primary">
            A clear path from business goals to customer action.
          </h2>
          {/* Copy from Shawn's brief (November 11, 2026). The publication
              status ("Printed editions of both are coming.") is kept as it
              was; it changes only when the editions are verified available. */}
          <p className="lead-text text-text-secondary">
            The Capizzi Process helps teams define what matters, turn ideas
            into something they can discuss and test, and agree on how success
            will be measured. Three principles guide the work: listen first,
            make it visible, prove it worked.
          </p>
          <p className="lead-text text-text-secondary">
            Seeing Past the Cage explores the thinking behind the Process. The
            Clarity Cards help teams apply it in discussions and decisions.
            Printed editions of both are coming.
          </p>
          <div className="mt-6">
            <Link
              href="/thinking"
              className="inline-flex items-center text-base font-medium text-link hover:text-link-hover transition-colors"
            >
              Explore the Process{" "}
              <span aria-hidden="true" className="ml-2">
                &rarr;
              </span>
            </Link>
          </div>
        </div>

        <BookAndCards
          bookLink={{ href: "/book/chapter-1", label: "Read the foreword free" }}
        />

        <div id="clarity-cards" className="mt-12 md:mt-16 scroll-mt-24 md:scroll-mt-32">
          <p className="eyebrow text-center">Try the deck</p>
          <ClarityCardDeck />
        </div>
      </div>
    </section>
  );
}
