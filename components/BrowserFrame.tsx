"use client";

import { useRef, useEffect, useState } from "react";

// ---------------------------------------------------------------------------
// TYPES
// ---------------------------------------------------------------------------

export interface BrowserFrameProps {
  /** Path to video file (.mp4/.webm preferred). */
  src: string;
  /** Optional poster image shown before video loads. */
  poster?: string;
  /** URL shown in the address bar — purely cosmetic. */
  url?: string;
  /** Browser frame width. Default 720. Height derived from video aspect. */
  width?: number;
  /** Fallback aspect ratio if video metadata fails to load. Default 16/10. */
  fallbackAspect?: number;
  /** Optional tilt for a more editorial look. Default 0 (square-on). */
  tiltDegrees?: number;
  /** Chrome theme. "light" or "dark". Default "light". */
  theme?: "light" | "dark";
  /** Optional aria-label. */
  ariaLabel?: string;
  /** Loop the video. Default true. */
  loop?: boolean;
  /** Autoplay the video (muted required). Default true. */
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
  theme = "light",
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

  const chromeHeight = 38; // top bar height
  const viewportWidth = width;
  const viewportHeight = width / aspect;

  const isDark = theme === "dark";
  const chromeBg = isDark ? "#1A1A1A" : "#F4F2EC";
  const chromeBorder = isDark ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.08)";
  const addressBg = isDark ? "#0F0F0F" : "#FFFFFF";
  const addressInk = isDark ? "#A8A8A8" : "#6B6B6B";

  return (
    <div
      className="bf-stage"
      role="img"
      aria-label={ariaLabel}
    >
      <style jsx>{`
        .bf-stage {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: clamp(1.5rem, 3vw, 2.5rem) 1rem;
        }

        .bf-frame {
          width: ${width}px;
          max-width: 100%;
          background: ${chromeBg};
          border: 1px solid ${chromeBorder};
          border-radius: 10px;
          overflow: hidden;
          box-shadow:
            0 1px 2px rgba(0, 0, 0, 0.06),
            0 12px 32px -8px rgba(0, 0, 0, 0.18),
            0 28px 56px -16px rgba(0, 0, 0, 0.22);
          transform: rotateZ(${tiltDegrees}deg);
          transition: transform 0.5s cubic-bezier(0.2, 0.7, 0.2, 1);
        }

        .bf-chrome {
          height: ${chromeHeight}px;
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding: 0 0.875rem;
          border-bottom: 1px solid ${chromeBorder};
        }

        .bf-dots {
          display: flex;
          gap: 6px;
          flex-shrink: 0;
        }
        .bf-dot {
          width: 11px;
          height: 11px;
          border-radius: 50%;
        }
        .bf-dot-red {
          background: #ff5f57;
        }
        .bf-dot-yellow {
          background: #febc2e;
        }
        .bf-dot-green {
          background: #28c840;
        }

        .bf-address {
          flex: 1;
          height: 22px;
          background: ${addressBg};
          border-radius: 5px;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 0 0.75rem;
          font-family: var(
            --font-mono,
            "JetBrains Mono",
            ui-monospace,
            "SFMono-Regular",
            Menlo,
            monospace
          );
          font-size: 11px;
          color: ${addressInk};
          letter-spacing: 0.01em;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
          border: 1px solid ${chromeBorder};
        }

        .bf-viewport {
          width: ${viewportWidth}px;
          max-width: 100%;
          height: ${viewportHeight}px;
          background: #000;
          position: relative;
        }

        .bf-video {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        @media (prefers-reduced-motion: reduce) {
          .bf-frame {
            transition: none;
          }
        }

        @media (max-width: 640px) {
          .bf-frame {
            transform: none;
          }
        }
      `}</style>

      <div className="bf-frame">
        <div className="bf-chrome">
          <div className="bf-dots" aria-hidden="true">
            <span className="bf-dot bf-dot-red" />
            <span className="bf-dot bf-dot-yellow" />
            <span className="bf-dot bf-dot-green" />
          </div>
          <div className="bf-address">{url}</div>
        </div>
        <div className="bf-viewport">
          <video
            ref={videoRef}
            className="bf-video"
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
