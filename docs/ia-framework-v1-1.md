# Capizzi Site — Information Architecture Framework

**Version 1.1** · May 2026
For shawncapizzi.com (Next.js + MDX, Vercel)
Companion to: `capizzi-design-system.md` and `capizzi-content-manuscript-v2-2.md`

**Changelog from v1.0:**
- Site map expanded from 3 case studies to 5, aligned to the README's 16 locked routes
- BC Navi URL slug renamed to `/work/cancer-equality-app` (product rename per content manuscript v2.2)
- Selected Work card titles updated to credit-style format (Pfizer Global Design System Leadership, Biogen Multi-Brand Sales Tools, Bloomberg Enterprise CRM Transformation, Chrysalis Initiative · Cancer Equality App, AI-Native Product Design Lab)
- Detail page H1s stay descriptive (anonymized body); credit lives in card title and eyebrow
- "Trusted by" logo strip updated to match actual assets supplied: Pfizer, Bloomberg, Samsung, Columbia Business School, OpenAI, IPG Health (was Pfizer, Bloomberg, Samsung, Biogen, AbbVie, IPG Health in v1.0)
- Deferred-to-v1.1 list updated: `/case-studies/pfizer-sales-tools` removed (CS2 now in main lineup)

---

## How to read this document

This is the structural blueprint of the site — every page, every section, every link, every conversion path. It defines what gets built and what does not. Pair this with the design system and the content manuscript (next deliverable) and you have everything Claude Code needs to scaffold the project.

The principle behind every decision: **a senior buyer with 90 seconds should be able to find the answer to "should I book a call?" — no scrolling exhaustion, no decision fatigue.**

---

## 1. Site goals & success metrics

### Primary goal
Convert qualified consulting leads into booked strategy calls.

Target: 2 calls per week within 60 days of launch, drawn from a mix of warm reactivation, CxO event follow-up, content-led inbound, and targeted outbound.

### Secondary goal
Build an email list of warm leads via the Clarity Advantage lead magnet.

Target: 100 subscribers within 90 days. These become the audience for ongoing thought leadership and future product/course launches.

### Out of scope (intentional)
- Recruiter conversion for full-time roles (handled via LinkedIn and recruiter-direct)
- Selling the book, deck, or course (premature; not yet built)
- Portfolio for design-peer audience (different site, different time)

### Conversion paths the site must support

There are three paths, in priority order:

**Path A — Direct call booking** (highest intent)
Buyer → Home → Engagements → Book a Strategy Call

**Path B — Content-led conversion** (medium intent)
Buyer → Home → Case Study → Book a Strategy Call

**Path C — Lead capture for future nurture** (low intent today)
Buyer → Home → Clarity Advantage → Email submitted → Drip sequence → Eventually books a call

The site must funnel every visitor toward one of these three paths. Every page has a primary CTA pointing toward A, with B and C as secondary paths.

---

## 2. Top-level site map

```
shawncapizzi.com/
│
├── /                              [Home]
├── /engagements                   [How to work together — primary money page]
├── /work                          [Case study index]
│   ├── /work/pharma-design-systems
│   ├── /work/multi-brand-pharma-sales-tools
│   ├── /work/enterprise-financial-services-crm
│   ├── /work/cancer-equality-app
│   └── /work/ai-native-product-design-lab
├── /thinking                      [Essays index]
│   ├── /thinking/stop-buying-ai
│   ├── /thinking/ai-experience-architecture
│   ├── /thinking/fda-september-2025
│   └── /thinking/capizzi-process
├── /about                         [Bio + thesis + photo]
├── /clarity-advantage             [Lead magnet landing]
└── /contact                       [Booking + email]
```

**Eight pages total.** Plus three case study pages and three thinking page templates that scale as content grows.

That's the entire site. Anything not on this list does not exist in v1.0.

### What's deliberately not here

