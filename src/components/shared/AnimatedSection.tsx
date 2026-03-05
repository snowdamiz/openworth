import { motion, type Variants } from "motion/react"
import type { ReactNode } from "react"

type Direction = "up" | "fade"

interface AnimatedSectionProps {
  children: ReactNode
  direction?: Direction
  delay?: number
  className?: string
}

const variants: Record<Direction, Variants> = {
  up: {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  },
  fade: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  },
}

export function AnimatedSection({
  children,
  direction = "up",
  delay = 0,
  className,
}: AnimatedSectionProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      variants={variants[direction]}
      className={className}
    >
      {children}
    </motion.div>
  )
}
