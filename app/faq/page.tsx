"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

const CAL_URL = "https://cal.com/capizzi/15min";

const FAQS = [
  {
    q: "What is AI UX, and how is it different from traditional UX design?",
    a: "AI UX is the design discipline that shapes how people interact with non-deterministic systems — agents, copilots, predictive interfaces — where the output isn't fixed and trust is the core design material. Traditional UX optimizes a known path. AI UX designs for ambiguity, correction, and judgment, which means the work lives in workflow logic, content readiness, and trust signals — not interface novelty.",
  },
  {
    q: "Why do most enterprise AI rollouts stall after the pilot?",
    a: "AI adoption is not a technology problem — it's an experience architecture problem. The model works, the integration works, the platform works. But if the workflow is unclear, the content is messy, the decision logic is hidden, or users don't trust the output, adoption stalls. That's design work, not engineering work.",
  },
  {
    q: "How do you integrate AI into pharma, healthcare, or other regulated industries without breaking compliance?",
    a: "You treat compliance as a design constraint, not an afterthought. That means mapping every AI touchpoint to its regulatory surface (FDA, HIPAA, MLR, SOC 2), structuring content for auditability, and building human-in-the-loop checkpoints where model confidence drops. I've done this across 15+ pharmaceutical brands and major enterprise systems.",
  },
  {
    q: "Should I hire a full-time Director of UX, a VP of Design, or a fractional design leader?",
    a: "It depends on what's actually broken. Hire full-time if you're building a multi-year design org or design system. Bring in a fractional leader if you need senior judgment on a 6–12 month transformation, are between full-time hires, or are launching a regulated or AI-heavy product where one wrong assumption costs millions. The two roles solve different problems — and the wrong choice burns 6 months before anyone notices.",
  },
  {
    q: "What does a strategic design partner do that an agency doesn't?",
    a: "An agency executes against a brief you wrote. A strategic design partner writes the brief with you — challenging the framing, mapping the system, and translating business outcomes into experience decisions. You get accountability for the outcome, not just the deliverable. Agencies are great when you know what you need. Strategic partners are necessary when you're trying to figure out what you need.",
  },
  {
    q: "What is the Capizzi Process?",
    a: "A field-tested methodology for moving complex, regulated, AI-touched products from strategy to shipped experience. Built around six principles: clarity before creativity, HVA (highest-value action) before CTA, hierarchy before decoration, trust before action, systems before scattered activity, and judgment over output. It's the spine of the case studies, the book, and the workshops on this site.",
  },
  {
    q: "What industries and clients have you worked with?",
    a: "Pharmaceutical and healthcare (oncology, cardiovascular, vaccines, multiple sclerosis, hemophilia, immunology, rare disease, HIV/AIDS, women's health), financial services and enterprise data, and consumer technology — with deep specialization in AI integration for regulated environments. The throughline is high-stakes, compliance-bound work where bad UX has real legal, clinical, or financial consequences.",
  },
  {
    q: "What kind of outcomes have your clients seen?",
    a: "$270M+ in tracked revenue impact across pharma, fintech, and enterprise engagements. Specific wins include a D&AD Pencil-recognized equity-focused cancer care platform, multi-brand digital transformation across 15+ therapeutic brands ($3.5M+ documented investment), and $1.5M+ in annual ROI from an enterprise financial services CRM transformation. Outcomes vary by engagement scope — the case studies on this site walk through specifics.",
  },
  {
    q: "How do engagements typically start?",
    a: "Every engagement starts with a free 30-minute Strategy Call. Virtual. We talk through what's stuck and what success looks like. No pitch. If there's not a fit, I'll tell you and try to point you to possible solutions or partners. If the strategy call goes well, a longer scoping conversation with the relevant stakeholders to understand scope, timing, and constraints — and then a Statement of Work. Most engagements move from first call to signed SOW in 2–3 weeks.",
  },
  {
    q: "Do you work with agency partners or only direct clients?",
    a: "Both. I work directly with brands and embed as senior experience leadership inside agency engagements when the client is regulated, enterprise, or AI-heavy and the agency team needs a senior voice in the room. The structure depends on the work — what matters is the right level of accountability for the outcome.",
  },
  {
    q: "Are you available for full-time roles, or only consulting engagements?",
    a: "Currently leading UX strategy at Razorfish (Publicis) on Pfizer brands. Open to senior Director, VP, or Head of Design roles for the right mandate, and to selected embedded and advisory engagements in parallel. The 30-minute Strategy Call is also the right starting point if you're trying to figure out which structure makes sense for your team.",
  },
  {
    q: "Do you travel for workshops or onsite work?",
    a: "Yes. Virtual delivery is included in all engagements. Onsite delivery bills travel at cost. Workshops, executive presentations, and stakeholder alignment sessions often benefit from being in the room — I'm available for that when it's the right call.",
  },
];

