"use client"

import { SideNavigation } from "@/components/side-navigation"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { ServicesSection } from "@/components/services-section"
import { TeamSection } from "@/components/team-section"
import { BusinessModelSection } from "@/components/business-model-section"
import { ContactSection } from "@/components/contact-section"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { ScrollProgress } from "@/components/scroll-progress"
import { RevealAnimation } from "@/components/reveal-animation"
import { BackToTop } from "@/components/back-to-top"

export default function HomePage() {
  return (
    <main className="relative">
      <ScrollProgress />
      <div className="fixed inset-0 bg-gradient-to-br from-green-50 via-white to-green-100 dark:from-slate-900 dark:via-slate-800 dark:to-green-900 -z-10" />
      <SideNavigation />
      <div className="ml-0 md:ml-12 relative">
        <div className="absolute inset-0 glass-effect opacity-30 pointer-events-none" />
        <HeroSection />
        <RevealAnimation direction="up" delay={200}>
          <AboutSection />
        </RevealAnimation>
        <RevealAnimation direction="left" delay={300}>
          <ServicesSection />
        </RevealAnimation>
        <RevealAnimation direction="right" delay={400}>
          <TeamSection />
        </RevealAnimation>
        <RevealAnimation direction="up" delay={500}>
          <BusinessModelSection />
        </RevealAnimation>
        <RevealAnimation direction="up" delay={600}>
          <ContactSection />
        </RevealAnimation>
      </div>
      <WhatsAppButton />
      <BackToTop />
    </main>
  )
}
