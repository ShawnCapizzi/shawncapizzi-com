import { CTACards } from "@/components/CTACards";
import { FaqAccordion } from "@/components/FaqAccordion";
import { JsonLd } from "@/components/JsonLd";
import { FAQS, faqText } from "@/lib/faq";
import { faqPage, pageMetadata } from "@/lib/seo";

/**
 * /faq is a server page so it can export its own metadata (it used to be a
 * client component, which cannot, so it showed the homepage title and
 * description in search). The expand-all behavior lives in FaqAccordion;
 * the questions and answers live in lib/faq.ts.
 */

export const metadata = pageMetadata({
  path: "/faq",
  title: "FAQ: AI UX, Regulated Design, and Engagements",
  description:
    "Plain answers to the questions that come up most often about AI UX, regulated design, and how strategic experience design partners differ from agencies.",
});

export default function Page() {
  return (
    <article>
      <JsonLd data={faqPage(FAQS.map((item) => ({ q: item.q, a: faqText(item) })))} />
      {/* HERO */}
      <section className="relative pt-32 md:pt-40 pb-12 md:pb-16">
        <div className="max-w-content mx-auto px-6 md:px-8 lg:px-12">
          <p className="eyebrow mb-3">FAQ</p>
          <h1 className="headline-static hero-title max-w-4xl">
            Frequently asked.
          </h1>
          <p className="hero-lead max-w-3xl">
            Plain answers to the questions that come up most often about AI UX,
            regulated design, and how strategic experience design partners
            differ from agencies.
          </p>
        </div>
      </section>

      <FaqAccordion items={FAQS} />

      {/* CTA CARDS: work (proof) + contact (path forward) */}
      <section className="py-16 md:py-24 mt-12 md:mt-16 border-t border-border-subtle">
        <div className="max-w-content mx-auto px-6 md:px-8 lg:px-12">
          <CTACards cards={["work", "contact"]} />
        </div>
      </section>
    </article>
  );
}
