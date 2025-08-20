import { Container } from "@/components/container"
import { Section } from "@/components/section"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ProjectCard } from "@/components/project-card"
import { Badge } from "@/components/ui/badge"
import { heroData } from "@/data/hero"
import { projectsData } from "@/data/projects"
import { skillsData } from "@/data/skills"
import { aboutData } from "@/data/about"
import Link from "next/link"

export default function HomePage() {
  const featuredProjects = projectsData.projects.filter((project) => heroData.featuredProjectIds.includes(project.id))
  const topSkills = skillsData.categories.slice(0, 3) // Show first 3 skill categories

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <Section className="gradient-bg min-h-[80vh] flex items-center">
        <Container>
          <div className="mx-auto max-w-4xl text-center space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
                <span className="text-gradient">{heroData.name}</span>
              </h1>
              <h2 className="text-xl text-muted-foreground sm:text-2xl md:text-3xl font-light">{heroData.title}</h2>
              <p className="mx-auto max-w-2xl text-muted-foreground md:text-lg leading-relaxed">{heroData.subtitle}</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="glow-accent" asChild>
                <Link href={heroData.cta.href}>{heroData.cta.text}</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/contact">Get In Touch</Link>
              </Button>
            </div>
          </div>
        </Container>
      </Section>

      {/* About Preview Section */}
      <Section>
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div className="space-y-6">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">About Me</h2>
                <p className="text-muted-foreground leading-relaxed">{aboutData.longBio.substring(0, 200)}...</p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {aboutData.stats.slice(0, 4).map((stat, index) => (
                  <div key={index} className="text-center space-y-2">
                    <div className="text-2xl font-bold text-primary">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
              </div>
              <Button variant="outline" asChild>
                <Link href="/about">Learn More About Me</Link>
              </Button>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 p-8">
                <div className="h-full w-full rounded-xl bg-muted flex items-center justify-center">
                  <span className="text-muted-foreground">Professional Photo</span>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Skills Preview Section */}
      <Section className="bg-muted/50">
        <Container>
          <div className="space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Core Skills</h2>
              <p className="mx-auto max-w-2xl text-muted-foreground">
                Technologies and tools I use to bring ideas to life
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {topSkills.map((category, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="text-lg">{category.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {category.items.slice(0, 4).map((skill) => (
                        <Badge key={skill} variant="secondary">
                          {skill}
                        </Badge>
                      ))}
                      {category.items.length > 4 && <Badge variant="outline">+{category.items.length - 4}</Badge>}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="text-center">
              <Button variant="outline" asChild>
                <Link href="/skills">View All Skills</Link>
              </Button>
            </div>
          </div>
        </Container>
      </Section>

      {/* Featured Projects Section */}
      <Section>
        <Container>
          <div className="space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Featured Projects</h2>
              <p className="mx-auto max-w-2xl text-muted-foreground">
                A showcase of my recent work and technical expertise
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {featuredProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
            <div className="text-center">
              <Button variant="outline" size="lg" asChild>
                <Link href="/projects">View All Projects</Link>
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  )
}
