"use client"

import { useEffect, useRef } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { PaletteIcon, SearchIcon, BotIcon, CameraIcon, VideoIcon, TrendingUpIcon } from "@/components/simple-icons"

const services = [
  {
    icon: PaletteIcon,
    title: "Branding & Strategic Consulting",
    description:
      "Complete brand identity development and strategic marketing consultation to position your business for success.",
  },
  {
    icon: SearchIcon,
    title: "Market Research",
    description:
      "In-depth market analysis and consumer insights to inform your business decisions and marketing strategies.",
  },
  {
    icon: BotIcon,
    title: "AI & Automation Solutions",
    description: "Cutting-edge AI tools and automation systems to streamline your operations and improve efficiency.",
  },
  {
    icon: CameraIcon,
    title: "Professional Photography",
    description: "High-quality product and brand photography that captures your vision and engages your audience.",
  },
  {
    icon: VideoIcon,
    title: "Content Production",
    description: "Professional video content, reels, and podcast production to amplify your brand message.",
  },
  {
    icon: TrendingUpIcon,
    title: "Growth Marketing",
    description: "Data-driven marketing strategies designed to scale your e-commerce business and increase ROI.",
  },
]

export function ServicesSection() {
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
              }, index * 150)
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
    <section id="services" ref={sectionRef} className="py-20 px-4 md:px-8 lg:px-16">
      <div className="max-w-6xl mx-auto glass-effect rounded-3xl p-8 md:p-12 hover:shadow-2xl transition-all duration-500">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-balance animate-pulse">
            Our <span className="text-primary">Services</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto text-pretty">
            We provide comprehensive marketing and media production services tailored to help your e-commerce business
            thrive in today's competitive landscape.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="animate-card opacity-0 glass-effect border-primary/10 hover:border-primary/30 hover:shadow-xl hover:scale-105 hover:-translate-y-2 transition-all duration-300 group"
            >
              <CardHeader>
                <div className="group-hover:animate-bounce">
                  <service.icon />
                </div>
                <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4 text-pretty">{service.description}</p>
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full border-primary/30 text-primary hover:bg-primary hover:text-white hover:border-primary hover:scale-105 transition-all duration-300 bg-transparent"
                >
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
