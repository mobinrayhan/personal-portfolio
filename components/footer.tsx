import Link from "next/link"
import { Github, Linkedin, Twitter } from "lucide-react"
import { siteData } from "@/data/site"

const socialIcons = {
  github: Github,
  linkedin: Linkedin,
  twitter: Twitter,
}

export function Footer() {
  return (
    <footer className="border-t border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            {siteData.footer.copyright}
          </p>
        </div>
        <div className="flex items-center space-x-4">
          {siteData.social.map((social) => {
            const Icon = socialIcons[social.icon as keyof typeof socialIcons]
            return (
              <Link
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Icon className="h-5 w-5" />
                <span className="sr-only">{social.name}</span>
              </Link>
            )
          })}
        </div>
      </div>
    </footer>
  )
}
