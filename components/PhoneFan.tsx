// Destination: components/PhoneFan.tsx
// A three-device "evolution fan": oldest on the left, current on the right and
// on top, gently fanned and overlapping. Each frame is sized to the image's own
// aspect ratio so the screenshot fills it edge to edge (no letterboxing).

type FanPhone = {
  src: string;
  alt: string;
};

// Per-position layout, left -> right (oldest -> current). The last sits largest,
// upright, and on top. All literal class strings so Tailwind JIT keeps them.
const LAYOUT = [
  { w: "w-[30%] sm:w-[29%]", ml: "", z: "z-10", rot: "rotate-[-8deg]" },
  { w: "w-[31%] sm:w-[30%]", ml: "-ml-[6%]", z: "z-20", rot: "rotate-[-4deg]" },
  { w: "w-[35%] sm:w-[34%]", ml: "-ml-[6%]", z: "z-30", rot: "rotate-[0deg]" },
];

export function PhoneFan({ phones }: { phones: FanPhone[] }) {
  return (
    <div className="relative mx-auto flex w-full max-w-4xl items-end justify-center px-2 py-8 md:py-10">
      {phones.slice(0, 3).map((p, i) => {
        const L = LAYOUT[i] ?? LAYOUT[0];
        return (
          <div
            key={p.src}
            className={[
              L.w,
              L.ml,
              L.z,
              L.rot,
              "origin-bottom transition-transform duration-500 ease-out will-change-transform",
              "hover:-translate-y-2",
            ].join(" ")}
          >
            <div className="relative aspect-[597/999] w-full rounded-[1.5rem] bg-zinc-950 p-[5px] shadow-[0_24px_56px_-16px_rgba(0,0,0,0.6),0_8px_20px_-10px_rgba(0,0,0,0.5)]">
              <div className="relative h-full w-full overflow-hidden rounded-[1.25rem] bg-black">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={p.src}
                  alt={p.alt}
                  className="h-full w-full object-cover object-top"
                />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
