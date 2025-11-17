"use client"

import { useParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import { useEffect, useState } from "react"

interface Service {
  id: string
  name: string
  description: string
  whatIncluded?: string[]
  whyItMatters?: string
  pricing?: Record<string, any>
  tagline?: string
}

export default function ServicePage() {
  const params = useParams()
  const slug = params.slug as string
  const [service, setService] = useState<Service | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadService = async () => {
      try {
        let data: { services: Service[] } | null = null

        const fileMap: Record<string, string> = {
          "media-production": "mediaPeodaction.json",
          photography: "mediaPeodaction.json",
          "video-editing": "mediaPeodaction.json",
          "event-coverage": "mediaPeodaction.json",
          "script-writing": "mediaPeodaction.json",
          "podcast-production": "mediaPeodaction.json",
          "product-video-production": "mediaPeodaction.json",
          "media-buying": "mediaBuying.json",
          automation: "automation.json",
          "enterprise-automation": "automation.json",
          "web-development": "webDevelopmentDesign.json",
          "ecommerce-stores": "E-commerce Stores.json",
          "social-media-management": "SocialMediaManagement.json",
        }

        const fileName = fileMap[slug]
        if (fileName) {
          const response = await fetch(`/data/${fileName}`)
          data = await response.json()
        }

        if (data?.services) {
          const found = data.services.find((s) => s.id === slug)
          setService(found || null)
        }
      } catch (error) {
        console.error("Error loading service:", error)
      } finally {
        setLoading(false)
      }
    }

    loadService()
  }, [slug])

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-xl text-muted-foreground">جاري التحميل...</div>
      </div>
    )
  }

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">الخدمة غير موجودة</h1>
          <Link href="/">
            <Button>العودة للرئيسية</Button>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <main className="relative min-h-screen">
      <div className="fixed inset-0 bg-gradient-to-br from-green-50 via-white to-green-100 dark:from-slate-900 dark:via-slate-800 dark:to-green-900 -z-10" />

      <div className="max-w-4xl mx-auto px-4 py-12">
        <Link href="/">
          <Button variant="ghost" className="mb-8 gap-2">
            <ArrowLeft className="w-4 h-4" />
            العودة
          </Button>
        </Link>

        <div className="glass-effect rounded-3xl p-8 md:p-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-primary">{service.name}</h1>

          {service.tagline && (
            <p className="text-lg italic text-muted-foreground mb-6 border-l-4 border-primary pl-4">
              "{service.tagline}"
            </p>
          )}

          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">{service.description}</p>

          {service.whatIncluded && service.whatIncluded.length > 0 && (
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-4">ما المشمول:</h2>
              <ul className="space-y-3">
                {service.whatIncluded.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-primary font-bold mt-1">✓</span>
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {service.whyItMatters && (
            <div className="mb-8 bg-primary/10 rounded-lg p-6 border-l-4 border-primary">
              <h2 className="text-2xl font-bold mb-3">لماذا يهمك:</h2>
              <p className="text-muted-foreground leading-relaxed">{service.whyItMatters}</p>
            </div>
          )}

          {service.pricing && Object.keys(service.pricing).length > 0 && (
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-4">الأسعار:</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {Object.entries(service.pricing).map(([key, value]) => (
                  <div key={key} className="bg-primary/5 rounded-lg p-4 border border-primary/20">
                    <div className="font-semibold text-primary capitalize mb-2">{key}</div>
                    <div className="text-sm text-muted-foreground">
                      {typeof value === "object" ? (
                        <div className="space-y-1">
                          {Object.entries(value).map(([k, v]) => (
                            <div key={k}>
                              <span className="capitalize">{k}:</span> {String(v)}
                            </div>
                          ))}
                        </div>
                      ) : (
                        <div>{String(value)}</div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="flex gap-4 mt-8">
            <Link href="/#contact" className="flex-1">
              <Button className="w-full bg-primary hover:bg-primary/90 text-white">
                تواصل معنا
              </Button>
            </Link>
            <a href="https://wa.me/20" target="_blank" rel="noopener noreferrer" className="flex-1">
              <Button variant="outline" className="w-full">
                واتس آب
              </Button>
            </a>
          </div>
        </div>
      </div>
    </main>
  )
}
