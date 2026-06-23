import Link from "next/link";
import Image from "next/image";
import { CTA_CARDS } from "./cta-cards-data";
import { LaserFrame } from "./LaserFrame";

/**
 * CTACards — bottom-of-page CTA cards.
 *
 * Renders one or more cards from the CTA_CARDS library by string key.
 * Same exact visual treatment as the homepage Studio cards: card-surface,
 * rounded-2xl, image-top with subtle border below it, eyebrow + title +
 * optional italic subtitle + description, and a footer link in link-purple
 * with an arrow. Whole card is the click target.
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
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
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
            className="group relative flex flex-col rounded-2xl card-surface border border-border-default hover:border-border-strong overflow-hidden transition-colors"
          >
            <Link href={item.href} className="flex flex-col flex-1">
              {item.image ? (
                <div
                  className={`relative ${item.imageAspect ?? "aspect-[16/10]"} overflow-hidden border-b border-border-subtle ${item.imageFit === "contain" ? "bg-black" : ""}`}
                >
                  <Image
                    src={item.image}
                    alt={item.imageAlt ?? ""}
                    fill
                    className={`${item.imageFit === "contain" ? "object-contain" : "object-cover"} object-center transition-transform duration-500 group-hover:scale-[1.02]`}
                    unoptimized={isAnimated(item.image)}
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              ) : null}

              <div className="flex flex-col flex-1 p-7 md:p-9">
                <p className="eyebrow mb-3">{item.eyebrow}</p>
                <h3 className="text-xl md:text-2xl font-semibold tracking-tight leading-snug text-text-primary group-hover:text-link transition-colors">
                  {item.title}
                  {item.subtitle ? (
                    <span className="block mt-1 text-sm font-normal italic text-text-tertiary">
                      ({item.subtitle})
                    </span>
                  ) : null}
                </h3>

                <p className="mt-4 text-base text-text-secondary leading-relaxed flex-1">
                  {item.description}
                </p>

                <p className="mt-6 text-link group-hover:text-link-hover transition-colors text-base font-medium">
                  {item.cta}{" "}
                  <span aria-hidden="true" className="ml-1">
                    &rarr;
                  </span>
                </p>
              </div>
            </Link>

            {/* Tap-to-call link — sits outside the main Link to avoid
                nested interactive elements. Visible footer with its own
                divider so users see it as a distinct action. */}
            {telHref && item.phone ? (
              <a
                href={telHref}
                className="flex items-center gap-2 border-t border-border-subtle px-7 md:px-9 py-4 text-text-secondary hover:text-text-primary transition-colors text-sm md:text-base font-medium"
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

            {/* Metallic perimeter glint — fires once when the card scrolls
                into view. pointer-events:none, so it never blocks the card
                link or the tap-to-call footer. Rides just inside the
                rounded-2xl (16px) edge; inner radius 15 stays concentric. */}
            <LaserFrame radius={15} />
          </div>
        );
      })}
    </div>
  );
}
