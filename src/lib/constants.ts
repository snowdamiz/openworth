import type { LucideIcon } from "lucide-react"
import {
  Cloud,
  Code,
  Brain,
  Github,
  Twitter,
  Linkedin,
  Mail,
  ShieldCheck,
  Sparkles,
  Users,
  ExternalLink,
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
    title: "SaaS Products",
    description:
      "Production-grade platforms built for scale, reliability, and exceptional user experience.",
    icon: Cloud,
    features: ["Multi-tenant architecture", "99.9% uptime SLA", "Real-time analytics"],
  },
  {
    title: "Open Source Tools",
    description:
      "Developer tools and libraries that solve real problems. Built in the open, battle-tested by the community.",
    icon: Code,
    features: ["MIT licensed", "Community-driven", "Production ready"],
  },
  {
    title: "AI/ML Solutions",
    description:
      "Intelligent systems powered by cutting-edge machine learning — from NLP to custom model training.",
    icon: Brain,
    features: ["Custom model training", "Edge deployment", "Sub-ms inference"],
  },
]

export type Project = {
  name: string
  description: string
  techStack: string[]
  status: "Active" | "Beta" | "Coming Soon" | "Open Source"
  href?: string
  featured?: boolean
}

export const projects: Project[] = [
  {
    name: "Nexus Platform",
    description:
      "Unified analytics dashboard for SaaS metrics with real-time data pipelines and customizable reporting.",
    techStack: ["TypeScript", "React", "PostgreSQL", "Redis"],
    status: "Active",
    featured: true,
  },
  {
    name: "Forge CLI",
    description:
      "Zero-config scaffolding tool for full-stack applications. Supports multiple frameworks and deployment targets.",
    techStack: ["Rust", "Node.js", "Docker"],
    status: "Open Source",
    href: "https://github.com/openworth",
  },
  {
    name: "Cortex Engine",
    description:
      "High-performance ML inference engine optimized for edge deployment with sub-millisecond latency.",
    techStack: ["Python", "ONNX", "C++", "CUDA"],
    status: "Beta",
    featured: true,
  },
  {
    name: "Prism UI",
    description:
      "Accessible, themeable component library for React with first-class dark mode and animation support.",
    techStack: ["TypeScript", "React", "Tailwind CSS"],
    status: "Open Source",
    href: "https://github.com/openworth",
  },
  {
    name: "Signal",
    description:
      "Real-time anomaly detection service for infrastructure monitoring with intelligent alerting.",
    techStack: ["Go", "Kafka", "TensorFlow", "Grafana"],
    status: "Active",
  },
  {
    name: "Aether",
    description:
      "Next-generation natural language interface for database querying — ask questions in plain English.",
    techStack: ["Python", "LLMs", "SQL", "React"],
    status: "Coming Soon",
  },
]

export type ValueItem = {
  title: string
  description: string
  icon: LucideIcon
}

export const values: ValueItem[] = [
  {
    title: "Open Source First",
    description:
      "We build in the open. Transparency drives trust, and community feedback makes our software better.",
    icon: ShieldCheck,
  },
  {
    title: "AI-Powered",
    description:
      "We embed intelligent capabilities into everything we build — from developer tools to enterprise platforms.",
    icon: Sparkles,
  },
  {
    title: "Developer-Centric",
    description:
      "Built by developers, for developers. Clean APIs, great docs, and thoughtful DX are non-negotiable.",
    icon: Users,
  },
]

export const stats = [
  { value: "50K+", label: "Downloads / mo" },
  { value: "12", label: "Open Source Repos" },
  { value: "99.9%", label: "Uptime" },
  { value: "4", label: "Products Shipped" },
]

export type SocialLink = {
  icon: LucideIcon
  href: string
  label: string
}

export const socialLinks: SocialLink[] = [
  { icon: Github, href: "https://github.com/openworth", label: "GitHub" },
  { icon: Twitter, href: "https://x.com/openworth", label: "X (Twitter)" },
  { icon: Linkedin, href: "https://linkedin.com/company/openworth", label: "LinkedIn" },
  { icon: Mail, href: "mailto:hello@openworth.io", label: "Email" },
]

export { ExternalLink }
