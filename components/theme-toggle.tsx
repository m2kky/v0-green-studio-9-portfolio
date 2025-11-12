'use client'

import { Moon, Sun, Palette } from 'lucide-react'
import { useTheme } from 'next-themes'
import { Button } from '@/components/ui/button'
import { useEffect, useState } from 'react'

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const cycleTheme = () => {
    if (theme === 'light') setTheme('dark')
    else if (theme === 'dark') setTheme('black')
    else setTheme('light')
  }

  if (!mounted) return null

  const getIcon = () => {
    if (theme === 'light') return <Moon className="h-4 w-4" />
    if (theme === 'dark') return <Palette className="h-4 w-4" />
    return <Sun className="h-4 w-4" />
  }

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={cycleTheme}
      className="fixed bottom-32 right-8 z-50 w-10 h-10 rounded-full bg-slate-700 hover:bg-slate-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 glass-effect border border-white/10 cursor-pointer"
    >
      {getIcon()}
    </Button>
  )
}