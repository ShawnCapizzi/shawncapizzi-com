// Destination: app/clarity-advantage/page.tsx
import Link from "next/link";
import type { Metadata } from "next";
import { ClarityCardDeck } from "@/components/ClarityCardDeck";
import { SignupCard } from "@/components/SignupCard";

export const metadata: Metadata = {
  title: "The Clarity Advantage",
  description:
    "The book, the cards, and the newsletter from Shawn Capizzi: tools grounded in 15+ years inside regulated and enterprise teams.",
};

const CAL_URL = "https://cal.com/capizzi/30min";

export default function Page() {
  return (
    <article>
      {/* HERO */}
      <section className="relative pt-32 md:pt-40 pb-12 md:pb-16">
        <div className="max-w-content mx-auto px-6 md:px-8 lg:px-12">
          <p className="eyebrow mb-3">The Clarity Advantage</p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-[0.95] text-balance max-w-4xl">
            Honest design and strategy for the way we work now.
          </h1>
          <p className="mt-6 md:mt-8 text-xl md:text-2xl text-text-secondary leading-relaxed max-w-3xl">
            The book, the cards, and the newsletter: tools you can hold and use,
            grounded in{" "}
            <Link
              href="/work"
              className="text-link hover:text-link-hover transition-colors"
            >
              15+ years inside regulated and enterprise teams
            </Link>
            . Built to help your teams think through complex decisions with
            greater clarity and focus.
          </p>
        </div>
      </section>

      {/* INTERACTIVE DECK + CARDS INTRO */}
      <section className="py-16 md:py-24 border-t border-border-subtle">
        <div className="max-w-content mx-auto px-6 md:px-8 lg:px-12">
          <div className="max-w-3xl mb-12 md:mb-16">
            <p className="eyebrow mb-4">Printed version coming soon</p>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold tracking-tight leading-tight text-text-primary">
              The Capizzi Clarity Cards
            </h2>
            <p className="mt-4 md:mt-6 text-base md:text-lg text-text-secondary leading-relaxed">
              A 54-card strategic prompt deck based on the Capizzi Process. A
              working tool for teams making complex decisions.
            </p>
          </div>

          <ClarityCardDeck />
        </div>
      </section>

      {/* THE TWO THINGS */}
      <section className="py-16 md:py-24 border-t border-border-subtle">
        <div className="max-w-content mx-auto px-6 md:px-8 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {/* Newsletter — inline signup form, same CRM endpoint as the
                chapter-1 reader's "Get on the list" CTA. */}
            <article className="relative p-7 md:p-9 rounded-2xl card-surface border border-border-default">
              <p className="eyebrow mb-4">Newsletter</p>
              <h2 className="text-xl md:text-2xl font-semibold text-text-primary mb-4 leading-tight">
                Clarity Advantage Subscriber List
              </h2>
              <p className="text-base text-text-secondary leading-relaxed mb-8">
                First in line for new essays, chapter releases, and occasional
                notes from the work in between. No spam, no noise.
              </p>
              <SignupCard
                buttonLabel="Join the list"
                successText="Confirm your email and you're on the list. New essays, chapter releases, and the occasional note from the work, nothing else."
              />
            </article>

            {/* The Book */}
            <Link
              href="/book/chapter-1"
              className="group relative p-7 md:p-9 rounded-2xl card-surface border border-border-default hover:border-border-strong transition-colors"
            >
              <p className="eyebrow mb-4">The book</p>
              <h2 className="text-xl md:text-2xl font-semibold text-text-primary mb-2 leading-tight group-hover:text-link transition-colors">
                Clarity Is the Advantage
              </h2>
              <p className="text-sm md:text-base italic text-text-tertiary mb-4 leading-snug">
                Orienteering to great design decisions
              </p>
              <p className="text-base text-text-secondary leading-relaxed mb-6">
                Why clarity wins, how to cut through the noise, and what it
                takes to do great work in the rooms where decisions get made.
                15+ years of agency life, distilled. Chapter 1 is live. Read it
                free.
              </p>
              <p className="text-link group-hover:text-link-hover transition-colors text-base font-medium">
                Read Chapter 1{" "}
                <span aria-hidden="true" className="ml-1">
                  &rarr;
                </span>
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32 border-t border-border-subtle">
        <div className="max-w-content mx-auto px-6 md:px-8 lg:px-12 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight mb-6 md:mb-8 max-w-3xl mx-auto leading-tight">
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
