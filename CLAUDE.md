# shawncapizzi.com

Personal brand site for Shawn Capizzi — Director of UX, AI experience architect, 
and author of "Design Principles for the Modern Era."

The thesis: **AI adoption is not a technology problem. It is an experience 
architecture problem.** Every page, every word, every visual decision reinforces this.

## Architecture

Eight-page site. Three conversion paths in priority order:

- **Path A** — Direct booking: Home → Engagements → Book a Strategy Call
- **Path B** — Content-led: Home → Case Study → Book a Strategy Call  
- **Path C** — Lead capture: Home → Clarity Advantage → Email → Drip → Booking

Full site map and per-page specs in `docs/ia-framework-v1-1.md`.

## Design system

All visual decisions follow `docs/design-system.md`. This is non-negotiable.

- Do not introduce new color tokens, type scale, spacing values, or components 
  without referencing this file
- Tokens are defined in `app/globals.css` using Tailwind v4's `@theme` block — 
  edit there, not in `tailwind.config.js` (which doesn't exist in v4)
- Anti-patterns are listed in section 8 of the design system — read them before 
  introducing any new pattern

## Content

- Page copy lives in `docs/manuscript-v2-2.md` — use these exact words, do not 
  paraphrase or invent voice
- Voice principles in design system §1: senior, direct, editorial, restrained
- Anti-voice list is enforced: no "we", no "crafted/elevated/journey", no 
  motivational copy, no SaaS marketing tone

## Stack

- Next.js 16 (App Router) with Turbopack
- TypeScript
- Tailwind CSS v4 (config via `@theme` in globals.css, not a JS config file)
- Geist Sans + Geist Mono (via `next/font`, wired up in `app/layout.tsx`)
- MDX for case studies and essays (to be added)
- Deployed on Vercel, auto-deploy on `git push` to `main`

## File conventions

- Components in `/components`, one file per component, PascalCase
- Page routes in `/app/[route]/page.tsx`
- Long-form content as MDX in `/content/case-studies` and `/content/thinking`
- Images in `/public/images/{brand|hero|case-studies|logos|practice-grid}/`
- Use Next.js `<Image>` component for all imagery (not raw `<img>` tags)

## Asset inventory

- `public/images/brand/signature-logo.svg` — the handwritten Capizzi wordmark
- `public/images/brand/wordmark-full.svg` — composed wordmark with portrait (unused, kept for reference)
- `public/images/brand/headshot-2026.png` — hero portrait (B&W, soft gray bg)
- `public/images/logos/` — 6 client logos, monochrome white, numbered 01–06 in display order
- `public/images/case-studies/` — case study hero images
- `public/images/hero/` — hero supporting imagery
- `public/images/practice-grid/` — practice-area visuals

Symbol mark SVG (the 16-point starburst) is **not yet created** — use a 
placeholder in components that reference it until the asset is finalized.

## Conversion infrastructure

- Booking URL: `https://cal.com/shawn-capizzi/strategy-call` (placeholder until 
  cal.com handle is locked — search/replace globally when finalized)
- Email service: TBD (ConvertKit vs Mailchimp — see open questions in IA doc §13)
- Phone: 212-380-3900 (footer + contact page only, not body copy)
- Email: capizzi@gmail.com

## Forbidden patterns

The design system §8 anti-patterns are enforced. Most-violated to watch for:

- No bullet-point overuse — prose first, lists only when essential
- No agency-speak: "crafted", "elevated", "transformed", "delighted", "journey"
- No "we" — Shawn is one person
- No drop shadows for elevation (use bg shifts)
- No more than 3 colors visible on a page
- No icons or illustrations beyond the single starburst symbol
- No motion that isn't tied to scroll, hover, or page transition

## Working principles

- Read the design system and IA framework before writing any new page
- Use existing tokens and components; create new ones only when justified
- Every change should be commitable as a single logical unit
- Mobile considerations are documented in IA §8 — design system is desktop-first 
  but mobile must work flawlessly
  