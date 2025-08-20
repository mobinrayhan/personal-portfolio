"use client";

import { Button } from "@/components/ui/button";
import { ProjectCard } from "@/components/ui/project-card";
import { Section } from "@/components/ui/section";
import { yearsOfExperience } from "@/data/about";
import { heroData } from "@/data/hero";
import { projectsData } from "@/data/projects";
import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import Link from "next/link";

function AnimatedSection({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: delay / 1000, duration: 0.8, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

export default function HomePage() {
  const featuredProjects = projectsData.projects.filter((project) =>
    heroData.featuredProjectIds.includes(project.id)
  );

  return (
    <>
      {/* Hero Section */}
      <Section
        className="min-h-[calc(100vh-4rem)] flex items-center"
        padding="lg"
      >
        <div className="text-center space-y-8 max-w-4xl mx-auto">
          <AnimatedSection>
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight">
              Hi, I&apos;m{" "}
              <span className="gradient-text">{heroData.name}</span>
            </h1>
          </AnimatedSection>

          <AnimatedSection delay={200}>
            <h2 className="text-xl sm:text-2xl lg:text-3xl text-muted-foreground font-medium">
              {heroData.title}
            </h2>
          </AnimatedSection>

          <AnimatedSection delay={400}>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              {heroData.subtitle}
            </p>
          </AnimatedSection>

          <AnimatedSection delay={600}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button asChild size="lg" className="btn-electric">
                <Link href={heroData.ctaLink}>
                  {heroData.ctaText}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>

              <Button variant="outline" size="lg" asChild>
                <Link
                  href="https://drive.google.com/uc?export=download&id=1rq3jyxSoZHaBbCghYaEKA99FZk8L74fV"
                  target="_blank"
                >
                  <Download className="mr-2 h-5 w-5" />
                  Download Resume
                </Link>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </Section>

      {/* Featured Projects */}
      <Section className="bg-muted/30">
        <AnimatedSection delay={800}>
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Featured <span className="gradient-text">Projects</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A selection of my recent work showcasing different technologies
              and approaches
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredProjects.map((project, index) => (
            <AnimatedSection key={project.id} delay={index * 200}>
              <ProjectCard project={project} index={index} />
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={1200}>
          <div className="text-center">
            <Button asChild variant="outline" size="lg">
              <Link href="/projects">
                View All Projects
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </AnimatedSection>
      </Section>

      {/* Quick Bio */}
      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <AnimatedSection delay={400}>
            <div className="space-y-6">
              <h2 className="text-3xl sm:text-4xl font-bold">
                About <span className="gradient-text">Me</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                I&apos;m a passionate <strong>Full stack</strong> developer with
                over <strong> {yearsOfExperience}</strong> years of experience
                building scalable web applications and mobile solutions. I love
                turning complex problems into simple, beautiful, and intuitive
                solutions.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                When I&apos;m not coding, you can find me exploring new
                technologies, contributing to open-source projects, or sharing
                knowledge through technical writing and mentoring.
              </p>
              <Button asChild variant="outline">
                <Link href="/about">
                  Learn More About Me
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={600}>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-electric-400/20 to-purple-400/20 rounded-2xl flex items-center justify-center">
                <div className="text-8xl opacity-20">👨‍💻</div>
              </div>
              <div className="absolute -inset-4 bg-gradient-to-br from-electric-400/10 to-purple-400/10 rounded-2xl -z-10 blur-xl" />
            </div>
          </AnimatedSection>
        </div>
      </Section>
    </>
  );
}