- **No /services page.** Engagements is the services page.
- **No /portfolio page.** "Work" is the portfolio name.
- **No /blog.** "Thinking" is the blog name. Different connotation.
- **No /resume or /cv.** Recruiters get the LinkedIn URL.
- **No /testimonials page.** Testimonials live inline on Home and About, not as a destination.
- **No /process or /methodology page.** Process belongs in the case studies and the Capizzi Process essay.
- **No /speaking or /workshops page.** Workshops are an engagement option on /engagements, not their own destination. We can split this into a page in v1.1 if workshops become a major revenue driver.
- **No 404-page-as-personality moment.** A clean 404 with a search and home link. We're not the brand for a clever 404.

---

## 3. Global navigation

### Header (every page)

```
[Capizzi wordmark]    Work · Engagements · Thinking · About    [Book a Strategy Call]
```

- **Wordmark left** — links to Home
- **Center nav** — four links, in the order shown. Order is intentional: Work first (proof), Engagements second (offer), Thinking third (POV), About fourth (person). Buyers usually click in this order.
- **CTA button right** — `Book a Strategy Call`. Always visible, always the same label, always the same destination (cal.com link). Single source of conversion.
- **No phone number in header.** Phone moves to footer.
- **No "Hire me" or "Available" status indicator.** We removed the dual-track signal.

### Mobile header

Hamburger left, wordmark center, CTA button right (compact: "Book Call"). Hamburger opens a full-screen overlay menu with the four primary links stacked, plus secondary links (Contact, Clarity Advantage), plus the CTA.

### Footer (every page)

```
[Capizzi wordmark]
Clarity is the advantage.

Work · Engagements · Thinking · About · Contact · Clarity Advantage
LinkedIn · Email · 212-380-3900

© 2026 Shawn Capizzi · Strategic Experience Design for Regulated and Enterprise Teams
```

Footer is wider than header. Includes the brand line. Includes secondary destinations (Contact, Clarity Advantage) that aren't in the header. Phone number lives here, not in body content.

---

## 4. Page-by-page IA

### 4.1 Home — `/`

The single most important page on the site. Job: convert in 90 seconds.

**Section order:**

1. **Hero**
   - Wordmark (large)
   - Thesis headline: *"AI adoption isn't a technology problem. It's an experience architecture problem."*
   - Supporting line: *"I help regulated and enterprise teams make clear UX, CX, and product strategy decisions that move the business forward — even when regulation, tight timelines, and incomplete information are part of the reality."*
   - Primary CTA: **Book a Strategy Call**
   - Secondary text link: *See how I work →* (anchors to Engagements section below or routes to /engagements)
   - Background: portrait + radial atmospheric backdrop with parallax scroll

2. **Trusted by logo strip**
   - Header line: *"Trusted by leaders at:"*
   - 6 logos in monochrome white, horizontal scroll banner, in order: **Pfizer, Bloomberg, Samsung, Columbia Business School, OpenAI, IPG Health**
   - Assets supplied as `.avif` in `/images/logos/` (01-pfizer through 06-ipg-health)
   - No CTAs in this section

3. **Engagements preview** (the productized offers)
   - Section header: *"How I work with teams"*
   - Three cards: Strategic Advisory Retainer · Clarity Sprint · Executive Workshops & Facilitation
   - Each with one-line description + price signal ($7.5K–$10K/mo · Starting at $25K · Starting at $15K)
   - CTA below: *See full engagement details →* routes to /engagements

4. **Selected Work**
   - Section header: *"Selected Work"*
   - Subhead: *"Engagements where the structure of the experience changed the structure of the business outcome."*
   - 5 case study cards (credit-style titles):
     - **Pfizer Global Design System Leadership** → /work/pharma-design-systems
     - **Biogen Multi-Brand Sales Tools** → /work/multi-brand-pharma-sales-tools
     - **Bloomberg Enterprise CRM Transformation** → /work/enterprise-financial-services-crm
     - **Chrysalis Initiative · Cancer Equality App** → /work/cancer-equality-app
     - **AI-Native Product Design Lab** → /work/ai-native-product-design-lab
   - Each card: hero image + eyebrow (client · vertical · engagement type) + descriptive headline + outcome line + case study link
   - Detail page H1 stays descriptive (anonymized body); the credit lives in the card title and eyebrow only
   - CTA below: *View all work →* routes to /work

