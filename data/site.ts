import type { SiteData } from "./types"

export const siteData: SiteData = {
  brand: {
    name: "Alex Developer", // TODO: Replace with your name
    tagline: "Full-Stack Developer & Problem Solver",
  },
  nav: [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Skills", href: "/skills" },
    { name: "Projects", href: "/projects" },
    { name: "Experience", href: "/experience" },
    { name: "Contact", href: "/contact" },
  ],
  social: [
    { name: "GitHub", href: "https://github.com/yourusername", icon: "github" }, // TODO: Replace with your GitHub
    { name: "LinkedIn", href: "https://linkedin.com/in/yourprofile", icon: "linkedin" }, // TODO: Replace with your LinkedIn
    { name: "Twitter", href: "https://twitter.com/yourusername", icon: "twitter" }, // TODO: Replace with your Twitter
  ],
  footer: {
    copyright: "© 2024 Alex Developer. All rights reserved.", // TODO: Replace with your name
    links: [
      { name: "Privacy", href: "/privacy" },
      { name: "Terms", href: "/terms" },
    ],
  },
}
