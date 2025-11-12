"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import {
  HomeIcon,
  UserIcon,
  BriefcaseIcon,
  UsersIcon,
  TargetIcon,
  MailIcon,
  MenuIcon,
  XIcon,
} from "@/components/simple-icons"
import { ThemeDropdown } from "@/components/theme-dropdown"

const navItems = [
  { icon: HomeIcon, label: "Home", href: "#home" },
  { icon: UserIcon, label: "About", href: "#about" },
  { icon: BriefcaseIcon, label: "Services", href: "#services" },
  { icon: UsersIcon, label: "Team", href: "#team" },
  { icon: TargetIcon, label: "Vision", href: "#vision" },
  { icon: MailIcon, label: "Contact", href: "#contact" },
]

export function SideNavigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id
            setActiveSection(id)
          }
        })
      },
      { threshold: 0.3 },
    )

    navItems.forEach((item) => {
      const element = document.querySelector(item.href)
      if (element) observer.observe(element)
    })

    return () => observer.disconnect()
  }, [])

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsOpen(false)
  }

  return (
    <>
      {/* Mobile Menu Button */}
      <Button
        variant="outline"
        size="icon"
        className="fixed top-4 left-4 z-50 md:hidden glass-effect bg-transparent"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <XIcon /> : <MenuIcon />}
      </Button>

      <nav
        className={`fixed left-0 top-0 h-full w-12 glass-navbar z-40 transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full space-y-4 py-8">
          {navItems.map((item) => {
            const isActive = activeSection === item.href.substring(1)
            const IconComponent = item.icon
            return (
              <Button
                key={item.label}
                variant="ghost"
                size="icon"
                className={`w-10 h-10 rounded-xl transition-all duration-300 group relative ${
                  isActive
                    ? "nav-icon-active text-primary"
                    : "hover:nav-icon-hover text-muted-foreground hover:text-primary"
                }`}
                onClick={() => scrollToSection(item.href)}
                title={item.label}
              >
                <IconComponent />
              </Button>
            )
          })}
          
          <ThemeDropdown />
        </div>
      </nav>

      {/* Mobile Overlay */}
      {isOpen && <div className="fixed inset-0 bg-black/50 z-30 md:hidden" onClick={() => setIsOpen(false)} />}
    </>
  )
}