5. **Thinking preview**
   - Section header: *"How I'm thinking about this work publicly"*
   - 3–4 article cards with title, date, one-line description
   - CTA below: *Read more →* routes to /thinking

6. **Testimonials**
   - 3–5 short pull quotes with name, title, company
   - No CTA (rest stop section)

7. **Clarity Advantage lead magnet**
   - Background: periwinkle color block (the brand-purple statement treatment)
   - Headline: *"The Clarity Advantage"*
   - Subhead: *"A field guide for enterprise teams turning complexity into action. Coming soon — get early access."*
   - Form: First name · Email · [Get the Guide]

8. **Final CTA**
   - Headline: *"Let's talk through your challenges."*
   - Subhead: *"Virtual or in-person. 30 minutes is usually enough to know if there's a fit."*
   - Primary button: Book a Strategy Call
   - Secondary text: Or email capizzi@gmail.com

9. **Footer** (global)

**Conversion paths from Home:**
- Path A: Hero CTA → Booking (most direct)
- Path A: Final CTA → Booking
- Path B: Selected Work card → Case Study → Booking
- Path B: Engagements preview → /engagements → Booking
- Path C: Lead magnet → Email captured

**What's not on Home:**
- Long bio (lives on About)
- Resume content (not on site at all)
- Pricing detail beyond signal (lives on Engagements)
- Full case study text (lives on individual case study pages)
- Contact form (lives on Contact)

---

### 4.2 Engagements — `/engagements`

The money page. Where buyers self-qualify on scope and budget before booking.

**Section order:**

1. **Hero**
   - Headline: *"Three ways to work together."*
   - Subhead: *"Engagements are designed for leaders inside regulated and enterprise organizations navigating complexity. Each is scoped, priced, and built around a defined outcome."*
   - Primary CTA: Book a Strategy Call
   - No image (this is a content-dense page, not a hero-image page)

2. **Engagement 1 — Strategic Advisory Retainer**
   - Anchor link: `#advisory`
   - Description, scope, deliverables, ideal client, pricing band ($7,500–$10,000/month)
   - CTA: Book a Strategy Call

3. **Engagement 2 — Clarity Sprint**
   - Anchor link: `#sprint`
   - Description, scope, deliverables, ideal client, pricing band (Starting at $25,000)
   - CTA: Book a Strategy Call

4. **Engagement 3 — Executive Workshops & Facilitation**
   - Anchor link: `#workshops`
   - Description, scope, deliverables, ideal client, pricing band (Starting at $15,000)
   - CTA: Book a Strategy Call

5. **The three pillars** — what Shawn focuses on across all engagements
   - This is where the Regulatory / Interfaces / Systems content lives, condensed to one paragraph per pillar with a "what this means in practice" framing
   - Not separate sub-pages. Sections on this page.

6. **How an engagement starts**
   - Three-step process: Strategy call → Scoping conversation → Statement of work
   - Sets expectations, removes friction

7. **FAQ** (5–7 short Q&As)
   - Examples: "Do you do hourly work?" / "Can engagements scale up or down?" / "Do you work with agency partners?" / "Can you sign an NDA?" / "Do you travel for workshops?"

8. **Final CTA**
   - Headline: *"Tell me what's stuck."*
   - Subhead: *"30 minutes. No pitch. We figure out together if there's a fit."*
   - Primary button: Book a Strategy Call

**Conversion paths from Engagements:**
- Path A only. This page is a self-qualification + booking page. No detours.

---

### 4.3 Work (case study index) — `/work`

**Section order:**

