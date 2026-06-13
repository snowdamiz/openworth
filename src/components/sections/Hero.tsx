import { motion } from "motion/react"
import { ArrowRight, Github, Terminal } from "lucide-react"
import { Button } from "@/components/ui/button"
import { GradientText } from "@/components/shared/GradientText"
import { useScrollTo } from "@/hooks/useScrollTo"
import { stats } from "@/lib/constants"
import { LogoIcon } from "@/components/shared/Logo"

const terminalLines = [
  { prompt: true, text: "openworth portfolio --status" },
  { prompt: false, text: "  released    team556.com · meshlang.dev" },
  { prompt: false, text: "  beta        clippster.app · xeroshell.com · slopheroes.xyz" },
  { prompt: false, text: "  building    tokend.tv · hyperpush.dev" },
  { prompt: true, text: "" },
]

function ConstellationGraphic() {
  return (
    <svg
      viewBox="0 0 400 400"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="absolute -right-12 -bottom-12 h-[320px] w-[320px] opacity-[0.07]"
    >
      {/* Concentric diamonds */}
      <path d="M200 40L340 200L200 360L60 200Z" stroke="currentColor" strokeWidth="1" />
      <path d="M200 90L300 200L200 310L100 200Z" stroke="currentColor" strokeWidth="1" />
      <path d="M200 140L260 200L200 260L140 200Z" stroke="currentColor" strokeWidth="1" />
      {/* Cross lines */}
      <line x1="200" y1="40" x2="200" y2="360" stroke="currentColor" strokeWidth="0.5" />
      <line x1="60" y1="200" x2="340" y2="200" stroke="currentColor" strokeWidth="0.5" />
      {/* Corner accents */}
      <circle cx="200" cy="40" r="3" fill="currentColor" />
      <circle cx="340" cy="200" r="3" fill="currentColor" />
      <circle cx="200" cy="360" r="3" fill="currentColor" />
      <circle cx="60" cy="200" r="3" fill="currentColor" />
      <circle cx="200" cy="200" r="4" fill="currentColor" />
    </svg>
  )
}

export function Hero() {
  const scrollTo = useScrollTo()

  return (
    <section className="relative flex min-h-[88svh] items-center overflow-hidden px-4 pb-14 pt-24">
      {/* Dot grid background */}
      <div className="dot-grid pointer-events-none absolute inset-0" />

      {/* Radial spotlight from top */}
      <div className="spotlight pointer-events-none absolute inset-0" />

      {/* Floating accent shapes */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="animate-float absolute top-[15%] left-[8%] h-32 w-32 rounded-2xl border border-primary/10 bg-primary/5"
          style={{ transform: "rotate(12deg)" }}
        />
        <div className="animate-float-delayed absolute right-[12%] bottom-[25%] h-24 w-24 rounded-full border border-primary/8 bg-primary/3" />
        <div
          className="animate-float-slow absolute top-[60%] left-[15%] h-16 w-16 rounded-lg border border-primary/10 bg-primary/5"
          style={{ transform: "rotate(-8deg)" }}
        />
      </div>

      <div className="relative z-10 mx-auto grid max-w-6xl gap-12 lg:grid-cols-12 lg:gap-8">
        {/* Left: Text content */}
        <div className="flex flex-col justify-center lg:col-span-7">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-medium text-primary">
              <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
              Seven products, zero fixed category
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-6 text-4xl font-extrabold leading-[1.1] sm:text-5xl lg:text-6xl"
          >
            Software that goes
            <br />
            <GradientText>where the idea points</GradientText>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="mt-5 max-w-lg text-lg leading-relaxed text-muted-foreground"
          >
            OpenWorth builds across creator tools, developer infrastructure,
            crypto rails, desktop agents, programming languages, and games.
            The common thread is simple: useful software, shipped with taste.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <Button
              size="lg"
              className="gradient-bg border-0 text-white hover:opacity-90"
              onClick={() => scrollTo("projects")}
            >
              View Portfolio
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="https://github.com/openworth" target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-4 w-4" />
                GitHub
              </a>
            </Button>
          </motion.div>

          {/* Stats row */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="mt-12 flex flex-wrap gap-8 border-t border-border pt-8"
          >
            {stats.map((stat) => (
              <div key={stat.label}>
                <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                <p className="text-xs text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right: Terminal + decorative graphic */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="hidden lg:col-span-5 lg:flex lg:items-center"
        >
          <div className="relative w-full">
            {/* Large logo watermark behind terminal */}
            <div className="absolute -top-8 -right-8 z-0 opacity-[0.04]">
              <LogoIcon size={200} />
            </div>

            <ConstellationGraphic />

            {/* Terminal window */}
            <div className="relative z-10 w-full overflow-hidden rounded-xl border border-border bg-card shadow-2xl shadow-primary/5">
              {/* Title bar */}
              <div className="flex items-center gap-2 border-b border-border px-4 py-3">
                <div className="flex gap-1.5">
                  <span className="h-3 w-3 rounded-full bg-red-500/70" />
                  <span className="h-3 w-3 rounded-full bg-yellow-500/70" />
                  <span className="h-3 w-3 rounded-full bg-green-500/70" />
                </div>
                <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                  <Terminal className="h-3 w-3" />
                  terminal
                </div>
              </div>
              {/* Terminal body */}
              <div className="p-4 font-mono text-sm leading-relaxed">
                {terminalLines.map((line, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3, delay: 0.8 + i * 0.3 }}
                    className={line.prompt ? "text-foreground" : "text-muted-foreground"}
                  >
                    {line.prompt && <span className="text-primary">$&nbsp;</span>}
                    {line.text}
                    {i === terminalLines.length - 1 && (
                      <span className="animate-blink inline-block h-4 w-1.5 translate-y-0.5 bg-primary" />
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
