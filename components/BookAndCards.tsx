import Image from "next/image";
import Link from "next/link";

/**
 * BookAndCards: the two real objects the Capizzi Process became, side by
 * side. One source for both the homepage Process section and /thinking, so
 * the photos, alt text, and captions never drift apart. The captions carry
 * the relationship (September 2026): the book develops the ideas, the cards
 * help people apply them in discussions and decisions.
 *
 * Photos: clarity-cards-desk.jpg is Shawn's own photo of the printed deck,
 * retouched for tone and color only. seeing-past-the-cage-book.jpg is a
 * rendered mockup of the hardcover; every page that shows it also says the
 * printed editions are coming. Give a replacement photo a new filename
 * rather than overwriting, so no image cache can serve the old version.
 */

type CaptionLink = { href: string; label: string };

export function BookAndCards({
  bookLink,
  cardsLink,
}: {
  bookLink?: CaptionLink;
  cardsLink?: CaptionLink;
}) {
  const items = [
    {
      eyebrow: "The book",
      title: "Seeing Past the Cage",
      text: "Develops the ideas behind the Process: better communication design in the age of AI.",
      link: bookLink,
      src: "/images/process/seeing-past-the-cage-book.jpg",
      alt: "Seeing Past the Cage by Shawn Capizzi, a hardcover standing on a wooden desk",
    },
    {
      eyebrow: "The cards",
      title: "The Clarity Cards",
      text: "Help people apply those ideas in discussions and decisions. Fifty-four questions: draw one, answer it honestly, then touch the work.",
      link: cardsLink,
      src: "/images/process/clarity-cards-desk.jpg",
      alt: "Seven printed Clarity Cards dealt across a wooden desk beside a keyboard and mouse",
    },
  ];

  return (
    <div className="card-grid grid-cols-1 md:grid-cols-2">
      {items.map((item) => (
        <figure
          key={item.title}
          className="card"
        >
          <div className="relative aspect-[4/3] bg-bg-raised">
            <Image
              src={item.src}
              alt={item.alt}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          <figcaption className="card-body">
            <p className="metadata-label">
              {item.eyebrow}
            </p>
            <h3 className="card-title text-text-primary">{item.title}</h3>
            <p className="card-text text-text-secondary">
              {item.text}
              {item.link ? (
                <>
                  {" "}
                  <Link
                    href={item.link.href}
                    className="text-link hover:text-link-hover transition-colors whitespace-nowrap"
                  >
                    {item.link.label}{" "}
                    <span aria-hidden="true">&rarr;</span>
                  </Link>
                </>
              ) : null}
            </p>
          </figcaption>
        </figure>
      ))}
    </div>
  );
}
