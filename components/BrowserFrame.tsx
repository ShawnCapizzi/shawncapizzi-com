"use client";

import { useRef, useEffect, useState } from "react";

// ---------------------------------------------------------------------------
// TYPES
// ---------------------------------------------------------------------------

export interface BrowserFrameProps {
  src: string;
  poster?: string;
  url?: string;
  width?: number;
  fallbackAspect?: number;
  /**
   * Explicit viewport aspect ratio (W/H, e.g. 16/10 or 4/3). When set,
   * overrides the natural-image aspect detection AND switches the media
   * fit to object-cover (so the image fills the viewport, cropping if
   * needed). Use this when pairing multiple BrowserFrames in a grid that
   * need uniform sizing — both siblings render at exactly the same height.
   * When undefined (default), the viewport auto-sizes to the source's
   * natural aspect ratio and uses object-contain.
   */
  aspectRatio?: number;
  tiltDegrees?: number;
  /** "dark" matches the site's navy aesthetic. "light" is the legacy default. */
  theme?: "light" | "dark";
  ariaLabel?: string;
  loop?: boolean;
  autoPlay?: boolean;
}

// ---------------------------------------------------------------------------
// COMPONENT
// ---------------------------------------------------------------------------

export function BrowserFrame({
  src,
  poster,
  url = "https://example.com",
  width = 720,
  fallbackAspect = 16 / 10,
  aspectRatio,
  tiltDegrees = 0,
  theme = "dark",
  ariaLabel = "Product video in browser frame",
  loop = true,
  autoPlay = true,
}: BrowserFrameProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);
  const [aspect, setAspect] = useState<number>(fallbackAspect);

  // Detect whether src is an image (gif, png, jpg, webp) or a video (mp4, webm)
  const isImage = /\.(gif|png|jpe?g|webp|avif)$/i.test(src);

  useEffect(() => {
    if (isImage) {
      const img = imgRef.current;
      if (!img) return;
      const onLoad = () => {
        if (img.naturalWidth && img.naturalHeight) {
          setAspect(img.naturalWidth / img.naturalHeight);
        }
      };
      if (img.complete && img.naturalWidth) onLoad();
      else img.addEventListener("load", onLoad);
      return () => img.removeEventListener("load", onLoad);
    } else {
      const v = videoRef.current;
      if (!v) return;
      const onMeta = () => {
        if (v.videoWidth && v.videoHeight) {
          setAspect(v.videoWidth / v.videoHeight);
        }
      };
      if (v.readyState >= 1) onMeta();
      else v.addEventListener("loadedmetadata", onMeta);
      return () => v.removeEventListener("loadedmetadata", onMeta);
    }
  }, [src, isImage]);

  const chromeHeight = 38;

  // When aspectRatio is explicitly provided, use it (override natural detection).
  // Otherwise fall back to the detected/fallback natural aspect.
  const effectiveAspect = aspectRatio ?? aspect;
  // Explicit aspect → object-cover (fills the viewport, crops if needed).
  // Natural aspect → object-contain (no crop, image fits naturally).
  const objectFitClass = aspectRatio !== undefined ? "object-cover" : "object-contain";

  // Theme-aware colors: dark default tuned to Shawn's design tokens
  const isDark = theme === "dark";
  const chromeBg = isDark ? "#061C2F" : "#F4F2EC"; // matches bg-raised / light
  const chromeBorder = isDark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.08)";
  const addressBg = isDark ? "#021626" : "#FFFFFF"; // bg-elevated / white
  const addressInk = isDark ? "#A3A3A3" : "#6B6B6B"; // text-secondary / muted
  const addressBorder = isDark ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.06)";

  return (
    <div
      className="w-full flex items-center justify-center px-4 py-6 md:py-10"
      role="img"
      aria-label={ariaLabel}
    >
      <div
        className="max-w-full overflow-hidden rounded-lg transition-transform duration-500"
        style={{
          width: `${width}px`,
          background: chromeBg,
          border: `1px solid ${chromeBorder}`,
          transform: `rotateZ(${tiltDegrees}deg)`,
          boxShadow: isDark
            ? "0 1px 2px rgba(0,0,0,0.4), 0 12px 32px -8px rgba(0,0,0,0.45), 0 28px 56px -16px rgba(0,0,0,0.5)"
            : "0 1px 2px rgba(0,0,0,0.06), 0 12px 32px -8px rgba(0,0,0,0.18), 0 28px 56px -16px rgba(0,0,0,0.22)",
        }}
      >
        {/* Chrome top bar */}
        <div
          className="flex items-center gap-3 px-3.5"
          style={{
            height: `${chromeHeight}px`,
            borderBottom: `1px solid ${chromeBorder}`,
          }}
        >
          {/* Traffic-light dots */}
          <div className="flex gap-1.5 flex-shrink-0" aria-hidden="true">
            <span
              className="w-2.5 h-2.5 rounded-full"
              style={{ background: "#FF5F57" }}
            />
            <span
              className="w-2.5 h-2.5 rounded-full"
              style={{ background: "#FEBC2E" }}
            />
            <span
              className="w-2.5 h-2.5 rounded-full"
              style={{ background: "#28C840" }}
            />
          </div>

          {/* Address bar */}
          <div
            className="flex-1 h-[22px] rounded flex items-center justify-center px-3 font-mono text-[11px] overflow-hidden whitespace-nowrap text-ellipsis"
            style={{
              background: addressBg,
              color: addressInk,
              border: `1px solid ${addressBorder}`,
              letterSpacing: "0.01em",
            }}
          >
            {url}
          </div>
        </div>

        {/* Media viewport, renders img for animated/static images, video for mp4/webm */}
        <div
          className="relative bg-black"
          style={{
            width: "100%",
            aspectRatio: `${effectiveAspect}`,
          }}
        >
          {isImage ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              ref={imgRef}
              className={`w-full h-full ${objectFitClass} block`}
              src={src}
              alt={ariaLabel}
            />
          ) : (
            <video
              ref={videoRef}
              className={`w-full h-full ${objectFitClass} block`}
              src={src}
              poster={poster}
              autoPlay={autoPlay}
              loop={loop}
              muted
              playsInline
              preload="metadata"
              aria-hidden="true"
            />
          )}
        </div>
      </div>
    </div>
  );
}
