# shawncapizzi.com

Personal brand site for Shawn Capizzi — Director of UX, AI experience architect, 
and author of "Seeing Past the Cage: Better Communication Design in the Age of AI."
The site called the book "Clarity Is the Advantage" until September 2026. The
phrase was also the footer's brand line until November 2026; it no longer
appears on the site.

The thesis: **AI adoption is not a technology problem. It is an experience 
architecture problem.** Every page, every word, every visual decision reinforces this.

## Architecture

Eight-page site. Three conversion paths in priority order:

- **Path A**: Direct: Home → Engagements → Contact (calendar, email, or phone)
- **Path B**: Content-led: Home → Case Study → Contact
- **Path C**: Lead capture: Home → Thinking (/thinking) → Email → Drip → Booking

Full site map and per-page specs in `docs/ia-framework-v1-1.md`.

## Design system

All visual decisions follow `docs/design-system.md` (v2.0, November 2026,
which matches the live tokens and roles). This is non-negotiable.

- Do not introduce new color tokens, type scale, spacing values, or components 
  without referencing this file
- Tokens are defined in `app/globals.css` using Tailwind v4's `@theme` block — 
  edit there, not in `tailwind.config.js` (which doesn't exist in v4)
- Anti-patterns are listed in section 8 of the design system — read them before 
  introducing any new pattern
- Heading sizes come from four type roles in `app/globals.css`, never from
  per-element size utilities: `.hero-title` (page H1, 30px then 39px from
  1024px, with the brand-rule stub under it), `.hero-lead` (paragraph under the H1, Instrument Sans 20/30, no
  tracking: it is running text, not a heading),
  `.section-title` (every section H2 and closing ask, 30px), and `.card-title`
  (card and panel titles, 20px then 24px from 768px). Page heroes pair
  `.hero-title` with `.headline-static`; only the homepage uses
  `.headline-gleam`. Page content sits in `max-w-content`; `max-w-wide` is for
  the header, footer, and logo strip only.

## Content

- Page copy lives in `docs/manuscript-v2-2.md` — use these exact words, do not 
  paraphrase or invent voice
- Voice principles in design system §1: senior, direct, editorial, restrained
- Three brand lines, each placed by how much context the reader has
  (November 2026, Shawn's call). No context: the pair "What are you trying
  to solve, improve, or make happen?" then "I help teams get clear on
  direction, sharpen the thinking, and move the work forward." It is the
  footer on every page (it was also the top of /how-i-help until
  November 11, 2026, when Shawn replaced it there with his own intro); each case study's
  closing ask pairs its own question with the positioning line. Some
  context: "Listen first. Make it visible. Prove it worked." stays beside
  the Process. Full context: "workflows as they are, and as they could be"
  stays in first-person prose, the essay, and the book. Both lines of the
  pair are locked; never rewrite them. Every page keeps its own closing
  question (they are tailored on purpose), and the homepage hero takes no
  added line. The homepage description (`HOME_DESCRIPTION` in `lib/seo.ts`,
  also the default share text) opens with the positioning line, in Shawn's
  wording: what a stranger reads before arriving.
- Anti-voice list is enforced: no "we", no "crafted/elevated/journey", no 
  motivational copy, no SaaS marketing tone
- No criticism of other consultants, agencies, or AI builders (September
  2026). Describe Shawn's own part instead: defining the problem, directing
  the tools, refining the experience, making tradeoffs, and shipping
  something usable, with specific decisions and artifacts as evidence.
- Where interviews and AI-assisted simulations both appear, keep them
  distinct: interviews are with real stakeholders; simulations are labeled
  and reported separately.

## Stack

- Next.js 16 (App Router) with Turbopack
- TypeScript
- Tailwind CSS v4 (config via `@theme` in globals.css, not a JS config file)
- Instrument Sans (all headings), Geist (body), Geist Mono (labels), all via
  `next/font/google` in `app/layout.tsx`. Nunito Sans was retired in September
  2026. Heading rules in `app/globals.css` are unlayered on purpose, so they
  win over Tailwind utilities on h1, h2, and h3.
- `/design-info` (`app/design-info/page.tsx`, linked from the footer's palette
  emoji) lists the fonts, the six core colors with nearest PANTONE Solid
  Coated matches (pantone-cli, CIEDE2000, cross-checked against two other
  datasets), and the stack. It replaced the `/about#colophon` section in
  October 2026. If a color token changes, re-run the match and update that
  file; hex values there must equal the tokens exactly.
- MDX for case studies and essays (to be added)
- Deployed on Vercel, auto-deploy on `git push` to `main`

## SEO and GEO

Set up September 2026. The canonical host is `https://shawncapizzi.com`
(`SITE_URL` in `lib/seo.ts`); canonicals, the sitemap, robots.txt, and all
structured data use it.

- Every page builds its metadata with `pageMetadata()` from `lib/seo.ts`. It
  sets the canonical, Open Graph, X card, and share image together. Never
  export a bare `{ title, description }`: Next.js does not merge openGraph,
  so the page would inherit the homepage's og:title and og:url.
- A page with `"use client"` cannot export metadata. Keep pages as server
  components and move interactive parts into a component (see /faq and
  `components/FaqAccordion.tsx`).
- One H1 per page. Components that render inside a page (the Reader, cards)
  start at h2.
- Structured data (JSON-LD) says only what the page shows. The Person node
  (`@id` `https://shawncapizzi.com/#person`) is rendered once in the root
  layout; case studies (Article plus breadcrumbs), /about (ProfilePage),
  /faq (FAQPage, from `lib/faq.ts`), and /book/chapter-1 (Book) point to it.
  `sameAs` lists only profiles the site itself links (LinkedIn today).
- Share images are 1200x630 JPEGs in `public/images/og/`: `og-default.jpg`,
  one per case study named by slug, and `seeing-past-the-cage.jpg`. They were
  rendered from HTML with the site's fonts and colors. A new case study needs
  its own image, or it falls back to the default.
- robots.txt allows every crawler, AI training included (Shawn's call,
  September 2026), and names the answer-engine crawlers on their own.
  `/api/` is disallowed. No llms.txt: Google says Search ignores it.
- Titles under about 60 characters, descriptions under about 160, and one
  consistent set of facts everywhere (fifteen years, not "a decade").

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
- `public/images/brand/headshot-2026-knockout.jpg`: the headshot on the
  navy and blue-glow backdrop, used by the Get in touch card and the
  Person structured data
- `public/images/brand/headshot-2026-cutout.webp`: the same headshot as a
  transparent cutout (November 11, 2026), used by every portrait on the
  open page (`components/Portrait.tsx`)

## Headshots (November 11, 2026)

- Shawn's call: no frame around the headshot on the open page; a frame
  only where the photo sits inside a card, and there the card is the
  frame. `components/Portrait.tsx` is the one portrait for the homepage
  hero, /about, and /how-i-help (it replaced a bordered tile with a drop
  shadow and a one-time blue rim sweep on /about and /how-i-help, and the
  hero's masked square, whose edge still showed).
- The portrait is a transparent cutout over a translucent glow
  (`.portrait` in `app/globals.css`), so the page's own atmosphere, the
  starfield and the top-bar glow, shows through around him and no edge or
  box ever shows. The glow repeats the photo's own (sampled: centered 50%
  across and 32% down, radius 48% of the photo) and spreads 1.6 times
  wider. It is translucent on purpose: an opaque navy glow read as a dark
  oval wherever the portrait passed under the top-bar glow. The jacket's
  outer 12% and the bottom 28% fade out.
- The cutout was made from the knockout photo by separating him from its
  navy and blue-glow backdrop by color, then feathering and cleaning the
  edge; checked at 2x and over gray, purple, and white. A new headshot
  needs a new transparent cutout.
- Inside a card (the Get in touch card on /work and /faq) the knockout
  photo keeps its own backdrop: `.cta-portrait`, above.
- `public/images/logos/` — 6 client logos, monochrome white, numbered 01–06 in display order
- `public/images/case-studies/` — case study hero images
- `public/images/hero/` — hero supporting imagery
- `public/images/practice-grid/` — practice-area visuals

Symbol mark SVG (the 16-point starburst) is **not yet created** — use a 
placeholder in components that reference it until the asset is finalized.

## Conversion infrastructure

- Booking URL: `https://cal.com/capizzi/30min`, opened only from the Contact
  page's "Open the calendar" button. Since October 2026 every general CTA
  ("Let's talk", "Start a conversation", "Tell me what you're working on",
  and "Talk through something similar" on case studies) goes to /contact.
  "Strategy Call" is retired; the first step is the "Initial Conversation".
- Email service: TBD (ConvertKit vs Mailchimp — see open questions in IA doc §13)
- Phone: 212-380-3900 (footer + contact page only, not body copy)
- Email: capizzi@gmail.com

## Forbidden patterns

The design system §8 anti-patterns are enforced. Most-violated to watch for:

- No bullet-point overuse — prose first, lists only when essential
- No agency-speak: "crafted", "elevated", "transformed", "delighted", "journey"
- No "we": Shawn is one person. Six exceptions (Shawn's call, November
  2026), all where "we" means Shawn and the visitor or client together:
  the Advisory shape cards on /engagements, the homepage Advisory card
  ("Get clear on the opportunity. Together, we map a plan."), the first
  homepage door's label ("We start here"), the line under the /how-i-help
  first ask ("We'll talk through what you need and whether I'm the right
  person to help.", also the /contact calendar card, word for word), and
  the Get in touch card on /work and /faq ("let's see what we can make
  happen together.", the `contact` card in
  `components/cta-cards-data.ts`). The /contact hero was one until
  November 11, 2026, when it took /how-i-help's lead ("You don't need a
  perfectly defined brief, a budget, or a plan."), which has no "we".
- /contact carries /how-i-help's final language (Shawn's call, November
  11, 2026): /how-i-help is a hidden side door (noindex, business card
  only), so its two scan questions, its lead, its calendar line, and its
  client line appear on /contact word for word, where every ask on the
  site lands. /contact's H1 is "Let's talk.", the button that brings most
  visitors there. On both pages the questions and the lead are two
  `.hero-lead` paragraphs, like every other page's hero (set as a bold
  heading with a quieter second line, they read unlike the rest of the
  site). When either page's copy changes, check the other.
- One easter egg (Shawn's call, November 11, 2026): "tackling" in the
  /how-i-help scan line links to the NFL standings
  (https://www.nfl.com/standings/, no year in the address, so it never
  goes stale) in a new tab, for Giants fans and sports lovers. It keeps
  the lead's color with a faint dotted underline, turns lavender on
  hover, and carries screen-reader text ("New York Giants standings, opens
  in a new tab"). Don't add others without Shawn's call.
- No drop shadows for elevation (use bg shifts)
- No more than 3 colors visible on a page
- No icons or illustrations beyond the single starburst symbol, with two
  exceptions (Shawn's call, October 2026): the hand-drawn Process action
  sketches in `components/ProcessSketch.tsx`, his bulb language, and the same
  bulb language reused on `/how-i-help` in `components/WaysSketch.tsx`: three
  drawings, one per Process principle (Listen first, Make it visible, Prove it
  worked), each shown once as the header above that principle's list of
  "ways" (a divider list since November 2026, no cards), lighting in on
  scroll, no hover
- No motion that isn't tied to scroll, hover, or page transition, with one
  exception (Shawn's call, October 2026): the slow breeze sway and
  traveling purple tint on the Process sketches' shade ticks

## Vertical rhythm (November 2026)

- Type spaces itself. The roles in `app/globals.css` carry the gap to
  whatever follows them, from six tier-2 tokens on an 8px base:
  `--space-after-eyebrow` 16, `--space-after-hero-title` 24,
  `--space-after-title` 24, `--space-after-card-title` 12,
  `--space-paragraph` 24, `--space-paragraph-card` 16. Pages set no
  margin utilities on an eyebrow, title, or lead, and no `mt-*` on the
  element after one; both stack with the role and break the rhythm.
- Leading is a property of the style, never the page (Apple HIG shape:
  tighter as size grows, loose for long passages). Titles 1.05 to 1.25,
  `.hero-lead` 1.5 with 24px after any paragraph before it (November 11,
  2026: it was 1.4 at the headings' -0.025em tracking and read tight in
  Edge; stacked leads on /thinking and /work touched at 0px),
  `.body-text` 1.6 with 24px between paragraphs,
  `.card-text` 1.6 with 16px, `.small-text` 14px at 1.5, labels 1.4,
  `.lead-text` 1.6, and `.prose-block` for a container of several
  paragraphs (it carries the leading and the 24px between children). The
  body default is 1.6 too, so an unclassed paragraph still lands on the
  system. `leading-*` utilities no longer appear on text anywhere in the
  site; use the roles.
- Body text sizes come from five roles, never from per-element size
  utilities (November 2026). Phone / from 768px: `.lead-text` 18 / 20
  (the paragraph under a section title when the section's content is
  something else, such as cards, a list, or media, and every closing ask),
  `.body-text` 16 / 18 (all running prose; `.prose-block` containers carry
  the same size), `.card-text` 16 (card and panel text, and a card's
  `.card-foot` action), `.small-text` 14 (captions, credits, fine print),
  `.quote-text` 20 / 24 (pull quotes), plus `.quote-display` 24 / 30 for
  the one large quote on /about. Roles are unlayered, so they win over any
  size utility; a role listed later in globals.css wins when two share an
  element (`.card-text.small-text`, `.prose-block.lead-text`). Before, 11
  size ladders ran across 18 pages (body prose was 16 on the homepage, 18
  on case studies, 20 on /about); measured after, every page reads the five.
  Deliberate exceptions keep their own sizes and carry no role class: the
  Process loop (`components/ProcessLoop.tsx`), the Clarity Card prompts,
  the book contents, buttons, the header, the footer, and mono labels.
- Measured with Playwright across ten pages after the change: eyebrow to
  heading 16 everywhere, section title to text 24, card title to text 12.
  Before, section titles ran 16 to 56 and card titles 8 to 28.
- Sections breathe from four roles, never from `py-*` on the element:
  `.section` (48 phone / 64 tablet / 80 desktop each side), `.section-close`
  (64 / 80 / 96, the closing ask and testimonials only), `.section-tight`
  (32 / 40 / 48, strips and bands that belong to the section above), and
  `.section-hero` (128 / 160 top to clear the fixed header, a body
  section's bottom). Two sections meeting at a border show double the
  value. Before, 76 sections used 18 padding recipes; the homepage ran
  its ordinary sections at the closing-ask size, which is why it breathed
  differently from the other pages. The homepage hero, the contact hero's
  top, the FAQ list tail, and the case study first-look slot keep their own
  padding on purpose. `.section-joined` (November 2026) opens a section at
  the tight value with no rule above it, for a section that continues the
  one before: the /contact ways to reach Shawn (they answer the hero's
  question, so the hero closes at 0 and they open at 48 desktop, 32 phone)
  and the homepage doors under the logo strip. Pages put no `mt-*` on a
  section; a section that needs space above a border takes
  `mt-(--space-section)`. Measured after the November 2026 pass on all 18
  pages at desktop and phone: every section boundary is a system value or
  one of those named exceptions, and all 189 label, title, and card-title
  gaps read 16, 24, and 12.
- Cards are one role: `.card` is the whole recipe (surface, 1px default
  border, 16px radius, inset 24 phone / 28 tablet / 32 desktop from
  `--space-card`). A card with an image above its text puts the inset on a
  `.card-body` child so the image runs to the edge. `.card-compact` (16 /
  20 / 24) is for dense rows only: the carousel panels, the fragmentation
  grid, the book contents. Pages set no `p-*`, `rounded-*`, or `border`
  on a card. Before, 27 cards used 11 insets (16 to 40px) and two radii;
  measured after, every card on nine pages reads 24 / 32 at 16px radius.
  `.card-surface` remains as the shared surface paint only.
- Two card types (November 11, 2026, Shawn's call), so a visitor can tell
  content apart at a glance, even loosely. `.card` (navy, unchanged) is
  proof and thinking: case studies, products he built, the Process, the
  book and Clarity Cards, quotes, About, and the homepage doors.
  `.card.card-value` (violet) is value and services, what a client gets
  and how the work is shaped: the homepage engagement cards
  (`components/HowIWork.tsx`), the /engagements ways of working, and the
  /engagements Advisory shapes. Nothing else takes it without Shawn's
  call; /contact's ways to reach him stay navy (an action, not an offer).
  The value card uses only the page navy and the brand purple, no new
  hue: a deeper navy base (`--card-value-base` `#010F1C`) under a
  brand-purple wash (0.15), the purple glow top right at 0.16, a paper
  (`#ECEFE6`) edge at 26% (46% on hover), and the banknote rule: a second
  hairline 7px inside the edge, paper at 13%, drawn by `::after` on text
  cards only, so it never crosses a photo. Shawn picked it (P5++) after
  measured rounds of green, teal, and warm purple fills; green and teal
  were set aside as a fourth color. Against the navy card (CIEDE2000):
  8.9 typical vision, 5.2 red-green color-blind (the best of every fill
  tested for those viewers); the edge and rule add about 13 for every
  viewer, so keep them. A row never mixes the two types. Gray labels
  5.52:1 or better at desktop and phone (after the gray lift), lavender
  links 7.0:1.
- Cards in a row share the row's height. Content stacks from the top on
  the 24px rhythm; the last action carries `.card-foot`, which puts every
  link or button in the row on one baseline with 24px above it. The copy
  in a row is balanced to within a line of the tallest card, so the air
  above the foot never reads as a hole; when a row looks uneven, fix the
  copy, not the rule. Pages set no `mt-*`, `mt-auto`, or `flex-1` on
  card children. Text-only rows (Three ways, testimonials) have no foot
  and simply stack. A card that is one click target but holds a second
  link (the CTA cards' phone number) uses a stretched link: the title's
  link carries `after:absolute after:inset-0`, the second link sits above
  it with `relative z-10`, and both share the `.card-foot` row, so the card
  ends at the same height as its neighbor. Every CTA card carries an image
  (November 2026): "Get in touch" uses the navy knockout headshot, because
  a text-only card beside an image card left a 250px hole. Since November
  11, 2026 (Shawn's call: filling the frame, the face read loud and
  tight) it sits smaller, `imageFit: "portrait"` in
  `components/cta-cards-data.ts`: a square at 86% of the frame's height,
  bottom-centered, with air above. `.cta-portrait` in `app/globals.css`
  rebuilds the photo's own blue glow as the frame's background, sampled
  from the photo and spread 1.9x wider so the atmosphere fills the card,
  and fades the photo's sides and top into it. Measured at 1440 and 390
  on /work and /faq: centered, no square edge at 4x brightness.
- The gutter between cards or image tiles in a row is `.card-grid`: gap
  from `--space-card`, so gutter equals inset (24 / 28 / 32). Pages add
  only `grid-cols-*`; never a `gap-*` on a card grid. Before, 16 card
  grids used five gap recipes (20 to 40px).
- Text beside an image, a quote, or another text column is `.split-grid`:
  gap from `--space-split`, 40 phone (stacked, still one section), 48
  tablet, 64 desktop (twice the card gutter). Image pairs and swatch tiles
  use `.card-grid`. Pages add only `grid-cols-*`. Before, 13 splits used
  desktop gutters of 40, 48, 56, and 64. Left on purpose: the homepage
  hero, the data grids (case study metadata strip, the /about and
  /design-info definition lists, the /contact strip, book contents rows),
  and the CourtVisual tilted phone pair.

## Color meaning (November 2026)

- Lavender (`--color-link`, `#A798FF`) means a thing can be acted on: links,
  button text, and the active item in a loop or list (the current Process
  move, the current chapter). Nothing else is lavender. Labels, eyebrows,
  captions, and metadata are `text-tertiary` gray in mono. Shawn's rule:
  color has meaning, and a label in link color reads as a link on a phone.

## Type voices (November 2026)

- Three faces, three jobs: Instrument Sans for headings and the hero lead,
  Geist for body and buttons, Geist Mono for labels only. `.eyebrow` and
  `.metadata-label` are both mono, so every small uppercase label on the
  site is one voice; mono never sets a sentence, with one exception
  (Shawn's call, November 2026): "Napkin sketches welcome." with its pencil
  on /contact and /how-i-help stays in mono on purpose, a handwritten-note
  aside. The homepage hero carries
  no credential line and no second wordmark; the header already shows
  the mark. Since November 11, 2026 the hero is Shawn's two-sentence
  headline, one sentence per line ("Help people understand what
  matters." / "And take their next step with confidence."), over a lead
  that names his healthcare and pharma roots. The 15+ years is no longer
  in the hero.

## Accordions (November 2026)

- One pattern, `.disclosure-list` and `.disclosure-item` in
  `app/globals.css`: a hairline above the first item and below each, no
  fill, no outline, title in the `.card-title` role, chevron at the right,
  items padded `py-6 md:py-7`, detail `pb-7 md:pb-8`. Used by
  `components/WaysGroups.tsx` (/how-i-help) and `components/FaqAccordion.tsx`
  (/faq). A single collapsed section (`components/CollapsibleSection.tsx`:
  case study How I solved it and The impact, the Lab's Earlier experiments)
  carries no hairlines of its own, since its section already has one; it is
  an H2 in the `.section-title` role with the chevron at the right, and the
  prose opens beneath. Cards and filled
  accordions were retired (Shawn's call): filled, they competed with the
  page; unfilled, they read as a stack of dark boxes on a phone.
- Hover (November 2026, Shawn's call: hover belongs on desktop, used with
  restraint). Three moves, each answering "can I click this?", and no
  others: text links go lavender to white; pill buttons grow 2%, purple
  and white alike, with no color change (a lighter purple put white text
  at 3.87:1, below AA); clickable cards brighten their border and turn the
  title lavender, and an image or video inside zooms 2%. The border move
  lives in `app/globals.css` (`a.card:hover, .card.group:hover`, to
  `--color-border-strong`), not in a `hover:border-*` utility: the card's border rule is unlayered, so until
  November 11, 2026 no card edge changed on hover (measured #404040 at
  rest and under the pointer). Accordion
  triggers carry `.disclosure-trigger`, which turns the title and chevron
  lavender. Tailwind v4's `hover:` and the CSS rule both apply only on
  devices that can hover, so phones never see any of it. The footer's
  palette emoji fades instead, since an emoji cannot change color.
  Carousel controls, the Bloomberg thumbnails, the book reader, the
  signup widget, and the logo stay still on purpose. The orbiting
  "laser" border glint (`LaserFrame`) was retired in November 2026 and
  deleted; no card border animates.

## Buttons (November 11, 2026)

- Color says what happens next (Shawn's call: guide the visitor to the
  next best action). Two roles in `app/globals.css`. `.btn-next` (brand
  purple, white text) is the next step Shawn wants: every ask that goes
  to /contact, the calendar, or the email list, so each page's closing
  ask, the homepage hero, the /engagements strip, the /contact calendar,
  and the signup buttons (SignupCard keeps its own CSS with the same
  values). `.btn-see` (off-white, ink text) is go see real work: live
  products, case studies, Figma, the Clarity Cards deck. `.btn-sm` is the
  compact size inside cards. Lavender text links move around the site.
  Pages set no color, padding, radius, or type utilities on a pill; use
  the roles. Before, "Start a conversation" was purple on two pages and
  white on two, and white meant both "talk to me" and "go see a product".
- The desktop header "Let's talk" and the mobile back-to-top stay
  off-white pills on purpose: page chrome, not guidance. The mobile
  menu's "Let's talk" is a `.btn-next` since November 11, 2026 (Shawn's
  call): there it is the menu's one ask, under the ask rule.
- The mobile menu (November 11, 2026, Shawn's call; `components/Header.tsx`
  and `.mobile-menu` in `app/globals.css`) speaks the site's language
  instead of a lighter blue panel. It sits on the page navy with the
  closing ask's soft purple wash low. Page names are a hairline list in
  Instrument Sans 24px semibold, cream, a lavender arrow on each, 70px
  rows; the current page is lavender with no arrow (the active item in a
  list). FAQ is a quieter link under the list. The ask is pinned to the
  bottom for the thumb: the ask rule edge to edge, 32px of air, a
  full-width `.btn-next` "Let's talk", and "Call 212-380-3900" as a small
  gray line (the phone used to lead the menu at 24px lavender). While it
  is open the header drops its scrolled hairline, `main` and the footer
  are inert (Tab and screen readers stay in the header and menu), the
  back-to-top button hides (`data-back-to-top`), Escape closes it and
  returns focus to the menu button, and widening past 768px closes it.
  Measured: no scrolling at 390 x 664 (iPhone 13 in Safari, where the old
  menu ran 37px past the screen), 390 x 844, and 430 x 739; an iPhone SE
  in Safari (375 x 548) scrolls it.
- Purple fills are only `.btn-next`. Selected states (the /thinking
  Process tabs, the book contents) are lavender: edge, text, and a 10%
  tint (tab text 6.91:1). FREE BELOW on the book's foreword row is
  lavender link text, not a filled tag.
- The case study carousel arrows stay still on hover (their hover invert
  was removed November 11, 2026, matching the hover rule). The book
  reader keeps its own printed-page controls.

## The brand rule (November 11, 2026)

- Shawn's call: the thin blue to violet to pink rule from his original
  site returns in two roles, each once per page. One gradient,
  `--brand-rule` in `app/globals.css`:
  `linear-gradient(90deg, #536BF4 0%, #9968D7 50%, #EA67BA 100%)`. The
  stops are the old site's colors, sampled from its rule.
- The title stub opens every page: `.hero-title::after` draws a 64 x 3px
  mark (2px radius) 20px under every page H1, so every page gets it from
  the role and no page adds markup. Whatever follows the H1 keeps its
  24px from `.hero-title + *`. Measured on all 18 pages at 1440 and 390:
  one stub per page, 64 x 3, 24px to the next element (the homepage phone
  layout puts the headshot between the H1 and the lead, on purpose). It
  paints under the homepage's gleam headline too.
- The ask rule closes every page that has an ask: `.ask-rule` draws a 2px
  line on the top edge of the closing ask and replaces that section's 1px
  border (`.cta-purple-block` no longer carries its own purple top
  border). It sits on six closing asks, beside the purple `.btn-next`:
  the homepage (`FinalCTA`), /about, /thinking, /engagements,
  /how-i-help, and every case study (`CaseStudyLayout`). /how-i-help's
  "Where this has worked" strip dropped its bottom border so two lines
  never stack. Measured on all six at 1440 and 390: 2px, stops render at
  their hex values. The mobile menu's ask carries it too, edge to edge
  above "Let's talk" (Shawn's call, November 11, 2026).
- It was also shown on the footer edge and on every divider; Shawn chose
  the title stub and the asks only (on the footer it doubled the ask's
  line within one screen; on every divider it became wallpaper). Don't
  add it anywhere else without his call. It is decorative, so it carries
  no contrast requirement.

## Contrast (November 2026)

- Both grays were lifted 10% on November 11, 2026 (Shawn's call: they read
  dim): `text-secondary` `#A3A3A3` to `#B3B3B3`, `text-tertiary` `#8C8C8C`
  to `#9A9A9A`. `text-tertiary` had already been lifted from `#737373`,
  which failed AA for small text on every surface (4.07:1 on the page,
  3.65:1 on cards). Now `text-tertiary` measures 6.86:1 on `bg-primary`,
  6.14:1 on `bg-raised`, and 5.84:1 on `bg-elevated`; `text-secondary`
  9.20, 8.24, and 7.84. Measured on all 18 pages at 1440 and 390 (1,720
  gray text samples), the lowest is 5.31:1 (the homepage eyebrow on a
  phone, over the hero glow). /design-info's Secondary text swatch was
  re-matched with pantone-cli: Cool Gray 5 C, ΔE 0.6.
  `BrowserFrame` reads `var(--color-text-secondary)` instead of a hex
  copy. `bg-elevated` moved from `#021626` to `#08203A`
  (1.17:1 against the page, from 1.05:1) so the header, carousel frames,
  and video posters read as a step. `bg-raised` and `.card-surface` are
  unchanged on purpose (Shawn's call); the violet value card is a second
  type, not a change to the default (see Vertical rhythm, two card types). Any component that needs these
  values in JS reads the CSS variable, never a hex copy.

## Case studies

- `components/CaseStudyLayout.tsx` renders every study. Since November 2026
  the order is: hero, metadata, **first look** (`firstLook` or
  `firstLookImages`), lead quote, The business need, How I solved it
  (collapsed), the remaining process sections, The results, The impact
  (collapsed), the ask, Related projects. Those five headings are the
  layout's and are chosen for a decision maker or a recruiter skimming:
  each answers a plain question (what was needed, what Shawn did, what
  happened, what it makes possible, what else). The page props keep their
  old names (`challenge`, `approach`, `outcomes`, `closer`). The first look is the
  page's first work visual, placed before the prose so a reader sees the
  work within about 1,300 to 1,700px on desktop (half the previous scroll,
  measured with Playwright across all six studies). A new case study passes
  its strongest visual block to `firstLook`; a carousel used there takes
  `className="pt-6 md:pt-8 pb-16 md:pb-24"`. The Lab page keeps its
  text-first showcases on purpose.

## Working principles

- Read the design system and IA framework before writing any new page
- Use existing tokens and components; create new ones only when justified
- Every change should be commitable as a single logical unit
- Mobile considerations are documented in IA §8 — design system is desktop-first 
  but mobile must work flawlessly
  