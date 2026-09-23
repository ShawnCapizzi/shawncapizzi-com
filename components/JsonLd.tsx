/**
 * JsonLd renders structured data as a JSON-LD script tag in the server
 * HTML, where crawlers and answer engines read it without running any
 * JavaScript. "<" is escaped so no string in the data can close the tag
 * (the pattern the Next.js docs recommend).
 */
export function JsonLd({ data }: { data: object | object[] }) {
  const items = Array.isArray(data) ? data : [data];
  return (
    <>
      {items.map((item, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(item).replace(/</g, "\\u003c"),
          }}
        />
      ))}
    </>
  );
}
