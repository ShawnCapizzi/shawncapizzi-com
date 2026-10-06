// Destination: components/Analytics.tsx
import Script from "next/script";

/**
 * Analytics
 *
 * Google Analytics 4, loaded on every page with no consent banner
 * (Cookiebot removed October 2026). A browser sending Global Privacy
 * Control is left alone: the inline setup script sets ga-disable for it
 * before gtag loads. Consent Mode stays in place with analytics granted
 * and every advertising category denied, so GA4 never stores advertising
 * identifiers. IP anonymization is the GA4 default.
 *
 * The measurement ID lives in NEXT_PUBLIC_GA_MEASUREMENT_ID. If missing,
 * this component renders nothing (safe in dev and preview environments).
 */
export function Analytics() {
  const gaId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
  if (!gaId) return null;

  return (
    <>
      <Script id="gtag-setup" strategy="beforeInteractive">
        {`
          (function () {
            var off = navigator.globalPrivacyControl === true;
            window['ga-disable-${gaId}'] = off;
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            window.gtag = gtag;
            gtag('consent', 'default', {
              'ad_personalization': 'denied',
              'ad_storage': 'denied',
              'ad_user_data': 'denied',
              'analytics_storage': off ? 'denied' : 'granted',
              'functionality_storage': 'granted',
              'personalization_storage': 'denied',
              'security_storage': 'granted'
            });
            gtag('set', 'ads_data_redaction', true);
          })();
        `}
      </Script>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`} strategy="afterInteractive" />
      <Script id="gtag-init" strategy="afterInteractive">
        {`
          gtag('js', new Date());
          gtag('config', '${gaId}', { page_path: window.location.pathname });
        `}
      </Script>
    </>
  );
}
