"use client"

import { useEffect, useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mail, Phone, MapPin } from "lucide-react"
import { SocialLinks } from "./social-links"
import { ContactForm } from "./contact-form"

export function ContactSection() {
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
    <section id="contact" ref={sectionRef} className="py-20 px-4 md:px-8 lg:px-16">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-balance animate-pulse">
            Let's <span className="text-primary">Connect</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto text-pretty">
            Ready to transform your brand and accelerate your growth? Get in touch with our team today.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          <div>
            <ContactForm />
          </div>

          <div className="space-y-6">
            <Card className="animate-card opacity-0 bg-card border-border hover:shadow-lg transition-all duration-300 hover:scale-105">
              <CardContent className="p-6 flex items-center space-x-4">
                <Mail className="h-8 w-8 text-primary flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold mb-1">Email Us</h3>
                  <p className="text-muted-foreground">gs9agency@gmail.com</p>
                </div>
              </CardContent>
            </Card>

            <Card className="animate-card opacity-0 bg-card border-border hover:shadow-lg transition-all duration-300 hover:scale-105">
              <CardContent className="p-6 flex items-center space-x-4">
                <Phone className="h-8 w-8 text-primary flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold mb-1">Call Us</h3>
                  <p className="text-muted-foreground">01044200277</p>
                </div>
              </CardContent>
            </Card>

            <Card className="animate-card opacity-0 bg-card border-border hover:shadow-lg transition-all duration-300 hover:scale-105">
              <CardContent className="p-6 flex items-center space-x-4">
                <MapPin className="h-8 w-8 text-primary flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold mb-1">Visit Us</h3>
                  <p className="text-muted-foreground text-pretty">16 El-Sobky Street, Dokki District, Giza, Egypt</p>
                </div>
              </CardContent>
            </Card>

            <div className="text-center pt-6">
              <SocialLinks />
            </div>
          </div>
        </div>

        <div className="text-center">
          <div className="bg-primary/10 rounded-lg p-8 animate-card opacity-0 hover:bg-primary/20 transition-all duration-300">
            <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
            <p className="text-muted-foreground mb-6 text-pretty">
              For e-commerce startups struggling with low sales and rising costs, we provide comprehensive solutions
              that combine market research, artificial intelligence, and automation.
            </p>
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground hover:scale-105 transition-all duration-300"
            >
              Start Your Project
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
