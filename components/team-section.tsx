"use client"

import { useEffect, useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { UserLargeIcon, CrownIcon, ZapIcon } from "@/components/simple-icons"

const teamMembers = [
  {
    name: "DR. MOHAMED HARNY",
    role: "Founder",
    icon: CrownIcon,
    color: "text-accent",
  },
  {
    name: "ABDULLAH SAAD",
    role: "Co-Founder & Marketing Director",
    icon: UserLargeIcon,
    color: "text-primary",
  },
  {
    name: "MUHAMMED MEKKY",
    role: "Co-Founder & AI Specialist",
    icon: ZapIcon,
    color: "text-primary",
  },
]

const teamRoles = [
  "Social Media Specialists (Fatma & Salma)",
  "Video Content Creators (Alaa, Sondos, Sama, Mariam)",
  "Video Editors (Mahmoud, Ahmed, Aya)",
  "Media Buyers & Researchers (Poula)",
]

export function TeamSection() {
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
    <section id="team" ref={sectionRef} className="py-20 px-4 md:px-8 lg:px-16">
      <div className="max-w-6xl mx-auto glass-effect rounded-3xl p-8 md:p-12 hover:shadow-2xl transition-all duration-500">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-balance animate-pulse">
            Our <span className="text-primary">Team</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto text-pretty">
            Meet the talented individuals who make Green Studio 9 a powerhouse of creativity, innovation, and
            results-driven marketing.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {teamMembers.map((member, index) => {
            const IconComponent = member.icon
            return (
              <Card
                key={index}
                className="animate-card opacity-0 text-center glass-effect border-primary/10 hover:border-primary/30 hover:shadow-xl hover:scale-105 hover:-translate-y-2 transition-all duration-300 group"
              >
                <CardContent className="p-8">
                  <div className="mb-6">
                    <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 border border-primary/20 group-hover:bg-primary/20 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                      <div className="group-hover:animate-bounce">
                        <IconComponent />
                      </div>
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-foreground group-hover:text-primary transition-colors duration-300">
                      {member.name}
                    </h3>
                    <Badge
                      variant="secondary"
                      className="text-xs px-2 py-1 bg-primary/90 text-white border-primary/90 hover:bg-primary inline-block max-w-full group-hover:scale-105 transition-all duration-300"
                    >
                      {member.role}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <div className="bg-card/50 rounded-lg p-8 border border-primary/10 hover:bg-card/70 hover:border-primary/20 transition-all duration-300">
          <h3 className="text-2xl font-bold text-center mb-8 text-foreground animate-pulse">Our Extended Team</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {teamRoles.map((role, index) => (
              <div
                key={index}
                className="animate-card opacity-0 flex items-center space-x-3 hover:scale-105 transition-all duration-300 group"
              >
                <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 group-hover:animate-pulse group-hover:scale-150 transition-all duration-300" />
                <p className="text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                  {role}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
