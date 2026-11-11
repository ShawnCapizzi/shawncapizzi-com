# Capizzi Design System

**Version 2.0** · November 2026 (v1.0 May 2026)
Maintained by Shawn Capizzi

---

## How to use this document

This is the reference for the visual and verbal identity of shawncapizzi.com and any extension of the Capizzi brand (decks, lead magnets, social, future product). Every decision in here is editable.

Values live in the code, and this document describes them:

- `app/globals.css` holds every token (Tailwind v4 `@theme` block; there is no `tailwind.config.js` in v4) and every type, spacing, card, and layout role.
- `CLAUDE.md` records each system decision with its date and the before-and-after measurements.

When a value changes, it changes in `globals.css` first, then here.

v2.0 (November 2026) brings sections 2 through 5 and 9 in line with the live site: the deep navy palette, lavender for actions, Instrument Sans headings, role-based type and spacing, and Tailwind v4. Section 1 gains the brand-line decision of November 2026; the rest of sections 1, 6, 7, and 8 is unchanged from v1.0.

---

## 1. Brand Foundation

### Who this brand is for

The Capizzi brand exists to convert a specific buyer: a Director, VP, or C-level leader inside a regulated or enterprise organization — pharma, healthcare, financial services, or any environment where complexity, compliance, and stakeholder pressure compound. They have budget, they have an AI initiative that is stuck, and they need a senior peer who can think with them rather than a vendor who pitches at them.

The brand is not designed for the design community, for portfolio peers, or for general SaaS audiences. Design choices that would impress fellow designers but feel performative to a CIO are deliberately rejected.

### The thesis

> **AI adoption is not a technology problem. It is an experience architecture problem.**

Every page of the site, every piece of content, every visual decision should reinforce this. It is the line that differentiates Shawn from every other consultant in his target buyer's inbox.

### The lines, and the context each one needs

Three lines carry the brand. Each lives where a reader has enough context to take it in (decided November 2026).

**No context: the stranger-facing statement.** A question the visitor can answer in their head, then the locked positioning line as its answer.

> **What are you trying to solve, improve, or make happen?**
> **I help teams get clear on direction, sharpen the thinking, and move the work forward.**

This pair works for someone meeting the brand cold. It sits in the site footer (the one element on every page) and opens /how-i-help. Off the site it is the statement for an email signature or a deck cover. Case studies end on their own question with the positioning line as the answer. Neither line is rewritten.

**Some context: the Process.** "Listen first. Make it visible. Prove it worked." is plain, but it is a method with no subject, so it stays beside the Process that explains it (/thinking, the homepage Process section).

**Full context: the point of view.** "Workflows as they are, and as they could be" is how Shawn sees the work. It is romantic language, so it lives in his own first-person prose (the homepage and /about), in the essay of that name, and in the book.

"Clarity is the advantage." was the brand line through v1.0 and the book's first title. It left the footer in November 2026. "Clarity" remains the name of the cards.

### Voice principles

The brand voice is senior, direct, editorial, and restrained. It assumes the reader is intelligent and busy. It avoids design-world jargon, motivational copy, and the agency tendency to oversell.

**Five voice rules:**

1. **Lead with the outcome, not the activity.** Not "I run discovery workshops." Instead: "I help leadership teams move forward when they're stuck mid-program."
2. **Use specifics, not adjectives.** Not "transformative results." Instead: "$2.1M in annual ROI, 25% reduction in operational time."
3. **Earn every adjective.** "Award-winning" is permitted because the D&AD Pencil is real. "Innovative" is not, because it does no work.
4. **Write like a senior advisor would talk.** Short sentences. Plain words. No phrases a CIO wouldn't say in a meeting.
5. **End sections without summarizing.** Senior writing trusts the reader. No "in conclusion."

### Anti-voice

The Capizzi brand never sounds like:

- A SaaS marketing landing page ("Unlock your team's potential!")
- A creative agency case study ("We crafted a journey...")
- A motivational LinkedIn post ("Here's the truth about leadership...")
- A vendor pitch ("Let us help you...")

---

## 2. Color System

The palette is disciplined: deep navy and off-white carry nearly every surface, and color is punctuation. Lavender means "this can be acted on." Nothing else is lavender.

### Foundation

```
--color-bg-primary:      #000F1F   /* deep navy, the page */
--color-bg-elevated:     #08203A   /* header, carousel frames, video posters (1.17:1 against the page) */
--color-bg-raised:       #061C2F   /* raised panels */
--color-bg-inverse:      #F5F5F4   /* rare; color-block sections */
```

