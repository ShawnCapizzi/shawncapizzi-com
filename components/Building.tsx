"use client";

/**
 * Building — "What I'm building" section.
 * Per design system §5: periwinkle full-bleed color block.
 * Background: --color-brand-purple (#6B5CFF)
 * Text: --color-text-inverse (#0A0A0A)
 * Used at most twice per site — this is one of those moments.
 *
 * Client Component because of the form onSubmit handlers.
 */

const BUILDING = [
  {
    title: "The Clarity Advantage",
    description: "A practical field guide for enterprise teams turning complexity into action. Coming soon.",
    cta: "Get on the early-access list",
  },
  {
    title: "Clarity Is the Advantage",
    subtitle: "the book",
    description: "Honest, no-fluff thinking on AI, design, and strategy for 2026 and beyond.",
    cta: "Read the first chapter when it publishes",
  },
  {
    title: "The Capizzi Clarity Cards",
    description: "A 54-card strategic prompt deck based on the Capizzi Process. A working tool for teams making complex decisions.",
    cta: "Request early access",
  },
];

export function Building() {
  return (
    <section
      className="relative py-24 md:py-32 mt-24 md:mt-32"
      style={{ backgroundColor: "#6B5CFF" }}
    >
      <div className="max-w-wide mx-auto px-6 md:px-8 lg:px-12 text-text-inverse">
        <div className="max-w-3xl">
          <p
            className="font-mono text-xs tracking-widest uppercase mb-4"
            style={{ color: "rgba(10, 10, 10, 0.6)" }}
          >
            In the studio
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05]">
            What I&apos;m building
          </h2>
          <p
            className="mt-6 text-lg md:text-xl leading-relaxed"
            style={{ color: "rgba(10, 10, 10, 0.75)" }}
          >
            A book, a strategy deck, and a field guide — all coming from 15+ years of practice in regulated experience design. Built to be tools for ongoing work, not one-time reads.
          </p>
        </div>

        <div className="mt-16 md:mt-20 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {BUILDING.map((item) => (
            <article
              key={item.title}
              className="relative p-7 md:p-8 rounded-2xl transition-colors"
              style={{
                backgroundColor: "rgba(10, 10, 10, 0.08)",
                border: "1px solid rgba(10, 10, 10, 0.12)",
              }}
            >
              <h3 className="text-xl md:text-2xl font-semibold tracking-tight leading-snug">
                {item.title}
                {item.subtitle ? (
                  <span className="block mt-1 text-sm font-normal italic" style={{ color: "rgba(10, 10, 10, 0.6)" }}>
                    ({item.subtitle})
                  </span>
                ) : null}
              </h3>
              <p
                className="mt-4 text-sm md:text-base leading-relaxed"
                style={{ color: "rgba(10, 10, 10, 0.8)" }}
              >
                {item.description}
              </p>

              <form
                className="mt-6 pt-6"
                style={{ borderTop: "1px solid rgba(10, 10, 10, 0.15)" }}
                onSubmit={(e) => e.preventDefault()}
              >
                <label className="block">
                  <span className="text-xs font-semibold tracking-tight" style={{ color: "rgba(10, 10, 10, 0.75)" }}>
                    {item.cta}
                  </span>
                  <div className="mt-3 flex flex-col gap-2">
                    <input
                      type="email"
                      placeholder="Work email"
                      className="w-full px-4 py-3 rounded-xl text-sm bg-bg-primary text-text-primary placeholder:text-text-tertiary focus:outline-none focus:ring-2"
                      style={{ borderColor: "rgba(10, 10, 10, 0.2)" }}
                    />
                    <button
                      type="submit"
                      className="w-full px-4 py-3 rounded-xl text-sm font-medium bg-bg-primary text-text-primary hover:opacity-90 transition-opacity"
                    >
                      Notify me
                    </button>
                  </div>
                </label>
              </form>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
