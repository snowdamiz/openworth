import { Card, CardContent } from "@/components/ui/card"
import { AnimatedSection } from "@/components/shared/AnimatedSection"
import { SectionHeading } from "@/components/shared/SectionHeading"
import { GradientText } from "@/components/shared/GradientText"
import { values } from "@/lib/constants"

function CircuitDecoration() {
  return (
    <svg
      viewBox="0 0 200 300"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="pointer-events-none absolute -left-16 top-1/2 hidden h-72 -translate-y-1/2 text-primary/[0.06] lg:block"
    >
      <line x1="100" y1="0" x2="100" y2="300" stroke="currentColor" strokeWidth="1" />
      <line x1="100" y1="50" x2="170" y2="50" stroke="currentColor" strokeWidth="1" />
      <line x1="100" y1="120" x2="160" y2="120" stroke="currentColor" strokeWidth="1" />
      <line x1="100" y1="190" x2="180" y2="190" stroke="currentColor" strokeWidth="1" />
      <line x1="100" y1="250" x2="150" y2="250" stroke="currentColor" strokeWidth="1" />
      <circle cx="170" cy="50" r="4" fill="currentColor" />
      <circle cx="160" cy="120" r="4" fill="currentColor" />
      <circle cx="180" cy="190" r="4" fill="currentColor" />
      <circle cx="150" cy="250" r="4" fill="currentColor" />
      <circle cx="100" cy="50" r="3" stroke="currentColor" strokeWidth="1" fill="none" />
      <circle cx="100" cy="120" r="3" stroke="currentColor" strokeWidth="1" fill="none" />
      <circle cx="100" cy="190" r="3" stroke="currentColor" strokeWidth="1" fill="none" />
      <circle cx="100" cy="250" r="3" stroke="currentColor" strokeWidth="1" fill="none" />
    </svg>
  )
}

export function About() {
  return (
    <section id="about" className="relative scroll-mt-20 px-4 py-20 sm:px-6 md:py-28">
      <CircuitDecoration />

      <div className="mx-auto max-w-6xl">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left column: statement */}
          <div className="lg:col-span-5">
            <AnimatedSection>
              <SectionHeading title="Who We Are" label="About" align="left" />
              <p className="text-lg leading-relaxed text-muted-foreground">
                OpenWorth was founded on the belief that great software should be{" "}
                <GradientText>open, intelligent, and built with developers in mind.</GradientText>
              </p>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                We combine deep technical expertise with a product-first mindset
                to ship tools and platforms that developers actually want to use.
                No bloat, no fluff — just software that works.
              </p>
            </AnimatedSection>
          </div>

          {/* Right column: value cards */}
          <div className="space-y-4 lg:col-span-7">
            {values.map((value, i) => (
              <AnimatedSection key={value.title} delay={0.1 + 0.1 * i}>
                <Card className="glow-card border-border bg-card/50">
                  <CardContent className="flex items-start gap-4 pt-6">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <value.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="text-base font-semibold">{value.title}</h3>
                      <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                        {value.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