Cards paint `#04192B` through the `.card` role; the value card (`.card-value`) paints a deeper navy `#010F1C` under a brand-purple wash (see section 5).

### Type colors

```
--color-text-primary:    #F5F5F4   /* warm off-white, headings and emphasis */
--color-text-secondary:  #B3B3B3   /* mid gray, body and supporting text; lifted 10% from #A3A3A3, November 11, 2026; 9.20:1 on the page */
--color-text-tertiary:   #9A9A9A   /* labels, captions, metadata; lifted 10% from #8C8C8C, November 11, 2026; 6.86:1 on the page, 6.14:1 on raised, 5.84:1 on elevated, AA */
--color-text-inverse:    #0A0A0A   /* type on light pills and color blocks */
```

Page H1s and the hero lead use a warm cream (`#DAD8C9`, the lead at 82%) set in their roles.

### Borders & dividers

```
--color-border-subtle:   #262626   /* dividers, hairlines */
--color-border-default:  #404040   /* cards */
--color-border-strong:   #737373   /* card hover, emphasis */
```

### Brand color family: the gradient palette

These colors form the atmospheric brand gradient (blue to purple to pink) and are used solo as accents.

```
--color-brand-blue:      #4F46E5   /* deep electric indigo */
--color-brand-purple:    #6B5CFF   /* periwinkle; the primary action pill and the focus ring */
--color-brand-pink:      #E879F9   /* hot pink/magenta */
--color-brand-orange:    #FF5722   /* retired as the link color in v2.0; kept for rare indicators */
```

### Brand gradient

The hero atmospheric glow uses this exact gradient at low opacity behind dark imagery:

```css
background: radial-gradient(
  ellipse at center,
  rgba(79, 70, 229, 0.35) 0%,
  rgba(107, 92, 255, 0.20) 30%,
  rgba(232, 121, 249, 0.10) 60%,
  transparent 100%
);
```

### The brand rule (November 11, 2026)

The gradient as a line, carried over from Shawn's original site. One value, `--brand-rule` in `app/globals.css`:

```css
--brand-rule: linear-gradient(90deg, #536BF4 0%, #9968D7 50%, #EA67BA 100%);
```

The stops are the original site's colors, sampled from its rule, so they sit near the brand tokens rather than on them. Two roles, each once per page:

- **Title stub.** A 64 x 3px mark (2px radius) 20px under every page H1, drawn by `.hero-title::after`. It opens every page; whatever follows the H1 keeps its 24px.
- **Ask rule.** A 2px line on the top edge of every closing ask (`.ask-rule`, drawn with `::before`), replacing the section's 1px top border. It marks the next step, beside the purple `.btn-next`: the homepage, /about, /thinking, /engagements, /how-i-help, and every case study.

It is not a divider: never on a section break or the footer. Decorative, so it carries no contrast requirement.

### Semantic colors (functional)

```
--color-link:            #A798FF   /* lavender: links, button text, the active item in a loop or list */
--color-link-hover:      #FFFFFF   /* white on hover */
--color-focus-ring:      #6B5CFF   /* periwinkle focus ring */
--color-success:         #10B981   /* used sparingly */
--color-warning:         #F59E0B
--color-error:           #EF4444
```

### Color usage rules

Lavender is the only color for things that can be acted on: links, button text, the current Process move, the current chapter, and an accordion title on hover. Labels, eyebrows, captions, and metadata are tertiary gray in mono, never lavender, because a label in link color reads as a link on a phone. Periwinkle is reserved for the primary action pill and the focus ring. The full gradient is reserved for atmosphere, plus the brand rule above (the title stub and the ask rule). If a color appears more than three times on a page, it is no longer doing punctuation work.

---

## 3. Typography

### Type families

Three faces, three jobs:

- **Instrument Sans** for every heading (h1, h2, h3) and the hero lead.
- **Geist** for body text, buttons, and UI.
- **Geist Mono** for labels only: eyebrows and metadata. Mono never sets a sentence.

All three load through `next/font/google` in `app/layout.tsx`.

**Wordmark:** the handwritten "Capizzi" signature is a vector SVG asset, not a font. It is the only handwriting on the site.

### Heading roles

Heading sizes come from four roles in `globals.css`, never from per-element size utilities.

```
.hero-title     page H1        30px, 39px from 1024px   600, tracking -0.03em, leading 1.12 then 1.05
.hero-lead      under the H1   Instrument Sans 20px     400, leading 1.5, no tracking, cream at 82%
.section-title  every H2       30px                     600, tracking -0.025em, leading 1.2
.card-title     card titles    20px, 24px from 768px    600, tracking -0.02em, leading 1.25
```

