// Destination: app/design-info/page.tsx
import { pageMetadata } from "@/lib/seo";

/**
 * Design info: how the site itself was designed and built, for the
 * designers and developers who want to know. Moved here from the foot of
 * /about (the "About this site" colophon) in October 2026, and linked from
 * the footer's palette emoji. Not part of the sales path.
 *
 * The typefaces and the six colors are listed with each color's nearest
 * PANTONE Solid Coated match. It is a designer's footnote, so it states its
 * own method and its own limits.
 *
 * How the Pantone matches were made (September 2026):
 *   - Primary: pantone-cli (index 2026.7.1), CIEDE2000 against Pantone's
 *     published Lab values, sRGB converted to D50 Lab with Bradford
 *     adaptation. The codes and ΔE values below are its output.
 *   - Cross-checked against two independent datasets (the pantoner coated
 *     list with a separate CIEDE2000 implementation, and
 *     simple-color-converter). All three agree on 296 C and 663 C; two of
 *     three agree on Black 6 C, 422 C, and 2725 C. For #A798FF the top three
 *     candidates sit within 0.05 ΔE of each other, so 2705 C is the nearest
 *     of a near tie.
 *   - The two purples land at ΔE 6.6 and 7.1, a visible difference. That is
 *     not a matching error: saturated screen violets sit outside what spot
 *     ink on coated stock can reach. The note under the swatches says so.
 *
 * `ink` is Pantone's own screen rendering of the matched color, shown as a
 * strip under each swatch so the gap between screen and ink is visible
 * rather than claimed.
 *
 * If a token in app/globals.css changes, re-run the match and update this
 * list. Hex values here must equal the tokens exactly.
 */

export const metadata = pageMetadata({
  path: "/design-info",
  title: "Design Info",
  description:
    "Typography, color, design-system choices, and the tools behind shawncapizzi.com.",
});

type Swatch = {
  role: string;
  hex: string;
  pantone: string;
  ink: string;
  deltaE: string;
};

const SWATCHES: Swatch[] = [
  { role: "Background", hex: "#000F1F", pantone: "Black 6 C", ink: "#101820", deltaE: "4.4" },
  { role: "Surface", hex: "#061C2F", pantone: "296 C", ink: "#051C2C", deltaE: "2.0" },
  { role: "Text", hex: "#F5F5F4", pantone: "663 C", ink: "#E5E1E6", deltaE: "5.9" },
  { role: "Secondary text", hex: "#A3A3A3", pantone: "422 C", ink: "#9EA2A2", deltaE: "1.5" },
  { role: "Brand", hex: "#6B5CFF", pantone: "2725 C", ink: "#685BC7", deltaE: "7.1" },
  { role: "Links and labels", hex: "#A798FF", pantone: "2705 C", ink: "#A7A4E0", deltaE: "6.6" },
];

type Face = {
  name: string;
  role: string;
  credit: string;
  className: string;
};

const FACES: Face[] = [
  {
    name: "Instrument Sans",
    role: "Headings",
    credit: "Rodrigo Fuenzalida with Jordan Egstad, Instrument",
    className: "font-[family-name:var(--font-instrument-sans)] font-semibold tracking-[-0.03em]",
  },
  {
    name: "Geist",
    role: "Body and interface",
    credit: "Andrés Briganti and Mateo Zaragoza, Basement Studio for Vercel",
    className: "font-[family-name:var(--font-geist-sans)] font-normal tracking-[-0.02em]",
  },
  {
    name: "Geist Mono",
    role: "Labels",
    credit: "Basement Studio for Vercel",
    className: "font-[family-name:var(--font-geist-mono)] font-normal tracking-[-0.01em]",
  },
];

/* What the site is built with. Only what is in package.json. */
const STACK: [string, string][] = [
  ["Next.js", "App Router, with every page a server component and the interactive parts in client components."],
  ["TypeScript", "Throughout."],
  ["Tailwind CSS", "Version 4. The design tokens live in one @theme block in app/globals.css."],
  ["Vercel", "Hosting. Every push to main deploys."],
  ["next/font", "Fetches the three typefaces once at build time and serves them with the site, so nothing is requested from Google when a page loads."],
];

