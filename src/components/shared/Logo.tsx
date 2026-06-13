import { cn } from "@/lib/utils"

interface LogoProps {
  className?: string
  size?: number
}

export function LogoIcon({ className, size = 28 }: LogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("shrink-0", className)}
    >
      <defs>
        <linearGradient id="logo-grad" x1="0" y1="0" x2="32" y2="32" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="oklch(0.68 0.20 255)" />
          <stop offset="100%" stopColor="oklch(0.55 0.22 250)" />
        </linearGradient>
      </defs>
      {/* Outer diamond */}
      <path
        d="M16 2L29 16L16 30L3 16L16 2Z"
        stroke="url(#logo-grad)"
        strokeWidth="2"
        fill="none"
      />
      {/* Inner diamond offset */}
      <path
        d="M16 8L23 16L16 24L9 16L16 8Z"
        fill="url(#logo-grad)"
        opacity="0.9"
      />
      {/* Center accent */}
      <circle cx="16" cy="16" r="2.5" fill="oklch(0.12 0.01 240)" />
    </svg>
  )
}

export function LogoFull({ className }: { className?: string }) {
  return (
    <span className={cn("flex items-center gap-2", className)}>
      <LogoIcon />
      <span className="text-xl font-bold">
        <span className="text-foreground">Open</span>
        <span className="gradient-text">Worth</span>
      </span>
    </span>
  )
}
