// TypeScript interfaces for all data structures
export interface SiteData {
  brand: {
    name: string
    tagline: string
  }
  nav: NavItem[]
  social: SocialLink[]
  footer: {
    copyright: string
    links: FooterLink[]
  }
}

export interface NavItem {
  name: string
  href: string
}

export interface SocialLink {
  name: string
  href: string
  icon: string
}

export interface FooterLink {
  name: string
  href: string
}

export interface HeroData {
  name: string
  title: string
  subtitle: string
  cta: {
    text: string
    href: string
  }
  featuredProjectIds: string[]
}

export interface AboutData {
  longBio: string
  highlights: string[]
  headshot: string
  stats: Stat[]
}

export interface Stat {
  label: string
  value: string
}

export interface SkillsData {
  categories: SkillCategory[]
}

export interface SkillCategory {
  name: string
  items: string[]
}

export interface Project {
  id: string
  slug: string
  name: string
  tagline: string
  description: string
  tech: string[]
  links: {
    github?: string
    live?: string
  }
  image: string
  featured?: boolean
}

export interface ProjectsData {
  projects: Project[]
}

export interface ExperienceRole {
  company: string
  title: string
  start: string
  end: string
  location: string
  bullets: string[]
  links?: {
    website?: string
  }
}

export interface ExperienceData {
  roles: ExperienceRole[]
}

export interface ContactData {
  email: string
  location: string
  availabilityNote: string
  links: {
    github: string
    linkedin: string
    twitter: string
    youtube?: string
  }
}
