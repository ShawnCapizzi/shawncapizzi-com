// Destination: components/Analytics.tsx
import Script from "next/script";

/**
 * Analytics
 *
 * Google Analytics 4 wired with Consent Mode v2.
 *
 * How this works:
 * 1. Before any tracking loads, we set `gtag('consent', 'default', {...})`
 *    with everything denied that touches user privacy. This is a
 *    defense-in-depth measure — if Cookiebot is blocked by an ad blocker,
 *    GA4 still respects the denied default and collects no PII.
 *
 * 2. The gtag.js library loads with `afterInteractive`. Cookiebot's
 *    auto-blocking intercepts this and pauses it until the user grants
 *    consent via the banner.
 *
 * 3. When consent IS granted, Cookiebot calls `gtag('consent', 'update', ...)`
 *    to flip categories to "granted". GA4 then begins normal tracking.
 *
 * 4. When consent is DENIED, GA4 still sends some cookieless aggregated
 *    pings under Consent Mode v2 — so you get baseline visibility (page
 *    counts, conversions modeled by Google) even from users who decline.
 *
 * The measurement ID lives in NEXT_PUBLIC_GA_MEASUREMENT_ID. If missing,
 * this component renders nothing (safe in dev or preview environments).
 */
export function Analytics() {
  const gaId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
  if (!gaId) return null;

  return (
    <>
      {/* 1. Set consent defaults to DENIED before any tracking loads.
            This matches Cookiebot's recommended Consent Mode v2 snippet exactly.
            Runs with beforeInteractive so it precedes Cookiebot's update calls. */}
      <Script id="gtag-consent-default" strategy="beforeInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('consent', 'default', {
            'ad_personalization': 'denied',
            'ad_storage': 'denied',
            'ad_user_data': 'denied',
            'analytics_storage': 'denied',
            'functionality_storage': 'denied',
            'personalization_storage': 'denied',
            'security_storage': 'granted',
            'wait_for_update': 500
          });
          gtag('set', 'ads_data_redaction', true);
          gtag('set', 'url_passthrough', false);
        `}
      </Script>

      {/* 2. GA4 library. Cookiebot auto-blocking gates this until consent. */}
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
        strategy="afterInteractive"
      />

      {/* 3. GA4 init + config. Page path tracked manually on first load;
            client-side route changes are picked up by Enhanced Measurement. */}
      <Script id="gtag-init" strategy="afterInteractive">
        {`
          gtag('js', new Date());
          gtag('config', '${gaId}', {
            page_path: window.location.pathname,
          });
        `}
      </Script>
    </>
  );
}
