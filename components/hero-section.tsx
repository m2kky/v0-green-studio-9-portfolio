"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { SocialLinks } from "./social-links"

export function HeroSection() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 md:px-8 lg:px-16 relative">
      <div className="max-w-6xl mx-auto text-center space-y-8 glass-effect rounded-3xl p-8 md:p-12 backdrop-blur-xl">
        <div className="space-y-4">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-balance">
            <span className="text-primary">Green Studio</span> <span className="text-accent">9</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Premium Marketing & Media Production Agency
          </p>
          <p className="text-lg md:text-xl text-foreground max-w-4xl mx-auto text-pretty">
            We empower e-commerce brands to grow through innovative strategies, professional content creation, and
            measurable results across Egypt, the Gulf, and Dubai.
          </p>
        </div>

        <div className="flex justify-center">
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-white px-8 py-3 border-0 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Get Started
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>

        <div className="flex justify-center">
          <SocialLinks />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 text-center">
          <div className="space-y-2 glass-effect rounded-xl p-6 transition-all duration-300">
            <h3 className="text-3xl font-bold text-primary">20+</h3>
            <p className="text-muted-foreground">Team Members</p>
          </div>
          <div className="space-y-2 glass-effect rounded-xl p-6 transition-all duration-300">
            <h3 className="text-3xl font-bold text-accent">2025</h3>
            <p className="text-muted-foreground">Founded in Giza</p>
          </div>
          <div className="space-y-2 glass-effect rounded-xl p-6 transition-all duration-300">
            <h3 className="text-3xl font-bold text-primary">100%</h3>
            <p className="text-muted-foreground">Premium Quality</p>
          </div>
        </div>
      </div>
    </section>
  )
}
