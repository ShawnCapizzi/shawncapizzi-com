import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Thinking",
  description:
    "Essays on AI adoption, regulatory design, and experience strategy in regulated industries.",
};

const CAL_URL = "https://cal.com/capizzi/15min";

const ESSAYS = [
  {
    title: "Stop Buying AI. Start Fixing the Boring Stuff First.",
    date: "May 2026",
    readTime: "9 min read",
    description:
      "Most companies aren't ready for AI. Not because the technology is hard, but because the foundational work hasn't been done yet.",
  },
  {
    title: "AI Adoption Is an Experience Architecture Problem",
    date: "April 2026",
    readTime: "6 min read",
    description:
      "Why most enterprise AI initiatives stall after pilot — and what changes when you treat the experience layer as the work, not the wrapper.",
  },
  {
    title: "What the September 2025 FDA Updates Mean for Pharma UX",
    date: "September 2025",
    readTime: "8 min read",
    description:
      "The biggest regulatory shift in pharmaceutical marketing in decades. What changes for digital teams, and why this is good news for design.",
  },
  {
    title: "The Capizzi Process — Strategic Experience Design Methodology",
    date: "March 2026",
    readTime: "7 min read",
    description:
      "The framework I use across regulated and enterprise engagements. Clarity before creativity. Hierarchy before decoration.",
  },
];

export default function Page() {
  return (
    <article>
      {/* HERO */}
      <section className="relative pt-32 md:pt-40 pb-12 md:pb-16">
        <div className="max-w-content mx-auto px-6 md:px-8 lg:px-12">
          <p className="eyebrow mb-6">Thinking</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05] max-w-4xl">
            Essays on AI adoption, regulatory design, and experience strategy
            in regulated industries.
          </h1>
        </div>
      </section>

      {/* ESSAYS */}
      <section className="py-12 md:py-16">
        <div className="max-w-content mx-auto px-6 md:px-8 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {ESSAYS.map((essay) => (
              <article
                key={essay.title}
                className="relative p-7 md:p-9 rounded-2xl card-surface border border-border-default"
              >
                <div className="flex items-center gap-3 mb-5 text-sm text-text-tertiary">
                  <span className="metadata-label">{essay.date}</span>
                  <span aria-hidden="true">·</span>
                  <span>{essay.readTime}</span>
                </div>
                <h2 className="text-xl md:text-2xl font-semibold tracking-tight text-text-primary leading-tight mb-4">
                  {essay.title}
                </h2>
                <p className="text-base md:text-lg text-text-secondary leading-relaxed mb-6">
                  {essay.description}
                </p>
                <p className="text-sm text-text-tertiary italic">
                  Publishing soon —{" "}
                  <a
                    href={CAL_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-link hover:text-link-hover transition-colors not-italic"
                  >
                    talk to me about the ideas
                  </a>
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="py-24 md:py-32 mt-16 md:mt-24 border-t border-border-subtle">
        <div className="max-w-content mx-auto px-6 md:px-8 lg:px-12 text-center">
          <h2 className="text-3xl md:text-5xl font-semibold tracking-tight mb-6 md:mb-8 max-w-3xl mx-auto leading-tight">
            Get new thinking when it publishes.
          </h2>
          <p className="text-lg md:text-xl text-text-secondary mb-10 md:mb-12 max-w-2xl mx-auto">
            Or skip the newsletter and talk through the ideas directly.
          </p>
          <a
            href={CAL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-7 py-3.5 rounded-full bg-text-primary text-text-inverse text-base font-medium tracking-tight hover:scale-[1.02] transition-transform"
          >
            Book a Strategy Call
          </a>
        </div>
      </section>
    </article>
  );
}
