import Image from "next/image";

/**
 * ProofStrip: a quiet line of evidence between the logo row and the three
 * doors on the homepage (October 2026). Every figure is also on the case
 * study it comes from, so nothing here says more than the proof behind it:
 *   70+ pharma brands and $3.5M+  ->  /work/pharma-design-systems
 *   $1.5M+ annual CRM ROI          ->  /work/enterprise-financial-services-crm
 *   D&AD Pencil                    ->  /work/cancer-equality-app
 * The D&AD Pencil, with its icon and the link to the D&AD entry, moved here
 * from under the three doors so the credential shows once.
 *
 * It is evidence, not a stats section: one line on wide screens (stacked or in two
 * columns below that, so no line starts with a dot), mono labels, no large
 * numbers. Edit ITEMS to change it.
 */

const ITEMS = [
  "70+ pharma brands",
  "$3.5M+ documented digital transformation",
  "$1.5M+ annual CRM ROI",
];

const DANDAD_URL = "https://www.dandad.org/annual/2022/entry/professional/235946";

function Dot() {
  return (
    <span aria-hidden="true" className="hidden xl:inline text-link">
      ·
    </span>
  );
}

export function ProofStrip() {
  return (
    <section aria-label="Proof" className="pt-8 md:pt-10">
      <div className="max-w-content mx-auto px-6 md:px-8 lg:px-12">
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 xl:flex xl:flex-wrap xl:items-center xl:gap-x-3 font-mono text-xs md:text-sm tracking-wider uppercase text-text-secondary">
          {ITEMS.map((item, i) => (
            <li key={item} className="flex items-center gap-x-3">
              {i > 0 && <Dot />}
              <span>{item}</span>
            </li>
          ))}
          <li className="flex items-center gap-x-3">
            <Dot />
            <a
              href={DANDAD_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 hover:text-text-primary transition-colors"
            >
              <Image
                src="/images/awards/dandad-pencil-2022.webp"
                alt=""
                width={300}
                height={300}
                className="h-7 w-7 shrink-0 rotate-90"
              />
              <span>D&amp;AD Pencil</span>
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}
