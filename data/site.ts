import { PRODUCTION_SITE_URL } from "@/lib/utils";
import { SiteData } from "./types";

export const siteData: SiteData = {
  name: "Mobin",
  title: "Full Stack Developer & Mobile App Developer",
  description:
    "Passionate full-stack developer specializing in modern web technologies, creating exceptional user experiences and scalable applications.",
  url: PRODUCTION_SITE_URL,
  navigation: [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Skills", href: "/skills" },
    { name: "Projects", href: "/projects" },
    { name: "Experience", href: "/experience" },
    { name: "Contact", href: "/contact" },
  ],
  socialLinks: [
    { name: "GitHub", href: "https://github.com/mobinrayhan", icon: "Github" },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/rayhanuddinmobin",
      icon: "Linkedin",
    },
    { name: "Email", href: "mailto:contact@mobin.dev", icon: "Mail" },
    {
      name: "Instagram",
      href: "https://www.instagram.com/mobin606272",
      icon: "Instagram",
    },
  ],
  footerText: `© ${new Date().getFullYear()} Mobin. Built with Next.js and TypeScript.`,
};
