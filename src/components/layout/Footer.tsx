import { Separator } from "@/components/ui/separator"
import { navItems, socialLinks } from "@/lib/constants"
import { useScrollTo } from "@/hooks/useScrollTo"
import { LogoIcon } from "@/components/shared/Logo"

export function Footer() {
  const scrollTo = useScrollTo()

  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="grid gap-10 md:grid-cols-12">
          {/* Company info */}
          <div className="md:col-span-5">
            <div className="flex items-center gap-2">
              <LogoIcon size={24} />
              <h3 className="text-lg font-bold">
                Open<span className="gradient-text">Worth</span>
              </h3>
            </div>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted-foreground">
              Building software across creator tools, developer systems,
              crypto rails, desktop agents, languages, and games.
            </p>
            <div className="mt-5 flex gap-2">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-border text-muted-foreground transition-all hover:border-primary/30 hover:text-foreground"
                  aria-label={link.label}
                >
                  <link.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div className="md:col-span-3 md:col-start-7">
            <h4 className="mb-4 text-sm font-semibold uppercase text-foreground">
              Navigation
            </h4>
            <ul className="space-y-2.5">
              {navItems.map((item) => (
                <li key={item.href}>
                  <button
                    onClick={() => scrollTo(item.href.replace("#", ""))}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-3">
            <h4 className="mb-4 text-sm font-semibold uppercase text-foreground">
              Contact
            </h4>
            <ul className="space-y-2.5 text-sm text-muted-foreground">
              <li>
                <a
                  href="mailto:hello@openworth.io"
                  className="transition-colors hover:text-primary"
                >
                  hello@openworth.io
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/openworth"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-primary"
                >
                  github.com/openworth
                </a>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col items-center justify-between gap-3 text-xs text-muted-foreground sm:flex-row">
          <p>&copy; {new Date().getFullYear()} OpenWorth. All rights reserved.</p>
          <p>Built for useful software in whatever shape it needs.</p>
        </div>
      </div>
    </footer>
  )
}
