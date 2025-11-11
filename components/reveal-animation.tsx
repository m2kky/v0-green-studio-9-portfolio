"use client"

import { useEffect, useRef, type ReactNode } from "react"

interface RevealAnimationProps {
  children: ReactNode
  direction?: "up" | "left" | "right"
  delay?: number
  className?: string
}

export function RevealAnimation({ children, direction = "up", delay = 0, className = "" }: RevealAnimationProps) {
  const elementRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.remove("section-hidden")
              entry.target.classList.add(`reveal-${direction}`)
            }, delay)
          }
        })
      },
      { threshold: 0.1 },
    )

    if (elementRef.current) {
      observer.observe(elementRef.current)
    }

    return () => observer.disconnect()
  }, [direction, delay])

  return (
    <div ref={elementRef} className={`section-hidden ${className}`}>
      {children}
    </div>
  )
}