export default function Page() {
  const [allOpen, setAllOpen] = useState(false);
  const detailsRefs = useRef<(HTMLDetailsElement | null)[]>([]);

  const toggleAll = () => {
    const next = !allOpen;
    setAllOpen(next);
    detailsRefs.current.forEach((el) => {
      if (el) el.open = next;
    });
  };

  // Sync state if user toggles individual items so the global button stays accurate
  useEffect(() => {
    const checkAllOpen = () => {
      const allAreOpen = detailsRefs.current.every((el) => el?.open);
      const noneAreOpen = detailsRefs.current.every((el) => !el?.open);
      if (allAreOpen) setAllOpen(true);
      else if (noneAreOpen) setAllOpen(false);
    };
    const handlers: Array<() => void> = [];
    detailsRefs.current.forEach((el) => {
      if (el) {
        const h = () => checkAllOpen();
        el.addEventListener("toggle", h);
        handlers.push(() => el.removeEventListener("toggle", h));
      }
    });
    return () => handlers.forEach((cleanup) => cleanup());
  }, []);

  return (
    <article>
      {/* HERO */}
      <section className="relative pt-32 md:pt-40 pb-12 md:pb-16">
        <div className="max-w-content mx-auto px-6 md:px-8 lg:px-12">
          <p className="eyebrow mb-6">FAQ</p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.05] max-w-4xl">
            Frequently asked.
          </h1>
          <p className="mt-6 md:mt-8 text-xl md:text-2xl text-text-secondary leading-relaxed max-w-3xl">
            Plain answers to the questions that come up most often about AI UX,
            regulated design, and how strategic experience design partners
            differ from agencies.
          </p>
        </div>
      </section>

      {/* CONTROLLER */}
      <section className="pb-6 md:pb-8">
        <div className="max-w-content mx-auto px-6 md:px-8 lg:px-12">
          <div className="max-w-3xl flex items-center justify-end">
            <button
              type="button"
              onClick={toggleAll}
              className="inline-flex items-center text-sm font-medium text-text-tertiary hover:text-text-primary transition-colors"
            >
              {allOpen ? "Close all" : "Expand all"}
              <span aria-hidden="true" className="ml-2">
                {allOpen ? "−" : "+"}
              </span>
            </button>
          </div>
        </div>
      </section>

      {/* ACCORDIONS */}
      <section className="pb-12 md:pb-16">
        <div className="max-w-content mx-auto px-6 md:px-8 lg:px-12">
          <div className="max-w-3xl space-y-3 md:space-y-4">
            {FAQS.map((item, i) => (
              <details
                key={i}
                ref={(el) => {
                  detailsRefs.current[i] = el;
                }}
                className="group rounded-xl card-surface border border-border-default overflow-hidden"
              >
                <summary className="cursor-pointer list-none p-5 md:p-6 flex items-start justify-between gap-6 hover:bg-white/[0.02] transition-colors">
                  <h2 className="text-base md:text-lg font-semibold text-text-primary leading-tight">
                    {item.q}
                  </h2>
                  <span
                    aria-hidden="true"
                    className="flex-shrink-0 text-text-tertiary text-xl leading-none mt-0.5 transition-transform duration-200 group-open:rotate-45"
                  >
                    +
                  </span>
                </summary>
                <div className="px-5 md:px-6 pb-5 md:pb-6 -mt-1">
                  <p className="text-base md:text-lg text-text-secondary leading-relaxed">
                    {item.a}
                  </p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32 mt-12 md:mt-16 border-t border-border-subtle">
        <div className="max-w-content mx-auto px-6 md:px-8 lg:px-12 text-center">
          <h2 className="text-3xl md:text-5xl font-semibold tracking-tight mb-6 md:mb-8 max-w-3xl mx-auto leading-tight">
            Have a question that isn&apos;t here?
          </h2>
          <p className="text-lg md:text-xl text-text-secondary mb-10 md:mb-12 max-w-2xl mx-auto">
            30 minutes. No pitch. We figure out together if there&apos;s a fit.
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
