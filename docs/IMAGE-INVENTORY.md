# Capizzi Site Package — Final State ✅

**Package date:** May 11, 2026
**Status:** Image inventory complete (38 files). Manuscript v2.2 + IA v1.1 produced with full brand scrub. Ready for Claude Code scaffold.

---

## Top-level package contents

```
capizzi-site-package/
├── IMAGE-INVENTORY.md                ← this file
├── manuscript-v2-2.md                ← scrubbed manuscript (was v2-1)
├── ia-framework-v1-1.md              ← scrubbed IA framework (was v1-0)
└── images/
    ├── brand/                        3 files (headshot, signature, wordmark)
    ├── hero/                         1 file
    ├── logos/                        6 files (Trusted-by strip, AVIF mono)
    ├── case-studies/
    │   ├── 01-pharma-design-systems/             5
    │   ├── 02-multi-brand-pharma-sales-tools/    7
    │   ├── 03-enterprise-financial-services-crm/ 6
    │   ├── 04-cancer-equality-app/               6   ← renamed from 04-bc-navi-patient-navigation
    │   └── 05-ai-native-product-design-lab/      8
    └── practice-grid/                2
                                     ──
                                     44
```

## Trusted-by logo strip — `/images/logos/`

Six AVIF files, monochrome white treatment, in scroll order:

1. `01-pfizer.avif`
2. `02-bloomberg.avif`
3. `03-samsung.avif`
4. `04-columbia-business-school.avif`
5. `05-openai.avif`
6. `06-ipg-health.avif`

**Note:** Lineup updated from the earlier IA framework spec. Biogen + AbbVie replaced by Columbia Business School + OpenAI (per assets supplied).

---

## Brand-clean filename audit

All 38 image files use generic, category-descriptive filenames. The 9 renames in this pass:

| Was | Now |
|---|---|
| `hero/pfizer-for-all-hero-balanced.gif` | `hero/consumer-care-hub-hero-balanced.gif` |
| `cs/01/01-hympavzi-home-wireframe-walkthrough.mov` | `cs/01/01-bleeding-disorder-home-wireframe-walkthrough.mov` |
| `cs/01/05-prevnar-content-audit-scientific-story.gif` | `cs/01/05-vaccine-content-audit-scientific-story.gif` |
| `cs/02/01-hero-tecfidera-wireframe-to-product.png` | `cs/02/01-hero-lead-brand-wireframe-to-product.png` |
| `cs/02/02-veeva-sales-flow-storyboard.png` | `cs/02/02-rep-tablet-sales-flow-storyboard.png` |
| `cs/02/03-ms-franchise-multi-brand-email-selector.png` | `cs/02/03-franchise-multi-brand-email-content-selector.png` |
| `cs/02/04-tecfidera-global-experience-340k.png` | `cs/02/04-lead-brand-global-experience-340k.png` |
| `cs/04/02-bc-navi-marketing-site-laptop.jpeg` | `cs/04/02-app-marketing-site-laptop.jpeg` |
| `cs/05/02-ai-patient-support-keytruda-detail.png` | `cs/05/02-ai-patient-support-drug-detail.png` |

Plus folder rename: `case-studies/04-bc-navi-patient-navigation/` → `case-studies/04-cancer-equality-app/`

---

## Manuscript v2.2 — change summary

**Brand scrub applied:**
- Tecfidera → "the lead MS brand"
- HYMPAVZI → "the rare bleeding disorder brand"
- Camzyos / Prevnar 20 / Keytruda / Monjuvi / PfizerForAll → category stand-ins
- Plegridy / Tysabri / Avonex → "other MS franchise siblings"
- BC Navi → Cancer Equality App
- Razorfish (Publicis) on Pfizer brands: kept on About + FAQ only (per README)
- EVERSANA INTOUCH article citation: kept (verifiable external credential)
- Veeva, Salesforce, Miro, Figma, v0, Base44: kept (tools, not clients)

**Home page card titles updated to credit-style:**
- Card 1: **Pfizer Global Design System Leadership**
- Card 2: **Biogen Multi-Brand Sales Tools**
- Card 3: **Bloomberg Enterprise CRM Transformation**
- Card 4: **Chrysalis Initiative · Cancer Equality App**
- Card 5: **AI-Native Product Design Lab**

Detail page H1s remain descriptive (anonymized body). Credit lives in the card title and eyebrow only.

**"Trusted by" logo strip:** explicit list of Pfizer, Bloomberg, Samsung, Biogen, AbbVie, IPG Health.

**Structural manuscript moves:**
- All source filenames (`144shots_so.png`, `Screenshot_2026-...png`, etc.) replaced with final kebab-case filenames
- CS3 sticky-note research line removed; slot references renumbered 04-07 → 03-06
- CS5 new paragraph inserted for slot 07 Automation Opportunity Assessment (between Three Custom GPTs and Workshop)
- CS5 Workshop image renumbered from slot 07 to slot 08
- Three orphan captions written: lead-brand global proof point (CS2), Person View with usage chart (CS3), content-strategy + journey mapping tile (practice grid)

---

## IA framework v1.1 — change summary

- Site map expanded from 3 case studies to 5, aligned to README's 16 locked routes
- BC Navi URL slug renamed: `/work/cancer-equality-app`
- Selected Work card titles in section 4.1 updated to match manuscript credit-style
- Trusted by logo strip retained as specified (Pfizer, Bloomberg, Samsung, Biogen, AbbVie, IPG Health)
- Deferred list cleaned: removed `/case-studies/pfizer-sales-tools` (CS2 is now in main lineup)

---

## Items kept (per Shawn's explicit call)

- ✅ "Trusted by" logos: Pfizer, Bloomberg, Samsung, Biogen, AbbVie, IPG Health
- ✅ Home page card title credit-style: "Pfizer Global Design System Leadership" pattern
- ✅ About page mentions of Razorfish (Publicis) and Pfizer brands as current role
- ✅ EVERSANA INTOUCH published article citation
- ✅ The Chrysalis Initiative (founding nonprofit partner)
- ✅ Jamila (founder)
- ✅ D&AD Pencil — Future Impact Initiative 2022 (recognition)
- ✅ Erase The Line (campaign name)
- ✅ Therapeutic conditions (factual): multiple sclerosis, hemophilia, hypertrophic cardiomyopathy, pneumococcal disease, psoriasis, breast cancer, DLBCL, oncology indications
- ✅ Third-party tools: Veeva, Salesforce, Miro, Figma, v0, Base44 (tools used, not clients revealed)
- ✅ Prevnar GIF reuse across CS1 and Practice Pillars (confirmed intentional)

---

## What's ready for Claude Code scaffold

1. `manuscript-v2-2.md` — every word of every page, brand-clean
2. `ia-framework-v1-1.md` — 16 locked routes with brand-clean URL slugs and credit-style card titles
3. `images/` — 38 image files in 8 folders, all generic filenames
4. `IMAGE-INVENTORY.md` — this file (final state)

Original READMe (`/mnt/user-data/uploads/README.md`) still applies for tech stack, package handoff process, and Claude Code scaffold instructions. One discrepancy to note: the README's locked route `/work/bc-navi-patient-navigation` has been updated to `/work/cancer-equality-app` per the brand scrub.

---

## Open items before scaffold (none blocking)

- Custom OG images per route — generate after design phase
- Favicon set — generate from wordmark/signature
- "Trusted by" logo files — pull from official brand sites at design time (per README)
- Book first chapter — placeholder content until book launches
