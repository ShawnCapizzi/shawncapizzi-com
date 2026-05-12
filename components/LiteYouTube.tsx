"use client";

import { useState } from "react";

/**
 * LiteYouTube — facade pattern for YouTube embeds.
 *
 * Renders a static thumbnail with a play button overlay until clicked.
 * On click, swaps to a real YouTube iframe with autoplay=1. Saves ~500KB
 * of YouTube player JS on every page load that has a video.
 *
 * Supports both regular videos and YouTube Shorts. Pass the video ID
 * (the 11-character string after `?v=` or `/shorts/`).
 *
 * Aspect ratios:
 *   - "16:9" (default) for landscape videos
 *   - "9:16" for shorts (vertical)
 */

interface LiteYouTubeProps {
  videoId: string;
  title: string;
  aspect?: "16:9" | "9:16";
}

export function LiteYouTube({
  videoId,
  title,
  aspect = "16:9",
}: LiteYouTubeProps) {
  const [activated, setActivated] = useState(false);

  // YouTube provides hqdefault, mqdefault, maxresdefault thumbnails.
  // maxresdefault is highest quality but not always available; hqdefault always is.
  const thumbnailUrl = `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`;

  const aspectClass = aspect === "9:16" ? "aspect-[9/16]" : "aspect-video";
  // Shorts use a narrower max-width since they're vertical
  const maxWidthClass = aspect === "9:16" ? "max-w-sm" : "w-full";

  return (
    <div
      className={`relative ${aspectClass} ${maxWidthClass} rounded-2xl overflow-hidden border border-border-default bg-bg-elevated`}
    >
      {activated ? (
        <iframe
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1&playsinline=1`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute inset-0 w-full h-full"
        />
      ) : (
        <button
          type="button"
          onClick={() => setActivated(true)}
          aria-label={`Play video: ${title}`}
          className="group absolute inset-0 w-full h-full cursor-pointer"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={thumbnailUrl}
            alt={title}
            className="absolute inset-0 w-full h-full object-cover"
            loading="lazy"
          />
          {/* Dark overlay for contrast */}
          <div
            className="absolute inset-0 bg-bg-primary/30 group-hover:bg-bg-primary/10 transition-colors"
            aria-hidden="true"
          />
          {/* Play button */}
          <div
            className="absolute inset-0 flex items-center justify-center"
            aria-hidden="true"
          >
            <span className="flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-full bg-bg-primary/80 backdrop-blur-sm border border-white/20 group-hover:scale-105 group-hover:bg-bg-primary/90 transition-all">
              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="text-white translate-x-0.5"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </span>
          </div>
          {/* Title overlay at bottom */}
          <div
            className="absolute bottom-0 left-0 right-0 p-4 md:p-5 bg-gradient-to-t from-bg-primary via-bg-primary/70 to-transparent"
            aria-hidden="true"
          >
            <p className="text-sm md:text-base font-medium text-text-primary line-clamp-2">
              {title}
            </p>
          </div>
        </button>
      )}
    </div>
  );
}
