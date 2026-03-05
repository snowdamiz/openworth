import { useCallback } from "react"

export function useScrollTo() {
  return useCallback((id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }, [])
}
