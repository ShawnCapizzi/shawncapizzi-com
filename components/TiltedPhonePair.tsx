"use client";

import { useEffect, useRef } from "react";
import type { CSSProperties } from "react";

type PhoneVideo = {
  src: string;
  /** Optional poster image shown before the video plays (used for the delayed phone). */
  poster?: string;
  /** Used as aria-label on the video element. */
  alt?: string;
  /** Optional small caption rendered under the phone. */
  caption?: string;
};

type TiltedPhonePairProps = {
  left: PhoneVideo;
  right: PhoneVideo;
  /** Tilt for the left phone in degrees. Default -10. */
  leftTilt?: number;
  /** Tilt for the right phone in degrees. Default +10. */
  rightTilt?: number;
  /** Tailwind max-width classes for each phone. Default ~1.5x the original. */
  phoneMaxWidth?: string;
  /** Delay (ms) before the LEFT phone's video starts. Default 0 (plays immediately). */
  leftStartDelayMs?: number;
  /** Delay (ms) before the RIGHT phone's video starts. Default 0 (plays immediately). */
  rightStartDelayMs?: number;
  className?: string;
};

/**
 * Two tilted iPhone-style slabs side-by-side. A phone whose src is a video
 * (.mp4/.webm/.mov) plays muted + looping; each phone can start on a delay so
 * the pair can stagger (e.g. right leads, left joins after a pause). Until a
 * delayed video starts, its poster is shown. A phone whose src is an image
 * (.gif/.png/.jpg) just renders that image. On mobile the phones stack with
 * the tilt removed for readability.
 */
export function TiltedPhonePair({
  left,
  right,
  leftTilt = -10,
  rightTilt = 10,
  phoneMaxWidth = "max-w-[300px] sm:max-w-[340px]",
  leftStartDelayMs = 0,
  rightStartDelayMs = 0,
  className = "",
}: TiltedPhonePairProps) {
  return (
    <div
      className={[
        "mx-auto grid w-full max-w-4xl grid-cols-1 gap-14",
        "sm:grid-cols-2 sm:gap-8 md:gap-12",
        className,
      ].join(" ")}
    >
      <TiltedPhone
        video={left}
        tilt={leftTilt}
        maxWidth={phoneMaxWidth}
        startDelayMs={leftStartDelayMs}
      />
      <TiltedPhone
        video={right}
        tilt={rightTilt}
        maxWidth={phoneMaxWidth}
        startDelayMs={rightStartDelayMs}
      />
    </div>
  );
}

function TiltedPhone({
  video,
  tilt,
  maxWidth,
  startDelayMs = 0,
}: {
  video: PhoneVideo;
  tilt: number;
  maxWidth: string;
  startDelayMs?: number;
}) {
  const isVideo = /\.(mp4|webm|mov)$/i.test(video.src);
  const ref = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (!isVideo) return;
    const el = ref.current;
    if (!el) return;

    const play = () => {
      const p = el.play();
      if (p && typeof p.catch === "function") p.catch(() => {});
    };

    let timer: number | undefined;
    if (startDelayMs > 0) {
      // Hold on the poster, then start after the delay.
      timer = window.setTimeout(play, startDelayMs);
    } else {
      play();
    }
    return () => {
      if (timer) window.clearTimeout(timer);
    };
  }, [isVideo, startDelayMs, video.src]);

  // Expose tilt as a CSS variable so hover state can compose with it.
  const style = { "--tilt": `${tilt}deg` } as CSSProperties;

  return (
    <figure className="group flex flex-col items-center" style={style}>
      <div
        className={[
          "relative w-full",
          maxWidth,
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
          {/* Screen. Media uses object-cover so the content fills the iPhone-shaped frame. */}
          <div className="relative h-full w-full overflow-hidden rounded-[2.15rem] sm:rounded-[2.35rem] bg-black">
            {isVideo ? (
              <video
                ref={ref}
                src={video.src}
                poster={video.poster}
                loop
                muted
                playsInline
                preload="auto"
                aria-label={video.alt}
                className="h-full w-full object-cover object-center"
              />
            ) : (
              // Static image or GIF.
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
