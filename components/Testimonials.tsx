const TESTIMONIALS = [
  {
    quote: "Shawn delivers exceptional digital experiences through his masterful blend of engagement strategy and visual design. He's my go-to partner for complex challenges. His genuine passion for the craft truly sets him apart in the field.",
    name: "Jason Levy",
    title: "Marketing Executive, at the forefront of AI",
  },
  {
    quote: "As a UX leader and Subject Matter Expert, he provided essential governance and content strategy for our brand's new design system and platform migration across indications for both HCP and DTC.",
    name: "Courtney McKnight",
    title: "Brand Account Manager",
  },
  {
    quote: "Shawn's data-driven approach to UX and seamless cross-functional collaboration is exceptional. He truly understands the nuances of healthcare UX.",
    name: "Anthony Danzi",
    title: "VP, Analytics",
  },
  {
    quote: "Technically savvy, and a content strategist with a keen understanding of visual design — Shawn expertly balances user needs with business objectives while advocating for CX and UX best practices.",
    name: "Marcel Dumont",
    title: "Director of Project Management",
  },
  {
    quote: "Shawn is a rare talent who seamlessly blends strategy, research, and visual design. His energetic thinking elevates design while his collaborative spirit makes him invaluable.",
    name: "Dave Derby",
    title: "Group Director, Strategy and Service Design",
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

        <div className="mt-16 md:mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {TESTIMONIALS.map((t, i) => (
            <figure
              key={t.name}
              className={`relative p-7 md:p-8 rounded-2xl bg-bg-elevated border border-border-subtle ${
                i === 0 ? "lg:col-span-2 lg:row-span-1" : ""
              }`}
            >
              <blockquote>
                <p className={`text-text-primary leading-relaxed ${i === 0 ? "text-lg md:text-xl" : "text-base"}`}>
                  <span className="text-text-tertiary mr-1" aria-hidden="true">&ldquo;</span>
                  {t.quote}
                  <span className="text-text-tertiary ml-1" aria-hidden="true">&rdquo;</span>
                </p>
              </blockquote>
              <figcaption className="mt-6 pt-6 border-t border-border-subtle">
                <p className="text-sm font-semibold text-text-primary">{t.name}</p>
                <p className="mt-1 text-sm text-text-tertiary">{t.title}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
