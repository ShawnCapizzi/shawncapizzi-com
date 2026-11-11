import Image from "next/image";

/**
 * Portrait: Shawn's headshot on the open page, with no frame (November 11,
 * 2026, Shawn's call). The photo is a transparent cutout
 * (headshot-2026-cutout.webp, made from headshot-2026-knockout.jpg by
 * separating him from its navy and blue-glow backdrop by color), so no
 * backdrop travels with it. The glow behind him is drawn by
 * .portrait::before in app/globals.css, translucent and spread wider than
 * the photo, so the page's own atmosphere shows through everywhere around
 * him. The jacket's outer edges and bottom fade out. Used by the homepage
 * hero, /about, and /how-i-help.
 *
 * A frame belongs only where the photo lives inside a card, and there the
 * card is the frame: the Get in touch card (CTACards, imageFit "portrait").
 *
 * The width comes from the caller's className; the portrait is square.
 */
export function Portrait({
  className = "",
  sizes,
  priority = false,
}: {
  className?: string;
  sizes: string;
  priority?: boolean;
}) {
  return (
    <div className={`portrait ${className}`}>
      <div className="portrait__photo">
        <Image
          src="/images/brand/headshot-2026-cutout.webp"
          alt="Shawn Capizzi"
          fill
          priority={priority}
          sizes={sizes}
          className="object-cover"
        />
      </div>
    </div>
  );
}
