// Destination: components/CookieBanner.tsx
import Script from "next/script";

/**
 * CookieBanner
 *
 * Loads the Cookiebot CMP (Consent Management Platform). This is the first
 * script that loads on the page — Cookiebot's auto-blocking mode intercepts
 * other tracking scripts (GA4, Cal.com, LinkedIn pixel, etc.) until the
 * user grants consent via the banner.
 *
 * Auto-blocking means we do NOT need to add `data-cookieconsent` attributes
 * to tracking scripts elsewhere — Cookiebot detects and gates them
 * automatically via MutationObserver.
 *
 * The CBID (Cookiebot Domain Group ID) lives in NEXT_PUBLIC_COOKIEBOT_CBID.
 * Set it in `.env.local` for dev and in Vercel project settings → Environment
 * Variables for production. If the env var is missing, this component renders
 * nothing (safe fallback during initial setup or in preview environments).
 *
 * Consent Mode v2 integration is enabled in the Cookiebot dashboard:
 *   Cookiebot → Consent tab → "Google Consent Mode v2" toggle ON
 *
 * Banner styling (position, colors) is configured in Cookiebot's dashboard
 * rather than in code — keeps the consent UX separate from app deploys.
 */
export function CookieBanner() {
  const cbid = process.env.NEXT_PUBLIC_COOKIEBOT_CBID;
  if (!cbid) return null;

  return (
    <Script
      id="Cookiebot"
      src="https://consent.cookiebot.com/uc.js"
      data-cbid={cbid}
      data-blockingmode="auto"
      strategy="beforeInteractive"
      type="text/javascript"
    />
  );
}
