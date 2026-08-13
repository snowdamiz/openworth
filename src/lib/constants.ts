import type { LucideIcon } from "lucide-react"
import {
  Code,
  Github,
  Mail,
  ShieldCheck,
  Sparkles,
  Users,
  ExternalLink,
  Clapperboard,
  Blocks,
  Workflow,
  PackageOpen,
} from "lucide-react"

export type NavItem = {
  label: string
  href: string
}

export const navItems: NavItem[] = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
]

export type Service = {
  title: string
  description: string
  icon: LucideIcon
  features: string[]
}

export const services: Service[] = [
  {
    title: "Independent Products",
    description:
      "From creator workflows to games and payments, we follow the product instead of forcing it into one category.",
    icon: PackageOpen,
    features: ["Consumer apps", "Desktop software", "Experimental markets"],
  },
  {
    title: "Developer Systems",
    description:
      "Languages, agent studios, observability, and infrastructure tools built for people who make software.",
    icon: Code,
    features: ["Open source", "Local-first tools", "Distributed runtimes"],
  },
  {
    title: "Applied AI & Automation",
    description:
      "AI shows up where it helps the workflow: clipping live streams, triaging errors, or coordinating coding agents.",
    icon: Workflow,
    features: ["Creator automation", "Agent workflows", "AI-assisted triage"],
  },
]

export type Project = {
  name: string
  shortName: string
  description: string
  techStack: string[]
  status: "Released" | "Beta" | "In Progress"
  href?: string
  repoHref?: string
  icon: LucideIcon
  logoSrc: string
  logoBackground: string
  accent: string
  accentSecondary: string
  featured?: boolean
  hidden?: boolean
}

export const projects: Project[] = [
  {
    name: "Clippster",
    shortName: "CL",
    description:
      "A creator desktop app for turning streams into clips with live DVR, AI highlight detection, captions, timeline editing, campaigns, and team workflows.",
    techStack: ["Creator tools", "AI highlights", "Video editor", "Team campaigns"],
    status: "Beta",
    href: "https://clippster.app",
    icon: Clapperboard,
    logoSrc: "https://clippster.app/logo-icon.svg",
    logoBackground: "#0a0a0b",
    accent: "#06b6d4",
    accentSecondary: "#8b5cf6",
    featured: true,
  },
  {
    name: "tokend",
    shortName: "TD",
    description:
      "Creator capital markets for verified humans: real scarcity, fair bonding curves, locked liquidity, and live trading alongside streams.",
    techStack: ["Creator markets", "KYC", "Bonding curves", "Live trading"],
    status: "In Progress",
    href: "https://tokend.tv",
    icon: Blocks,
    logoSrc: "/logos/tokend-icon.svg",
    logoBackground: "#0a0a0b",
    accent: "#5eead4",
    accentSecondary: "#f472b6",
    featured: true,
  },
]

export const visibleProjects = projects.filter((project) => !project.hidden)

export type ValueItem = {
  title: string
  description: string
  icon: LucideIcon
}

export const values: ValueItem[] = [
  {
    title: "Wide by design",
    description:
      "OpenWorth is not a single-category studio. If the idea needs a language, a game, a desktop app, or a token system, we build there.",
    icon: Sparkles,
  },
  {
    title: "Built where possible in the open",
    description:
      "Several projects publish source, docs, or public product surfaces so users can inspect the work and follow the roadmap.",
    icon: ShieldCheck,
  },
  {
    title: "Practical before polished theater",
    description:
      "The portfolio is opinionated, technical, and hands-on: shipping beats category purity, and usefulness beats vague positioning.",
    icon: Users,
  },
]

export const stats = [
  { value: "2", label: "Featured projects" },
  { value: "1", label: "Public beta" },
  { value: "1", label: "In progress" },
]

export type SocialLink = {
  icon: LucideIcon
  href: string
  label: string
}

export const socialLinks: SocialLink[] = [
  { icon: Github, href: "https://github.com/Openworth", label: "GitHub" },
  { icon: Mail, href: "mailto:support@openworth.io", label: "Email" },
]

export { ExternalLink }