1. **Hero**
   - Headline: *"Selected work."*
   - Subhead: *"Engagements where the structure of the experience changed the structure of the business outcome."*
   - No image hero — let the case study cards do the visual work

2. **Case study grid**
   - 3 case study cards (or 4 if we add a 4th)
   - Each card: large hero image, client name, one-line outcome, year, services
   - Cards stack vertically on mobile, two-column on tablet, three-column on desktop

3. **CTA at bottom**
   - Headline: *"Want to talk through how this kind of work would fit your team?"*
   - Primary button: Book a Strategy Call

**Conversion paths from Work:**
- Path B: Card → Case Study → Booking
- Path A: Bottom CTA → Booking

---

### 4.4 Individual case study — `/work/[slug]`

The template each case study page follows. Same structure for all three.

**Section order:**

1. **Hero**
   - Eyebrow label: `(CASE STUDY)`
   - Title: *"Pfizer Global Design System Leadership"*
   - Subtitle/outcome line: *"$3.5M in digital transformation across 15+ therapeutic brands."*
   - Hero image: full-bleed Frame composition
   - Metadata block (right column on desktop, stacked below on mobile):
     ```
     (CLIENT)    Pfizer
     (YEAR)      2019–2023
     (TIMELINE)  4 years
     (SERVICES)  Design Systems · Strategic Advisory · Multi-Brand Architecture
     ```

2. **The challenge** (1–2 paragraphs)
   - What was stuck before Shawn arrived
   - Stakes for the business

3. **The approach** (2–3 paragraphs)
   - What Shawn actually did, in plain language
   - Frameworks/methodology only if they earn the space

4. **Selected outcomes** (a structured list, not a bullet bonanza)
   - 3–5 specific, verifiable numbers
   - Format: outcome → context
   - Example: *"40% reduction in search time during sales-rep conversations with healthcare providers."*

5. **Supporting visual** (optional)
   - One additional Frame composition or GIF if available
   - Caption explaining what the visual shows

6. **One sentence closer** (the "what this means" line)
   - Example: *"The system was built once. It serves many. That's the difference between design that scales and design that fragments."*

7. **CTA block**
   - Headline: *"Working through something similar?"*
   - Primary button: Book a Strategy Call
   - Secondary link: *See other engagements →* /engagements

8. **Related work** (optional, scrolls horizontally)
   - 2 other case study cards

**Length target:** 600–900 words per case study. Not a 3,000-word executive summary. A senior buyer reads this on a phone between meetings.

**MDX file structure:**
```
content/case-studies/
├── pfizer-global-design-system.mdx
├── bloomberg-crm-transformation.mdx
└── erase-the-line.mdx
```

Each MDX file has frontmatter with: title, slug, client, year, timeline, services, outcome line, hero image path, order. The case study template renders from frontmatter + body.

---

### 4.5 Thinking (essays index) — `/thinking`

**Section order:**

1. **Hero**
   - Headline: *"Thinking."*
   - Subhead: *"Essays on AI adoption, regulatory design, and experience strategy in regulated industries."*

2. **Essay grid**
   - Card per essay: title, date, 1–2 line description, read time
   - Reverse chronological by default
   - 3 essays at launch, scaling as content is published

3. **CTA at bottom**
   - Subscribe to Clarity Advantage updates (email capture)

**Conversion paths from Thinking:**
- Path C: Subscribe at bottom
- Path A: Click essay → essay page → CTA at bottom of essay → Booking

---

### 4.6 Individual essay — `/thinking/[slug]`

**Section order:**

1. **Hero**
   - Eyebrow label: `(ESSAY)` or `(POV)`
   - Title
   - Subtitle (1 line)
   - Author + date + read time
   - Optional hero image (varies per essay)

2. **Article body**
   - Long-form prose in `max-w-narrow` container (768px) for readability
   - Pull quotes break up long sections
   - No sidebar, no related-content rail

