import type { Metadata } from "next";
import { LiteYouTube } from "@/components/LiteYouTube";

export const metadata: Metadata = {
  title: "Thinking",
  description:
    "Essays on AI adoption, regulatory design, and experience strategy in regulated industries.",
};

const CAL_URL = "https://cal.com/capizzi/15min";

// Published — externally hosted, links out
const PUBLISHED = [
  {
    title: "Beyond User Flows: AI Is Rewriting UX Fundamentals",
    date: "2024",
    readTime: "8 min read",
    description:
      "How the rise of non-deterministic interfaces changes what UX design even means. Why workflow logic, content readiness, and trust signals matter more than interface novelty.",
    url: "https://medium.com/p/e335c1789bc7",
    source: "Medium",
  },
];

// Essays still in progress — keeping the two strongest as placeholders
const UPCOMING = [
  {
    title: "Stop Buying AI. Start Fixing the Boring Stuff First.",
    date: "May 2026",
    readTime: "9 min read",
    description:
      "Most companies aren't ready for AI. Not because the technology is hard, but because the foundational work hasn't been done yet.",
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
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.05] max-w-4xl">
            Essays on AI adoption, regulatory design, experience strategy.
          </h1>
        </div>
      </section>

      {/* PUBLISHED */}
      {PUBLISHED.length > 0 && (
        <section className="pb-12 md:pb-16">
          <div className="max-w-content mx-auto px-6 md:px-8 lg:px-12">
            <p className="eyebrow mb-6">Published</p>
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

      {/* RECENTLY SHARED — LinkedIn + YouTube */}
      <section className="pb-12 md:pb-16">
        <div className="max-w-content mx-auto px-6 md:px-8 lg:px-12">
          <p className="eyebrow mb-6">Recently shared</p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10">
            {/* LinkedIn embed card */}
            <div>
              <p className="metadata-label mb-4">From LinkedIn</p>
              <div
                className="rounded-xl overflow-hidden"
                style={{ maxWidth: "504px" }}
              >
                <iframe
                  src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7395158706776072192?collapsed=1"
                  height="619"
                  width="100%"
                  frameBorder="0"
                  allowFullScreen
                  title="LinkedIn post — recent thinking"
                  loading="lazy"
                  style={{ display: "block", borderRadius: "12px" }}
                />
              </div>
            </div>

            {/* YouTube embed card */}
            <div>
              <p className="metadata-label mb-4">Recent talk</p>
              <LiteYouTube
                videoId="iUvwk-KoA7s"
                title="Recent talk on experience design and AI"
                aspect="16:9"
              />
              <p className="mt-4 text-sm text-text-tertiary italic">
                Hear me think through the work — voice rather than text.
              </p>
            </div>
          </div>

          {/* Second row — two more LinkedIn posts in compact format */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 mt-10 md:mt-12">
            {/* LinkedIn compact embed — newer */}
            <div>
              <p className="metadata-label mb-4">From LinkedIn</p>
              <div
                className="rounded-xl overflow-hidden"
                style={{ maxWidth: "504px" }}
              >
                <iframe
                  src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7308172568761421824?compact=1"
                  height="399"
                  width="100%"
                  frameBorder="0"
                  allowFullScreen
                  title="LinkedIn post"
                  loading="lazy"
                  style={{ display: "block", borderRadius: "12px" }}
                />
              </div>
            </div>

            {/* LinkedIn compact embed — older */}
            <div>
              <p className="metadata-label mb-4">From LinkedIn</p>
              <div
                className="rounded-xl overflow-hidden"
                style={{ maxWidth: "504px" }}
              >
                <iframe
                  src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7156977534964760576?compact=1"
                  height="399"
                  width="100%"
                  frameBorder="0"
                  allowFullScreen
                  title="LinkedIn post"
                  loading="lazy"
                  style={{ display: "block", borderRadius: "12px" }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* IN PROGRESS — reduced to 2 */}
      <section className="pb-12 md:pb-16">
        <div className="max-w-content mx-auto px-6 md:px-8 lg:px-12">
          <p className="eyebrow mb-6">In progress</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {UPCOMING.map((essay) => (
              <article
                key={essay.title}
                className="relative p-7 md:p-9 rounded-2xl card-surface border border-border-default"
              >
                <div className="flex items-center gap-3 mb-5 text-sm text-text-tertiary">
                  <span className="metadata-label">{essay.date}</span>
                  <span aria-hidden="true">·</span>
                  <span>{essay.readTime}</span>
                </div>
                <h2 className="subhead-editorial text-xl md:text-2xl leading-tight mb-4">
                  {essay.title}
                </h2>
                <p className="lead-text text-base md:text-lg leading-relaxed mb-6">
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
            className="inline-flex items-center justify-center px-7 py-3.5 rounded-full bg-[#6B5CFF] hover:bg-[#7B6CFF] text-white text-base font-medium tracking-tight hover:scale-[1.02] transition-all"
          >
            Book a Strategy Call
          </a>
        </div>
      </section>
    </article>
  );
}
