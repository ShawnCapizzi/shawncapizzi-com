import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Clarity Advantage",
  description:
    "The book, the cards, and the newsletter. Honest design and strategy for the way we work now.",
};

const CAL_URL = "https://cal.com/capizzi/15min";

export default function Page() {
  return (
    <article>
      {/* HERO */}
      <section
        className="relative pt-32 md:pt-40 pb-24 md:pb-32"
        style={{
          background:
            "radial-gradient(ellipse 1400px 900px at 75% 10%, #7867FF 0%, #6B5CFF 35%, #5A4DE8 100%)",
        }}
      >
        <div className="max-w-content mx-auto px-6 md:px-8 lg:px-12">
          <p
            className="eyebrow mb-6"
            style={{ color: "rgba(255, 255, 255, 0.7)" }}
          >
            The Clarity Advantage
          </p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.05] max-w-4xl text-white">
            Honest design and strategy for the way we work now.
          </h1>
          <p className="mt-6 md:mt-8 text-xl md:text-2xl text-white/80 leading-relaxed max-w-3xl">
            The book, the cards, and the newsletter. All in progress. All
            grounded in a decade of work inside regulated and enterprise teams.
          </p>
        </div>
      </section>

      {/* THE THREE THINGS */}
      <section className="py-16 md:py-24 border-t border-border-subtle">
        <div className="max-w-content mx-auto px-6 md:px-8 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {/* Newsletter */}
            <article className="relative p-7 md:p-9 rounded-2xl card-surface border border-border-default">
              <p className="eyebrow mb-4">Newsletter</p>
              <h2 className="text-xl md:text-2xl font-semibold text-text-primary mb-4 leading-tight">
                Clarity Advantage Subscriber List
              </h2>
              <p className="text-base text-text-secondary leading-relaxed mb-6">
                Occasional, useful, no spam. New essays and thinking when
                they&apos;re ready. Sign-up coming soon.
              </p>
              <p className="text-sm text-text-tertiary italic">
                Want to talk through the ideas in the meantime?{" "}
                <a
                  href={CAL_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-link hover:text-link-hover transition-colors not-italic"
                >
                  Book a call
                </a>
              </p>
            </article>

            {/* The Book */}
            <article className="relative p-7 md:p-9 rounded-2xl card-surface border border-border-default">
              <p className="eyebrow mb-4">Forthcoming</p>
              <h2 className="text-xl md:text-2xl font-semibold text-text-primary mb-4 leading-tight">
                Clarity Is the Advantage
              </h2>
              <p className="text-base text-text-secondary leading-relaxed mb-6">
                Honest, no-fluff thinking on AI, design, and strategy for 2026
                and beyond. Currently in edit. First chapter coming soon.
              </p>
              <p className="text-sm text-text-tertiary italic">
                Notify form launches with the first chapter.
              </p>
            </article>

            {/* The Cards */}
            <article className="relative p-7 md:p-9 rounded-2xl card-surface border border-border-default">
              <p className="eyebrow mb-4">Coming soon</p>
              <h2 className="text-xl md:text-2xl font-semibold text-text-primary mb-4 leading-tight">
                The Capizzi Clarity Cards
              </h2>
              <p className="text-base text-text-secondary leading-relaxed mb-6">
                A 54-card strategic prompt deck based on the Capizzi Process. A
                working tool for teams making complex decisions.
              </p>
              <p className="text-sm text-text-tertiary italic">
                Early access details to come.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32 border-t border-border-subtle">
        <div className="max-w-content mx-auto px-6 md:px-8 lg:px-12 text-center">
          <h2 className="text-3xl md:text-5xl font-semibold tracking-tight mb-6 md:mb-8 max-w-3xl mx-auto leading-tight">
            Want to talk through how this thinking applies to your team?
          </h2>
          <p className="text-lg md:text-xl text-text-secondary mb-10 md:mb-12 max-w-2xl mx-auto">
            30 minutes. Virtual. No pitch.
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
