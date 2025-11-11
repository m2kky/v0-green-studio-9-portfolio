"use client"

import { useEffect, useRef } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, Briefcase, Shuffle, Store, Palette, Camera, Mic, Bot } from "lucide-react"

const businessModels = [
  {
    icon: Calendar,
    title: "Monthly Subscriptions",
    description: "For regular content production and ongoing marketing support.",
    percentage: "40%",
  },
  {
    icon: Briefcase,
    title: "One-Off Projects",
    description: "Branding, photography, research, and strategic consulting.",
    percentage: "40%",
  },
  {
    icon: Shuffle,
    title: "Flexible Mix",
    description: "From project-based to subscription models based on client needs.",
    percentage: "20%",
  },
]

const useCases = [
  { icon: Store, title: "Launch a New Store", description: "Complete setup and branding for e-commerce startups" },
  { icon: Palette, title: "Complete Rebranding", description: "Transform your brand identity and market positioning" },
  { icon: Camera, title: "Professional Photography", description: "High-quality product and brand photography" },
  { icon: Mic, title: "Reels/Podcast Production", description: "Engaging video content and podcast creation" },
  { icon: Bot, title: "AI-driven Automation", description: "Streamline operations with intelligent automation" },
]

export function BusinessModelSection() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = entry.target.querySelectorAll(".animate-card")
            cards.forEach((card, index) => {
              setTimeout(() => {
                card.classList.add("animate-fade-in-up")
              }, index * 100)
            })
          }
        })
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="py-20 px-4 md:px-8 lg:px-16 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-balance">
            Business <span className="text-primary">Strategy</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto text-pretty">
            Our flexible business model adapts to your needs, whether you're launching a new venture or scaling an
            existing business.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {businessModels.map((model, index) => (
            <Card
              key={index}
              className="animate-card opacity-0 bg-background border-border hover:shadow-lg transition-all duration-300"
            >
              <CardHeader className="text-center">
                <model.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle className="text-xl">{model.title}</CardTitle>
                <div className="text-3xl font-bold text-accent">{model.percentage}</div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center text-pretty">{model.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div>
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-12">Use Cases</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {useCases.map((useCase, index) => (
              <Card
                key={index}
                className="animate-card opacity-0 bg-background border-border hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <CardContent className="p-6 text-center">
                  <useCase.icon className="h-10 w-10 text-primary mx-auto mb-4" />
                  <h4 className="text-lg font-semibold mb-2">{useCase.title}</h4>
                  <p className="text-muted-foreground text-sm text-pretty">{useCase.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
