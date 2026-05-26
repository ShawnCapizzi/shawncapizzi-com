import { NextResponse } from "next/server";

/**
 * POST /api/subscribe
 * Adds an email to a Kit (ConvertKit) form using the V3 (legacy) API.
 *
 * Required environment variables (set in .env.local and in your host's
 * environment settings — NEVER commit these):
 *   KIT_API_KEY   = your Kit V3 API Key (the "Your API Key" value, NOT the secret).
 *                   Regenerate it if it was ever exposed.
 *   KIT_FORM_ID   = 9488992   (your "Book — Chapter 1" form)
 *
 * Attach the `book-ch1-reader` tag to the form inside Kit so every signup is
 * tagged automatically — that's what lets you send "Chapter 2 is live" only to
 * chapter-1 readers and trigger your nurture automation.
 */

const EMAIL_RE = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;

export async function POST(req: Request) {
  let email: unknown;
  try {
    ({ email } = await req.json());
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  if (typeof email !== "string" || !EMAIL_RE.test(email.trim())) {
    return NextResponse.json({ error: "Please enter a valid email." }, { status: 400 });
  }

  const apiKey = process.env.KIT_API_KEY;
  const formId = process.env.KIT_FORM_ID;

  if (!apiKey || !formId) {
    // Misconfiguration — log server-side, don't leak details to the client.
    console.error("Kit env vars missing: KIT_API_KEY and/or KIT_FORM_ID");
    return NextResponse.json({ error: "Subscriptions are temporarily unavailable." }, { status: 500 });
  }

  try {
    const res = await fetch(`https://api.convertkit.com/v3/forms/${formId}/subscribe`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ api_key: apiKey, email: email.trim() }),
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