Page heroes pair `.hero-title` with `.headline-static` (cream). Only the homepage uses `.headline-gleam`.

### Body roles

Five roles carry the size, the leading, and the gap from the paragraph before (phone / from 768px):

```
.lead-text      18 / 20   leading 1.6   the paragraph under a section title, and every closing ask
.body-text      16 / 18   leading 1.6   all running prose; .prose-block containers carry the same size
.card-text      16        leading 1.6   card and panel text
.small-text     14        leading 1.5   captions, credits, fine print
.quote-text     20 / 24   leading 1.4   pull quotes (.quote-display 24 / 30 for the one large quote on /about)
```

### Labels

```
.eyebrow / .metadata-label   Geist Mono 12px, 500, tracking 0.1em, uppercase, tertiary gray, leading 1.4
```

---

## 4. Spacing & Layout

Everything sits on an 8px base, and each gap belongs to a role rather than a page.

### Type spacing

Type spaces itself: each role carries the gap to whatever follows it.

```
--space-after-eyebrow:      16px   eyebrow or label to its heading
--space-after-hero-title:   24px   H1 to the hero lead
--space-after-title:        24px   section title to its text
--space-after-card-title:   12px   card title to its text
--space-paragraph:          24px   between paragraphs
--space-paragraph-card:     16px   between paragraphs in a card
```

### Section rhythm

Four section roles (phone / tablet / desktop, each side):

```
.section          48 / 64 / 80    ordinary sections
.section-close    64 / 80 / 96    the closing ask and testimonials
.section-tight    32 / 40 / 48    strips and bands that belong to the section above
.section-hero     128 / 160 top   clears the fixed header
```

### Gutters

```
--space-card     24 / 28 / 32    card inset, and the gutter between cards or image tiles (.card-grid)
--space-split    40 / 48 / 64    between text and the image, quote, or column beside it (.split-grid)
```

### Containers

```
max-w-content:   72rem (1152px)   page content
max-w-wide:      88rem (1408px)   header, footer, and logo strip only
max-w-narrow:    48rem (768px)    long-form reading
```

### Edge padding

```
px-6   (24px)   phone
px-8   (32px)   tablet
px-12  (48px)   desktop
```

---

## 5. Components

### Wordmark

The handwritten "Capizzi" signature is the primary identity. Specs:

- **Hero treatment:** Full visual element, ~50–60% of viewport width on desktop, scales down to 80% width on mobile.
- **Header navigation:** Left-aligned, ~120px wide, 40px tall.
- **Footer:** Same as header, optionally smaller.
- **Color:** Always `--color-text-primary` (warm off-white). Never colored.

### Symbol mark (the starburst)

A 16-point geometric burst drawn with the same hand-quality as the wordmark. Lives at small sizes where the wordmark is illegible.

- **Favicon:** 32x32px, simplified to 8 points if needed for legibility.
- **Social avatars:** 400x400px, white burst on black ground.
- **Section dividers:** 24px symbol with `>>` typographic punctuation flanking it: `>> ✷ <<`
- **Lead magnet cover:** Large symbol as background watermark at 5% opacity.

### Typographic punctuation: `>>`

A signature mark of the brand. Used between phrases ("Clarity. Alignment. >> Momentum.") and as a section divider. Always in `font-mono` to ensure it renders consistently.

### Buttons

Color says what happens next (November 11, 2026), so a visitor can tell the next best step at a glance. Two pill roles in `app/globals.css`, both Geist 16px medium, 14px 28px inset, full radius:

```
.btn-next   Background --color-brand-purple (#6B5CFF), white text (4.57:1)
            The next step: every ask that goes to /contact, the calendar,
            or the email list. Homepage hero and closing ask, each page's
            closing ask (case studies, /about, /engagements, /thinking,
            /how-i-help), the /engagements strip, the /contact calendar,
            and the signup buttons.
.btn-see    Background --color-text-primary (off-white), ink text
            Go see real work: live products, case studies, Figma, the
            Clarity Cards deck.
.btn-sm     Compact size for pills inside cards (10px 20px, 14px type).
Hover       Grow 2%, never a color change.
```

The header "Let's talk" is an off-white pill on purpose: it is page chrome on every page, not the page's guidance.

**Text link:**
Arrow notation: `View the case study →` or `Open courtvisual.com →`
Color: `--color-link` (lavender)
Hover: `--color-link-hover` (white)

**Selected states** (Process step tabs, the book contents) use lavender: a lavender edge, lavender text, and a 10% lavender tint. Purple fills are reserved for `.btn-next`.

