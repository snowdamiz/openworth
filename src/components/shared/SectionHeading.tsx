import { cn } from "@/lib/utils"

interface SectionHeadingProps {
  title: string
  subtitle?: string
  align?: "left" | "center"
  label?: string
}

export function SectionHeading({
  title,
  subtitle,
  align = "center",
  label,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "mb-12 md:mb-16",
        align === "center" && "text-center",
      )}
    >
      {label && (
        <span className="mb-3 inline-block rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-medium uppercase text-primary">
          {label}
        </span>
      )}
      <h2 className="text-3xl font-bold md:text-4xl lg:text-5xl">
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            "mt-4 max-w-2xl text-lg text-muted-foreground",
            align === "center" && "mx-auto",
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  )
}
