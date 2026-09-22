/**
 * Colophon: "About this site" at the foot of /about, linked from the footer.
 *
 * Lists the three typefaces and the six colors that make up the site, each
 * color with its nearest PANTONE Solid Coated match. It is a designer's
 * footnote, so it states its own method and its own limits.
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

export function Colophon() {
  return (
    <section
      id="colophon"
      className="py-16 md:py-24 border-t border-border-subtle scroll-mt-24 md:scroll-mt-32"
    >
      <div className="max-w-content mx-auto px-6 md:px-8 lg:px-12">
        <div className="max-w-3xl mb-12 md:mb-16">
          <p className="eyebrow mb-4">About this site</p>
          <h2 className="section-title">
            Type and color
          </h2>
          <p className="mt-6 text-lg text-text-secondary leading-relaxed">
            Designed and built by me in Next.js and Tailwind CSS, hosted on
            Vercel. Three open-source typefaces and six colors, listed here
            because a designer&apos;s site should show its own specs.
          </p>
        </div>

        {/* TYPE */}
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

        {/* COLOR */}
        <div className="mt-14 md:mt-16 grid grid-cols-2 md:grid-cols-3 gap-5 md:gap-6">
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
              <figcaption className="mt-3">
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
  );
}