**Exceptions:** the case study carousel arrows are mono outline buttons that stay still on hover; the book reader keeps its own printed-page controls.

Hover appears only on devices that can hover. The site uses three hover moves and no others: text links turn white, pills grow 2%, clickable cards brighten (below). Accordion titles and chevrons turn lavender.

### Cards

One role, `.card`, is the whole recipe:

```
Background: #04192B
Border: 1px solid --color-border-default
Border-radius: 16px
Inset: --space-card (24 / 28 / 32)
Hover (clickable cards): border to --color-border-strong, title to lavender, any image or video inside zooms 2%
```

Two card types, so content reads at a glance. `.card` (navy) is proof and thinking: case studies, products, the Process, the book and Clarity Cards, quotes, About, the homepage doors. `.card.card-value` (violet) is value and services: the homepage engagement cards, the /engagements ways of working, and the Advisory shapes. A row never mixes the two.

```
Value card (.card.card-value)
Background: #010F1C under a brand-purple wash (#6B5CFF at 0.15), purple glow top right (0.16)
Border: 1px paper #ECEFE6 at 26%; hover 46%
Inner rule (text cards only): 1px paper at 13%, 7px inside the border
```

`.card-compact` (16 / 20 / 24) is for dense rows only. A card with an image on top moves the inset to a `.card-body` child so the image runs to the edge. Cards in a row share the row's height; the last action carries `.card-foot` so every action in the row sits on one baseline. Uneven rows are fixed by balancing the copy, never by pinning a footer over a gap.

Cards do not have shadows. Elevation is a surface shift.

### Metadata block (case study labels)

The editorial label/value pattern that appears on case studies.

```
Layout: a strip of label and value pairs, 2 columns on a phone, 4 from 768px
Label: .metadata-label (Geist Mono 12px, uppercase, tertiary gray)
Value: .metadata-value (16px, 500, off-white)
Format: (YEAR) 2023
        (TIMELINE) 3 Months
        (SERVICES) Design System · Branding
        (LIVE) Visit site ↗
```

### Navigation

**Header:**
- Wordmark left, primary nav right, secondary pill far right
- Transparent at the top; once scrolled, `--color-bg-primary` at 85% with a background blur and a hairline below
- Mobile: a menu button opens a full-screen overlay in `--color-bg-elevated`

**Primary nav links:**
- `text-sm tracking-tight`, secondary gray
- Hover: off-white
- Active page: off-white, medium weight

**Footer:**
- Wordmark, the stranger-facing statement (the question, then the positioning line; see section 1), nav links, contact, and the palette emoji that opens /design-info
- Hairline above

### Hero atmospheric backdrop

The radial purple-blue gradient behind the hero portrait. This is the parallax element.

```
Position: absolute, behind portrait, larger than viewport
Effect: scrolls at 0.5x viewport speed (parallax)
Implementation: framer-motion's useScroll + useTransform OR CSS scroll-driven animations
Opacity: 0.65 default, animates to 0.4 on scroll past hero
Mobile: parallax disabled, static image used (performance + motion sensitivity)
```

### Hand-drawn pattern texture (optional, used sparingly)

The hand-drawn geometric tile pattern at very low opacity, layered above section backgrounds where extra texture is wanted. Used on:

- Lead magnet hero
- About page biographical section
- Single editorial moment per case study

```
Opacity: 0.04
Color: --color-text-primary (off-white pattern on black)
Tile size: 200px × 200px, repeating
Format: SVG, single asset
```

This is a "less than once per page" element. If it appears more than once, it loses meaning.

### Color block sections (the "Clarity is the advantage" treatment)

Used for single statement moments. Maximum twice per site.

```
Background: --color-brand-purple (periwinkle)
Text: --color-text-inverse (near-black)
Display type: text-7xl font-black leading-none tracking-tighter
Padding: py-32 minimum
Width: full-bleed (breaks out of content container)
```

### Forms

Used on the field manual signup (`components/SignupCard.tsx`).

```
Input:
  Border: 1px solid rgba(255,255,255,0.12)
  Border-radius: 12px
  Padding: 13px 16px
  Text: 15px
  Focus: border periwinkle (#6B5CFF)

Submit button: periwinkle, 12px radius, 13px 20px padding
```

---

## 6. Photography & Imagery

### Hero photography

The home hero portrait is the photograph with Shawn arms-crossed against the radial dark blue/purple light burst (provided assets `Frame_1__3_.png` or `NJ_based_digital_Strategy_and_UX.jpg` for high-res). The radial backdrop is what makes this image work — it is the visual thesis of the brand.

Mobile: same image, scaled down. No replacement.

### About page photography

