import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, ExternalLink, Github } from "lucide-react"
import { Container } from "@/components/container"
import { Section } from "@/components/section"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { projectsData } from "@/data/projects"

interface ProjectPageProps {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  return projectsData.projects.map((project) => ({
    slug: project.slug,
  }))
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const project = projectsData.projects.find((p) => p.slug === params.slug)

  if (!project) {
    return {
      title: "Project Not Found",
    }
  }

  return {
    title: project.name,
    description: project.description,
    openGraph: {
      title: project.name,
      description: project.description,
      images: [project.image],
    },
  }
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const project = projectsData.projects.find((p) => p.slug === params.slug)

  if (!project) {
    notFound()
  }

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <Section className="gradient-bg">
        <Container>
          <div className="space-y-6">
            <Button variant="ghost" asChild className="w-fit">
              <Link href="/projects">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Projects
              </Link>
            </Button>
            <div className="mx-auto max-w-4xl text-center space-y-6">
              <div className="flex items-center justify-center gap-2 mb-4">
                {project.featured && (
                  <Badge variant="secondary" className="mb-2">
                    Featured Project
                  </Badge>
                )}
              </div>
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                <span className="text-gradient">{project.name}</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">{project.tagline}</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                {project.links.github && (
                  <Button size="lg" variant="outline" asChild>
                    <Link href={project.links.github} target="_blank" rel="noopener noreferrer">
                      <Github className="h-5 w-5 mr-2" />
                      View Code
                    </Link>
                  </Button>
                )}
                {project.links.live && (
                  <Button size="lg" className="glow-accent" asChild>
                    <Link href={project.links.live} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-5 w-5 mr-2" />
                      Live Demo
                    </Link>
                  </Button>
                )}
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Project Details */}
      <Section>
        <Container>
          <div className="grid gap-12 lg:grid-cols-3">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Project Image */}
              <div className="aspect-video overflow-hidden rounded-lg border bg-muted">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.name}
                  width={800}
                  height={450}
                  className="object-cover w-full h-full"
                />
              </div>

              {/* Description */}
              <div className="space-y-6">
                <h2 className="text-3xl font-bold tracking-tighter">About This Project</h2>
                <div className="prose prose-gray dark:prose-invert max-w-none">
                  <p className="text-muted-foreground leading-relaxed text-lg">{project.description}</p>
                </div>
              </div>

              {/* Additional sections could go here */}
              <div className="space-y-6">
                <h3 className="text-2xl font-bold tracking-tighter">Key Features</h3>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="flex items-start gap-3">
                    <div className="h-2 w-2 rounded-full bg-primary mt-3 shrink-0" />
                    <p className="text-muted-foreground">Responsive design across all devices</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="h-2 w-2 rounded-full bg-primary mt-3 shrink-0" />
                    <p className="text-muted-foreground">Modern UI/UX with smooth animations</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="h-2 w-2 rounded-full bg-primary mt-3 shrink-0" />
                    <p className="text-muted-foreground">Optimized performance and SEO</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="h-2 w-2 rounded-full bg-primary mt-3 shrink-0" />
                    <p className="text-muted-foreground">Clean, maintainable code structure</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Technologies */}
              <Card>
                <CardHeader>
                  <CardTitle>Technologies Used</CardTitle>
                  <CardDescription>Tools and frameworks powering this project</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <Badge key={tech} variant="secondary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Links */}
              <Card>
                <CardHeader>
                  <CardTitle>Project Links</CardTitle>
                  <CardDescription>Explore the code and live demo</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  {project.links.github && (
                    <Button variant="outline" className="w-full justify-start bg-transparent" asChild>
                      <Link href={project.links.github} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4 mr-2" />
                        View Source Code
                      </Link>
                    </Button>
                  )}
                  {project.links.live && (
                    <Button variant="outline" className="w-full justify-start bg-transparent" asChild>
                      <Link href={project.links.live} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Live Demo
                      </Link>
                    </Button>
                  )}
                </CardContent>
              </Card>

              {/* Related Projects */}
              <Card>
                <CardHeader>
                  <CardTitle>More Projects</CardTitle>
                  <CardDescription>Check out my other work</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" className="w-full bg-transparent" asChild>
                    <Link href="/projects">View All Projects</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  )
}