3. **End-of-article CTA**
   - Headline: *"If this resonates, let's talk."*
   - Primary button: Book a Strategy Call
   - Secondary: Subscribe to Clarity Advantage

4. **Related thinking** (2 cards)

**MDX file structure:**
```
content/thinking/
├── ai-experience-architecture.mdx
├── fda-september-2025.mdx
└── capizzi-process.mdx
```

Frontmatter: title, slug, date, description, readingTime, heroImage, tags.

---

### 4.7 About — `/about`

**Section order:**

1. **Hero**
   - Headline: *"I help leadership teams make clear decisions in complex digital environments."*
   - Portrait (the Ethyca arms-crossed shot, cropped)
   - One-paragraph positioning summary

2. **The thesis**
   - The "AI adoption is an experience architecture problem" position, expanded into 2–3 paragraphs
   - This is where Shawn's POV gets its longest expression

3. **Background** (selective, not exhaustive)
   - 4–5 paragraphs on career arc, focused on what's relevant to the buyer
   - Razorfish, Pfizer work, Bloomberg, regulated-industry depth
   - Pratt and SVA workshops mentioned as evidence of teaching/facilitation chops
   - **Not** a chronological resume — recruiters get LinkedIn

4. **Recognition**
   - D&AD Pencil
   - Any other awards
   - Speaking/publication highlights

5. **Beyond the work** (optional, very brief)
   - Photographer, painter, BBQ enthusiast, documentary filmmaker — 1 short paragraph
   - Humanizes; doesn't dominate. Senior buyers like to know there's a person behind the title.

6. **CTA block**
   - Headline: *"Let's see if there's a fit."*
   - Primary button: Book a Strategy Call

---

### 4.8 Clarity Advantage — `/clarity-advantage`

The lead magnet landing page.

**Section order:**

1. **Hero (color block — the periwinkle treatment)**
   - Headline: *"The Clarity Advantage"*
   - Subhead: *"A field guide for enterprise teams turning complexity into action."*
   - Eyebrow label: `(COMING SOON)` or `(NOW AVAILABLE)` depending on launch state

2. **What's in it** (when published)
   - 3–5 short bullets describing what the reader will learn
   - Page count, format, time investment

3. **Sample content** (optional preview)
   - Pull quote or single section from the guide
   - Builds confidence in quality before the email ask

4. **Email capture form**
   - First name · Email · [Get the Guide]
   - Privacy line: *"No spam. Just the guide and occasional updates on new thinking."*

5. **About the author**
   - 2-paragraph credibility block
   - Portrait (small)
   - Link to /about for more

6. **No conventional CTA in footer area** — the email form *is* the CTA

**Conversion path:**
- Path C: Email captured → drip sequence

---

### 4.9 Contact — `/contact`

The simplest page on the site. Should not feel like a contact form trapping people.

**Section order:**

1. **Hero**
   - Headline: *"Let's talk."*
   - Subhead: *"The fastest path is the strategy call. If async works better for what you need, email is great too."*

2. **Two options, side by side**
   - **Option A — Book a Strategy Call** (primary, larger)
     - Description: 30 minutes, virtual, no pitch
     - Cal.com embed *or* button to cal.com
   - **Option B — Email** (secondary)
     - capizzi@gmail.com
     - Description: For longer-form questions, partnership inquiries, or async logistics

3. **Phone** (tertiary, small)
   - 212-380-3900
   - Description: *Voicemail welcome. I'll return calls within a business day.*

**No contact form.** Forms add friction; calendar links and email convert better for senior buyers who don't want to wait for a reply.

---

## 5. URL & slug conventions

- All lowercase
- Hyphens, not underscores
- Short and descriptive: `/work/pfizer-global-design-system` not `/work/pfizer-gds-case-study-2023`
- No trailing slashes (Next.js default)
- No file extensions in URLs
- No query parameters in primary navigation paths

### Redirect plan from old Framer site

When DNS cuts over, set up these redirects so old links don't 404:

