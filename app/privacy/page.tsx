// Destination: app/privacy/page.tsx
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy",
  description:
    "How information shared through shawncapizzi.com is handled. Same discipline that applies to client work.",
  alternates: {
    canonical: "/privacy",
  },
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

          {/* ============================================================
              OPENING: establishes posture, not a data inventory
              ============================================================ */}
          <p className="mt-10 text-lg md:text-xl text-text-secondary leading-relaxed">
            Most of my work is done under NDA for pharma, biotech, fintech,
            and enterprise teams. The same discipline applies here. Anything
            shared through this site is treated the way I treat client
            information under engagement: confidentially, deliberately, and
            with as small a footprint as the work requires.
          </p>

          <p className="mt-6 text-lg md:text-xl text-text-secondary leading-relaxed">
            This page is the practical version of that posture. It covers
            what the site collects, what it does with that information, and
            how to ask me to remove it.
          </p>

          {/* ============================================================
              HOW THIS WORKS: replaces "what I collect" with posture-first
              ============================================================ */}
          <div className="mt-16 md:mt-20">
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
              How privacy actually works here
            </h2>
            <p className="mt-6 text-lg md:text-xl text-text-secondary leading-relaxed">
              The practice is independent, which means a few useful things
              for anyone who reaches out:
            </p>
            <ul className="mt-6 space-y-3 text-lg md:text-xl text-text-secondary leading-relaxed list-disc pl-6">
              <li>
                The person who reads your message is the same person who
                replies to it. No shared inbox, no routing, no junior
                handler.
              </li>
              <li>
                Contact information stays with me. There is no CRM passing
                leads to a sales team, because there is no sales team.
              </li>
              <li>
                I do not sell, trade, or share contact data with third
                parties for marketing. Ever.
              </li>
              <li>
                If your inquiry touches confidential material before
                signing an NDA, send a paragraph rather than a deck. We
                can paper the engagement before the detailed conversation.
              </li>
            </ul>
          </div>

          {/* ============================================================
              WHAT THE SITE COLLECTS
              ============================================================ */}
          <div className="mt-16 md:mt-20">
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
              What the site collects
            </h2>
            <p className="mt-6 text-lg md:text-xl text-text-secondary leading-relaxed">
              Three places where you might share information intentionally:
            </p>
            <ul className="mt-6 space-y-3 text-lg md:text-xl text-text-secondary leading-relaxed list-disc pl-6">
              <li>
                <strong className="text-text-primary">Contact form.</strong>{" "}
                Your name, email, and the message you send. Used to reply
                to your inquiry.
              </li>
              <li>
                <strong className="text-text-primary">
                  Strategy call bookings.
                </strong>{" "}
                Name, email, and meeting time, managed through Cal.com.
              </li>
              <li>
                <strong className="text-text-primary">Newsletter.</strong>{" "}
                If you subscribe, your email is stored with Kit (formerly
                ConvertKit). One-click unsubscribe in every email.
              </li>
            </ul>
            <p className="mt-8 text-lg md:text-xl text-text-secondary leading-relaxed">
              The site also uses Google Analytics 4 to understand which
              pages and case studies are useful. Analytics only activate
              after you accept the cookie banner. If you decline, GA4
              receives a small number of cookieless signals under
              Google&apos;s Consent Mode v2, none of which identify you.
            </p>
          </div>

          {/* ============================================================
              THE STACK: reframe third parties as deliberate choices
              ============================================================ */}
          <div className="mt-16 md:mt-20">
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
              The stack
            </h2>
            <p className="mt-6 text-lg md:text-xl text-text-secondary leading-relaxed">
              The site runs on a small, deliberate set of services. Each
              one sees only the data it needs to do its job, and each is
              chosen for its own compliance posture:
            </p>
            <ul className="mt-6 space-y-3 text-lg md:text-xl text-text-secondary leading-relaxed list-disc pl-6">
              <li>
                <strong className="text-text-primary">Vercel</strong>{" "}
                hosts the site. Standard server logs are retained briefly
                for security.
              </li>
              <li>
                <strong className="text-text-primary">Cal.com</strong>{" "}
                handles scheduling.{" "}
                <a
                  href="https://cal.com/privacy"
                  className="text-link hover:text-link-hover transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Their policy
                </a>
                .
              </li>
              <li>
                <strong className="text-text-primary">Kit</strong>{" "}
                handles newsletter subscriptions.{" "}
                <a
                  href="https://kit.com/privacy"
                  className="text-link hover:text-link-hover transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Their policy
                </a>
                .
              </li>
              <li>
                <strong className="text-text-primary">Google Analytics 4</strong>{" "}
                with IP anonymization and Consent Mode v2 defaults set to
                denied.
              </li>
              <li>
                <strong className="text-text-primary">Cookiebot</strong>{" "}
                runs the consent banner you saw when you arrived.
              </li>
            </ul>
          </div>

          {/* ============================================================
              COOKIES: short, no embedded table
              ============================================================ */}
          <div className="mt-16 md:mt-20">
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
              Cookies
            </h2>
            <p className="mt-6 text-lg md:text-xl text-text-secondary leading-relaxed">
              Two categories are in use: necessary cookies that keep the
              site working, and analytics cookies that only activate after
              you accept the banner. Change your consent anytime via the
              fingerprint icon in the bottom-left corner of any page.
            </p>
            <p className="mt-6 text-lg md:text-xl text-text-secondary leading-relaxed">
              The full technical list with expiry dates is maintained by
              Cookiebot at{" "}
              <a
                href={`https://consent.cookiebot.com/${process.env.NEXT_PUBLIC_COOKIEBOT_CBID}/cd.js`}
                className="text-link hover:text-link-hover transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                their hosted declaration page
              </a>
              .
            </p>
          </div>

          {/* ============================================================
              YOUR CONTROL
              ============================================================ */}
          <div className="mt-16 md:mt-20">
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
              Your control over your data
            </h2>
            <p className="mt-6 text-lg md:text-xl text-text-secondary leading-relaxed">
              At any point you can ask me to tell you what information I
              have about you, correct it, delete it, or send you a copy.
              Email is the fastest path. Requests are honored within 30
              days, usually faster.
            </p>
            <p className="mt-6 text-lg md:text-xl text-text-secondary leading-relaxed">
              For California residents, these rights are formalized under
              the CCPA and CPRA. I do not sell or share personal information
              as defined under California law. For EU and UK visitors,
              processing relies on legitimate interest (replying to your
              inquiry) or explicit consent (newsletter, analytics), and you
              can withdraw consent at any time.
            </p>
          </div>

          {/* ============================================================
              RETENTION
              ============================================================ */}
          <div className="mt-16 md:mt-20">
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
              How long information is kept
            </h2>
            <p className="mt-6 text-lg md:text-xl text-text-secondary leading-relaxed">
              Contact-form messages and call notes are kept while a
              conversation or working relationship is active, then archived
              in case you reach out again. Deletion requests are honored
              within 30 days. Newsletter subscribers stay on the list until
              they unsubscribe. Analytics data is retained by Google for 14
              months at the event level, then aggregated indefinitely.
            </p>
          </div>

          {/* ============================================================
              CHANGES
              ============================================================ */}
          <div className="mt-16 md:mt-20">
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
              Changes
            </h2>
            <p className="mt-6 text-lg md:text-xl text-text-secondary leading-relaxed">
              If a new tool starts handling personal data, or existing
              handling changes meaningfully, this page and the
              last-updated date will reflect that. Material changes
              affecting newsletter subscribers also go out through the
              newsletter itself.
            </p>
          </div>

          {/* ============================================================
              CONTACT
              ============================================================ */}
          <div className="mt-16 md:mt-20 pt-12 border-t border-border-subtle">
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
              Questions
            </h2>
            <p className="mt-6 text-lg md:text-xl text-text-secondary leading-relaxed">
              For anything related to your data on this site, email is the
              cleanest path:
            </p>
            <p className="mt-8 text-lg md:text-xl text-text-secondary leading-relaxed">
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
            <p className="mt-8 text-lg md:text-xl text-text-secondary leading-relaxed">
              Or use the{" "}
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
