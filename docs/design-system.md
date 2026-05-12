# Capizzi Design System

**Version 1.0** · May 2026
Maintained by Shawn Capizzi

---

## How to use this document

This is the single source of truth for the visual and verbal identity of shawncapizzi.com and any extension of the Capizzi brand (decks, lead magnets, social, future product). It is a working document, not a frozen spec — every decision in here is editable. When we make a change, we change it here first, then in the code.

When implementing, this file maps to two companion artifacts in the codebase:

- `tailwind.config.js` — design tokens exposed to the framework
- `globals.css` — CSS custom properties and base styles

The values in this doc are the source. The code mirrors it.

---

## 1. Brand Foundation

### Who this brand is for

The Capizzi brand exists to convert a specific buyer: a Director, VP, or C-level leader inside a regulated or enterprise organization — pharma, healthcare, financial services, or any environment where complexity, compliance, and stakeholder pressure compound. They have budget, they have an AI initiative that is stuck, and they need a senior peer who can think with them rather than a vendor who pitches at them.

The brand is not designed for the design community, for portfolio peers, or for general SaaS audiences. Design choices that would impress fellow designers but feel performative to a CIO are deliberately rejected.

### The thesis

> **AI adoption is not a technology problem. It is an experience architecture problem.**

Every page of the site, every piece of content, every visual decision should reinforce this. It is the line that differentiates Shawn from every other consultant in his target buyer's inbox.

### The recurring brand line

> **Clarity is the advantage.**

This phrase appears in three places: hero supporting line, lead magnet identity, footer. It is the short-form expression of what Shawn sells.

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

The palette is disciplined: black-and-white as 90% of the surface, color used as punctuation. Three color families do specific jobs.

### Foundation

```
--color-bg-primary:      #0A0A0A   /* near-black, true background */
--color-bg-elevated:     #141414   /* cards, subtle elevation */
--color-bg-raised:       #1F1F1F   /* hover states, deeper layers */
--color-bg-inverse:      #F5F5F4   /* rare; used for color-block sections */
```

### Type colors

```
--color-text-primary:    #F5F5F4   /* warm off-white, all body and display */
--color-text-secondary:  #A3A3A3   /* mid gray, supporting text */
--color-text-tertiary:   #737373   /* metadata, captions, eyebrow labels */
--color-text-inverse:    #0A0A0A   /* type on color-block sections */
```

### Borders & dividers

```
--color-border-subtle:   #262626   /* default borders, dividers */
--color-border-default:  #404040   /* inputs, cards */
--color-border-strong:   #737373   /* focused inputs, emphasis */
```

### Brand color family — the gradient palette

These three colors form the atmospheric brand gradient (blue → purple → pink) and are also used solo as accents and color blocks.