```
/blog              → /thinking
/blog/[any]        → /thinking/[any-mapped-slug]
/services          → /engagements
/portfolio         → /work
```

We'll catalog the existing Framer URLs before launch and write a `redirects` block in `vercel.json`.

---

## 6. Cross-page linking strategy

The site needs internal links that move people *forward* in the conversion path, not sideways into rabbit holes.

### Approved internal links

**From Home:**
- → /engagements (multiple times)
- → /work + individual case studies
- → /thinking + individual essays
- → /clarity-advantage (via lead magnet section)
- → Booking link (5+ instances)

**From Engagements:**
- → Booking link (after each engagement, after FAQ, in final CTA)
- → /work (single link, contextual)

**From Work index:**
- → Individual case studies
- → Booking link (bottom CTA)

**From Case Study:**
- → Booking link (bottom CTA)
- → /engagements (secondary link)
- → 2 related case studies (bottom)

**From Thinking index:**
- → Individual essays
- → /clarity-advantage (subscribe at bottom)

**From Essay:**
- → Booking link (bottom CTA)
- → /clarity-advantage (subscribe)
- → 2 related essays

**From About:**
- → Booking link
- → No other internal links — About is a destination, not a hub

### Forbidden links

- Case studies do not link to other case studies inline (only at the bottom)
- Essays do not link to case studies inline (cross-purposes)
- Engagements does not link to /thinking (different intent)
- No reciprocal nav loops ("see also" sidebars on every page)

The principle: **every link should move someone forward, not sideways.**

---

## 7. Conversion mechanics

### The booking link

Single canonical URL: `https://cal.com/[shawn-handle]/strategy-call`

Used everywhere. Same anchor text variations, same destination:
- "Book a Strategy Call" (primary CTA, header, hero)
- "Book a strategy call" (inline body text)
- "Schedule a 30-min call" (occasional variant for variety)

The cal.com event:
- 30 minutes
- Virtual (Zoom/Google Meet)
- Optional intake field: "What are you working on?" (one short paragraph, optional)
- Confirmation email auto-sends with a Loom intro from Shawn (write once, evergreen)

### The email magnet

Single canonical email service: ConvertKit (free tier) or Mailchimp (free tier). Pick once, don't switch.

The form fields: First name, work email. That's it. No company, no role — those are friction.

After signup, a 3-email welcome sequence:
1. Day 0: "Welcome, here's the guide" (PDF link)
2. Day 3: "What stuck for me writing this — and where I'd love your input"
3. Day 7: "Want to talk it through? Here's a calendar link" (booking CTA)

After the welcome sequence, subscribers get periodic essays as they're published. Maximum monthly cadence.

### The Clarity Advantage guide itself

We're not writing this in the site IA — that's a separate deliverable. But the IA assumes a 12–20 page PDF will exist by week 6 of launch. If it doesn't exist, the lead magnet section uses the "coming soon" framing.

---

## 8. Mobile considerations

The site is mobile-first in design rhythm but the buyer reads on desktop and tablet primarily. Mobile must work flawlessly but the design is calibrated for the larger screens where senior buyers actually do their research.

### Mobile-specific decisions

- Hero parallax disabled (motion sickness, performance)
- Display type scales down: `text-display` becomes `text-7xl`
- Engagement cards stack vertically
- Case study metadata block stacks below content instead of right-column
- Lead magnet form simplifies (single column, larger touch targets)
- Footer collapses sections under expandable headers

### Mobile-only elements

- Hamburger menu opens full-screen overlay in `bg-elevated`
- Sticky bottom bar on case study pages with "Book a Strategy Call" — this is the only sticky CTA on the site, only on case study pages, only on mobile

---

## 9. SEO & discoverability

This is a senior-buyer site, not a top-of-funnel SEO play. We're not chasing rankings for "UX consultant" or "design strategy services" — those are losing battles for an individual.

### Where SEO matters

