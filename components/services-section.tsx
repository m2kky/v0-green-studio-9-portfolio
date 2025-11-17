"use client"

import React, { useEffect, useRef } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Camera, Search, Bot, Monitor, ShoppingCart, Users } from "lucide-react"
import Link from "next/link"

const services = [
  {
    id: "media-production",
    icon: Camera,
    title: "Media Production",
    description:
      `From cinematic videos to scroll-stopping
  visuals — we produce content that doesn't
  just look good, it sells.
  Photography | Videography | Motion
  Graphics | Creative Direction`,
  },
  {
    id: "media-buying",
    icon: Search,
    title: "Media Buying",
    description:
        `We run data-driven campaigns across
  Meta, Google, and TikTok.s
  Every ad is tested, optimized, and refined
  to deliver maximum ROI — not empty
  impressions.`,
  },
  {
    id: "automation",
    icon: Bot,
    title: "Automation",
    description: `We connect tools, build workflows, and
  automate systems so your brand works
  smarter, not harder.
  Think Zapier, CRMs, custom bots — we
  make everything talk to everything.`,
  },
  {
    id: "web-development",
    icon: Monitor,
    title: "Web Development & Design",
    description: `We create websites that look stunning and convert visitors into buyers. Fast, modern, and optimized for performance.`,
  },
  {
    id: "ecommerce-stores",
    icon: ShoppingCart,
    title: "E-commerce Stores",
    description: ` We build and scale online stores for brands ready to grow. Shopify, WooCommerce, full setup, and management — from product upload to checkout flow.`
  },
  {
    id: "social-media-management",
    icon: Users,
    title: "Social Media Management",
    description: "We manage, plan, and grow your brand presence across social platforms. Strategy, tone, content — all built to connect, not just post.",
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
              className="animate-card glass-effect border-primary/10 hover:border-primary/30 hover:shadow-xl hover:scale-105 hover:-translate-y-2 transition-all duration-300 group h-[390px] flex flex-col"
            >
              <CardHeader className="text-center pb-4">
                <div className="mb-4 flex justify-center">
                  <div className="w-16 h-16 flex items-center justify-center text-primary group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="w-12 h-12" />
                  </div>
                </div>
                <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center flex-1 flex flex-col justify-between">
                <p className="text-muted-foreground mb-6 text-sm leading-relaxed">{service.description}</p>
                <Link href={`/services/${service.id}`} target="_blank">
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white border-0 hover:from-green-600 hover:to-green-700 hover:shadow-lg hover:scale-105 transition-all duration-300 font-semibold group cursor-pointer"
                  >
                    <span className="flex items-center justify-between w-full">
                      Learn More
                      <service.icon className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
                    </span>
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}