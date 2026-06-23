// Destination: components/PhoneFan.tsx
// A three-device UI-progression: oldest -> current, left to right.
//   Desktop (sm+): a clean aligned row, all three visible at equal height.
//   Mobile: a horizontal snap-scroll — one device shown large with a peek of
//   the next, swipe through v1 -> v2 -> v3.
// Hovering/focusing a device gives an Apple-style float (lift + slight scale +
// deeper shadow, no rotation). Each frame is sized to the image's own aspect
// ratio so the screenshot fills it edge to edge.

type FanPhone = {
  src: string;
  alt: string;
  /** Small step label rendered under the device, e.g. "v1 · the PRD". */
  label?: string;
};

export function PhoneFan({ phones }: { phones: FanPhone[] }) {
  return (
    <div
      className={[
        // Mobile: horizontal snap-scroll row (hidden scrollbar).
        "mx-auto flex w-full max-w-[840px] snap-x snap-mandatory gap-4 overflow-x-auto pb-3",
        "[scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden",
        // Desktop: switch to an aligned three-up grid.
        "sm:grid sm:grid-cols-3 sm:gap-6 sm:overflow-visible sm:pb-0",
      ].join(" ")}
    >
      {phones.slice(0, 3).map((p) => (
        <figure
          key={p.src}
          tabIndex={0}
          className="group flex w-[74%] shrink-0 snap-center flex-col items-center outline-none sm:w-full sm:shrink"
        >
          <div
            className={[
              "relative aspect-[597/999] w-full rounded-[1.3rem] sm:rounded-[1.4rem]",
              "bg-zinc-950 p-[4px] sm:p-[5px]",
              "shadow-[0_18px_44px_-16px_rgba(0,0,0,0.55)]",
              "transition-[transform,box-shadow] duration-[450ms] ease-[cubic-bezier(0.22,1,0.36,1)] will-change-transform",
              "group-hover:-translate-y-3 group-hover:scale-[1.045]",
              "group-hover:shadow-[0_34px_80px_-20px_rgba(0,0,0,0.7)]",
              "group-focus-visible:-translate-y-3 group-focus-visible:scale-[1.045]",
              "group-focus-visible:shadow-[0_34px_80px_-20px_rgba(0,0,0,0.7)]",
              "group-active:scale-[1.01] group-active:duration-150",
            ].join(" ")}
          >
            <div className="relative h-full w-full overflow-hidden rounded-[1.05rem] sm:rounded-[1.2rem] bg-black">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={p.src}
                alt={p.alt}
                className="h-full w-full object-cover object-top"
              />
            </div>
          </div>
          {p.label ? (
            <figcaption className="mt-3 text-center text-xs font-medium tracking-wide text-text-tertiary transition-colors duration-300 group-hover:text-text-secondary">
              {p.label}
            </figcaption>
          ) : null}
        </figure>
      ))}
    </div>
  );
}
