import Image from "next/image";
import Link from "next/link";

type Size = "small" | "medium" | "large";

const dimensions: Record<Size, { width: number; height: number }> = {
  small: { width: 140, height: 44 },
  medium: { width: 280, height: 88 },
  large: { width: 560, height: 176 },
};

interface WordmarkProps {
  size?: Size;
  href?: string | null;
  className?: string;
  priority?: boolean;
}

export function Wordmark({
  size = "small",
  href = "/",
  className = "",
  priority = false,
}: WordmarkProps) {
  const { width, height } = dimensions[size];

  const image = (
    <Image
      src="/images/brand/signature-logo.svg"
      alt="Shawn Capizzi"
      width={width}
      height={height}
      priority={priority || size === "large"}
      className={`h-auto w-auto ${className}`}
    />
  );

  if (href === null) {
    return image;
  }

  return (
    <Link
      href={href}
      aria-label="Shawn Capizzi — home"
      className="inline-block focus-visible:outline-2 focus-visible:outline-offset-4"
    >
      {image}
    </Link>
  );
}
