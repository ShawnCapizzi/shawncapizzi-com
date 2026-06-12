// Destination: components/CookieDeclaration.tsx
"use client";

import { useEffect, useRef } from "react";

/**
 * CookieDeclaration
 *
 * Embeds Cookiebot's auto-generated cookie declaration table. Cookiebot
 * scans your site monthly and updates the categorized cookie list at this
 * URL — so the table on your privacy page stays accurate as you add or
 * remove tracking scripts without code changes.
 *
 * Why a client component: Cookiebot's cd.js script writes DOM content
 * imperatively where it's placed in the page. Next.js server components
 * can't manage that pattern, so we inject the script tag into a target
 * div via useEffect after mount.
 *
 * The CBID is read from NEXT_PUBLIC_COOKIEBOT_CBID (same env var as the
 * banner). If unset, the component renders nothing — safe fallback in
 * development.
 */
export function CookieDeclaration() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const cbid = process.env.NEXT_PUBLIC_COOKIEBOT_CBID;

  useEffect(() => {
    if (!cbid || !containerRef.current) return;

    // Avoid double-injecting on React Strict Mode double-mounts in dev
    if (document.getElementById("CookieDeclaration")) return;

    const script = document.createElement("script");
    script.id = "CookieDeclaration";
    script.src = `https://consent.cookiebot.com/${cbid}/cd.js`;
    script.type = "text/javascript";
    script.async = true;
    containerRef.current.appendChild(script);

    return () => {
      // Clean up on unmount
      const existing = document.getElementById("CookieDeclaration");
      if (existing && existing.parentNode) {
        existing.parentNode.removeChild(existing);
      }
    };
  }, [cbid]);

  if (!cbid) return null;

  return (
    <div
      ref={containerRef}
      className="cookie-declaration-wrapper"
      aria-label="Cookies used on this site"
    />
  );
}
