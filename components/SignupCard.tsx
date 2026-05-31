"use client";

/**
 * SignupCard — newsletter / "send me the book" capture.
 *
 * Single source of truth for the CRM signup flow. Wired to
 * /api/subscribe → Kit form 9488992 (same endpoint everywhere).
 *
 * Used in two places:
 *   - components/Reader.tsx (the final slide of the chapter-1 reader,
 *     and the "Get on the list" toolbar button which jumps to that slide).
 *   - app/clarity-advantage/page.tsx (the Newsletter card on the Clarity
 *     Advantage landing page).
 *
 * Visual model:
 *   - When rendered inside .sc-reader, this component inherits the
 *     reader's CSS variables (--sc-ink, --sc-ink-soft, --sc-accent,
 *     --sc-line, --sc-serif) and follows the reader's light/dark
 *     paper aesthetic.
 *   - When rendered standalone (e.g. inside the Clarity Advantage card),
 *     it uses var(--token, fallback) fallbacks set to the dark-mode
 *     values, since the rest of the site is dark-mode-only.
 *
 * Props:
 *   - heading, subcopy: optional. When omitted, no heading/subcopy is
 *     rendered — useful when the parent card already provides marketing
 *     copy and only wants the form below it.
 *   - buttonLabel: optional CTA text. Defaults to "Send me the book".
 *     Pass a context-appropriate label per placement (e.g. "Join the list").
 *   - successText: optional confirmation body shown in the done state.
 *     Defaults to the book-send confirmation. Override to match the CTA.
 */

import { useState } from "react";

const DEFAULT_SUCCESS_TEXT =
  "Confirm your email and you're on the list. I'll send you the finished book when it's ready, plus the occasional note from the work.";

export function SignupCard({
  heading,
  subcopy,
  buttonLabel = "Send me the book",
  successText = DEFAULT_SUCCESS_TEXT,
}: {
  heading?: string;
  subcopy?: string;
  buttonLabel?: string;
  successText?: string;
}) {
  const [email, setEmail] = useState("");
  const [state, setState] = useState<"idle" | "loading" | "done" | "error">("idle");
  const [message, setMessage] = useState("");

  const submit = async () => {
    if (state === "loading") return;
    const trimmed = email.trim();
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(trimmed)) {
      setState("error");
      setMessage("Please enter a valid email.");
      return;
    }
    setState("loading");
    setMessage("");
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: trimmed }),
      });
      if (!res.ok) throw new Error();
      setState("done");
    } catch {
      setState("error");
      setMessage("Something went wrong. Try again in a moment.");
    }
  };

  if (state === "done") {
    return (
      <>
        <style>{signupStyles}</style>
        <div className="sc-signup">
          <div className="sc-signup__check"><Check /></div>
          <h2 className="sc-signup__heading">Check your inbox.</h2>
          <p className="sc-signup__sub">{successText}</p>
        </div>
      </>
    );
  }

  return (
    <>
      <style>{signupStyles}</style>
      <div className="sc-signup">
        {heading ? <h2 className="sc-signup__heading">{heading}</h2> : null}
        {subcopy ? <p className="sc-signup__sub">{subcopy}</p> : null}

        <div className="sc-signup__form">
          <input
            type="email"
            inputMode="email"
            autoComplete="email"
            placeholder="you@company.com"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              if (state === "error") setState("idle");
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter") submit();
            }}
            className="sc-signup__input"
            aria-label="Email address"
          />
          <button
            type="button"
            className="sc-signup__btn"
            onClick={submit}
            disabled={state === "loading"}
          >
            {state === "loading" ? "Sending…" : buttonLabel}
          </button>
        </div>

        {state === "error" && <p className="sc-signup__err">{message}</p>}
        <p className="sc-signup__fine">No spam. Unsubscribe anytime.</p>
      </div>
    </>
  );
}

function Check() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/* ---------------- Styles (scoped, self-contained) ----------------
   Uses var(--token, fallback). When SignupCard is rendered inside
   .sc-reader, the reader's --sc-* vars are inherited (light by
   default, dark via prefers-color-scheme). When rendered standalone,
   the fallbacks kick in — set to the dark-mode values since the
   rest of the site is dark-mode-only.
   ---------------------------------------------------------------- */

const signupStyles = `
.sc-signup {
  max-width: 440px;
  margin: 0 auto;
  text-align: center;
  font-family: ui-sans-serif, system-ui, sans-serif;
}
.sc-signup__heading {
  font-family: var(--sc-serif, "Iowan Old Style", "Palatino Linotype", Palatino, Charter, Georgia, "Times New Roman", serif);
  font-size: clamp(24px, 5vw, 32px);
  font-weight: 700;
  margin: 0 0 12px;
  color: var(--sc-ink, #ECEAE3);
  letter-spacing: -0.01em;
}
.sc-signup__sub {
  font-size: 15px;
  line-height: 1.6;
  color: var(--sc-ink-soft, #9A9AA4);
  margin: 0 0 24px;
}
.sc-signup__form { display: flex; flex-direction: column; gap: 10px; }
@media (min-width: 480px) { .sc-signup__form { flex-direction: row; } }
.sc-signup__input {
  flex: 1;
  padding: 13px 16px;
  border-radius: 12px;
  border: 1px solid var(--sc-line, rgba(255,255,255,0.12));
  font-size: 15px;
  color: var(--sc-ink, #ECEAE3);
  background: #1E1E25;
  outline: none;
  transition: border-color .2s, box-shadow .2s;
}
.sc-signup__input::placeholder { color: var(--sc-ink-soft, #9A9AA4); opacity: 0.8; }
.sc-signup__input:focus {
  border-color: var(--sc-accent, #6B5CFF);
  box-shadow: 0 0 0 3px rgba(107,92,255,0.15);
}
.sc-signup__btn {
  padding: 13px 20px;
  border-radius: 12px;
  border: none;
  cursor: pointer;
  background: var(--sc-accent, #6B5CFF);
  color: #fff;
  font-size: 15px;
  font-weight: 600;
  white-space: nowrap;
  transition: filter .2s;
}
.sc-signup__btn:hover:not(:disabled) { filter: brightness(1.08); }
.sc-signup__btn:disabled { opacity: 0.7; cursor: default; }
.sc-signup__err { color: #C0392B; font-size: 13px; margin: 12px 0 0; }
.sc-signup__fine { color: var(--sc-ink-soft, #9A9AA4); font-size: 12px; margin: 16px 0 0; opacity: 0.8; }
.sc-signup__check {
  width: 56px;
  height: 56px;
  border-radius: 999px;
  background: rgba(107,92,255,0.12);
  color: var(--sc-accent, #6B5CFF);
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 18px;
}

/* Inside .sc-reader (the book reader), input background follows
   light/dark paper aesthetic instead of always-dark. */
.sc-reader .sc-signup__input { background: #fff; }
@media (prefers-color-scheme: dark) {
  .sc-reader .sc-signup__input { background: #1E1E25; }
}
`;
