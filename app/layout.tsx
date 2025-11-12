import type React from "react"
import type { Metadata } from "next"
import { Inter, Poppins } from "next/font/google"
import { Suspense } from "react"
import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Green Studio 9 - Premium Marketing & Media Production Agency",
  description:
    "Green Studio 9 is a premium marketing and media production agency founded in Giza, Egypt. We empower e-commerce brands through innovative strategies, professional content creation, and measurable results.",
  keywords:
    "marketing agency, media production, e-commerce, branding, Egypt, Gulf, Dubai, AI automation, content creation",
  authors: [{ name: "Green Studio 9" }],
  creator: "Green Studio 9",
  publisher: "Green Studio 9",
  openGraph: {
    title: "Green Studio 9 - Premium Marketing & Media Production Agency",
    description:
      "We empower e-commerce brands through innovative strategies, professional content creation, and measurable results.",
    url: "https://greenstudio9.com",
    siteName: "Green Studio 9",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Green Studio 9 - Premium Marketing & Media Production Agency",
    description:
      "We empower e-commerce brands through innovative strategies, professional content creation, and measurable results.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  generator: "Green Studio 9",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable} antialiased`} suppressHydrationWarning>
      <body className="font-sans">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <Suspense fallback={null}>{children}</Suspense>
        </ThemeProvider>
      </body>
    </html>
  )
}