```
--color-brand-blue:      #4F46E5   /* deep electric indigo */
--color-brand-purple:    #6B5CFF   /* periwinkle — the "Clarity is the advantage" color */
--color-brand-pink:      #E879F9   /* hot pink/magenta */
--color-brand-orange:    #FF5722   /* the action accent — links, CTAs, "Live ↗" indicators */
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

For full saturation color blocks (lead magnet headers, statement panels), use `--color-brand-purple` as solid background with `--color-text-inverse` type.

### Semantic colors (functional)

```
--color-link:            #FF5722   /* orange — link default */
--color-link-hover:      #FFFFFF   /* white on hover */
--color-focus-ring:      #6B5CFF   /* periwinkle focus ring */
--color-success:         #10B981   /* used sparingly */
--color-warning:         #F59E0B
--color-error:           #EF4444
```

### Color usage rules

The orange accent is the *only* color used for actions and links. It does not appear decoratively. The periwinkle purple is reserved for **moments** — the Clarity Advantage lead magnet, single statement panels, the focus ring. The full gradient is reserved for **atmosphere** — hero backdrop, occasional section transitions. If a color appears more than three times on a page, it is no longer doing punctuation work.

---

## 3. Typography

### Type families

**Display & Body — Geist Sans**
Free, modern, designed for screens, ships natively with Next.js via `next/font`. Tight tracking at large sizes, excellent at body sizes. The choice that lets the design system feel current without being trend-chasing.

**Monospace — Geist Mono**
Used for metadata blocks, code references, and the editorial structured labels: `(YEAR) 2023 / (TIMELINE) 3 Months / (SERVICES) Website · Branding`.

**Wordmark — custom asset**
The handwritten "Capizzi" signature is a vector SVG asset, not a font. It is the only "handwriting" on the site.

**Fallback stack:** `'Geist', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif`

### Type scale

A modular scale weighted toward large display sizes. Body sizes use a perfect-fourth ratio; display sizes scale more aggressively.

```
text-xs:        0.75rem   (12px)   — micro labels, footnotes
text-sm:        0.875rem  (14px)   — captions, metadata values
text-base:      1rem      (16px)   — body default
text-lg:        1.125rem  (18px)   — body large, hero secondary
text-xl:        1.25rem   (20px)   — section intros
text-2xl:       1.5rem    (24px)   — small headings
text-3xl:       1.875rem  (30px)   — H3
text-4xl:       2.5rem    (40px)   — H2
text-5xl:       3.5rem    (56px)   — H1 (sub-hero)
text-6xl:       4.5rem    (72px)   — large headlines
text-7xl:       6rem      (96px)   — display headlines
text-8xl:       8rem      (128px)  — hero display
text-display:   12rem     (192px)  — wordmark hero treatment (desktop only)
```

On mobile, display sizes step down proportionally: `text-display` becomes `text-7xl` at <768px viewport.

### Type weights

Geist Sans ships with the full weight range. Used:

- `font-light` (300) — body italic-substitute, soft emphasis
- `font-normal` (400) — body default
- `font-medium` (500) — UI labels, buttons
- `font-semibold` (600) — H3, eyebrow labels
- `font-bold` (700) — H1, H2, CTAs
- `font-black` (900) — hero display only, when the moment calls for it

### Tracking (letter-spacing)

```
tracking-tighter:  -0.05em   /* display headlines 5xl+ */
tracking-tight:    -0.025em  /* large headings */
tracking-normal:   0          /* body */
tracking-wide:     0.025em   /* small caps eyebrow labels */
tracking-widest:   0.1em     /* metadata labels: (YEAR), (SERVICES) */
```

### Line height

```
leading-none:    1       /* display headlines */
leading-tight:   1.1     /* large headings */
leading-snug:    1.3     /* small headings */
leading-normal:  1.5     /* body default */
leading-relaxed: 1.65    /* long-form reading */
```

### Type pairings — actual usage

**Hero display:**
`text-display font-bold tracking-tighter leading-none`

**H1 (page titles):**
`text-6xl font-bold tracking-tight leading-tight`

**H2 (section heads):**
`text-4xl font-semibold tracking-tight leading-tight`

**H3 (subsections):**
`text-2xl font-semibold leading-snug`

**Body default:**
`text-base font-normal leading-relaxed text-secondary`

**Body large (hero supporting copy):**
`text-lg font-normal leading-relaxed text-secondary`

**Eyebrow labels (above section heads):**
`text-xs font-medium tracking-widest uppercase text-tertiary`

**Metadata blocks (case studies):**
`font-mono text-sm tracking-wide uppercase text-tertiary`
Format: `(LABEL) value` — parens around the label, value follows.

---

## 4. Spacing & Layout

### Spacing scale

Built on a 4px base. Used for padding, margin, and gap.

```
space-0.5:  2px
space-1:    4px
space-2:    8px
space-3:    12px
space-4:    16px
space-6:    24px
space-8:    32px
space-12:   48px
space-16:   64px
space-20:   80px
space-24:   96px
space-32:   128px
space-40:   160px
space-48:   192px
```

### Section rhythm

Vertical padding between major sections is generous and consistent. The site breathes.

- **Hero section:** `py-32` desktop, `py-20` mobile
- **Standard content section:** `py-24` desktop, `py-16` mobile
- **Tight section (e.g. logo strip):** `py-12` desktop, `py-8` mobile
- **Section-to-section divider:** `mt-32` between major sections

### Container & grid

The site uses a constrained content container with a wider hero region.

```
max-w-content:   72rem (1152px)   /* default content width */
max-w-wide:      88rem (1408px)   /* hero, full case study layouts */
max-w-narrow:    48rem (768px)    /* long-form reading, lead magnet */
```

12-column grid with 24px gutters. Mobile collapses to single column at <768px.

### Edge padding

```
px-6   (24px)   /* mobile */
px-8   (32px)   /* tablet */
px-12  (48px)   /* desktop */
px-16  (64px)   /* wide desktop */
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

Two variants, both pill-shaped.

**Primary CTA (Book a Strategy Call, Get the Guide, etc.):**
```
Background: --color-text-primary (off-white)
Text: --color-bg-primary (near-black)
Border-radius: 9999px (full pill)
Padding: 16px 32px (desktop), 14px 24px (mobile)
Font: text-base font-medium tracking-tight
Hover: subtle scale 1.02, no color change
```

**Secondary CTA (See how I work, View case study):**
```
Background: transparent
Text: --color-text-primary
Border: 1px solid --color-border-default
Border-radius: 9999px
Same padding as primary
Hover: border becomes --color-text-primary (full white)
```

**Tertiary text link:**
Inline arrow notation: `View case study →` or `Live website ↗`
Color: `--color-link` (orange)
Hover: `--color-link-hover` (white)
Underline: never default, only on hover with `text-decoration-thickness: 1px`

### Cards

Used for case study previews, engagement offers, article links.

```
Background: --color-bg-elevated
Border: 1px solid --color-border-subtle
Border-radius: 16px (rounded but not pill)
Padding: 32px desktop, 24px mobile
Hover: border becomes --color-border-strong, subtle bg lift to --color-bg-raised
Transition: 200ms ease-out
```

Cards do not have shadows. Elevation is communicated through subtle background shifts.

### Metadata block (case study labels)

The editorial label/value pattern that appears on case studies.

