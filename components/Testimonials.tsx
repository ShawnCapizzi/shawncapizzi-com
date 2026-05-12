import Image from "next/image";

const TESTIMONIALS = [
  {
    quote:
      "Shawn delivers exceptional digital experiences through his masterful blend of engagement strategy and visual design. He's my go-to partner for complex challenges. His genuine passion for the craft truly sets him apart in the field.",
    name: "Jason Levy",
    title: "Marketing Executive, at the forefront of AI",
    image: "/images/testimonials/jason-levy.avif",
  },
  {
    quote:
      "As a UX leader and Subject Matter Expert, he provided essential governance and content strategy for our brand's new design system and platform migration across indications for both HCP and DTC.",
    name: "Courtney McKnight",
    title: "Brand Account Manager",
    image: "/images/testimonials/courtney-mcknight.avif",
  },
  {
    quote:
      "Shawn's data-driven approach to UX and seamless cross-functional collaboration is exceptional. He truly understands the nuances of healthcare UX.",
    name: "Anthony Danzi",
    title: "VP, Analytics",
    image: "/images/testimonials/anthony-danzi.avif",
  },
  {
    quote:
      "Technically savvy, and a content strategist with a keen understanding of visual design — Shawn expertly balances user needs with business objectives while advocating for CX and UX best practices.",
    name: "Marcel Dumont",
    title: "Director of Project Management",
    image: "/images/testimonials/marcel-dumont.avif",
  },
  {
    quote:
      "Shawn is a rare talent who seamlessly blends strategy, research, and visual design. His energetic thinking elevates design while his collaborative spirit makes him invaluable.",
    name: "Dave Derby",
    title: "Group Director, Strategy and Service Design",
    image: "/images/testimonials/dave-derby.avif",
  },
];

export function Testimonials() {
  return (
    <section className="py-24 md:py-32 border-t border-border-subtle">
      <div className="max-w-wide mx-auto px-6 md:px-8 lg:px-12">
        <div className="max-w-3xl">
          <p className="eyebrow mb-4">Words from collaborators</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight leading-tight">
            What people have said
          </h2>
        </div>

        <div className="mt-16 md:mt-20 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {TESTIMONIALS.map((t) => (
            <figure
              key={t.name}
              className="relative p-7 md:p-8 rounded-2xl card-surface border border-border-default"
            >
              <blockquote>
                <p className="text-base md:text-[15px] text-text-primary leading-relaxed">
                  {t.quote}
                </p>
              </blockquote>
              <figcaption className="mt-7 flex items-center gap-4">
                <Image
                  src={t.image}
                  alt={t.name}
                  width={56}
                  height={56}
                  className="rounded-full object-cover h-12 w-12 md:h-14 md:w-14 border border-border-subtle"
                />
                <div>
                  <p className="text-sm font-semibold text-text-primary">
                    {t.name}
                  </p>
                  <p className="text-xs text-text-tertiary mt-0.5">
                    {t.title}
                  </p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
