interface SymbolMarkProps {
  size?: number;
  className?: string;
  interactive?: boolean;
  strokeWidth?: number;
}

const CX = 49.5;
const CY = 50.5;

const ENDPOINTS = [
  { x: 95.0, y: 50.5 },
  { x: 88.3, y: 66.6 },
  { x: 80.6, y: 81.6 },
  { x: 64.8, y: 87.5 },
  { x: 49.5, y: 96.5 },
  { x: 33.0, y: 90.2 },
  { x: 17.7, y: 82.3 },
  { x: 11.6, y: 66.2 },
  { x: 5.5, y: 50.5 },
  { x: 10.7, y: 34.4 },
  { x: 17.0, y: 18.0 },
  { x: 34.2, y: 13.5 },
  { x: 49.5, y: 5.5 },
  { x: 66.0, y: 10.8 },
  { x: 80.6, y: 19.4 },
  { x: 87.4, y: 34.8 },
];

export function SymbolMark({
  size = 24,
  className = "",
  interactive = true,
  strokeWidth = 1.5,
}: SymbolMarkProps) {
  const interactiveClasses = interactive
    ? "transition-transform duration-[600ms] ease-out hover:rotate-[12deg]"
    : "";

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`inline-block ${interactiveClasses} ${className}`}
      aria-hidden="true"
    >
      {ENDPOINTS.map((endpoint, i) => (
        <line
          key={i}
          x1={CX}
          y1={CY}
          x2={endpoint.x}
          y2={endpoint.y}
          stroke="currentColor"
          strokeWidth={strokeWidth}
          strokeLinecap="round"
        />
      ))}
    </svg>
  );
}