export default function Page() {
  return (
    <article>
      {/* INTRO */}
      <section className="relative pt-32 md:pt-40 pb-12 md:pb-16">
        <div className="max-w-content mx-auto px-6 md:px-8 lg:px-12">
          <p className="eyebrow mb-3">Design info</p>
          <h1 className="headline-static hero-title text-balance max-w-4xl">
            For the design geeks.
          </h1>
          <p className="hero-lead max-w-3xl text-pretty">
            A few people always want to know the fonts, colors, tools, and
            decisions behind the site. This page is for you.
          </p>
        </div>
      </section>

      {/* WHY IT LOOKS THIS WAY */}
      <section className="py-16 md:py-24 border-t border-border-subtle">
        <div className="max-w-content mx-auto px-6 md:px-8 lg:px-12">
          <h2 className="section-title text-balance mb-8 md:mb-10 max-w-3xl">
            Why it looks this way
          </h2>
          <div className="max-w-3xl space-y-6 text-lg md:text-xl text-text-secondary leading-relaxed text-pretty">
            <p>
              The palette is dark and restrained, with strong contrast and one
              purple, so the case studies and the ideas carry the visual
              weight instead of the chrome around them.
            </p>
            <p>
              The type is editorial: one grotesk for headings, one face for
              reading, one mono for labels. Generous whitespace and a steady
              rhythm of headings, lists, and pull quotes keep long-form work
              easy to scan.
            </p>
            <p>
              Everything is built once and reused, so a page reads the same
              on a phone as it does on a desktop, and a new case study looks
              like it belongs the day it ships.
            </p>
          </div>
        </div>
      </section>

      {/* TYPOGRAPHY */}
      <section className="py-16 md:py-24 border-t border-border-subtle">
        <div className="max-w-content mx-auto px-6 md:px-8 lg:px-12">
          <h2 className="section-title text-balance mb-8 md:mb-10 max-w-3xl">
            Typography
          </h2>
          <p className="max-w-3xl mb-10 md:mb-12 text-lg md:text-xl text-text-secondary leading-relaxed text-pretty">
            Three open-source typefaces, each with one job.
          </p>
          <div className="border-t border-border-subtle">
            {FACES.map((f) => (
              <div
                key={f.name}
                className="grid grid-cols-1 md:grid-cols-[1.4fr_1fr] gap-2 md:gap-10 py-7 md:py-8 border-b border-border-subtle items-baseline"
              >
                <p className={`text-4xl md:text-5xl leading-none text-text-primary ${f.className}`}>
                  {f.name}
                </p>
                <div>
                  <p className="metadata-label">{f.role}</p>
                  <p className="mt-1.5 text-sm md:text-base text-text-secondary leading-relaxed">
                    {f.credit}. SIL Open Font License.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COLOR */}
      <section className="py-16 md:py-24 border-t border-border-subtle">
        <div className="max-w-content mx-auto px-6 md:px-8 lg:px-12">
          <h2 className="section-title text-balance mb-8 md:mb-10 max-w-3xl">
            Color
          </h2>
          <p className="max-w-3xl mb-10 md:mb-12 text-lg md:text-xl text-text-secondary leading-relaxed text-pretty">
            Six colors, each with its nearest PANTONE Solid Coated match.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-5 md:gap-6">
            {SWATCHES.map((s) => (
              <figure key={s.hex} className="min-w-0">
                <div className="rounded-xl overflow-hidden border border-border-default">
                  <div className="aspect-[4/3]" style={{ backgroundColor: s.hex }} />
                  <div
                    className="h-5 md:h-6"
                    style={{ backgroundColor: s.ink }}
                    title={`PANTONE ${s.pantone}, screen rendering`}
                  />
                </div>
                <figcaption className="mt-3 min-w-0">
                  <p className="metadata-label">{s.role}</p>
                  <p className="mt-1.5 font-mono text-sm md:text-base text-text-primary">
                    {s.hex}
                  </p>
                  <p className="mt-0.5 font-mono text-xs md:text-sm text-text-secondary">
                    PANTONE {s.pantone}
                    <span className="text-text-tertiary"> · ΔE {s.deltaE}</span>
                  </p>
                </figcaption>
              </figure>
            ))}
          </div>
          <p className="mt-10 md:mt-12 max-w-3xl text-sm text-text-tertiary leading-relaxed">
            Each swatch shows the screen color above and its nearest PANTONE®
            Solid Coated match below, found by CIEDE2000 against Pantone&apos;s
            published Lab values. A ΔE under 2 is hard to see; above that the
            difference is visible. The two purples sit furthest out because
            saturated screen violets are brighter than spot ink on coated paper
            can print. PANTONE® is a registered trademark of Pantone LLC.
          </p>
        </div>
      </section>

      {/* DESIGN SYSTEM */}
      <section className="py-16 md:py-24 border-t border-border-subtle">
        <div className="max-w-content mx-auto px-6 md:px-8 lg:px-12">
          <h2 className="section-title text-balance mb-8 md:mb-10 max-w-3xl">
            Design system
          </h2>
          <p className="max-w-3xl text-lg md:text-xl text-text-secondary leading-relaxed text-pretty">
            The site is treated as a living system rather than a collection of
            one-off pages. Typography, spacing, color, content patterns, cards,
            and interactions are reused so the experience stays consistent as
            the work evolves. Four type roles cover every heading on the site,
            and the hash-mark rule beside lists and quotes is the same six-pixel
            tile everywhere it appears.
          </p>
        </div>
      </section>

      {/* BUILT WITH */}
      <section className="py-16 md:py-24 border-t border-border-subtle">
        <div className="max-w-content mx-auto px-6 md:px-8 lg:px-12">
          <h2 className="section-title text-balance mb-8 md:mb-10 max-w-3xl">
            Built with
          </h2>
          <p className="max-w-3xl mb-10 md:mb-12 text-lg md:text-xl text-text-secondary leading-relaxed text-pretty">
            Designed and built by me.
          </p>
          <dl className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 md:gap-y-10">
            {STACK.map(([name, note]) => (
              <div key={name} className="hash-rule pl-5 md:pl-6 min-w-0">
                <dt className="text-lg md:text-xl font-semibold text-text-primary">{name}</dt>
                <dd className="mt-1.5 text-base md:text-lg text-text-secondary leading-relaxed text-pretty">
                  {note}
                </dd>
              </div>
            ))}
          </dl>
          <p className="mt-10 md:mt-12 max-w-3xl text-sm text-text-tertiary leading-relaxed">
            The typefaces are named and credited here under their licenses;
            no font files are distributed from this page.
          </p>
        </div>
      </section>
    </article>
  );
}
