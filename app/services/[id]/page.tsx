"use client"

import { useParams } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Check, Star, Zap, Target, Award, MessageCircle } from "lucide-react"
import servicesJson from "@/data/services.json"

export default function ServiceDetailsPage() {
  const params = useParams()
  const serviceId = params.id as string
  
  const service = servicesJson.services.find(s => s.id === serviceId)

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 via-white to-green-100 dark:from-slate-900 dark:via-slate-800 dark:to-green-900">
        <div className="text-center glass-effect p-12 rounded-3xl border border-red-200 dark:border-red-800">
          <div className="text-6xl mb-4">🔍</div>
          <h1 className="text-4xl font-bold mb-4 text-red-600 dark:text-red-400">Service Not Found</h1>
          <p className="text-muted-foreground mb-6">The service you're looking for doesn't exist.</p>
          <Link href="/#services">
            <Button className="bg-green-600 hover:bg-green-700">Back to Services</Button>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-green-50 via-white to-green-100 dark:from-slate-900 dark:via-slate-800 dark:to-green-900">
      <div className="absolute inset-0 bg-gradient-to-br from-green-50/50 via-transparent to-green-100/50 dark:from-slate-900/50 dark:to-green-900/50 pointer-events-none" />
      
      <div className="relative py-20 px-4 md:px-8 lg:px-16">
        <div className="max-w-5xl mx-auto">
          <Link href="/#services">
            <Button variant="ghost" className="mb-8 flex items-center gap-2 hover:bg-green-100 dark:hover:bg-green-900/20">
              <ArrowLeft className="h-4 w-4" />
              Back to Services
            </Button>
          </Link>

          {/* Hero Section */}
          <div className="glass-effect rounded-3xl p-8 md:p-12 border-green-200/50 dark:border-green-800/50 mb-8 hover:shadow-2xl transition-all duration-500">
            <div className="flex flex-col md:flex-row md:items-center gap-6 mb-8">
              <div className="flex-1">
                <Badge className="mb-4 bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 border-green-300 dark:border-green-700">
                  <Star className="h-3 w-3 mr-1" />
                  {service.category}
                </Badge>
                <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-green-600 to-green-800 dark:from-green-400 dark:to-green-600 bg-clip-text text-transparent">
                  {service.name}
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed">{service.description}</p>
              </div>
              <div className="flex-shrink-0">
                <div className="w-24 h-24 bg-gradient-to-br from-green-400 to-green-600 rounded-2xl flex items-center justify-center shadow-lg">
                  <Zap className="h-12 w-12 text-white" />
                </div>
              </div>
            </div>

            {service.tagline && (
              <div className="bg-gradient-to-r from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 border border-green-200 dark:border-green-700 rounded-xl p-6 mb-8">
                <div className="flex items-start gap-3">
                  <Target className="h-6 w-6 text-green-600 dark:text-green-400 flex-shrink-0 mt-1" />
                  <p className="text-lg font-semibold text-green-800 dark:text-green-200 leading-relaxed">{service.tagline}</p>
                </div>
              </div>
            )}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* What's Included */}
            {service.whatIncluded && (
              <div className="lg:col-span-2">
                <Card className="glass-effect border-green-200/50 dark:border-green-800/50 hover:shadow-xl transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="text-2xl flex items-center gap-2">
                      <Check className="h-6 w-6 text-green-600" />
                      What's Included
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 gap-4">
                      {service.whatIncluded.map((item, index) => (
                        <div key={index} className="flex items-start gap-3 p-4 bg-green-50/50 dark:bg-green-900/10 rounded-lg border border-green-200/30 dark:border-green-700/30 hover:border-green-300 dark:hover:border-green-600 hover:shadow-md transition-all duration-200">
                          <div className="w-6 h-6 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                            <Check className="h-3 w-3 text-green-600 dark:text-green-400" />
                          </div>
                          <p className="font-medium text-gray-800 dark:text-gray-200">{item}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}

            {/* Why It Matters */}
            {service.whyItMatters && (
              <div className="lg:col-span-1">
                <Card className="glass-effect border-green-200/50 dark:border-green-800/50 hover:shadow-xl transition-all duration-300 h-fit">
                  <CardHeader>
                    <CardTitle className="text-xl flex items-center gap-2">
                      <Award className="h-5 w-5 text-green-600" />
                      Why It Matters
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">
                      {service.whyItMatters}
                    </p>
                  </CardContent>
                </Card>
              </div>
            )}
          </div>

          {/* Additional Service Details */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Service Includes (if different from whatIncluded) */}
            {service.includes && (
              <Card className="glass-effect border-green-200/50 dark:border-green-800/50 hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-xl">Service Includes</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {service.includes.map((item, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-green-600" />
                        <span className="text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Duration/Timeline */}
            {(service.duration || service.timeline) && (
              <Card className="glass-effect border-green-200/50 dark:border-green-800/50 hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-xl">Timeline</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{service.duration || service.timeline}</p>
                </CardContent>
              </Card>
            )}

            {/* Process/Steps */}
            {service.process && (
              <Card className="glass-effect border-green-200/50 dark:border-green-800/50 hover:shadow-xl transition-all duration-300 md:col-span-2">
                <CardHeader>
                  <CardTitle className="text-xl">Our Process</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {service.process.map((step, index) => (
                      <div key={index} className="text-center p-4 bg-green-50/50 dark:bg-green-900/10 rounded-lg">
                        <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-2 text-sm font-bold">
                          {index + 1}
                        </div>
                        <p className="text-sm font-medium">{step}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Features */}
            {service.features && (
              <Card className="glass-effect border-green-200/50 dark:border-green-800/50 hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-xl">Key Features</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {service.features.map((feature, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <Star className="h-4 w-4 text-green-600" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Benefits */}
            {service.benefits && (
              <Card className="glass-effect border-green-200/50 dark:border-green-800/50 hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-xl">Benefits</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {service.benefits.map((benefit, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <Award className="h-4 w-4 text-green-600" />
                        <span className="text-sm">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}
          </div>

          {/* Pricing */}
          {service.pricing && (
            <div className="mt-8">
              <Card className="glass-effect border-green-200/50 dark:border-green-800/50 hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-2xl text-center flex items-center justify-center gap-2">
                    <span className="text-2xl">💰</span>
                    Pricing Plans
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {typeof service.pricing === 'object' && Object.entries(service.pricing).map(([key, value]: any, index) => {
                      const isPopular = index === Math.floor(Object.keys(service.pricing).length / 2)
                      return (
                        <div key={key} className={`relative p-6 rounded-xl border-2 transition-all duration-300 hover:scale-105 hover:shadow-lg ${
                          isPopular 
                            ? 'border-green-400 bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 shadow-lg' 
                            : 'border-gray-200 dark:border-gray-700 hover:border-green-300 dark:hover:border-green-600'
                        }`}>
                          {isPopular && (
                            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                              <Badge className="bg-green-600 text-white px-3 py-1">⭐ Most Popular</Badge>
                            </div>
                          )}
                          <div className="text-center mb-4">
                            <h3 className="font-bold text-lg capitalize mb-2">
                              {key.replace(/([A-Z])/g, ' $1').replace(/([a-z])([A-Z])/g, '$1 $2').trim()}
                            </h3>
                            {value.name && <p className="text-sm text-muted-foreground">{value.name}</p>}
                            {value.description && <p className="text-xs text-muted-foreground mt-1">{value.description}</p>}
                          </div>
                          
                          {/* Price Display */}
                          {(value.price || value.startingPrice || value.starting) && (
                            <div className="text-center mb-4 p-3 bg-green-50/50 dark:bg-green-900/10 rounded-lg">
                              <div className="text-2xl font-bold text-green-600 dark:text-green-400">
                                {value.price || value.startingPrice || value.starting} {value.currency || 'EGP'}
                              </div>
                              {value.unit && <p className="text-xs text-muted-foreground">{value.unit}</p>}
                              {value.period && <p className="text-xs text-muted-foreground">{value.period}</p>}
                              {value.note && <p className="text-xs text-muted-foreground mt-1">{value.note}</p>}
                            </div>
                          )}

                          {/* Package Includes */}
                          {value.includes && Array.isArray(value.includes) && (
                            <div className="mb-4">
                              <h4 className="font-semibold text-sm mb-2">Includes:</h4>
                              <div className="space-y-1">
                                {value.includes.map((item: string, i: number) => (
                                  <div key={i} className="flex items-center gap-2 text-xs">
                                    <Check className="h-3 w-3 text-green-600 flex-shrink-0" />
                                    <span>{item}</span>
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}

                          {/* Other Details */}
                          {typeof value === 'object' && (
                            <div className="space-y-2">
                              {Object.entries(value).map(([k, v]: any) => {
                                if (['name', 'description', 'price', 'startingPrice', 'starting', 'currency', 'unit', 'period', 'note', 'includes'].includes(k)) return null
                                return (
                                  <div key={k} className="flex justify-between items-center py-1 text-sm">
                                    <span className="text-muted-foreground capitalize">
                                      {k.replace(/([A-Z])/g, ' $1').replace(/([a-z])([A-Z])/g, '$1 $2').trim()}:
                                    </span>
                                    <span className="font-semibold text-green-600 dark:text-green-400">
                                      {typeof v === 'number' ? `${v} ${value.currency || 'EGP'}` : v}
                                    </span>
                                  </div>
                                )
                              })}
                            </div>
                          )}

                          {/* Simple string values */}
                          {typeof value === 'string' && (
                            <div className="text-center">
                              <p className="text-lg font-bold text-green-600 dark:text-green-400">{value}</p>
                            </div>
                          )}
                        </div>
                      )
                    })}
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {/* CTA Section */}
          <div className="mt-12 text-center">
            <Card className="glass-effect border-green-200/50 dark:border-green-800/50 hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
                <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                  Let's discuss how we can help your business grow with our {service.name.toLowerCase()} services.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a 
                    href={`https://wa.me/201234567890?text=Hello! I'm interested in ${service.name} service. Can you provide more details about pricing and how to get started?`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white px-8 flex items-center gap-2">
                      <MessageCircle className="h-5 w-5" />
                      Contact via WhatsApp
                    </Button>
                  </a>
                  <Link href="/#contact">
                    <Button variant="outline" size="lg" className="border-green-300 text-green-700 hover:bg-green-50 dark:border-green-700 dark:text-green-300 dark:hover:bg-green-900/20">
                      Contact Form
                    </Button>
                  </Link>
                  <Link href="/#services">
                    <Button variant="ghost" size="lg" className="text-green-700 hover:bg-green-50 dark:text-green-300 dark:hover:bg-green-900/20">
                      View All Services
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </main>
  )
}