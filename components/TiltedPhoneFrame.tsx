"use client";

import { useRef, useEffect, useState } from "react";

// ---------------------------------------------------------------------------
// TYPES
// ---------------------------------------------------------------------------

export interface TiltedPhoneFrameProps {
  /** Path to video file (.mp4/.webm preferred). Place in /public/videos/... */
  src: string;
  /** Optional poster image shown before video loads — path in /public/... */
  poster?: string;
  /** Tilt angle in degrees. Default -8 (counter-clockwise, like Remotion).
   *  Use a positive number for clockwise tilt. */
  tiltDegrees?: number;
  /** Frame width in pixels at the base resolution. Default 280.
   *  Height is computed from the video's aspect ratio. */
  width?: number;
  /** Bezel thickness around the screen. Default 14. */
  bezelWidth?: number;
  /** Outer corner radius. Default 38. */
  cornerRadius?: number;
  /** Background fill of the "device body" — defaults to near-black. */
  bodyColor?: string;
  /** Accent rim color (subtle inner stroke). Defaults to a warm grey. */
  rimColor?: string;
  /** Aspect ratio fallback if video metadata fails to load. Default 19.5/9 (Pro Max). */
  fallbackAspect?: number;
  /** Optional aria-label for the frame. */
  ariaLabel?: string;
  /** Whether to loop the video. Default true. */
  loop?: boolean;
  /** Whether to autoplay. Default true (muted required for autoplay). */
  autoPlay?: boolean;
}

// ---------------------------------------------------------------------------
// COMPONENT
// ---------------------------------------------------------------------------

export function TiltedPhoneFrame({
  src,
  poster,
  tiltDegrees = -8,
  width = 280,
  bezelWidth = 14,
  cornerRadius = 38,
  bodyColor = "#0A0A0A",
  rimColor = "rgba(255,255,255,0.06)",
  fallbackAspect = 19.5 / 9,
  ariaLabel = "Product video in stylized phone frame",
  loop = true,
  autoPlay = true,
}: TiltedPhoneFrameProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [aspect, setAspect] = useState<number>(1 / fallbackAspect); // width / height ratio

  // Detect native video dimensions once metadata is available
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

  // Frame dimensions — outer width is fixed, height comes from aspect
  const frameHeight = width / aspect;
  // Inner screen dimensions — frame minus bezels
  const screenWidth = width - bezelWidth * 2;
  const screenHeight = frameHeight - bezelWidth * 2;
  // Inner screen corner radius scales with the outer
  const innerRadius = Math.max(cornerRadius - bezelWidth, 8);

  return (
    <div
      className="tpf-stage"
      aria-label={ariaLabel}
      role="img"
    >
      <style jsx>{`
        .tpf-stage {
          /* The stage gives the tilted phone room to lean without clipping */
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: clamp(2rem, 5vw, 4rem) 1rem;
          perspective: 1600px;
          perspective-origin: 50% 35%;
        }

        .tpf-frame {
          position: relative;
          width: ${width}px;
          height: ${frameHeight}px;
          background: ${bodyColor};
          border-radius: ${cornerRadius}px;
          /* Subtle device-edge inner stroke for that "slab" look */
          box-shadow:
            inset 0 0 0 1px ${rimColor},
            inset 0 1px 0 0 rgba(255, 255, 255, 0.04),
            /* Ambient lift */
            0 1px 2px rgba(0, 0, 0, 0.08),
            /* Soft mid shadow */
            0 12px 28px -8px rgba(0, 0, 0, 0.28),
            /* Long perspective shadow falling down-right (Remotion style) */
            18px 34px 64px -12px rgba(0, 0, 0, 0.42),
            /* Deepest ground shadow */
            32px 60px 110px -28px rgba(0, 0, 0, 0.45);

          /* The angled tilt — slight Y-axis rotation gives perspective depth,
             Z-axis rotation gives the editorial lean */
          transform:
            rotateY(-6deg) rotateX(2deg) rotateZ(${tiltDegrees}deg);
          transform-style: preserve-3d;
          transition: transform 0.6s cubic-bezier(0.2, 0.7, 0.2, 1);
        }

        .tpf-frame:hover {
          transform:
            rotateY(-3deg) rotateX(1deg) rotateZ(${tiltDegrees * 0.5}deg);
        }

        /* Inner screen — flush with bezel, holds the video */
        .tpf-screen {
          position: absolute;
          top: ${bezelWidth}px;
          left: ${bezelWidth}px;
          width: ${screenWidth}px;
          height: ${screenHeight}px;
          border-radius: ${innerRadius}px;
          overflow: hidden;
          background: #000;
          /* Subtle inner shadow at the screen edge for depth */
          box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.6);
        }

        .tpf-video {
          width: 100%;
          height: 100%;
          object-fit: contain;
          display: block;
          /* Faint screen sheen — left edge slightly brighter, like glass */
          background: linear-gradient(
            135deg,
            rgba(255, 255, 255, 0.03) 0%,
            rgba(255, 255, 255, 0) 30%
          );
        }

        /* Optional ambient floor reflection — extremely subtle */
        .tpf-frame::after {
          content: "";
          position: absolute;
          left: 50%;
          bottom: -${Math.round(frameHeight * 0.05)}px;
          transform: translateX(-50%);
          width: 70%;
          height: 22px;
          background: radial-gradient(
            ellipse at center,
            rgba(0, 0, 0, 0.18) 0%,
            rgba(0, 0, 0, 0) 70%
          );
          filter: blur(6px);
          z-index: -1;
          pointer-events: none;
        }

        /* Reduced motion — kill the hover transform */
        @media (prefers-reduced-motion: reduce) {
          .tpf-frame,
          .tpf-frame:hover {
            transition: none;
          }
        }

        /* Mobile — tone down the lean so it doesn't overflow narrow viewports */
        @media (max-width: 640px) {
          .tpf-frame {
            transform:
              rotateY(-3deg) rotateX(1deg) rotateZ(${tiltDegrees * 0.5}deg);
          }
        }
      `}</style>

      <div className="tpf-frame">
        <div className="tpf-screen">
          <video
            ref={videoRef}
            className="tpf-video"
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
