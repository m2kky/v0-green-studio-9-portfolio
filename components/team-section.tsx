"use client"

import { useEffect, useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"

const teamMembers = [
  {
    name: "Mohamed Mekky",
    role: "Co-Founder & AI Specialist",
    image: "/team/Mekey .jpeg",
    imageHeight: 150,
  },
  {
    name: "Nour Ibrahem",
    role: "Front-end & AI",
    image: "/team/Nour.jpeg",
    imageHeight: 150,
  },
  {
    name: "Assem Darwish",
    role: "Graphic designer",
    image: "/team/Assem Darwish.jpeg",
    imageHeight: 150,
  },
  {
    name: "Magdy Shaban",
    role: "Social media specialist",
    image: "/team/megz.jpeg",
    imageHeight: 150,
  },
  {
    name: "Alaa Sayed",
    role: "Media production leader",
    image: "/team/alaa (2).jpg",
    imageHeight: 150,
  },
  {
    name: "Sama Muhammad",
    role: "Content creator",
    image: "/team/Sama .jpeg",
    imageHeight: 150,
  },
  {
    name: "Aya Salem",
    role: "video editor ",
    image: "/team/aya.jpeg",
    imageHeight: 219,
  },
  {
    name: "Sondos Sayed",
    role: "Video content creation",
    image: "/team/Sondos.jpeg",
    imageHeight: 219,
  },
  {
    name: "Tasneem Thabet",
    role: "Photographer & Video Editor",
    image: "/team/Tesneam.jpeg",
    imageHeight: 219,
  },
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <Card
              key={index}
              className="animate-card opacity-0 text-center glass-effect border-primary/10 hover:border-primary/30 hover:shadow-xl hover:scale-105 hover:-translate-y-2 transition-all duration-300 group"
            >
              <CardContent className="p-8">
                <div className="mb-6">
                  <div className="w-[150px] h-[150px] mx-auto mb-4 rounded-full overflow-hidden border-2 border-primary/20">
                    <Image
                      src={member.image}
                      alt={member.name}
                      width={150}
                      height={member.imageHeight}
                      className={`object-cover object-center ${member.imageHeight === 150 ? 'w-full h-full' : ''}`}
                      quality={100}
                      priority
                    />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-foreground group-hover:text-primary transition-colors duration-300">
                    {member.name}
                  </h3>
                  <Badge
                    variant="secondary"
                    className="text-xs px-2 py-1 bg-green-600 text-white hover:bg-green-700 inline-block max-w-full group-hover:scale-105 transition-all duration-300"
                  >
                    {member.role}
                  </Badge>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
