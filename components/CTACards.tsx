import Link from "next/link";
import Image from "next/image";
import { CTA_CARDS } from "./cta-cards-data";
import { BookReaderThumb } from "./BookReaderThumb";

/**
 * CTACards: bottom-of-page CTA cards.
 *
 * Renders one or more cards from the CTA_CARDS library by string key.
 * The .card role with the image running to the edge above a .card-body:
 * eyebrow, title, optional italic subtitle, description, and one footer row
 * (the action in lavender with an arrow, plus the phone number when the
 * card has one). The whole card is the click target through a stretched
 * link on the title; the phone link sits above it.
 *
 * Usage:
 *   <CTACards cards={["book", "cards"]} />
 *   <CTACards cards={["work", "about"]} />
 *
 * To add a new card to the library: edit components/cta-cards-data.ts.
 * To change what cards a page shows: edit the `cards` prop on this component.
 *
 * Layout: 1 column on mobile, 2 columns on md+. If 3+ cards are passed,
 * they wrap to additional rows. Beyond 4 cards is not visually recommended.
 */

function isAnimated(src: string): boolean {
  return src.endsWith(".gif");
}

export function CTACards({ cards }: { cards: string[] }) {
  // Look up each key in the library. Silently skip any unknown keys
  // so a typo doesn't crash the page; instead the card just doesn't render.
  const items = cards
    .map((key) => CTA_CARDS[key])
    .filter((card): card is NonNullable<typeof card> => Boolean(card));

  if (items.length === 0) return null;

  return (
    <div className="card-grid grid-cols-1 md:grid-cols-2">
      {items.map((item) => {
        // Normalize "212-380-3900" → "tel:+12123803900"
        // Note: assumes US numbers. If international support is ever needed,
        // store the tel: URI as a separate field instead of computing it.
        const telHref = item.phone
          ? `tel:+1${item.phone.replace(/\D/g, "")}`
          : undefined;

        return (
          <div
            key={item.href}
            className="group relative card hover:border-border-strong transition-colors"
          >
            {item.image || item.thumb ? (
              <div
                className={`relative ${item.imageAspect ?? "aspect-[16/10]"} overflow-hidden border-b border-border-subtle ${item.imageFit === "contain" ? "bg-black" : ""}`}
              >
                {item.thumb === "book-reader" ? (
                  <BookReaderThumb />
                ) : item.image ? (
                  <Image
                    src={item.image}
                    alt={item.imageAlt ?? ""}
                    fill
                    className={`${item.imageFit === "contain" ? "object-contain" : "object-cover"} ${item.imagePosition ?? "object-center"} transition-transform duration-500 group-hover:scale-[1.02]`}
                    unoptimized={isAnimated(item.image)}
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                ) : null}
              </div>
            ) : null}

            <div className="card-body">
              <p className="eyebrow">{item.eyebrow}</p>
              <h3 className="card-title text-text-primary group-hover:text-link transition-colors">
                {/* Stretched link: its ::after covers the whole card, so the
                    card is one click target while the phone link below can
                    still sit in the footer row (a link cannot hold a link). */}
                <Link
                  href={item.href}
                  className="after:absolute after:inset-0 after:content-['']"
                >
                  {item.title}
                </Link>
                {item.subtitle ? (
                  <span className="block mt-1 text-sm font-normal italic text-text-tertiary">
                    ({item.subtitle})
                  </span>
                ) : null}
              </h3>

              <p className="card-text text-text-secondary">
                {item.description}
              </p>

              {/* One footer row: the card's action, and the phone number
                  beside it when the card has one, so a card with a phone
                  ends at the same height as its neighbor. */}
              <div className="card-foot flex flex-wrap items-center gap-x-6 gap-y-3 font-medium">
                <span className="text-link group-hover:text-link-hover transition-colors">
                  {item.cta}{" "}
                  <span aria-hidden="true" className="ml-1">
                    &rarr;
                  </span>
                </span>
                {telHref && item.phone ? (
                  <a
                    href={telHref}
                    className="relative z-10 inline-flex items-center gap-2 text-text-secondary hover:text-text-primary transition-colors"
                    aria-label={`Call ${item.phone}`}
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      aria-hidden="true"
                      className="flex-shrink-0"
                    >
                      <path d="M20 15.5c-1.25 0-2.45-.2-3.57-.57a1 1 0 0 0-1.02.24l-2.2 2.2a15.07 15.07 0 0 1-6.59-6.58l2.2-2.21a1 1 0 0 0 .25-1.02A11.36 11.36 0 0 1 8.5 4a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1c0 9.39 7.61 17 17 17a1 1 0 0 0 1-1v-3.5a1 1 0 0 0-1-1z" />
                    </svg>
                    Call {item.phone}
                  </a>
                ) : null}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