- Personal name searches: `Shawn Capizzi` should rank #1 for the person's name (currently the Framer site does this)
- Long-tail thought leadership: essays should rank for specific phrases like "FDA September 2025 pharma marketing UX" or "AI adoption regulated enterprise"
- Case study pages should rank for specific company + outcome searches that prospective buyers might run

### Per-page metadata

Each page has unique:
- `<title>` (60 char target)
- `<meta description>` (155 char target)
- Open Graph image (custom OG image per case study, generic OG for static pages)
- Schema.org markup for Person, Organization, Article (where applicable)

### Sitemap & robots

- Auto-generated `sitemap.xml` via Next.js
- Standard `robots.txt` allowing crawl
- No `noindex` on any page (we want the whole site indexed)

---

## 10. Analytics & measurement

### Primary instrumentation

- **Vercel Analytics** for traffic, top pages, referrers (free, privacy-respecting)
- **PostHog** (free tier) for funnel events and conversion tracking
- **No Google Analytics.** Not on a senior site for privacy reasons and clutter.

### Events to track

- `cta_book_call_clicked` — fired on every booking link click, with `source` parameter (which page/section)
- `lead_magnet_submitted` — fired on email capture
- `case_study_read_complete` — fired when a user scrolls past 75% of a case study
- `essay_read_complete` — same for essays
- `engagement_card_clicked` — which of the three offers gets the most attention

These let us see what's actually converting. If after 60 days the data shows the Clarity Sprint card gets all the clicks but no bookings, we change the page. The site is a working hypothesis, not a frozen artifact.

---

## 11. Launch sequence

When we cut over to the new site, do these in order:

1. **Pre-launch checklist** (week before)
   - Build complete on Vercel preview URL
   - All copy reviewed
   - All images optimized
   - Cal.com event tested
   - Email magnet form tested
   - Mobile QA on iPhone and Android
   - Analytics events firing

2. **Cutover day**
   - Update DNS at registrar to point to Vercel
   - Add 301 redirects from old Framer URLs (in `vercel.json`)
   - Verify SSL active
   - Verify cal.com link working
   - Update LinkedIn header link if needed

3. **First week post-launch**
   - Monitor traffic for 404s (means we missed a redirect)
   - Watch booking events
   - Fix anything broken in real-time

4. **First 30 days**
   - Weekly review: which pages, which CTAs, which content
   - First content update: add one new essay
   - First case study refinement based on what reads well

The launch is not the end. It's the start of a measurable feedback loop.

---

## 12. What's deferred to v1.1

These ideas are good but not at launch. Keep them in `site-backlog.md`:

- **Market Access specialty page** — strong vertical positioning, add when one engagement validates it
- **/speaking page** — split from Engagements when workshop demand justifies it
- **Newsletter archive page** — useful when there are 10+ essays
- **Press/Media page** — when media mentions exceed 3
- **Capizzi Process methodology page** — extract from /thinking when product/IP plans firm up
- **Multilingual** — never, unless a specific large client requires it

Holding these in v1.1 protects launch focus.

---

## 13. Open questions to resolve before scaffold

These need answers before I write content or build:

1. **Bloomberg case study** — do we have a hero image, or do we need to source/create one?
2. **Strategic AI Integration piece** — moving to /thinking as essay (recommended), or attempting a fourth case study?
3. **Cal.com handle** — is `cal.com/shawn-capizzi` available, or do we need a different handle?
4. **Email service** — ConvertKit or Mailchimp? Lock now to avoid switching later.
5. **Vercel Analytics** — Pro or free tier? Free is fine to start.
6. **shawncapizzi.com domain** — currently at Framer, where is DNS managed (registrar)?
7. **Existing Framer URLs** — do we need to catalog every URL for redirect mapping, or accept some 404s for low-traffic pages?

---

## End of v1.0

Companion documents:
- `capizzi-design-system.md` — visual system
- `capizzi-content-manuscript.md` — every word of every page (next deliverable)
- `site-backlog.md` — v1.1+ ideas
