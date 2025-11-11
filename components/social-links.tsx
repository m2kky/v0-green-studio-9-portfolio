"use client"

import { Facebook, Instagram } from "lucide-react"
import { Button } from "@/components/ui/button"

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
        className="rounded-full hover:bg-primary hover:text-primary-foreground bg-transparent"
        onClick={() => handleSocialClick("https://facebook.com/greenstudio10")}
      >
        <Facebook className="h-4 w-4" />
      </Button>
      <Button
        variant="outline"
        size="icon"
        className="rounded-full hover:bg-primary hover:text-primary-foreground bg-transparent"
        onClick={() => handleSocialClick("https://instagram.com/green_studio9")}
      >
        <Instagram className="h-4 w-4" />
      </Button>
    </div>
  )
}
