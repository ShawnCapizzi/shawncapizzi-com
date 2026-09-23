/**
 * FAQ content, in one place for two readers: the /faq page renders it, and
 * the same text becomes the page's FAQPage structured data. An answer is a
 * list of plain text and links, so the page can link inline while the
 * structured data gets clean text with no markup.
 *
 * Google stopped showing FAQ rich results in 2026; the markup stays because
 * other search and answer engines read it, and it costs nothing to keep true.
 */

export type FaqSegment = string | { text: string; href: string };
export type FaqItem = { q: string; a: FaqSegment[] };

export const FAQS: FaqItem[] = [
  {
    q: "What is AI UX, and how is it different from traditional UX design?",
    a: [
      "AI UX is the design discipline that shapes how people interact with non-deterministic systems (agents, copilots, predictive interfaces) where the output isn't fixed and trust is the core design material. Traditional UX optimizes a known path. AI UX designs for ambiguity, correction, and judgment, which means the work lives in workflow logic, content readiness, and trust signals. Not interface novelty.",
    ],
  },
  {
    q: "Why do most enterprise AI rollouts stall after the pilot?",
    a: [
      "AI adoption is not a technology problem. It's an experience architecture problem. The model works, the integration works, the platform works. But if the workflow is unclear, the content is messy, the decision logic is hidden, or users don't trust the output, adoption stalls. That's design work, not engineering work.",
    ],
  },
  {
    q: "How do you integrate AI into pharma, healthcare, or other regulated industries without breaking compliance?",
    a: [
      "You treat compliance as a design constraint, not an afterthought. That means mapping every AI touchpoint to its regulatory surface (FDA, HIPAA, MLR, SOC 2), structuring content for auditability, and building human-in-the-loop checkpoints where model confidence drops. I've done this across ",
      { text: "70+ therapeutic brands", href: "/work/pharma-design-systems" },
      " and major enterprise systems.",
    ],
  },
  {
    q: "What does a strategic design partner do that an agency doesn't?",
    a: [
      "An agency executes against a brief you wrote. A strategic design partner writes the brief with you: challenging the framing, mapping the system, and translating business outcomes into experience decisions. You get accountability for the outcome, not just the deliverable. Agencies are great when you know what you need. Strategic partners are necessary when you're trying to figure out what you need.",
    ],
  },
  {
    q: "What is the Capizzi Process?",
    a: [
      "Three steps and six operating principles. The steps are the Process: listen first, make it visible, prove it worked. That is the shape of every engagement, from the first conversation to the shipped experience. Inside those steps sit six operating principles that guide the judgment calls: clarity before creativity, highest-value action before CTA, hierarchy before decoration, trust before action, systems before scattered activity, and judgment over output. Not every engagement leans on all six; which ones apply depends on your team, where the initiative sits in its timeline, and the state it is in. The Process is the spine of the case studies, the book, the Clarity Cards, and the workshops on this site.",
    ],
  },
  {
    q: "What industries and clients have you worked with?",
    a: [
      "Pharmaceutical and healthcare (oncology, cardiovascular, vaccines, multiple sclerosis, hemophilia, immunology, rare disease, HIV/AIDS, women's health), financial services and enterprise data, and consumer technology, with deep specialization in AI integration for regulated environments. The throughline is high-stakes, compliance-bound work where bad UX has real legal, clinical, or financial consequences.",
    ],
  },
  {
    q: "What kind of outcomes have your clients seen?",
    a: [
      "$270M+ in tracked revenue impact across pharma, fintech, and enterprise engagements. Specific wins include a D&AD Pencil-recognized equity-focused cancer care platform, multi-brand digital transformation across 70+ therapeutic brands ($3.5M+ documented investment), and $1.5M+ in annual ROI from an enterprise financial services CRM transformation. Outcomes vary by engagement scope. The case studies on this site walk through specifics.",
    ],
  },
  {
    q: "How do engagements typically start?",
    a: [
      "Every engagement starts with a free 30-minute Strategy Call. Virtual. We talk through what's stuck and what success looks like. No pitch. If there's not a fit, I'll tell you and try to point you to possible solutions or partners. If the strategy call goes well, we move into a longer scoping conversation with the relevant stakeholders to map scope, timing, and constraints. Then I write the ",
      { text: "Statement of Work", href: "/engagements#process" },
      ". Most engagements move from first call to signed SOW in 2–3 weeks.",
    ],
  },
  {
    q: "Do you work with agency partners or only direct clients?",
    a: [
      "Both. I work directly with brands and embed as senior experience leadership inside agency engagements when the client is regulated, enterprise, or AI-heavy and the agency team needs a senior voice in the room. The structure depends on the work. What matters is the right level of accountability for the outcome.",
    ],
  },
  {
    q: "Is this an ongoing engagement, or just one-off projects?",
    a: [
      "Either, and it's built to flex. Most engagements start with a single defined piece of work and grow into an ongoing relationship as needs change. You can move between ",
      { text: "embedded leadership", href: "/engagements#leadership" },
      ", ",
      { text: "advisory", href: "/engagements#advisory" },
      ", and ",
      { text: "on-call support", href: "/engagements#oncall" },
      " without renegotiating from scratch. The intensity flexes with what you need; the partnership stays in place. The 30-minute Strategy Call is the right starting point if you're trying to figure out which structure makes sense for your team.",
    ],
  },
  {
    q: "Do you travel for workshops or onsite work?",
    a: [
      "Most work is remote, and virtual delivery is included in every engagement. I travel for onsite work when being in the room is the right call. Workshops, executive presentations, and stakeholder alignment sessions are often better in person, and I bill travel at cost.",
    ],
  },
];

/** The answer as plain text, for structured data. */
export const faqText = (item: FaqItem) =>
  item.a.map((seg) => (typeof seg === "string" ? seg : seg.text)).join("");
