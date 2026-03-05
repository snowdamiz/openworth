import { useRef, type MouseEvent } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { AnimatedSection } from "@/components/shared/AnimatedSection"
import { SectionHeading } from "@/components/shared/SectionHeading"
import { services } from "@/lib/constants"

function ServiceCard({ service, index }: { service: typeof services[number]; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null)

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const rect = cardRef.current?.getBoundingClientRect()
    if (!rect) return
    const x = ((e.clientX - rect.left) / rect.width) * 100
    const y = ((e.clientY - rect.top) / rect.height) * 100
    cardRef.current?.style.setProperty("--mouse-x", `${x}%`)
    cardRef.current?.style.setProperty("--mouse-y", `${y}%`)
  }

  return (
    <AnimatedSection delay={0.15 * index}>
      <Card
        ref={cardRef}
        onMouseMove={handleMouseMove}
        className="glow-card group h-full border-border bg-card/50"
      >
        <CardContent className="flex h-full flex-col pt-6">
          {/* Number + Icon row */}
          <div className="mb-5 flex items-center justify-between">
            <span className="text-4xl font-bold text-muted-foreground/20">
              0{index + 1}
            </span>
            <div className="relative">
              {/* Pulse ring behind icon */}
              <span className="animate-pulse-ring absolute inset-0 rounded-xl bg-primary/10" />
              <div className="relative flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary/15">
                <service.icon className="h-5 w-5" />
              </div>
            </div>
          </div>

          <h3 className="mb-2 text-xl font-semibold">{service.title}</h3>
          <p className="mb-5 flex-1 text-sm leading-relaxed text-muted-foreground">
            {service.description}
          </p>

          {/* Feature list */}
          <div className="flex flex-wrap gap-1.5">
            {service.features.map((f) => (
              <Badge key={f} variant="secondary" className="text-xs font-normal">
                {f}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    </AnimatedSection>
  )
}

function HexGridDecoration() {
  return (
    <svg
      viewBox="0 0 300 300"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="pointer-events-none absolute -right-20 bottom-0 hidden h-64 text-primary/[0.04] lg:block"
    >
      {/* Hexagon grid pattern */}
      {[0, 1, 2].map((row) =>
        [0, 1, 2].map((col) => {
          const x = col * 80 + (row % 2) * 40 + 40
          const y = row * 70 + 50
          return (
            <polygon
              key={`${row}-${col}`}
              points={`${x},${y - 30} ${x + 26},${y - 15} ${x + 26},${y + 15} ${x},${y + 30} ${x - 26},${y + 15} ${x - 26},${y - 15}`}
              stroke="currentColor"
              strokeWidth="1"
              fill="none"
            />
          )
        }),
      )}
    </svg>
  )
}

export function Services() {
  return (
    <section
      id="services"
      className="relative scroll-mt-20 px-4 py-20 sm:px-6 md:py-28"
    >
      {/* Subtle background */}
      <div className="spotlight pointer-events-none absolute inset-0" />
      <HexGridDecoration />

      <div className="relative mx-auto max-w-6xl">
        <AnimatedSection>
          <SectionHeading
            title="What We Build"
            subtitle="From SaaS platforms to open source libraries — we ship across the stack."
            label="Services"
          />
        </AnimatedSection>

        <div className="grid gap-6 md:grid-cols-3">
          {services.map((service, i) => (
            <ServiceCard key={service.title} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
