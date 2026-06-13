import { useState, useEffect } from "react"
import { Menu, ArrowRight } from "lucide-react"
import { motion } from "motion/react"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet"
import { navItems } from "@/lib/constants"
import { useScrollTo } from "@/hooks/useScrollTo"
import { LogoIcon } from "@/components/shared/Logo"

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const scrollTo = useScrollTo()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleNav = (href: string) => {
    setOpen(false)
    scrollTo(href.replace("#", ""))
  }

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className={`fixed top-0 right-0 left-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/80 shadow-sm shadow-black/5 backdrop-blur-xl border-b border-border"
          : ""
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="flex items-center gap-2 text-xl font-bold"
        >
          <LogoIcon size={26} />
          <span>
            <span className="text-foreground">Open</span>
            <span className="gradient-text">Worth</span>
          </span>
        </button>

        {/* Desktop nav */}
        <div className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <button
              key={item.href}
              onClick={() => handleNav(item.href)}
              className="relative rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {item.label}
            </button>
          ))}
          <Button
            size="sm"
            className="ml-3 gradient-bg border-0 text-white hover:opacity-90"
            onClick={() => handleNav("#contact")}
          >
            Get in Touch
            <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
          </Button>
        </div>

        {/* Mobile nav */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-72 border-border">
            <SheetTitle className="flex items-center gap-2 text-lg font-bold">
              <LogoIcon size={22} />
              <span>
                Open<span className="gradient-text">Worth</span>
              </span>
            </SheetTitle>
            <nav className="mt-8 flex flex-col gap-1">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => handleNav(item.href)}
                  className="rounded-lg px-3 py-2.5 text-left text-base text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                >
                  {item.label}
                </button>
              ))}
              <Button
                className="mt-4 gradient-bg border-0 text-white hover:opacity-90"
                onClick={() => handleNav("#contact")}
              >
                Get in Touch
                <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
              </Button>
            </nav>
          </SheetContent>
        </Sheet>
      </nav>
    </motion.header>
  )
}
