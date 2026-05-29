// Destination: app/thinking/page.tsx
import type { Metadata } from "next";
import { LiteYouTube } from "@/components/LiteYouTube";

export const metadata: Metadata = {
  title: "Thinking",
  description:
    "Essays on AI adoption, regulatory design, and experience strategy in regulated industries.",
};

const CAL_URL = "https://cal.com/capizzi/15min";
const LINKEDIN_PROFILE_URL = "https://www.linkedin.com/in/shawncapizzi/";

// Published — externally hosted, links out
const PUBLISHED = [
  {
    title: "Beyond User Flows: Agentic AI Is Rewriting UX Fundamentals",
    date: "Oct 2025",
    readTime: "8 min read",
    description:
      "Designing for trust, transparency, and control in the age of agentic AI. Three principles for when AI should act, speak, or stay silent — with examples from healthcare.",
    url: "https://medium.com/p/e335c1789bc7",
    source: "Medium",
  },
  {
    title: "The FDA's New Digital Era",
    date: "Nov 2025",
    readTime: "7 min read",
    description:
      "Why pharma's future belongs to honest, human-centered experience design. The September 2025 FDA mandate makes clarity, accessibility, and structured content systems the new competitive edge — not the constraint.",
    url: "https://www.linkedin.com/pulse/fdas-new-digital-era-why-pharmas-future-belongs-honest-capizzi-lyjne/",
    source: "LinkedIn",
  },
  {
    title: "The Agentic AI Starter Kit",
    date: "2025",
    readTime: "7 min read",
    description:
      "The companion playbook. How to take the enterprise data you already own and turn it into proactive, intelligent experiences — without rebuilding the stack.",
    url: "https://www.linkedin.com/pulse/agentic-ai-starter-kit-turn-data-you-already-have-capizzi-yi5ie",
    source: "LinkedIn",
  },
  {
    title: "24 Storytelling Guidelines for Effective Digital Design",
    date: "Oct 2025",
    readTime: "6 min read",
    description:
      "A field-tested ruleset for building brand stories across modern omnichannel touchpoints. Empathy, hierarchy, opinionated design, and the restraint to leave the obvious solution on the table.",
    url: "https://medium.com/p/8c13681079de",
    source: "Medium",
  },
];

export default function Page() {
  return (
    <article>
      {/* HERO */}
      <section className="relative pt-32 md:pt-40 pb-12 md:pb-16">
        <div className="max-w-content mx-auto px-6 md:px-8 lg:px-12">
          <p className="eyebrow mb-3">Thinking</p>
          <h1 className="headline-static text-[1.8rem] md:text-4xl lg:text-[39px] font-bold tracking-tight leading-[1.15] md:leading-[1.1] lg:leading-[1.05] text-balance max-w-4xl">
            Essays on AI adoption, regulatory design, experience strategy.
          </h1>
          <p className="text-lg md:text-xl text-text-secondary mt-6 md:mt-8 max-w-2xl leading-relaxed">
            AI adoption isn't a technology problem. It's an experience
            architecture problem.
          </p>
        </div>
      </section>

      {/* PUBLISHED */}
      {PUBLISHED.length > 0 && (
        <section className="pb-12 md:pb-16">
          <div className="max-w-content mx-auto px-6 md:px-8 lg:px-12">
            <p className="eyebrow mb-4">Published</p>
            <div className="grid grid-cols-1 gap-6 md:gap-8 max-w-3xl">
              {PUBLISHED.map((essay) => (
                <a
                  key={essay.title}
                  href={essay.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative block p-7 md:p-9 rounded-2xl card-surface border border-border-default hover:border-border-strong transition-colors"
                >
                  <div className="flex items-center gap-3 mb-5 text-sm text-text-tertiary">
                    <span className="metadata-label">{essay.date}</span>
                    <span aria-hidden="true">·</span>
                    <span>{essay.readTime}</span>
                    <span aria-hidden="true">·</span>
                    <span className="text-link">{essay.source}</span>
                  </div>
                  <h2 className="subhead-editorial text-xl md:text-2xl lg:text-3xl group-hover:text-link transition-colors leading-tight mb-4">
                    {essay.title}
                  </h2>
                  <p className="lead-text text-base md:text-lg leading-relaxed mb-6">
                    {essay.description}
                  </p>
                  <p className="text-link group-hover:text-link-hover transition-colors text-base font-medium">
                    Read on {essay.source}{" "}
                    <span aria-hidden="true" className="ml-1">
                      →
                    </span>
                  </p>
                </a>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* RECENTLY SHARED — Intouch talk + YouTube Short */}
      <section className="pb-12 md:pb-16">
        <div className="max-w-content mx-auto px-6 md:px-8 lg:px-12">
          <p className="eyebrow mb-4">Recently shared</p>

          {/* Side-by-side: Short (left) + Talk (right). On mobile the Short
              centers in its column so the vertical embed reads as intentional
              rather than left-floating against the wider page. */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 items-start">
            {/* YouTube Short — leads on mobile (more visually arresting) */}
            <div className="text-center lg:text-left">
              <p className="metadata-label mb-4">
                AI UX & CX Research GPT · Jan 2025
              </p>
              <div
                className="rounded-xl overflow-hidden bg-black mx-auto lg:mx-0"
                style={{ aspectRatio: "9 / 16", maxWidth: "300px" }}
              >
                <iframe
                  src="https://www.youtube.com/embed/8FibVFlaW30"
                  title="YouTube Short — Shawn Capizzi"
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  style={{
                    width: "100%",
                    height: "100%",
                    border: 0,
                    display: "block",
                  }}
                />
              </div>
            </div>

            {/* YouTube — talk at Intouch, Nov 2023 */}
            <div>
              <p className="metadata-label mb-4">Talk · Intouch · Nov 2023</p>
              <LiteYouTube
                videoId="iUvwk-KoA7s"
                title="Optimize your process with No Code in Advertising"
                aspect="16:9"
              />
              <p className="mt-4 text-sm text-text-tertiary italic">
                Optimize your process with No Code in Advertising — delivered
                at Intouch.
              </p>
            </div>
          </div>

          {/* Quiet link to full activity */}
          <div className="mt-10 md:mt-12">
            <a
              href={LINKEDIN_PROFILE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-link hover:text-link-hover transition-colors text-base font-medium"
            >
              See more on LinkedIn{" "}
              <span aria-hidden="true" className="ml-1">
                →
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="py-24 md:py-32 mt-16 md:mt-24 border-t border-border-subtle">
        <div className="max-w-content mx-auto px-6 md:px-8 lg:px-12 text-center">
          <h2 className="text-3xl md:text-3xl lg:text-[30px] font-semibold tracking-tight mb-6 md:mb-8 max-w-3xl mx-auto leading-tight">
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
