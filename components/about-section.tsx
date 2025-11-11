"use client"

import { useEffect, useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Target, Users, Lightbulb, Award, Heart } from "lucide-react"

const coreValues = [
  { icon: Award, title: "Excellence", description: "We are committed to quality in everything we do." },
  { icon: Users, title: "Collaboration", description: "A team with diverse expertise working together." },
  { icon: Lightbulb, title: "Creativity", description: "Delivering innovative solutions for every challenge." },
  { icon: Heart, title: "Credibility", description: "Building transparent relationships with our clients." },
]

export function AboutSection() {
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
    <section id="about" ref={sectionRef} className="py-20 px-4 md:px-8 lg:px-16">
      <div className="max-w-6xl mx-auto glass-effect rounded-3xl p-8 md:p-12 hover:shadow-2xl transition-all duration-500">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-balance animate-pulse">
            About <span className="text-primary">Green Studio 9</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto text-pretty">
            Founded in April 2025 in Giza, Egypt, we are a 20-member team with diverse talents in Marketing, Research,
            Branding, Videography, and AI. We deliver integrated services focusing on e-commerce and emerging brands.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <Card className="animate-card opacity-0 glass-effect border-primary/20 hover:scale-105 hover:rotate-1 transition-all duration-300">
            <CardContent className="p-8">
              <div className="flex items-center mb-4">
                <Target className="h-8 w-8 text-primary mr-3 animate-spin" />
                <h3 className="text-2xl font-bold">Our Vision</h3>
              </div>
              <p className="text-muted-foreground text-pretty">
                To become the preferred creative partner for e-commerce companies in Egypt and the Gulf, setting new
                standards in marketing and media production.
              </p>
            </CardContent>
          </Card>

          <Card className="animate-card opacity-0 glass-effect border-accent/20 hover:scale-105 hover:-rotate-1 transition-all duration-300">
            <CardContent className="p-8">
              <div className="flex items-center mb-4">
                <Lightbulb className="h-8 w-8 text-accent mr-3 animate-bounce" />
                <h3 className="text-2xl font-bold">Our Mission</h3>
              </div>
              <p className="text-muted-foreground text-pretty">
                We empower brands to grow through innovative strategies and measurable results, combining creativity
                with data-driven insights.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="mb-16">
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-12 animate-pulse">Our Core Values</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreValues.map((value, index) => (
              <Card
                key={index}
                className="animate-card opacity-0 text-center glass-effect border-primary/10 hover:border-primary/30 hover:shadow-lg hover:scale-110 hover:-translate-y-2 transition-all duration-300"
              >
                <CardContent className="p-6">
                  <value.icon className="h-12 w-12 text-primary mx-auto mb-4 animate-float" />
                  <h4 className="text-xl font-semibold mb-2">{value.title}</h4>
                  <p className="text-muted-foreground text-sm text-pretty">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
