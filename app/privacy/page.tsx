// Destination: app/privacy/page.tsx
import { pageMetadata } from "@/lib/seo";
import Link from "next/link";

export const metadata = pageMetadata({
  path: "/privacy",
  title: "Privacy",
  description: "How shawncapizzi.com handles your information.",
});

export default function PrivacyPage() {
  return (
    <section className="pt-32 md:pt-40 pb-24">
      <div className="max-w-content mx-auto px-6 md:px-8 lg:px-12">
        <div className="max-w-3xl">
          <p className="eyebrow mb-3">Privacy</p>
          <h1 className="headline-static hero-title">
            Privacy policy
          </h1>
          <p className="mt-6 font-mono text-xs tracking-widest uppercase text-text-tertiary">
            Last updated: October 6, 2026
          </p>

          <p className="hero-lead mt-8 md:mt-10">
            Most of my work is done under NDA. The same discipline applies
            here. Information shared through this site is handled with the
            same care as client information.
          </p>

          <div className="mt-12">
            <h2 className="section-title">
              What the site collects
            </h2>
            <ul className="mt-6 space-y-3 text-lg md:text-xl text-text-secondary leading-relaxed list-disc pl-6">
              <li>
                <strong className="text-text-primary">Contact form:</strong>{" "}
                name, email, message.
              </li>
              <li>
                <strong className="text-text-primary">Cal.com bookings:</strong>{" "}
                name, email, meeting time.
              </li>
              <li>
                <strong className="text-text-primary">Mailing list:</strong>{" "}
                email only, kept in a private Google Sheet. Reply
                &ldquo;remove&rdquo; to any email and you&apos;re off the list.
              </li>
              <li>
                <strong className="text-text-primary">Analytics:</strong>{" "}
                which pages are viewed, for how long, and in what order,
                through Google Analytics 4. No advertising identifiers.
              </li>
            </ul>
            <p className="mt-6 text-lg md:text-xl text-text-secondary leading-relaxed">
              I do not sell, trade, or share contact data for marketing.
            </p>
          </div>

          <div className="mt-12">
            <h2 className="section-title">
              Services used
            </h2>
            <p className="mt-6 text-lg md:text-xl text-text-secondary leading-relaxed">
              Vercel (hosting), Cal.com (scheduling), Google Sheets and Gmail (mailing list),
              Google Analytics 4 (analytics).
              Each only sees the data needed to do its job.
            </p>
          </div>

          <div className="mt-12">
            <h2 className="section-title">
              Cookies
            </h2>
            <p className="mt-6 text-lg md:text-xl text-text-secondary leading-relaxed">
              There is no cookie banner. Necessary cookies keep the site
              working, and analytics cookies run unless your browser sends
              the Global Privacy Control signal, which is honored
              automatically. Email me to have your data removed.
            </p>
          </div>

          <div className="mt-12">
            <h2 className="section-title">
              Your rights
            </h2>
            <p className="mt-6 text-lg md:text-xl text-text-secondary leading-relaxed">
              Email me to see, correct, or delete any information I have
              about you. Honored within 30 days. CCPA and GDPR rights apply.
            </p>
          </div>

          <div className="mt-12 pt-8 border-t border-border-subtle">
            <h2 className="section-title">
              Contact
            </h2>
            <p className="mt-6 text-lg md:text-xl text-text-secondary leading-relaxed">
              <a
                href="mailto:capizzi@shawncapizzi.com"
                className="text-link hover:text-link-hover transition-colors"
              >
                capizzi@shawncapizzi.com
              </a>
              <br />
              <a
                href="tel:+12123803900"
                className="text-link hover:text-link-hover transition-colors"
              >
                212-380-3900
              </a>
            </p>
            <p className="mt-6 text-lg md:text-xl text-text-secondary leading-relaxed">
              Or the{" "}
              <Link
                href="/contact"
                className="text-link hover:text-link-hover transition-colors"
              >
                contact form
              </Link>
              .
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
