import Link from "next/link";
import Image from "next/image";

/**
 * Building — "What I'm building" section.
 *
 * Restyled to match the rest of the site: dark card-surface treatment,
 * brand purple used only as an accent (not a full-bleed block). Two live
 * works showcased — the book (Chapter 1 reader) and the Clarity Cards.
 *
 * The field-guide ("Coming soon") item was removed; this section now
 * showcases the two things that are actually live, each linking to its
 * real experience. Email capture lives in the book reader, not here.
 */

type BuildingItem = {
  title: string;
  subtitle?: string;
  description: string;
  cta: string;
  href: string;
  image?: string;
  imageAlt?: string;
};

const BUILDING: BuildingItem[] = [
  {
    title: "Clarity Is the Advantage",
    subtitle: "the book",
    description:
      "Honest, no-fluff thinking on empathy, AI, and design. Read Chapter 1, \u201CThe Human Condition,\u201D right now in the reader.",
    cta: "Read the first chapter",
    href: "/book/chapter-1",
  },
  {
    title: "The Capizzi Clarity Cards",
    description:
      "A 54-card strategic prompt deck built on the Capizzi Process. A working tool for teams making complex decisions. Draw a card and try it.",
    cta: "Try the cards",
    href: "/clarity-advantage",
    image: "/images/clarity-cards.png",
    imageAlt: "The Capizzi Clarity Cards \u2014 a strategic prompt deck",
  },
];

export function Building() {
  return (
    <section className="py-24 md:py-32 mt-24 md:mt-32 border-t border-border-subtle">
      <div className="max-w-wide mx-auto px-6 md:px-8 lg:px-12">
        <div className="max-w-3xl">
          <p className="eyebrow mb-4">In the studio</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.05]">
            What I&apos;m building
          </h2>
          <p className="mt-6 text-lg md:text-xl text-text-secondary leading-relaxed">
            Tools that come out of 15+ years of practice in regulated experience design. Built for ongoing work, not one-time reads. Two are live now.
          </p>
        </div>

        <div className="mt-16 md:mt-20 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {BUILDING.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="group relative flex flex-col rounded-2xl card-surface border border-border-default hover:border-border-strong overflow-hidden transition-colors"
            >
              {item.image ? (
                <div className="relative aspect-[16/10] overflow-hidden border-b border-border-subtle">
                  <Image
                    src={item.image}
                    alt={item.imageAlt ?? ""}
                    fill
                    className="object-cover object-center transition-transform duration-500 group-hover:scale-[1.02]"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              ) : null}

              <div className="flex flex-col flex-1 p-7 md:p-9">
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
                    →
                  </span>
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
