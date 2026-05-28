"use client";

import { useRef, useState } from "react";

interface VideoWithPlayOverlayProps {
  src: string;
  poster?: string;
  ariaLabel: string;
  /** Optional wrapper className for styling the outer container (border, radius, etc). */
  wrapperClassName?: string;
  /** Optional className for the <video> element itself. Defaults to natural-ratio
   *  block sizing; pass an object-cover fill class when the video must fill a
   *  fixed-aspect container (e.g. a 16:9 hero box). */
  videoClassName?: string;
}

/**
 * VideoWithPlayOverlay — an inline-playing video with an ALWAYS-VISIBLE
 * play affordance until the user starts playback. Designed for case-study
 * slides where the visual must clearly read as "this is a video" before
 * any hover or interaction, on both mobile and desktop.
 *
 * Behavior:
 *   - Renders <video> with controls (so users get standard scrubbing once engaged).
 *   - autoPlay attempt is intentionally omitted: we let the affordance do the work
 *     instead of relying on flaky browser autoplay policies.
 *   - A circular play button sits centered over the video, visible by default.
 *   - Clicking anywhere on the overlay (or the video frame) plays the video
 *     and hides the overlay.
 *   - When the video ends, the overlay reappears so users know they can replay.
 *   - Hover state on the overlay scales the button slightly for affordance.
 */
export function VideoWithPlayOverlay({
  src,
  poster,
  ariaLabel,
  wrapperClassName = "w-full rounded-xl overflow-hidden border border-border-default bg-bg-elevated",
  videoClassName = "block w-full h-auto",
}: VideoWithPlayOverlayProps) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [hasStarted, setHasStarted] = useState(false);

  const handlePlay = () => {
    const v = videoRef.current;
    if (!v) return;
    v.play()
      .then(() => setHasStarted(true))
      .catch(() => {
        // If playback fails (rare — usually a codec issue), still hide
        // the overlay so the user sees the native controls and can try.
        setHasStarted(true);
      });
  };

  const handleEnded = () => {
    setHasStarted(false);
  };

  return (
    <div className={`relative ${wrapperClassName}`}>
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        controls
        playsInline
        preload="metadata"
        aria-label={ariaLabel}
        onEnded={handleEnded}
        onPlay={() => setHasStarted(true)}
        onPause={() => {
          // Don't show overlay on a transient pause — only when the user has
          // finished the video (handled by onEnded). Pause + un-pause should
          // feel like normal video controls, not a re-entry.
        }}
        className={videoClassName}
      />

      {!hasStarted && (
        <button
          type="button"
          onClick={handlePlay}
          aria-label="Play video"
          className="group absolute inset-0 flex items-center justify-center bg-black/30 hover:bg-black/40 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-purple"
        >
          <span
            aria-hidden="true"
            className="flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-full bg-white/95 shadow-lg transition-transform group-hover:scale-110"
          >
            {/* Play triangle: offset slightly right so it appears optically centered */}
            <svg
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="ml-1"
            >
              <path d="M8 5v14l11-7L8 5z" fill="#0A0A0A" />
            </svg>
          </span>
        </button>
      )}
    </div>
  );
}
