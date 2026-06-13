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
  Gamepad2,
  Network,
  Shield,
  TerminalSquare,
  Bug,
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
    name: "Team556",
    shortName: "556",
    description:
      "A released Solana utility-token ecosystem for the 2A and veteran community, including Digital Armory, private transactions, and retailer payment tools.",
    techStack: ["Solana", "Payments", "Digital Armory", "Community"],
    status: "Released",
    href: "https://team556.com",
    icon: Shield,
    logoSrc: "https://www.team556.com/icon.png?1f6ab42aebdab08e",
    logoBackground: "#0f172a",
    accent: "#9945ff",
    accentSecondary: "#14f195",
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
  {
    name: "Xero",
    shortName: "XE",
    description:
      "A local-first desktop studio for custom coding agents, visual workflows, remote sessions, browser approvals, and bring-your-own model keys.",
    techStack: ["Desktop app", "Coding agents", "Workflows", "Local-first"],
    status: "Beta",
    href: "https://xeroshell.com",
    icon: TerminalSquare,
    logoSrc: "https://xeroshell.com/icon-logo.svg",
    logoBackground: "#10161a",
    accent: "#d4a574",
    accentSecondary: "#4e4337",
    featured: true,
  },
  {
    name: "Mesh",
    shortName: "MSH",
    description:
      "A programming language built for distributed systems with @cluster annotations, runtime failover, load balancing, native binaries, and server stdlib.",
    techStack: ["Language", "Distributed systems", "LLVM", "Server stdlib"],
    status: "Released",
    href: "https://meshlang.dev",
    icon: Network,
    logoSrc: "https://meshlang.dev/logo-icon-white.svg",
    logoBackground: "#0f0f0f",
    accent: "#f5f5f5",
    accentSecondary: "#dea584",
    featured: true,
  },
  {
    name: "Hyperpush",
    shortName: "HP",
    description:
      "Open-source error tracking with token-funded bounties, public bug boards, Solana program errors, and AI-assisted error grouping and fixes.",
    techStack: ["Error tracking", "Open source", "Solana", "Bounties"],
    status: "In Progress",
    href: "https://hyperpush.dev",
    icon: Bug,
    logoSrc: "https://hyperpush.dev/favicon.svg",
    logoBackground: "#051009",
    accent: "#59c184",
    accentSecondary: "#fef3aa",
  },
  {
    name: "Slop Heroes",
    shortName: "SH",
    description:
      "A fast voxel arena hero shooter where heroes grapple, blink, burn, and bend time through tight capture-the-flag fights.",
    techStack: ["Voxel game", "Hero shooter", "Multiplayer", "CTF"],
    status: "Beta",
    href: "https://slopheroes.xyz",
    icon: Gamepad2,
    logoSrc: "https://slopheroes.xyz/favicon.svg",
    logoBackground: "#09090b",
    accent: "#60f4ff",
    accentSecondary: "#ff9435",
  },
]

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
  { value: "7", label: "Featured projects" },
  { value: "2", label: "Released products" },
  { value: "3", label: "Public betas" },
  { value: "2", label: "In progress" },
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
