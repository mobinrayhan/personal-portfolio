import { Section } from "@/components/ui/section";
import { SkillPill } from "@/components/ui/skill-pill";
import { skillsData } from "@/data/skills";
import {
  Code,
  Database,
  Layers,
  Settings,
  Smartphone,
  Users,
} from "lucide-react";
import { Metadata } from "next";

import skillsOg from "@/assets/og-images/skils.webp";

export const metadata: Metadata = {
  title: "Skills | Full Stack Developer & Mobile App Developer",
  description:
    "Explore the web development skills and technologies I use, including React, Next.js, Node.js, MongoDB, PostgreSQL, and more. Building modern, fast, and scalable web and mobile applications.",
  keywords: [
    "Full Stack Developer",
    "Mobile App Developer",
    "React",
    "Next.js",
    "Node.js",
    "MongoDB",
    "PostgreSQL",
    "JavaScript",
    "TypeScript",
    "Web Development",
    "Frontend",
    "Backend",
  ],
  openGraph: {
    title: "Skills | Full Stack Developer & Mobile App Developer",
    description:
      "Technologies and tools I use to create modern, user-friendly, and scalable web and mobile applications.",
    url: "https://mobin.dev/skills",
    siteName: "Mobin Portfolio",
    type: "website",
    images: [
      {
        url: skillsOg.src,
        width: 1200,
        height: 630,
        alt: "Skills - Full Stack Developer & Mobile App Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Skills | Full Stack Developer & Mobile App Developer",
    description:
      "Technologies and tools I use to create modern, user-friendly, and scalable web and mobile applications.",
    images: [skillsOg.src],
    creator: "@MobinRayhan",
  },
  other: {
    "og:image": skillsOg.src,
    "og:image:width": "1200",
    "og:image:height": "630",
    "og:image:alt": "Skills - Full Stack Developer & Mobile App Developer",
  },
};

const categoryIcons: {
  [key: string]: React.ComponentType<{ className?: string }>;
} = {
  Languages: Code,
  Frontend: Layers,
  Backend: Database,
  Databases: Database,
  Mobile: Smartphone,
  Tools: Settings,
  "Project Management": Users,
};

export default function SkillsPage() {
  return (
    <>
      {/* Hero Section */}
      <Section className="pt-24">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">
            My <span className="gradient-text">Skills</span>
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Technologies and tools I use to bring ideas to life and solve
            complex problems
          </p>
        </div>
      </Section>

      {/* Skills Grid */}
      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {skillsData.categories.map((category, index) => {
            const Icon = categoryIcons[category.name] || Code;

            return (
              <div
                key={category.name}
                className="p-8 bg-card border border-border rounded-xl hover:shadow-lg transition-all duration-300"
                style={{
                  animationDelay: `${index * 100}ms`,
                }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-electric-600/10 rounded-lg flex items-center justify-center">
                    <Icon className="w-6 h-6 text-electric-600" />
                  </div>
                  <h2 className="text-2xl font-bold">{category.name}</h2>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <SkillPill key={skill} skill={skill} />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </Section>

      {/* Proficiency Levels */}
      <Section className="bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Proficiency <span className="gradient-text">Levels</span>
          </h2>

          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <span className="w-3 h-3 bg-green-500 rounded-full"></span>
                Expert
              </h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "JavaScript",
                  "TypeScript",
                  "React",
                  "Next.js",
                  "Node.js",
                  "HTML",
                  "CSS",
                  "Tailwind",
                ].map((skill) => (
                  <SkillPill key={skill} skill={skill} />
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <span className="w-3 h-3 bg-blue-500 rounded-full"></span>
                Proficient
              </h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "Go",
                  "Express.js",
                  "MongoDB",
                  "PostgreSQL",
                  "React Native",
                  "Docker",
                  "Git",
                ].map((skill) => (
                  <SkillPill key={skill} skill={skill} />
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
                Familiar
              </h3>
              <div className="flex flex-wrap gap-2">
                {["Nest.js", "MySQL", "Kubernetes", "Jenkins", "Astro"].map(
                  (skill) => (
                    <SkillPill key={skill} skill={skill} />
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
