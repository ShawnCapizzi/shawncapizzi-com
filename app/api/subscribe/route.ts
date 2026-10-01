import { NextResponse } from "next/server";

/**
 * POST /api/subscribe
 * Adds an email to Shawn's sign-up list.
 *
 * Primary (October 2026): a Google Sheet, through an Apps Script web app
 * that adds the row, emails Shawn a notice, and sends the subscriber a
 * short "You're on the list" note. The script lives in the Sheet
 * (Extensions > Apps Script); a copy is kept in docs/google-signup/Code.gs.
 *
 *   SIGNUP_WEBHOOK_URL = the Apps Script "Web app" URL (ends in /exec)
 *   SIGNUP_SECRET      = a long random string, the same value as SECRET in the script
 *
 * Fallback: Kit (ConvertKit) V3, used only when the two Google values are
 * not set. KIT_API_KEY and KIT_FORM_ID (9488992, "Book: Chapter 1").
 *
 * Set these in Vercel project settings, never in the repo.
 *
 * Body: { email, source } where source is "manual" (the field manual card
 * on /thinking) or "book" (the chapter-1 reader). Anything else becomes "book".
 */

const EMAIL_RE = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
const SOURCES = new Set(["manual", "book"]);

export async function POST(req: Request) {
  let body: { email?: unknown; source?: unknown };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const email = typeof body.email === "string" ? body.email.trim() : "";
  if (!EMAIL_RE.test(email)) {
    return NextResponse.json({ error: "Please enter a valid email." }, { status: 400 });
  }
  const source = typeof body.source === "string" && SOURCES.has(body.source) ? body.source : "book";
  const page = req.headers.get("referer") ?? "";

  const hookUrl = process.env.SIGNUP_WEBHOOK_URL;
  const secret = process.env.SIGNUP_SECRET;

  if (hookUrl && secret) {
    try {
      // Apps Script answers a POST with a redirect to the result; fetch follows it.
      const res = await fetch(hookUrl, {
        method: "POST",
        headers: { "Content-Type": "text/plain;charset=utf-8" },
        body: JSON.stringify({ secret, email, source, page }),
        redirect: "follow",
      });
      const data = (await res.json().catch(() => null)) as { ok?: boolean; error?: string } | null;
      if (!res.ok || !data?.ok) {
        console.error("Sheet sign-up failed:", res.status, data?.error ?? "no JSON response");
        return NextResponse.json({ error: "Subscription failed. Please try again." }, { status: 502 });
      }
      return NextResponse.json({ success: true });
    } catch (err) {
      console.error("Sheet sign-up error:", err);
      return NextResponse.json({ error: "Something went wrong." }, { status: 500 });
    }
  }

  const apiKey = process.env.KIT_API_KEY;
  const formId = process.env.KIT_FORM_ID;

  if (!apiKey || !formId) {
    console.error("Sign-up not configured: set SIGNUP_WEBHOOK_URL and SIGNUP_SECRET (or KIT_API_KEY and KIT_FORM_ID)");
    return NextResponse.json({ error: "Subscriptions are temporarily unavailable." }, { status: 500 });
  }

  try {
    const res = await fetch(`https://api.convertkit.com/v3/forms/${formId}/subscribe`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ api_key: apiKey, email }),
    });

    if (!res.ok) {
      console.error("Kit subscribe failed:", res.status, await res.text());
      return NextResponse.json({ error: "Subscription failed. Please try again." }, { status: 502 });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Kit subscribe error:", err);
    return NextResponse.json({ error: "Something went wrong." }, { status: 500 });
  }
}
