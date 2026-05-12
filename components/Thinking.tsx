import Link from "next/link";

const ARTICLES = [
  {
    slug: "stop-buying-ai",
    title: "Stop Buying AI. Start Fixing the Boring Stuff First.",
    description: "Most companies aren't ready for AI. Not because the technology is hard, but because the foundational work — knowing your user, fixing your data, cleaning your processes — hasn't been done yet.",
    readTime: "9 min",
  },
  {
    slug: "ai-experience-architecture",
    title: "AI Adoption Is an Experience Architecture Problem",
    description: "Why most enterprise AI initiatives stall after pilot — and what changes when you treat the experience layer as the work, not the wrapper.",
    readTime: "6 min",
  },
  {
    slug: "fda-september-2025",
    title: "What the September 2025 FDA Updates Mean for Pharma UX",
    description: "The biggest regulatory shift in pharmaceutical marketing in decades. What changes for digital teams, and why this is good news for design.",
    readTime: "8 min",
  },
  {
    slug: "capizzi-process",
    title: "The Capizzi Process — Strategic Experience Design Methodology",
    description: "The framework I use across regulated and enterprise engagements. Clarity before creativity. Hierarchy before decoration.",
    readTime: "7 min",
  },
];

export function Thinking() {
  return (
    <section className="py-24 md:py-32 border-t border-border-subtle">
      <div className="max-w-wide mx-auto px-6 md:px-8 lg:px-12">
        <div className="max-w-3xl">
          <p className="eyebrow mb-4">Thinking</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight leading-tight">
            How I&apos;m thinking about this work publicly
          </h2>
          <p className="mt-6 text-lg md:text-xl text-text-secondary leading-relaxed">
            Essays on AI adoption, regulatory design, and experience strategy in regulated industries.
          </p>
        </div>

        <div className="mt-16 md:mt-20 grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {ARTICLES.map((article) => (
            <Link
              key={article.slug}
              href={`/thinking/${article.slug}`}
              className="group relative block p-7 md:p-8 rounded-2xl bg-bg-elevated border border-border-subtle hover:border-border-default transition-colors"
            >
              <div className="flex items-center gap-3 mb-5">
                <span className="font-mono text-xs tracking-widest uppercase text-text-tertiary">
                  Essay
                </span>
                <span className="text-text-tertiary" aria-hidden="true">·</span>
                <span className="text-xs text-text-tertiary">{article.readTime} read</span>
              </div>
              <h3 className="text-xl md:text-2xl font-semibold tracking-tight leading-snug text-text-primary">
                {article.title}
              </h3>
              <p className="mt-4 text-sm md:text-base text-text-secondary leading-relaxed">
                {article.description}
              </p>
              <p className="mt-6 inline-flex items-center text-sm font-medium text-link group-hover:text-link-hover transition-colors">
                Read the essay <span aria-hidden="true" className="ml-2">→</span>
              </p>
            </Link>
          ))}
        </div>

        <div className="mt-12 md:mt-16">
          <Link
            href="/thinking"
            className="inline-flex items-center text-base font-medium text-link hover:text-link-hover transition-colors"
          >
            Read more <span aria-hidden="true" className="ml-2">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
