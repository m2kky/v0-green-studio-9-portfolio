"use client"

import { Facebook, Instagram } from "lucide-react"
import { Button } from "@/components/ui/button"

function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
    </svg>
  )
}

export function SocialLinks() {
  const handleSocialClick = (url: string) => {
    if (typeof window !== "undefined") {
      window.open(url, "_blank")
    }
  }

  return (
    <div className="flex space-x-4">
      <Button
        variant="outline"
        size="icon"
        className="rounded-full hover:bg-primary hover:text-primary-foreground bg-transparent cursor-pointer transition-all duration-300"
        onClick={() => handleSocialClick("https://facebook.com/greenstudio10")}
      >
        <Facebook className="h-4 w-4" />
      </Button>
      <Button
        variant="outline"
        size="icon"
        className="rounded-full hover:bg-primary hover:text-primary-foreground bg-transparent cursor-pointer transition-all duration-300"
        onClick={() => handleSocialClick("https://instagram.com/green_studio9")}
      >
        <Instagram className="h-4 w-4" />
      </Button>
      <Button
        variant="outline"
        size="icon"
        className="rounded-full hover:bg-primary hover:text-primary-foreground bg-transparent cursor-pointer transition-all duration-300"
        onClick={() => handleSocialClick("https:/tiktok.com/@green__studio9")}
      >
        <TikTokIcon className="h-4 w-4" />
      </Button>
    </div>
  )
}
