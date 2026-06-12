// Destination: app/privacy/page.tsx
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy",
  description: "How shawncapizzi.com handles your information.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <section className="pt-32 md:pt-40 lg:pt-48 pb-24">
      <div className="max-w-content mx-auto px-6 md:px-8 lg:px-12">
        <div className="max-w-3xl">
          <p className="eyebrow mb-4">Privacy</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-tight">
            Privacy policy
          </h1>
          <p className="mt-6 font-mono text-xs tracking-widest uppercase text-text-tertiary">
            Last updated: June 12, 2026
          </p>

          <p className="mt-10 text-lg md:text-xl text-text-secondary leading-relaxed">
            Most of my work is done under NDA. The same discipline applies
            here. Information shared through this site is handled with the
            same care as client information.
          </p>

          <div className="mt-12">
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
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
                <strong className="text-text-primary">Newsletter (Kit):</strong>{" "}
                email only. One-click unsubscribe in every send.
              </li>
              <li>
                <strong className="text-text-primary">Analytics:</strong>{" "}
                Google Analytics 4 with IP anonymization. Only active
                after you accept the cookie banner.
              </li>
            </ul>
            <p className="mt-6 text-lg md:text-xl text-text-secondary leading-relaxed">
              I do not sell, trade, or share contact data for marketing.
            </p>
          </div>

          <div className="mt-12">
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
              Services used
            </h2>
            <p className="mt-6 text-lg md:text-xl text-text-secondary leading-relaxed">
              Vercel (hosting), Cal.com (scheduling), Kit (newsletter),
              Google Analytics 4 (analytics), Cookiebot (consent banner).
              Each only sees the data needed to do its job.
            </p>
          </div>

          <div className="mt-12">
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
              Cookies
            </h2>
            <p className="mt-6 text-lg md:text-xl text-text-secondary leading-relaxed">
              Necessary cookies keep the site working. Analytics cookies
              activate only after you accept the banner. Change your
              consent anytime via the fingerprint icon in the bottom-left
              corner.
            </p>
          </div>

          <div className="mt-12">
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
              Your rights
            </h2>
            <p className="mt-6 text-lg md:text-xl text-text-secondary leading-relaxed">
              Email me to see, correct, or delete any information I have
              about you. Honored within 30 days. CCPA and GDPR rights apply.
            </p>
          </div>

          <div className="mt-12 pt-8 border-t border-border-subtle">
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
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