```
Layout: two-column on desktop (label left, value right), stacked on mobile
Label: font-mono text-xs tracking-widest uppercase text-tertiary
Value: text-base font-medium text-primary
Format: (YEAR) 2023
        (TIMELINE) 3 Months
        (SERVICES) Design System · Branding
        (LIVE) Visit site ↗
```

### Navigation

**Header:**
- Wordmark left, primary nav center-right, CTA button far right
- Background: `--color-bg-primary` with `backdrop-blur-md` and `border-b border-border-subtle` when scrolled
- Height: 72px desktop, 64px mobile
- Mobile: hamburger replaces center nav, opens full-screen overlay menu in `--color-bg-elevated`

**Primary nav links:**
- `text-sm font-medium tracking-tight text-secondary`
- Hover: `text-primary`
- Active page: `text-primary` with thin orange underline 2px below

**Footer:**
- Single row on desktop, stacked on mobile
- Wordmark, brand line ("Clarity is the advantage."), nav links, social icons, contact info
- Border-top: `1px solid --color-border-subtle`
- Padding: `py-16`

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

Used on the lead magnet signup and contact page.

```
Input:
  Background: --color-bg-elevated
  Border: 1px solid --color-border-default
  Border-radius: 12px
  Padding: 16px 20px
  Text: text-base text-primary
  Placeholder: --color-text-tertiary
  Focus: border --color-focus-ring (periwinkle), ring 3px rgba(periwinkle, 0.2)

Label:
  text-sm font-medium text-secondary
  Margin-bottom: 8px

Submit button: Primary CTA spec
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

### File structure (when scaffolded)

```
/
├── app/                          # Next.js app router
│   ├── page.tsx                  # Home
│   ├── about/page.tsx
│   ├── engagements/page.tsx
│   ├── work/page.tsx             # Case study index
│   ├── work/[slug]/page.tsx      # Individual case study (MDX)
│   ├── thinking/page.tsx
│   └── clarity-advantage/page.tsx # Lead magnet
├── content/
│   └── case-studies/
│       ├── onc-coach.mdx
│       ├── sales-tool-system.mdx
│       └── saas-research.mdx
├── components/
│   ├── Wordmark.tsx
│   ├── SymbolMark.tsx
│   ├── Hero.tsx
│   ├── EngagementCard.tsx
│   ├── MetadataBlock.tsx
│   └── ... etc
├── public/
│   ├── images/
│   ├── wordmark.svg
│   └── symbol.svg
├── styles/
│   └── globals.css
├── tailwind.config.js
├── CLAUDE.md                     # Project context for Claude Code
└── capizzi-design-system.md     # This document
```

### Tailwind config (key extensions)

```js
// tailwind.config.js — partial
module.exports = {
  theme: {
    extend: {
      colors: {
        bg: {
          primary: '#0A0A0A',
          elevated: '#141414',
          raised: '#1F1F1F',
          inverse: '#F5F5F4',
        },
        text: {
          primary: '#F5F5F4',
          secondary: '#A3A3A3',
          tertiary: '#737373',
          inverse: '#0A0A0A',
        },
        border: {
          subtle: '#262626',
          default: '#404040',
          strong: '#737373',
        },
        brand: {
          blue: '#4F46E5',
          purple: '#6B5CFF',
          pink: '#E879F9',
          orange: '#FF5722',
        },
      },
      fontFamily: {
        sans: ['var(--font-geist-sans)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-geist-mono)', 'monospace'],
      },
      fontSize: {
        'display': ['12rem', { lineHeight: '1', letterSpacing: '-0.05em' }],
      },
      maxWidth: {
        'content': '72rem',
        'wide': '88rem',
        'narrow': '48rem',
      },
    },
  },
};
```

### Global CSS root

```css
/* globals.css — partial */
:root {
  --color-bg-primary: #0A0A0A;
  /* ... all tokens from sections above ... */
}

html {
  background: var(--color-bg-primary);
  color: var(--color-text-primary);
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
}

body {
  font-family: var(--font-geist-sans);
}

@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

### Required assets to create or finalize before build

The following assets are needed before scaffolding the Next.js project:

1. `wordmark.svg` — the handwritten "Capizzi" signature, vectorized, 1-color (white)
2. `symbol.svg` — the 16-point hand-drawn starburst mark, 1-color (white)
3. `wordmark-favicon.svg` — simplified symbol for favicon use
4. Hero portrait at 1920×1280 minimum, optimized PNG with transparency
5. About portrait at 1200×1500, optimized JPG
6. Case study hero images — three images, 1600×1000 each
7. Trusted-by logos — SVG files of: Pfizer, Bloomberg, Samsung, Biogen, AbbVie, IPG Health (others as needed), all converted to monochrome white

---

## 10. Versioning & changes

This is v1.0. Changes get a new version number and a brief note at the top.

Major version (2.0): rebrand, palette change, type system change.
Minor version (1.1): new component, refined token, new pattern.
Patch (1.0.1): typo, wording correction, link update.

When a change ships, the corresponding code change references the version: `// per design-system v1.1`.

---

## End of v1.0

Open questions, open decisions, and ideas waiting for v1.1 are tracked in a separate `design-system-backlog.md` file. This document represents what is locked.
