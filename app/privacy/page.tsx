// Destination: app/privacy/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import { CookieDeclaration } from "@/components/CookieDeclaration";

export const metadata: Metadata = {
  title: "Privacy",
  description:
    "How I handle the small amount of personal information collected through shawncapizzi.com. Plain language, no surprises.",
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

          <p className="mt-10 text-lg md:text-xl text-text-secondary leading-relaxed">
            I run shawncapizzi.com as the public site for my independent
            consulting practice. This page describes what information I
            collect when you visit or contact me, how I use it, and how to
            ask me to remove it. The site collects very little data, and I
            do not sell or trade any of it.
          </p>

          {/* WHAT I COLLECT */}
          <div className="mt-16 md:mt-20">
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
              What I collect
            </h2>
            <p className="mt-6 text-lg md:text-xl text-text-secondary leading-relaxed">
              There are three places where you might intentionally share
              information with me through this site:
            </p>
            <ul className="mt-6 space-y-3 text-lg md:text-xl text-text-secondary leading-relaxed list-disc pl-6">
              <li>
                <strong className="text-text-primary">Contact form.</strong>{" "}
                Your name, email address, and the message you send. Used to
                reply to you about your inquiry.
              </li>
              <li>
                <strong className="text-text-primary">
                  Strategy call bookings.
                </strong>{" "}
                When you book through Cal.com, you provide your name,
                email, and the meeting time. Cal.com manages this data on
                my behalf as a third-party scheduling tool.
              </li>
              <li>
                <strong className="text-text-primary">
                  Newsletter signups.
                </strong>{" "}
                If you subscribe to my newsletter, your email address is
                stored with Kit (formerly ConvertKit), the platform that
                sends my newsletter. You can unsubscribe with one click
                from any email I send.
              </li>
            </ul>

            <p className="mt-8 text-lg md:text-xl text-text-secondary leading-relaxed">
              I also use Google Analytics 4 to understand which pages are
              visited and roughly where visitors come from. This data is
              anonymized and aggregated. Analytics only run after you
              accept the cookie banner. If you decline, Google Analytics
              still receives a small number of cookieless signals
              (essentially: a page was viewed) under Google&apos;s Consent
              Mode v2, but nothing identifiable to you.
            </p>
          </div>

          {/* HOW I USE IT */}
          <div className="mt-16 md:mt-20">
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
              How I use it
            </h2>
            <ul className="mt-6 space-y-3 text-lg md:text-xl text-text-secondary leading-relaxed list-disc pl-6">
              <li>
                To reply to your contact-form message or confirm your
                strategy call.
              </li>
              <li>
                To send you the newsletter you signed up for, until you
                unsubscribe.
              </li>
              <li>
                To understand which case studies and pages are useful, so
                I can write more of what works.
              </li>
            </ul>
            <p className="mt-8 text-lg md:text-xl text-text-secondary leading-relaxed">
              I do not sell your information. I do not use it for
              targeted advertising. I do not share it with third parties
              for marketing purposes.
            </p>
          </div>

          {/* WHO I SHARE IT WITH */}
          <div className="mt-16 md:mt-20">
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
              Who I share it with
            </h2>
            <p className="mt-6 text-lg md:text-xl text-text-secondary leading-relaxed">
              The site uses a small number of third-party services to
              function. Each one only sees the specific data it needs for
              its job:
            </p>
            <ul className="mt-6 space-y-3 text-lg md:text-xl text-text-secondary leading-relaxed list-disc pl-6">
              <li>
                <strong className="text-text-primary">Vercel</strong> hosts
                the site itself. Standard server logs (IP address, page
                requested) are retained briefly for security and
                performance.
              </li>
              <li>
                <strong className="text-text-primary">Cal.com</strong>{" "}
                handles strategy call scheduling. Their privacy policy
                lives at{" "}
                <a
                  href="https://cal.com/privacy"
                  className="text-link hover:text-link-hover transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  cal.com/privacy
                </a>
                .
              </li>
              <li>
                <strong className="text-text-primary">Kit (ConvertKit)</strong>{" "}
                manages newsletter subscriptions. Their privacy policy
                lives at{" "}
                <a
                  href="https://kit.com/privacy"
                  className="text-link hover:text-link-hover transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  kit.com/privacy
                </a>
                .
              </li>
              <li>
                <strong className="text-text-primary">Google Analytics 4</strong>{" "}
                provides traffic analytics. Configured with IP anonymization
                and consent-mode defaults set to denied until you accept.
              </li>
              <li>
                <strong className="text-text-primary">Cookiebot</strong>{" "}
                manages the cookie consent banner you saw when you arrived.
              </li>
            </ul>
          </div>

          {/* COOKIES AND TRACKING */}
          <div className="mt-16 md:mt-20">
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
              Cookies and tracking
            </h2>
            <p className="mt-6 text-lg md:text-xl text-text-secondary leading-relaxed">
              Cookies are small files stored by your browser. This site
              uses them for two things: keeping the site working (necessary
              cookies, which cannot be turned off) and understanding
              traffic (analytics cookies, which only activate after you
              click Accept on the banner).
            </p>
            <p className="mt-6 text-lg md:text-xl text-text-secondary leading-relaxed">
              You can change your consent choice anytime by clicking the
              small fingerprint icon in the bottom-left corner of any page,
              or by clearing your browser cookies for this site.
            </p>
            <p className="mt-6 text-lg md:text-xl text-text-secondary leading-relaxed">
              The full, current list of cookies in use is auto-generated
              and updated by Cookiebot each month:
            </p>

            <div className="mt-8">
              <CookieDeclaration />
            </div>
          </div>

          {/* YOUR RIGHTS */}
          <div className="mt-16 md:mt-20">
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
              Your rights
            </h2>
            <p className="mt-6 text-lg md:text-xl text-text-secondary leading-relaxed">
              I am based in the United States and most of my clients are
              also US-based. The practical rights below apply to everyone
              who contacts me through this site, regardless of where you
              live.
            </p>
            <p className="mt-6 text-lg md:text-xl text-text-secondary leading-relaxed">
              You can ask me to:
            </p>
            <ul className="mt-6 space-y-3 text-lg md:text-xl text-text-secondary leading-relaxed list-disc pl-6">
              <li>Tell you what information I have about you, if any.</li>
              <li>Correct any information that is wrong.</li>
              <li>
                Delete your information from my email, Cal.com, and Kit.
              </li>
              <li>
                Unsubscribe from the newsletter (also possible via the
                unsubscribe link in any email).
              </li>
              <li>Receive a copy of any information I have about you.</li>
            </ul>
            <p className="mt-8 text-lg md:text-xl text-text-secondary leading-relaxed">
              For California residents, these rights are formalized under
              the California Consumer Privacy Act (CCPA) and the California
              Privacy Rights Act (CPRA). I do not sell or share personal
              information as those terms are defined under California law.
            </p>
            <p className="mt-6 text-lg md:text-xl text-text-secondary leading-relaxed">
              For visitors from the EU, UK, or other GDPR jurisdictions, I
              process personal data on the legal basis of legitimate
              interest (responding to your inquiry) or consent (newsletter
              signup, analytics). You have the right to withdraw consent
              and request data portability at any time.
            </p>
          </div>

          {/* DATA RETENTION */}
          <div className="mt-16 md:mt-20">
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
              How long I keep your information
            </h2>
            <p className="mt-6 text-lg md:text-xl text-text-secondary leading-relaxed">
              I keep contact-form messages and call notes for as long as
              there is an active conversation or working relationship, then
              archive them in case you reach out again later. If you ask me
              to delete your information, I will do so within 30 days.
            </p>
            <p className="mt-6 text-lg md:text-xl text-text-secondary leading-relaxed">
              Newsletter subscribers stay on the list until they
              unsubscribe.
            </p>
            <p className="mt-6 text-lg md:text-xl text-text-secondary leading-relaxed">
              Analytics data is retained by Google for 14 months at the
              event level, then aggregated indefinitely. I have no access
              to individual visitor records, only aggregated reports.
            </p>
          </div>

          {/* CHANGES */}
          <div className="mt-16 md:mt-20">
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
              Changes to this policy
            </h2>
            <p className="mt-6 text-lg md:text-xl text-text-secondary leading-relaxed">
              If I add a new tool that handles personal data, or change how
              existing data is used, I will update this page and the
              last-updated date at the top. For material changes that
              affect existing subscribers, I will also notify the
              newsletter list.
            </p>
          </div>

          {/* CONTACT */}
          <div className="mt-16 md:mt-20 pt-12 border-t border-border-subtle">
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
              Questions, requests, or concerns
            </h2>
            <p className="mt-6 text-lg md:text-xl text-text-secondary leading-relaxed">
              The best way to reach me for anything related to your data is
              email. I read everything personally and reply within a few
              business days.
            </p>
            <p className="mt-8 text-lg md:text-xl text-text-secondary leading-relaxed">
              <strong className="text-text-primary">Email:</strong>{" "}
              <a
                href="mailto:capizzi@shawncapizzi.com"
                className="text-link hover:text-link-hover transition-colors"
              >
                capizzi@shawncapizzi.com
              </a>
              <br />
              <strong className="text-text-primary">Phone:</strong>{" "}
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
              </Link>{" "}
              and mention privacy in your message.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
