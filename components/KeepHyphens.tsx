import { Fragment, type ReactNode } from "react";

/**
 * KeepHyphens: renders a headline string so hyphenated words
 * ("in-market", "terminal-based") never break at the hyphen.
 *
 * Browsers treat a hyphen as a line-break opportunity, and Instrument Sans
 * has no non-breaking hyphen glyph (U+2011), so each hyphenated word is
 * wrapped in a nowrap span instead. Anything that is not a plain string
 * passes through untouched.
 */
export function KeepHyphens({ children }: { children: ReactNode }) {
  if (typeof children !== "string") return <>{children}</>;
  const parts = children.split(/(\S*\w-\w\S*)/);
  return (
    <>
      {parts.map((part, i) =>
        i % 2 === 1 ? (
          <span key={i} className="whitespace-nowrap">
            {part}
          </span>
        ) : (
          <Fragment key={i}>{part}</Fragment>
        )
      )}
    </>
  );
}
