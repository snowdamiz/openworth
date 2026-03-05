import { useRef, type MouseEvent } from "react"
import { ExternalLink, Layers, Cpu, BarChart3, Palette, Activity, MessageSquare } from "lucide-react"
import { Button } from "@/components/ui/button"
import { AnimatedSection } from "@/components/shared/AnimatedSection"
import { SectionHeading } from "@/components/shared/SectionHeading"
import { projects, type Project } from "@/lib/constants"
import { cn } from "@/lib/utils"

const statusStyles: Record<string, string> = {
  Active: "bg-emerald-500/10 text-emerald-400 border-emerald-500/25",
  Beta: "bg-amber-500/10 text-amber-400 border-amber-500/25",
  "Coming Soon": "bg-sky-500/10 text-sky-400 border-sky-500/25",
  "Open Source": "bg-blue-500/10 text-blue-300 border-blue-500/25",
}

const statusDots: Record<string, string> = {
  Active: "bg-emerald-400",
  Beta: "bg-amber-400",
  "Coming Soon": "bg-sky-400",
  "Open Source": "bg-blue-400",
}

const projectIcons = [BarChart3, Layers, Cpu, Palette, Activity, MessageSquare]

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null)
  const Icon = projectIcons[index % projectIcons.length]

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
        className="glow-card flex h-full flex-col rounded-xl border border-border bg-card/50 p-5"
      >
        {/* Icon + Status header */}
        <div className="mb-4 flex items-start justify-between gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/8 text-primary">
            <Icon className="h-4.5 w-4.5" />
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

        {/* Name */}
        <h3 className="mb-2 text-base font-semibold">{project.name}</h3>

        {/* Description */}
        <p className="mb-4 flex-1 text-sm leading-relaxed text-muted-foreground">
          {project.description}
        </p>

        {/* Tech stack */}
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

        {/* Link */}
        {project.href && (
          <Button variant="ghost" size="sm" className="w-fit -ml-2 text-primary hover:text-primary" asChild>
            <a href={project.href} target="_blank" rel="noopener noreferrer">
              View on GitHub
              <ExternalLink className="ml-1.5 h-3.5 w-3.5" />
            </a>
          </Button>
        )}
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
            title="Our Projects"
            subtitle="A selection of products and tools we're actively building and shipping."
            label="Work"
          />
        </AnimatedSection>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <ProjectCard key={project.name} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