The Ethyca arms-crossed shot (`Shawn_181.jpg`). Crop to remove the partial red car at lower-left. This is documentary, not theatrical — the right energy for "this is who's behind the work."

### Case study imagery

Each case study leads with a hero image. Image direction:

- **Onc Coach:** Product UI screen on a clean dark surface, no marketing chrome.
- **Sales Tool System Framework:** Multi-screen system shot showing breadth — dashboard plus device states.
- **SaaS Research + Refinement:** Single bold dashboard hero with one number prominently visible (the 25% or $2.1M).

All case study images sit on `--color-bg-elevated` ground plates with subtle border, never floating in space.

### Logo strip ("Trusted by")

Logos appear in `--color-text-secondary` (mid gray) as monochrome SVGs. Never in their original brand colors. This is non-negotiable: colored logos in a strip read as advertising. Monochrome reads as credentials.

### What we never use

Stock photography of any kind. Illustrative icons (we have one symbol; that's enough). Decorative photography that does not earn its place. Bright on-brand imagery (no SaaS product screens with rainbow gradients).

---

## 7. Motion

Restraint is the rule. Motion serves comprehension or atmosphere; never decoration.

### Permitted motion

**Hero parallax** — radial backdrop moves at 0.5x scroll speed. Disabled on mobile and when `prefers-reduced-motion` is set.

**Page transitions** — 200ms fade between routes. Nothing more.

**Hover states** — 200ms ease-out for color, border, opacity changes. No scaling above 1.02. No bouncing.

**Reveal-on-scroll** — sections fade in over 400ms when they enter viewport, offset 30px. Single use per page section, not on every element.

### Forbidden motion

Character animation (the moving-portrait idea — confirmed off the table). Looping ambient animations. Cursor-followers. Magnetic buttons. Animated gradients. Anything that could trigger motion sickness or read as "designer trying hard."

### Reduced-motion fallback

```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

All parallax and scroll animations are disabled at this breakpoint.

---

## 8. Anti-patterns — what this brand never does

The clearest design systems define what they aren't. Decisions are easier when the anti-list is explicit.

The Capizzi brand never:

- Uses bright SaaS-style sky-blue gradients or rounded blue CTA buttons
- Stacks light cards on light backgrounds (the Leena AI pattern)
- Uses icons or illustrations beyond the single symbol mark
- Uses stock photography
- Uses more than three colors on a page
- Uses pill-shaped CTAs in any color other than off-white or transparent
- Uses ALL CAPS for body copy (only metadata labels and eyebrow text)
- Uses italics for emphasis (use weight or color instead)
- Uses drop shadows for elevation (use background shifts)
- Uses rounded corners larger than 16px on cards or 9999px on buttons
- Uses display typography under 40px (display is large on purpose)
- Uses motion that isn't tied to scroll, hover, or page transition
- Uses "we" anywhere — Shawn is one person, not an agency
- Uses agency-speak: "crafted," "elevated," "transformed," "delighted," "journey"
- Uses generic phrases: "innovative solutions," "cutting-edge," "thought leadership"
- Pitches in the first paragraph of any page

---

## 9. Implementation notes

### Stack

- Next.js 16 (App Router) with Turbopack, TypeScript
- Tailwind CSS v4: tokens in the `@theme` block of `app/globals.css`; there is no `tailwind.config.js`
- Fonts through `next/font/google` in `app/layout.tsx`
- Deployed on Vercel from `main`

### Where things live

```
app/globals.css        tokens, type roles, spacing roles, card and layout roles
app/[route]/page.tsx   pages
components/            one file per component, PascalCase
public/images/         brand, hero, case-studies, logos, practice-grid
CLAUDE.md              project context and the dated record of system decisions
docs/design-system.md  this document
```

### Rules the code follows

- Roles in `globals.css` are unlayered, so they win over any Tailwind utility on the same element. Pages never set their own size, leading, padding, gap, or radius where a role exists.
- Any component that needs a color in JavaScript reads the CSS variable, never a hex copy.
- `/design-info` lists the fonts and the six core colors with their nearest PANTONE matches. Its hex values must equal the tokens.

### Reduced motion

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## 10. Versioning & changes

This is v2.0. Changes get a new version number and a brief note at the top.

Major version (2.0): rebrand, palette change, type system change.
Minor version (1.1): new component, refined token, new pattern.
Patch (1.0.1): typo, wording correction, link update.

When a change ships, the corresponding code change references the version: `// per design-system v1.1`.

---

## End of v2.0

Open questions, open decisions, and ideas waiting for v1.1 are tracked in a separate `design-system-backlog.md` file. This document represents what is locked.
