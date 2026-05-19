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
  tiltDegrees = 0,
  theme = "dark",
  ariaLabel = "Product video in browser frame",
  loop = true,
  autoPlay = true,
}: BrowserFrameProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [aspect, setAspect] = useState<number>(fallbackAspect);

  useEffect(() => {
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
  }, [src]);

  const chromeHeight = 38;
  const viewportHeight = width / aspect;

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

        {/* Video viewport */}
        <div
          className="relative bg-black"
          style={{
            width: "100%",
            height: `${viewportHeight}px`,
          }}
        >
          <video
            ref={videoRef}
            className="w-full h-full object-contain block"
            src={src}
            poster={poster}
            autoPlay={autoPlay}
            loop={loop}
            muted
            playsInline
            preload="metadata"
            aria-hidden="true"
          />
        </div>
      </div>
    </div>
  );
}
