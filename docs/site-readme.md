# Capizzi Site — Build Package (Final)

**For shawncapizzi.com · Strategic Experience Design**
**Status:** Content locked. Image inventory locked. Brand scrub applied. Ready for Claude Code scaffold.

This supersedes the original `README.md` from May 11. The original is still valid for tech stack and high-level handoff, but route slugs, manuscript version, IA version, and the image package have all moved on.

---

## What's in this package

```
capizzi-site-package/
├── README.md                         ← this file
├── IMAGE-INVENTORY.md                ← image rename map, asset decisions, naming audit
├── manuscript-v2-2.md                ← every word of every page (final, brand-scrubbed)
├── ia-framework-v1-1.md              ← URL structure + page priorities (aligned to v2.2)
├── design-system.md                  ← tokens, type, color, spacing (unchanged from original)
└── images/                           ← 44 image files, brand-clean filenames
    ├── brand/                        3 — headshot, signature, wordmark
    ├── hero/                         1 — consumer care hub hero
    ├── logos/                        6 — Trusted-by strip (AVIF mono)
    ├── practice-grid/                2 — pharma practice tiles
    └── case-studies/
        ├── 01-pharma-design-systems/             5
        ├── 02-multi-brand-pharma-sales-tools/    7
        ├── 03-enterprise-financial-services-crm/ 6
        ├── 04-cancer-equality-app/               6
        └── 05-ai-native-product-design-lab/      8
```

---

## What changed from the original README

| | Original | Now |
|---|---|---|
| Manuscript | v2.1 | **v2.2** (brand-scrubbed) |
| IA framework | v1.0 | **v1.1** (5 case studies, updated routes) |
| BC Navi route slug | `/work/bc-navi-patient-navigation` | `/work/cancer-equality-app` |
| Image count | ~36 | **44** (logos added; CS5 grew to 8) |
| Trusted-by logos | Pfizer, Bloomberg, Samsung, Biogen, AbbVie, IPG Health | Pfizer, Bloomberg, Samsung, **Columbia Business School, OpenAI**, IPG Health |
| Brand names in case studies | Mostly generic | Fully scrubbed (Tecfidera, HYMPAVZI, Camzyos, Prevnar, PfizerForAll, Keytruda → category stand-ins; BC Navi → Cancer Equality App) |
| CS5 image count | 7 | 8 (Automation Opportunity Assessment added at slot 07) |
| CS3 image count | 7 (with sticky-note research) | 6 (sticky-note dropped, renumbered) |

---

## Locked decisions (unchanged from original)

- Tech: Next.js 14 (App Router) + MDX + Tailwind + Vercel + GoDaddy DNS cutover
- 16 routes locked (now with `/work/cancer-equality-app` replacing the BC Navi slug)
- Cal.com booking: `https://cal.com/capizzi/15min`
- Email: `capizzi@gmail.com` · Phone: `212-380-3900`
- HubSpot Free CRM · Vercel Analytics + Hotjar + PostHog
- Razorfish (Publicis) named on About + FAQ only; EVERSANA INTOUCH article citation kept
- Chrysalis Initiative, Jamila, D&AD Pencil, Erase The Line campaign all kept as named credits

---

## Scaffold handoff prompt (updated)

Open a fresh Claude Code session and attach: `manuscript-v2-2.md`, `ia-framework-v1-1.md`, `design-system.md`, `IMAGE-INVENTORY.md`, plus this README. Then paste:

> *I'm building shawncapizzi.com. Next.js 14 (App Router) + MDX + Tailwind CSS + Vercel. Five docs attached: README (package overview + what's changed), manuscript v2.2 (every word of every page, brand-scrubbed), IA framework v1.1 (16 locked routes), design system (tokens), and the image inventory (rename map and asset decisions).*
>
> *Scaffold the full project. Show me the file tree first, then build. I want:*
> - *Complete repo structure with all 16 routes baked in via MDX*
> - *Tailwind config wired to the design tokens from the design system doc*
> - *CLAUDE.md at the repo root summarizing project context, stack, and what's been built*
> - *Public image folder structure matching the package — drop my zipped `images/` into `/public/images/`*
> - *Schema.org markup: Person, Article, CaseStudy, FAQPage (for `/faq`)*
> - *Vercel-ready with `next.config.mjs` and `vercel.json` for redirects from old Framer URLs*
> - *Note: BC Navi case study URL is now `/work/cancer-equality-app` (not the older `bc-navi-patient-navigation` slug)*
>
> *Cal.com: https://cal.com/capizzi/15min · Email: capizzi@gmail.com · Phone: 212-380-3900*
>
> *Begin with the file tree. Pause for approval before writing files.*

---

## What still needs to be generated at scaffold time

- Custom OG images per route (after design phase)
- Favicon set (from wordmark/signature)
- Book first chapter (placeholder until book launches)

