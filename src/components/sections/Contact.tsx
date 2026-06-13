import { Mail, Github, ArrowUpRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { AnimatedSection } from "@/components/shared/AnimatedSection"
import { GradientText } from "@/components/shared/GradientText"
import { LogoIcon } from "@/components/shared/Logo"

export function Contact() {
  return (
    <section
      id="contact"
      className="relative scroll-mt-20 overflow-hidden px-4 py-20 sm:px-6 md:py-28"
    >
      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0">
        <div className="spotlight absolute inset-0 rotate-180" />
        <div className="dot-grid absolute inset-0 opacity-30" />
      </div>

      <div className="relative mx-auto max-w-3xl">
        <AnimatedSection>
          <div className="relative rounded-2xl border border-border bg-card/50 p-8 text-center backdrop-blur-sm md:p-12">
            {/* Decorative logo in corner */}
            <div className="pointer-events-none absolute right-6 top-6 opacity-[0.04]">
              <LogoIcon size={120} />
            </div>

            <span className="mb-4 inline-block rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-medium uppercase text-primary">
              Contact
            </span>

            <h2 className="text-3xl font-bold md:text-4xl">
              Building something that{" "}
              <GradientText>belongs here?</GradientText>
            </h2>

            <p className="mx-auto mt-4 max-w-md text-base text-muted-foreground">
              Reach out about collaborations, open source work, partnerships,
              or one of the products in the OpenWorth portfolio.
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button
                size="lg"
                className="gradient-bg border-0 text-white hover:opacity-90"
                asChild
              >
                <a href="mailto:support@openworth.io">
                  <Mail className="mr-2 h-4 w-4" />
                  support@openworth.io
                  <ArrowUpRight className="ml-1.5 h-3.5 w-3.5" />
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a
                  href="https://github.com/Openworth"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="mr-2 h-4 w-4" />
                  GitHub
                </a>
              </Button>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
