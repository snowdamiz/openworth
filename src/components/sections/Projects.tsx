import { useRef, type CSSProperties, type MouseEvent } from "react"
import { ExternalLink, Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import { AnimatedSection } from "@/components/shared/AnimatedSection"
import { SectionHeading } from "@/components/shared/SectionHeading"
import { visibleProjects, type Project } from "@/lib/constants"
import { cn } from "@/lib/utils"

const statusStyles: Record<string, string> = {
  Released: "bg-emerald-500/10 text-emerald-400 border-emerald-500/25",
  Beta: "bg-amber-500/10 text-amber-400 border-amber-500/25",
  "In Progress": "bg-sky-500/10 text-sky-400 border-sky-500/25",
}

const statusDots: Record<string, string> = {
  Released: "bg-emerald-400",
  Beta: "bg-amber-400",
  "In Progress": "bg-sky-400",
}

function getHostname(href?: string) {
  if (!href) return "OpenWorth"
  return new URL(href).hostname.replace(/^www\./, "")
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null)
  const Icon = project.icon
  const hostname = getHostname(project.href)
  const projectStyle = {
    "--project-accent": project.accent,
    "--project-accent-secondary": project.accentSecondary,
    "--project-logo-bg": project.logoBackground,
    "--glow-color": `${project.accent}24`,
    "--glow-border": `${project.accent}66`,
  } as CSSProperties

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const rect = cardRef.current?.getBoundingClientRect()
    if (!rect) return
    const x = ((e.clientX - rect.left) / rect.width) * 100
    const y = ((e.clientY - rect.top) / rect.height) * 100
    cardRef.current?.style.setProperty("--mouse-x", `${x}%`)
    cardRef.current?.style.setProperty("--mouse-y", `${y}%`)
  }

  return (
    <AnimatedSection delay={0.08 * index}>
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        style={projectStyle}
        className="glow-card flex h-full flex-col rounded-xl border border-border bg-card/55 p-5"
      >
        <div className="mb-4 flex items-start justify-between gap-3">
          <div
            className="relative flex h-12 min-w-12 max-w-32 items-center justify-center overflow-hidden rounded-lg border border-white/10 px-2 shadow-inner"
            style={{ backgroundColor: "var(--project-logo-bg)" }}
          >
            <img
              src={project.logoSrc}
              alt={`${project.name} logo`}
              className="relative max-h-8 max-w-28 object-contain"
              loading="lazy"
            />
          </div>
          <span
            className={cn(
              "inline-flex shrink-0 items-center gap-1.5 rounded-full border px-2 py-0.5 text-[11px] font-medium",
              statusStyles[project.status],
            )}
          >
            <span className={cn("h-1.5 w-1.5 rounded-full", statusDots[project.status])} />
            {project.status}
          </span>
        </div>

        <div className="mb-3 flex items-center gap-2 text-[11px] font-medium uppercase text-muted-foreground">
          <Icon className="h-3.5 w-3.5" style={{ color: "var(--project-accent)" }} />
          <span>{hostname}</span>
        </div>

        <h3 className="mb-2 text-base font-semibold">{project.name}</h3>

        <p className="mb-4 flex-1 text-sm leading-relaxed text-muted-foreground">
          {project.description}
        </p>

        <div className="mb-3 flex flex-wrap gap-1.5">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="rounded-md border border-border bg-muted/50 px-2 py-0.5 text-[11px] text-muted-foreground"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-auto flex flex-wrap gap-2 pt-1">
          {project.href && (
            <Button
              variant="ghost"
              size="sm"
              className="-ml-2 h-8 w-fit hover:bg-muted/70"
              asChild
            >
              <a
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "var(--project-accent)" }}
              >
                Visit site
                <ExternalLink className="ml-1.5 h-3.5 w-3.5" />
              </a>
            </Button>
          )}
          {project.repoHref && (
            <Button
              variant="ghost"
              size="sm"
              className="h-8 w-fit text-muted-foreground hover:bg-muted/70 hover:text-foreground"
              asChild
            >
              <a href={project.repoHref} target="_blank" rel="noopener noreferrer">
                <Github className="mr-1.5 h-3.5 w-3.5" />
                Code
              </a>
            </Button>
          )}
        </div>
      </div>
    </AnimatedSection>
  )
}

export function Projects() {
  return (
    <section id="projects" className="relative scroll-mt-20 px-4 py-20 sm:px-6 md:py-28">
      <div className="dot-grid pointer-events-none absolute inset-0 opacity-40" />

      <div className="relative mx-auto max-w-6xl">
        <AnimatedSection>
          <SectionHeading
            title="Featured Projects"
            subtitle="Real products across creator software, community payments, crypto rails, and desktop agent tooling."
            label="Portfolio"
          />
        </AnimatedSection>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {visibleProjects.map((project, i) => (
            <ProjectCard key={project.name} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
