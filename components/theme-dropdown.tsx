'use client'

import { Moon, Sun, Monitor } from 'lucide-react'
import { useTheme } from 'next-themes'
import { Button } from '@/components/ui/button'
import { useEffect, useState } from 'react'

export function ThemeDropdown() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const themes = [
    { name: 'light', label: 'Light Mode', icon: Sun },
    { name: 'dark', label: 'Dark Mode', icon: Moon }
  ]

  const currentTheme = themes.find(t => t.name === theme) || themes[1]
  const CurrentIcon = currentTheme.icon

  return (
    <div className="relative">
      <Button
        variant="ghost"
        size="icon"
        className="w-10 h-10 rounded-xl transition-all duration-300 hover:bg-primary/20 text-muted-foreground hover:text-primary"
        onClick={() => setIsOpen(!isOpen)}
        title="Theme"
      >
        <CurrentIcon className="h-4 w-4" />
      </Button>
      
      {isOpen && (
        <>
          <div 
            className="fixed inset-0 z-40" 
            onClick={() => setIsOpen(false)}
          />
          <div className="absolute left-12 top-0 z-50 bg-card border border-border rounded-lg shadow-lg p-1 min-w-[120px]">
            {themes.map((themeOption) => {
              const Icon = themeOption.icon
              return (
                <Button
                  key={themeOption.name}
                  variant="ghost"
                  size="sm"
                  className={`w-full justify-start gap-2 text-xs hover:bg-primary/20 ${
                    theme === themeOption.name ? 'bg-primary/10 text-primary' : ''
                  }`}
                  onClick={() => {
                    setTheme(themeOption.name)
                    setIsOpen(false)
                  }}
                >
                  <Icon className="h-3 w-3" />
                  {themeOption.label}
                </Button>
              )
            })}
          </div>
        </>
      )}
    </div>
  )
}