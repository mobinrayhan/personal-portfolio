import type React from "react"
import type { Metadata } from "next"
import { Geist } from "next/font/google"
import { Manrope } from "next/font/google"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css"

const geist = Geist({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-geist",
})

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-manrope",
})

export const metadata: Metadata = {
  title: {
    default: "Developer Portfolio",
    template: "%s | Developer Portfolio",
  },
  description: "Modern developer portfolio showcasing skills and projects with elegant design",
  keywords: ["developer", "portfolio", "web development", "react", "nextjs", "typescript"],
  authors: [{ name: "Alex Developer" }], // TODO: Replace with your name
  creator: "Alex Developer", // TODO: Replace with your name
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://your-portfolio.com", // TODO: Replace with your domain
    title: "Developer Portfolio",
    description: "Modern developer portfolio showcasing skills and projects",
    siteName: "Developer Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Developer Portfolio",
    description: "Modern developer portfolio showcasing skills and projects",
    creator: "@yourusername", // TODO: Replace with your Twitter handle
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
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${geist.variable} ${manrope.variable} antialiased`} suppressHydrationWarning>
      <body className="min-h-screen bg-background text-foreground">
        <ThemeProvider>
          <div className="relative flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
