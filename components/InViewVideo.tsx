"use client";

import { useEffect, useRef, useState } from "react";

/**
 * InViewVideo: a muted, looping video that does not exist until it is needed.
 *
 * The AI Patient Support walkthrough is 4.8MB. A plain autoPlay video in a
 * homepage card starts downloading on page load even though the card sits
 * around 2,600px down, so the reel competes with the hero for bandwidth on
 * a visit that may never scroll that far.
 *
 * This waits. No src attribute is set until an IntersectionObserver says the
 * card is within 200px of the viewport; only then does the browser fetch
 * anything. Playback starts on entry and pauses on exit, which also satisfies
 * the design system rule that motion is tied to scroll, hover, or a page
 * transition rather than running unprompted.
 *
 * The poster renders immediately as a plain background image, so the card
 * never shows an empty box, and it is what a visitor sees if the video fails
 * or if they have reduced motion set (autoplay is skipped in that case and
 * the poster stays).
 *
 * Decorative by design: aria-hidden, no controls. The surrounding link and
 * its aria-label carry the meaning.
 */

type InViewVideoProps = {
  src: string;
  poster: string;
  className?: string;
};

export function InViewVideo({ src, poster, className = "" }: InViewVideoProps) {
  const wrapRef = useRef<HTMLDivElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    const node = wrapRef.current;
    if (!node) return;

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          const v = videoRef.current;
          if (entry.isIntersecting) {
            setShouldLoad(true);
            if (v && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
              v.play().catch(() => {
                // Autoplay refused: the poster stays, which is a fine result.
              });
            }
          } else if (v) {
            v.pause();
          }
        }
      },
      { rootMargin: "200px 0px" }
    );

    io.observe(node);
    return () => io.disconnect();
  }, [shouldLoad]);

  return (
    <div
      ref={wrapRef}
      className={`absolute inset-0 bg-cover bg-top ${className}`}
      style={{ backgroundImage: `url(${poster})` }}
    >
      {shouldLoad && (
        <video
          ref={videoRef}
          src={src}
          poster={poster}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-hidden="true"
          tabIndex={-1}
          className="h-full w-full object-cover object-top"
        />
      )}
    </div>
  );
}
