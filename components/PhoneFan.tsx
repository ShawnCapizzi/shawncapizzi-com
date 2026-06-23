// Destination: components/PhoneFan.tsx
// A three-device UI-progression row: oldest -> current, left to right. The
// devices rest in a clean aligned row (equal height, upright). Hovering or
// focusing one gives an Apple-style micro-interaction: it lifts toward the
// viewer with a slight scale-up and a deeper shadow on a smooth ease — no
// rotation, so devices never crowd each other. Each frame is sized to the
// image's own aspect ratio, so the screenshot fills it edge to edge.

type FanPhone = {
  src: string;
  alt: string;
  /** Small step label rendered under the device, e.g. "v1 · the PRD". */
  label?: string;
};

export function PhoneFan({ phones }: { phones: FanPhone[] }) {
  return (
    <div className="mx-auto grid w-full max-w-[840px] grid-cols-3 gap-4 sm:gap-6">
      {phones.slice(0, 3).map((p) => (
        <figure
          key={p.src}
          tabIndex={0}
          className="group flex flex-col items-center outline-none"
        >
          <div
            className={[
              "relative aspect-[597/999] w-full rounded-[1.1rem] sm:rounded-[1.4rem]",
              "bg-zinc-950 p-[3px] sm:p-[5px]",
              "shadow-[0_18px_44px_-16px_rgba(0,0,0,0.55)]",
              // Apple-style float: lift + gentle scale + deeper shadow, smooth ease.
              "transition-[transform,box-shadow] duration-[450ms] ease-[cubic-bezier(0.22,1,0.36,1)] will-change-transform",
              "group-hover:-translate-y-3 group-hover:scale-[1.045]",
              "group-hover:shadow-[0_34px_80px_-20px_rgba(0,0,0,0.7)]",
              "group-focus-visible:-translate-y-3 group-focus-visible:scale-[1.045]",
              "group-focus-visible:shadow-[0_34px_80px_-20px_rgba(0,0,0,0.7)]",
              // Subtle press-in on tap.
              "group-active:scale-[1.01] group-active:duration-150",
            ].join(" ")}
          >
            <div className="relative h-full w-full overflow-hidden rounded-[0.95rem] sm:rounded-[1.2rem] bg-black">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={p.src}
                alt={p.alt}
                className="h-full w-full object-cover object-top"
              />
            </div>
          </div>
          {p.label ? (
            <figcaption className="mt-3 text-center text-[0.7rem] sm:text-xs font-medium tracking-wide text-text-tertiary transition-colors duration-300 group-hover:text-text-secondary">
              {p.label}
            </figcaption>
          ) : null}
        </figure>
      ))}
    </div>
  );
}
