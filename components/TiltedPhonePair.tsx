import type { CSSProperties } from "react";

type PhoneVideo = {
  src: string;
  /** Optional poster image shown before the video loads. */
  poster?: string;
  /** Used as aria-label on the video element. */
  alt?: string;
  /** Optional small caption rendered under the phone. */
  caption?: string;
};

type TiltedPhonePairProps = {
  left: PhoneVideo;
  right: PhoneVideo;
  /** Tilt for the left phone in degrees. Default -8. */
  leftTilt?: number;
  /** Tilt for the right phone in degrees. Default +8. */
  rightTilt?: number;
  className?: string;
};

/**
 * Two tilted iPhone-style slabs side-by-side, each rendering an autoplaying
 * muted looping video. On desktop the phones tilt and lift on hover; on
 * mobile they stack vertically with the tilt reduced for readability.
 *
 * Sized to match a 888x1490 source aspect (the GPT demo recordings, post-trim).
 * If a future use targets a different source, override via the wrapper's
 * `aspect` style.
 */
export function TiltedPhonePair({
  left,
  right,
  leftTilt = -8,
  rightTilt = 8,
  className = "",
}: TiltedPhonePairProps) {
  return (
    <div
      className={[
        "mx-auto grid w-full max-w-3xl grid-cols-1 gap-12",
        "sm:grid-cols-2 sm:gap-6 md:gap-10",
        className,
      ].join(" ")}
    >
      <TiltedPhone video={left} tilt={leftTilt} />
      <TiltedPhone video={right} tilt={rightTilt} />
    </div>
  );
}

function TiltedPhone({ video, tilt }: { video: PhoneVideo; tilt: number }) {
  // Expose tilt as a CSS variable so hover state can compose with it.
  const style = { "--tilt": `${tilt}deg` } as CSSProperties;

  return (
    <figure className="group flex flex-col items-center" style={style}>
      <div
        className={[
          "relative w-full max-w-[220px]",
          // Mobile: no tilt, sits upright stacked. Desktop: tilted slab.
          "[transform:rotate(0deg)] sm:[transform:rotate(var(--tilt))]",
          "transition-transform duration-500 ease-out will-change-transform",
          // Hover lift on desktop only. Composes translateY with the tilt.
          "sm:group-hover:[transform:translateY(-10px)_rotate(calc(var(--tilt)*0.6))]",
        ].join(" ")}
      >
        {/* Ambient drop shadow under the device. */}
        <div
          aria-hidden
          className={[
            "pointer-events-none absolute inset-x-6 -bottom-5 h-10 rounded-[50%]",
            "bg-black/35 blur-2xl",
            "transition-all duration-500",
            "sm:group-hover:-bottom-8 sm:group-hover:bg-black/45",
          ].join(" ")}
        />

        {/* Device bezel. Aspect tuned to iPhone Pro screen (9:19.5). */}
        <div
          className={[
            "relative aspect-[9/19.5] w-full",
            "rounded-[2.6rem] sm:rounded-[2.8rem]",
            "bg-zinc-950 p-[6px] sm:p-[7px]",
            "shadow-[0_24px_60px_-18px_rgba(0,0,0,0.45),0_10px_28px_-12px_rgba(0,0,0,0.35),inset_0_0_0_1px_rgba(255,255,255,0.06)]",
          ].join(" ")}
        >
          {/* Screen. Media uses object-cover so the content fills the iPhone-shaped frame; ~14% per side is cropped from a wider source. */}
          <div className="relative h-full w-full overflow-hidden rounded-[2.15rem] sm:rounded-[2.35rem] bg-black">
            {/\.(mp4|webm|mov)$/i.test(video.src) ? (
              <video
                src={video.src}
                poster={video.poster}
                autoPlay
                loop
                muted
                playsInline
                preload="metadata"
                aria-label={video.alt}
                className="h-full w-full object-cover object-center"
              />
            ) : (
              // GIF or static image. Plain <img> so animated GIFs keep animating
              // (next/image would freeze them to the first frame).
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={video.src}
                alt={video.alt ?? ""}
                className="h-full w-full object-cover object-center"
              />
            )}
          </div>
        </div>
      </div>

      {video.caption ? (
        <figcaption className="mt-6 text-center text-sm font-medium text-text-tertiary sm:mt-8">
          {video.caption}
        </figcaption>
      ) : null}
    </figure>
  );
}
