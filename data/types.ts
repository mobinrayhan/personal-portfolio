export interface NavigationItem {
  name: string;
  href: string;
}

export interface SocialLink {
  name: string;
  href: string;
  icon: string;
}

export interface SiteData {
  name: string;
  title: string;
  description: string;
  url: string;
  navigation: NavigationItem[];
  socialLinks: SocialLink[];
  footerText: string;
}

export interface HeroData {
  name: string;
  title: string;
  subtitle: string;
  ctaText: string;
  ctaLink: string;
  featuredProjectIds: string[];
}

export interface AboutData {
  bio: string;
  highlights: string[];
  headshotPath: string;
  stats: {
    label: string;
    value: string;
  }[];
}

export interface SkillCategory {
  name: string;
  skills: string[];
}

export interface SkillsData {
  categories: SkillCategory[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  category: string[];
  featured: boolean;
  imagePath: string;
  githubUrl?: string;
  liveUrl?: string;
  status: "completed" | "in-progress" | "planned";
}

export interface ProjectsData {
  projects: Project[];
}

export interface Experience {
  id: string;
  company: string;
  position: string;
  startDate: string;
  endDate: string | null;
  description: string;
  achievements: string[];
  technologies: string[];
  location: string;
  companyLink: string;
}

export interface ExperienceData {
  experiences: Experience[];
}

export interface ContactData {
  email: string;
  location: string;
  availability: string;
  socialLinks: SocialLink[];
  formFields: {
    name: string;
    email: string;
    message: string;
  };
}
